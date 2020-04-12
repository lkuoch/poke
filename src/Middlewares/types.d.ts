import { Action } from "redux";

export interface ICallApiAction extends Action {
  payload: ICallApiPayload;
}

export interface ICallApiPayload {
  endpoint: string;
  types: [string, string, string];
  schema: RequestInit;
  retryCount?: Number;
}
