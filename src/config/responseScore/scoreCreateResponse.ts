export interface ScoreCreateResponse {
  didResolved: boolean;
  did: string;
  addressWiseStatus: Array<{
    address: string;
    success: boolean;
    message: string;
  }>;
}
