import {Hit} from './Hit';

export interface Posts {
  exhaustive: Exhaustive;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hit;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface ProcessingTimingsMS {
  request: {
    roundTrip: number
  };
  query: string;
  serverTimeMS: number;
}

