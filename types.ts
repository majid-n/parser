export interface ParserTemplate {
  Name: string;
  Reply: Section<ReplyInfo>;
  Timeserie?: TimeseriePosition;
  Position?: Section<PositionInfo>;
}
export interface TimeseriePosition extends Section<TimeserieInfo> {
  Position?: Section<PositionInfo>;
}
export interface Section<T> {
  ParentPath: string;
  NodeName: string;
  Info: ValueInfo<T>[];
}
export interface ValueInfo<T> {
  Name: keyof T;
  Path: string;
  Attribute: string;
  Text: boolean;
}

export interface ReplyInfo {
  MessageIdentification: string;
  MessageType: string;
  MessageDateTime: string;
  SenderIdentification: string;
  SenderRole: string;
  ReceiverIdentification: string;
  ReceiverRole: string;
  ReceivingMessageIdentification: string;
  ReceivingMessageVersion: string;
  ReasonCode: string;
  ReasonText: string;
}
export interface TimeserieInfo {
  SendersTimeSeriesIdentification: string;
  SendersTimeSeriesVersion: string;
  BusinessType: string;
  Product: string;
  ObjectAggregation: string;
  InArea: string;
  OutArea: string;
  InParty: string;
  OutParty: string;
  MeasurementUnit: string;
  TimeInterval: string;
  Resolution: string;
}
export interface PositionInfo {
  Pos: number;
  Qty: number;
}

export interface ResultTimeserie extends Partial<TimeserieInfo> {
  Positions?: PositionInfo[];
}
export interface ParserResult {
  Reply: Partial<ReplyInfo>;
  Timeseries: ResultTimeserie[];
  Positions: PositionInfo[];
}