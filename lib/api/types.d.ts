interface ValuesWithDefinitions {
  Rank: number;
  Value: string;
  world_population: string;
  definition: string;
}

type Event = {
  data: Record<string, unknown>[];
};

export type { ValuesWithDefinitions, Event };
