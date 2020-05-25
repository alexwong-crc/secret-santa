interface IResponse<T> {
  result: T;
}

export interface IPerson {
  name: string;
  email: string;
}

export interface IScheduleAPIRequest {
  people: IPerson[];
  partyDate: Date;
  partyName: string;
  partyOwner: string;
}

export interface IScheduleAPI {
  message: string;
  count?: number;
  emails?: string[];
}

export type IScheduleAPIResponse = IResponse<IScheduleAPI>;
