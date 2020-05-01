export interface IFormikValues {
  people: IFormikPerson[];
}

export interface IFormikPerson {
  uuid: string;
  name: string;
  email: string;
}
