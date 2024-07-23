import { SuperHero } from './super-hero';

export interface PaginationResponse {
  TotalCount: number;
  pageNumber: number;
  pageSize: number;
  SuperHeroesData: SuperHero[];
}
