import { Film } from './film';
import { People } from './people';
import { Planet } from './planet';
import { Species } from './species';
import { Starship } from './starship';
import { Vehicle } from './vehicles';

export type SWAPIResponse = {
  category: string;
  count: number;
  next: string | null;
  previous: string | null;
  results: People[] | Film[] | Planet[] | Species[] | Starship[] | Vehicle[];
};
