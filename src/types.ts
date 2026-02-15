export interface Game {
  game: number;
  winner: string;
  score: string;
  location: string;
}

export interface Finals {
  year: number;
  champion: string;
  runnerUp: string;
  series: string;
  mvp: string;
  games: Game[];

  // Visual & Data Fields
  teamColors: {
    champion: string;
    runnerUp: string;
  };
  era: string;

  // Content Fields (optional - you fill in)
  narrative?: string;
  significance?: string;
  notableMoments?: string[];
  dates?: {
    start: string;
    end: string;
  };
  stats?: {
    avgPointsChampion?: number;
    avgPointsRunnerUp?: number;
    largestMargin?: number;
    heroStat?: string;
  };
}
