import { StaticImageData } from 'next/image';
import { DisplayMode } from '@/constants';

export interface ISelectedCredential {
  title: string;
  img: StaticImageData;
}

export interface ICourse {
  achievement: string;
  institution: string;
  date: string;
  url: string;
  displayMode: DisplayMode;
}

export interface ICertification {
  achievement: string;
  institution: string;
  date: string;
  url: string;
  displayMode: DisplayMode;
}
