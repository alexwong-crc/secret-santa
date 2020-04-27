export interface IFormik {
  people: IFormikPerson[];
}

export interface IFormikPerson {
  uuid: string;
  name: string;
  email: string;
}
