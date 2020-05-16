export interface IFormikValues {
  people: IFormikPerson[];
  partyName: string;
  partyOwner: string;
  partyDate: Date | '';
}

export interface IFormikPerson {
  uuid: string;
  name: string;
  email: string;
}
