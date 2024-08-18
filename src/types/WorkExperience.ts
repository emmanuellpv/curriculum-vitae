import type { StaticImageData } from 'next/image';
import { ProjectStatus } from '@/constants';

export interface IProject {
  id: number;
  name: string;
  type: string;
  imgUrl: StaticImageData;
  status: ProjectStatus;
}
