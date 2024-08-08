export interface ScoreUpdateResponse {
  address: string;
  data: {
    score: number;
    legacyReputeXScore: number;
  };
}
