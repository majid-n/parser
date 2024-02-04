import { ParserTemplate } from "./types";

export const templates: ParserTemplate[] = [
    {
        Name: 'SwissGrid',
		Reply: {
			ParentPath: "",
			NodeName: "ConfirmationReport",
			Info: [
				{ Name: "MessageIdentification", Path: "ConfirmationReport MessageIdentification", Attribute: "v", Text: false },
				{ Name: "MessageType", Path: "ConfirmationReport MessageType", Attribute: "v", Text: false },
				{ Name: "MessageDateTime", Path: "ConfirmationReport MessageDateTime", Attribute: "v", Text: false },
				{ Name: "SenderIdentification", Path: "ConfirmationReport SenderIdentification", Attribute: "v", Text: false },
				{ Name: "SenderRole", Path: "ConfirmationReport SenderRole", Attribute: "v", Text: false },
				{ Name: "ReceiverIdentification", Path: "ConfirmationReport ReceiverIdentification", Attribute: "v", Text: false },
				{ Name: "ReceiverRole", Path: "ConfirmationReport ReceiverRole", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageIdentification", Path: "ConfirmationReport ConfirmedMessageIdentification", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageVersion", Path: "ConfirmationReport ConfirmedMessageVersion", Attribute: "v", Text: false },
				{ Name: "ReasonCode", Path: "ConfirmationReport ReasonCode", Attribute: "v", Text: false },
				{ Name: "ReasonText", Path: "ConfirmationReport ReasonText", Attribute: "v", Text: false },
			],
		},
		Timeserie: {
			ParentPath: "ConfirmationReport",
			NodeName: "TimeSeriesConfirmation",
			Info: [
				{ Name: "SendersTimeSeriesIdentification", Path: "SendersTimeSeriesIdentification", Attribute: "v", Text: false },
				{ Name: "SendersTimeSeriesVersion", Path: "SendersTimeSeriesVersion", Attribute: "v", Text: false },
				{ Name: "BusinessType", Path: "BusinessType", Attribute: "v", Text: false },
				{ Name: "Product", Path: "Product", Attribute: "v", Text: false },
				{ Name: "ObjectAggregation", Path: "ObjectAggregation", Attribute: "v", Text: false },
				{ Name: "InArea", Path: "InArea", Attribute: "v", Text: false },
				{ Name: "OutArea", Path: "OutArea", Attribute: "v", Text: false },
				{ Name: "InParty", Path: "InParty", Attribute: "v", Text: false },
				{ Name: "OutParty", Path: "OutParty", Attribute: "v", Text: false },
				{ Name: "MeasurementUnit", Path: "MeasurementUnit", Attribute: "v", Text: false },
				{ Name: "TimeInterval", Path: "Period TimeInterval", Attribute: "v", Text: false },
				{ Name: "Resolution", Path: "Period Resolution", Attribute: "v", Text: false },
			],
			Position: {
				ParentPath: 'Period',
				NodeName: 'Interval',
				Info: [
					{ Name: 'Pos', Path: 'Pos', Attribute: 'v', Text: false },
					{ Name: 'Qty', Path: 'Qty', Attribute: 'v', Text: false },
				]
			}
		},
	},
    {
        Name: 'Terna',
		Reply: {
			ParentPath: "",
			NodeName: "AcknowledgementMessage",
			Info: [
				{ Name: "MessageIdentification", Path: "AcknowledgementMessage MessageIdentification", Attribute: "v", Text: false },
				{ Name: "MessageType", Path: "AcknowledgementMessage MessageType", Attribute: "v", Text: false },
				{ Name: "MessageDateTime", Path: "AcknowledgementMessage MessageDateTime", Attribute: "v", Text: false },
				{ Name: "SenderIdentification", Path: "AcknowledgementMessage SenderIdentification", Attribute: "v", Text: false },
				{ Name: "SenderRole", Path: "AcknowledgementMessage SenderRole", Attribute: "v", Text: false },
				{ Name: "ReceiverIdentification", Path: "AcknowledgementMessage ReceiverIdentification", Attribute: "v", Text: false },
				{ Name: "ReceiverRole", Path: "AcknowledgementMessage ReceiverRole", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageIdentification", Path: "AcknowledgementMessage ReceivingMessageIdentification", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageVersion", Path: "AcknowledgementMessage ReceivingMessageVersion", Attribute: "v", Text: false },
				{ Name: "ReasonCode", Path: "AcknowledgementMessage ReasonCode", Attribute: "v", Text: false },
				{ Name: "ReasonText", Path: "AcknowledgementMessage ReasonText", Attribute: "v", Text: false },
			],
		},
		Timeserie: {
			ParentPath: "AcknowledgementMessage",
			NodeName: "TimeSeriesConfirmation",
			Info: [
				{ Name: "SendersTimeSeriesIdentification", Path: "SendersTimeSeriesIdentification", Attribute: "v", Text: false },
				{ Name: "SendersTimeSeriesVersion", Path: "SendersTimeSeriesVersion", Attribute: "v", Text: false },
			],
		},
	},
    {
        Name: 'Transelectrica',
		Reply: {
			ParentPath: "",
			NodeName: "Transelectrica_Webservice",
			Info: [
				{ Name: "MessageIdentification", Path: "Transelectrica_Webservice DocumentIdentification", Attribute: "v", Text: false },
				{ Name: "MessageType", Path: "Transelectrica_Webservice ReceivingDocumentType", Attribute: "v", Text: false },
				{ Name: "MessageDateTime", Path: "Transelectrica_Webservice DocumentDateTime", Attribute: "v", Text: false },
				{ Name: "SenderIdentification", Path: "Transelectrica_Webservice SenderIdentification", Attribute: "v", Text: false },
				{ Name: "SenderRole", Path: "Transelectrica_Webservice SenderRole", Attribute: "v", Text: false },
				{ Name: "ReceiverIdentification", Path: "Transelectrica_Webservice ReceiverIdentification", Attribute: "v", Text: false },
				{ Name: "ReceiverRole", Path: "Transelectrica_Webservice ReceiverRole", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageIdentification", Path: "Transelectrica_Webservice ReceivingDocumentIdentification", Attribute: "v", Text: false },
				{ Name: "ReceivingMessageVersion", Path: "Transelectrica_Webservice ReceivingDocumentVersion", Attribute: "v", Text: false },
				{ Name: "ReasonCode", Path: "Transelectrica_Webservice ReasonCode", Attribute: "v", Text: false },
				{ Name: "ReasonText", Path: "Transelectrica_Webservice ReasonText", Attribute: "v", Text: false },
			],
		}
	},
    {
        Name: 'RNP',
		Reply: {
			ParentPath: "",
			NodeName: "RNP_Webservice",
			Info: [
				{ Name: "MessageIdentification", Path: "RNP_Webservice mRID", Attribute: null, Text: true },
				{ Name: "MessageDateTime", Path: "RNP_Webservice createdDateTime", Attribute: null, Text: true },
				{ Name: "SenderIdentification", Path: "RNP_Webservice sender_MarketParticipant\\.mRID", Attribute: null, Text: true },
				{ Name: "SenderRole", Path: "RNP_Webservice sender_MarketParticipant\\.marketRole\\.type", Attribute: null, Text: true },
				{ Name: "ReceiverIdentification", Path: "RNP_Webservice receiver_MarketParticipant\\.mRID", Attribute: null, Text: true },
				{ Name: "ReceiverRole", Path: "RNP_Webservice receiver_MarketParticipant\\.marketRole\\.type", Attribute: null, Text: true },
				{ Name: "ReceivingMessageIdentification", Path: "RNP_Webservice received_MarketDocument\\.mRID", Attribute: null, Text: true },
				{ Name: "ReceivingMessageVersion", Path: "RNP_Webservice received_MarketDocument\\.revisionNumber", Attribute: null, Text: true },
				{ Name: "ReasonCode", Path: "RNP_Webservice Reason code", Attribute: null, Text: true },
				{ Name: "ReasonText", Path: "RNP_Webservice Reason text", Attribute: null, Text: true },
			],
		}
	},
    {
        Name: 'ElecLink',
		Reply: {
			ParentPath: "",
			NodeName: "ns3\\:Acknowledgement_MarketDocument",
			Info: [
				{ Name: "MessageIdentification", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:mRID", Attribute: null, Text: true },
				{ Name: "MessageDateTime", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:createdDateTime", Attribute: null, Text: true },
				{ Name: "SenderIdentification", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:sender_MarketParticipant\\.mRID", Attribute: null, Text: true },
				{ Name: "SenderRole", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:sender_MarketParticipant\\.marketRole\\.type", Attribute: null, Text: true },
				{ Name: "ReceiverIdentification", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:receiver_MarketParticipant\\.mRID", Attribute: null, Text: true },
				{ Name: "ReceiverRole", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:receiver_MarketParticipant\\.marketRole\\.type", Attribute: null, Text: true },
				{ Name: "ReceivingMessageIdentification", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:received_MarketDocument\\.mRID", Attribute: null, Text: true },
				{ Name: "ReceivingMessageVersion", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:received_MarketDocument\\.revisionNumber", Attribute: null, Text: true },
				{ Name: "ReasonCode", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:Reason ns3\\:code", Attribute: null, Text: true },
				{ Name: "ReasonText", Path: "ns3\\:Acknowledgement_MarketDocument ns3\\:Reason ns3\\:text", Attribute: null, Text: true },
			],
		}
	}
]