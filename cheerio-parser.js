"use strict";
exports.__esModule = true;
exports.ReplyParser = void 0;
var cheerio = require("cheerio");
var fs = require("fs");
var templates_1 = require("./templates");
var ReplyParser = /** @class */ (function () {
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
    function ReplyParser() {
    }
    ReplyParser.prototype.parseFromUrl = function (url, templateName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(url, function (err, data) {
                if (err)
                    reject(err);
                resolve(_this.parse(data.toString(), templateName));
            });
        });
    };
    ReplyParser.prototype.parse = function (data, templateName) {
        var $ = cheerio.load(data, { xmlMode: true, xml: true });
        var template = templates_1.templates.find(function (f) { return f.Name === templateName; });
        var result = {
            Reply: {},
            Timeseries: [],
            Positions: []
        };
        var parent = template.Reply.ParentPath
            ? $(template.Reply.ParentPath).find(template.Reply.NodeName)
            : $(template.Reply.NodeName);
        if (!parent)
            throw new Error("Reply node with name \"".concat(template.Reply.NodeName, "\" not found"));
        for (var i = 0; i < template.Reply.Info.length; i++) {
            var item = template.Reply.Info[i];
            var node = parent.find(item.Path);
            if (!node)
                throw new Error("Cannot find reply node \"".concat(item.Name, "\" with path: \"").concat(item.Path, "\""));
            var value = item.Text ? node.text() : node.attr(item.Attribute);
            result.Reply[item.Name] = value;
        }
        if (template.Timeserie) {
            var timeserieList = $(template.Timeserie.ParentPath)
                .find(template.Timeserie.NodeName)
                .toArray();
            for (var i = 0; i < timeserieList.length; i++) {
                var timeserieNode = timeserieList[i];
                var timeserie = {};
                for (var i_1 = 0; i_1 < template.Timeserie.Info.length; i_1++) {
                    var item = template.Timeserie.Info[i_1];
                    var node = $(timeserieNode).find(item.Path);
                    if (!node)
                        throw new Error("Cannot find timeserie node \"".concat(item.Name, "\" with path: \"").concat(item.Path, "\""));
                    var value = item.Text ? node.text() : node.attr(item.Attribute);
                    timeserie[item.Name] = value;
                }
                if (template.Timeserie.Position) {
                    timeserie.Positions = [];
                    var positionList = $(timeserieNode).find(template.Timeserie.Position.ParentPath)
                        .find(template.Timeserie.Position.NodeName)
                        .toArray();
                    for (var i_2 = 0; i_2 < positionList.length; i_2++) {
                        var positionNode = positionList[i_2];
                        var position = {};
                        for (var i_3 = 0; i_3 < template.Timeserie.Position.Info.length; i_3++) {
                            var item = template.Timeserie.Position.Info[i_3];
                            var node = $(positionNode).find(item.Path);
                            if (!node)
                                throw new Error("Cannot find position node \"".concat(item.Name, "\" with path: \"").concat(item.Path, "\""));
                            var value = item.Text ? node.text() : node.attr(item.Attribute);
                            position[item.Name] = +value;
                        }
                        timeserie.Positions.push(position);
                    }
                }
                result.Timeseries.push(timeserie);
            }
        }
        return result;
    };
    return ReplyParser;
}());
exports.ReplyParser = ReplyParser;
