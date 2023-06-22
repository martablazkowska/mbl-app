export interface IFormCore {
  id: string;
  label: string;
  required?: boolean;
}

export interface IFormInputElement extends IFormCore {
  type: 'input';
}

export type IFormElement = IFormInputElement;
