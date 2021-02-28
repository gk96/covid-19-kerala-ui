export interface Report {
    id: number;
    date: string,
    districts: District[],
    total: number;
}

export interface District {
    name: string;
    count: number;
  }
