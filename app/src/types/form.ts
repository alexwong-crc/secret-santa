export interface IFormikValues {
  people: IFormikPerson[];
  partyName: string;
  partyOwner: string;
  partyDate: Date | null;
}

export interface IFormikPerson {
  uuid: string;
  name: string;
  email: string;
}

export type FormikValuesKey = keyof IFormikValues;
