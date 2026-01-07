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
}
