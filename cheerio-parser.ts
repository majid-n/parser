import * as cheerio from "cheerio";
import * as fs from "fs";
import { ParserResult, PositionInfo, ResultTimeserie } from "./types";
import { templates } from "./templates";

export class ReplyParser {
	// fields = [
	//   { name: 'MessageIdentification', type: 1 },
	//   { name: 'MessageType', type: 1 },
	//   { name: 'MessageDateTime', type: 1 },
	//   { name: 'SenderIdentification', type: 1 },
	//   { name: 'SenderRole', type: 1 },
	//   { name: 'ReceiverIdentification', type: 1 },
	//   { name: 'ReceiverRole', type: 1 },
	//   { name: 'ReceivingMessageIdentification', type: 1 },
	//   { name: 'ReceivingMessageVersion', type: 1 },
	//   { name: 'ReasonCode', type: 1 },
	//   { name: 'ReasonText', type: 1 },
	//   { name: 'SendersTimeSeriesIdentification', type: 2 },
	//   { name: 'SendersTimeSeriesVersion', type: 2 },
	//   { name: 'BusinessType', type: 2 },
	//   { name: 'Product', type: 2 },
	//   { name: 'ObjectAggregation', type: 2 },
	//   { name: 'InArea', type: 2 },
	//   { name: 'OutArea', type: 2 },
	//   { name: 'InParty', type: 2 },
	//   { name: 'OutParty', type: 2 },
	//   { name: 'MeasurementUnit', type: 2 },
	//   { name: 'TimeInterval', type: 2 },
	//   { name: 'Resolution', type: 2 },
	//   { name: 'Pos', type: 3 },
	//   { name: 'Qty', type: 3 },
	// ]

	constructor() { }

	parseFromUrl(url: string, templateName: string): Promise<ParserResult> {
		return new Promise((resolve, reject) => {
			fs.readFile(url, (err, data) => {
				if (err) reject(err);
				resolve(this.parse(data.toString(), templateName));
			});
		});
	}

	parse(data: string, templateName: string) {
		const $: cheerio.CheerioAPI = cheerio.load(data, { xmlMode: true, xml: true });
		const template = templates.find(f => f.Name === templateName);
		const result: ParserResult = {
			Reply: {},
			Timeseries: [],
			Positions: [],
		};

		const parent = template.Reply.ParentPath
			? $(template.Reply.ParentPath).find(template.Reply.NodeName)
			: $(template.Reply.NodeName);

		if (!parent)
			throw new Error(
				`Reply node with name "${template.Reply.NodeName}" not found`
			);

		for (let i = 0; i < template.Reply.Info.length; i++) {
			const item = template.Reply.Info[i];
			const node = parent.find(item.Path);
			if (!node) throw new Error(`Cannot find reply node "${item.Name}" with path: "${item.Path}"`);
			const value = item.Text ? node.text() : node.attr(item.Attribute);
			result.Reply[item.Name] = value;
		}

		if (template.Timeserie) {
			const timeserieList = $(template.Timeserie.ParentPath)
				.find(template.Timeserie.NodeName)
				.toArray();

			for (let i = 0; i < timeserieList.length; i++) {
				const timeserieNode = timeserieList[i];
				const timeserie: ResultTimeserie = {};

				for (let i = 0; i < template.Timeserie.Info.length; i++) {
					const item = template.Timeserie.Info[i];
					const node = $(timeserieNode).find(item.Path);
					if (!node) throw new Error(`Cannot find timeserie node "${item.Name}" with path: "${item.Path}"`);
					const value = item.Text ? node.text() : node.attr(item.Attribute);
					timeserie[item.Name] = value;
				}

				if (template.Timeserie.Position) {
					timeserie.Positions = [];
					const positionList = $(timeserieNode).find(template.Timeserie.Position.ParentPath)
						.find(template.Timeserie.Position.NodeName)
						.toArray();

					for (let i = 0; i < positionList.length; i++) {
						const positionNode = positionList[i];
						const position: Partial<PositionInfo> = {};

						for (let i = 0; i < template.Timeserie.Position.Info.length; i++) {
							const item = template.Timeserie.Position.Info[i];
							const node = $(positionNode).find(item.Path);
							if (!node) throw new Error(`Cannot find position node "${item.Name}" with path: "${item.Path}"`);
							const value = item.Text ? node.text() : node.attr(item.Attribute);
							position[item.Name] = +value;
						}
						timeserie.Positions.push(position as PositionInfo);
					}
				}

				result.Timeseries.push(timeserie);
			}
		}

		return result;
	}
}
