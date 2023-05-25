import { WineModel } from './wine.model';

export class WineTypeModel {
  id: number;
  name: string;
  wine?: WineModel[];
}
