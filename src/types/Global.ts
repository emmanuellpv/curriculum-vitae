import { ButtonIconType } from '@/constants';

export interface ISelect {
  value: string;
  viewValue: string;
  optional?: string;
}

export interface IButtonIcon {
  type: ButtonIconType;
  name: string;
}

export interface ITab {
  path: string;
  name: string;
}

export interface IAlert {
  iconColor: string;
  iconName: string;
  message: string;
}
