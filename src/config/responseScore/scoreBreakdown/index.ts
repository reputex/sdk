import { ArbitrumScoreBreakdown } from "./arbitrum";
import { AvalancheScoreBreakdown } from "./avalanche";
import { BaseScoreBreakdown } from "./base";
import { BinanceScoreBreakdown } from "./binance";
import { EthereumScoreBreakdown } from "./ethereum";
import { LineaScoreBreakdown } from "./linea";
import { MoonbeamScoreBreakdown } from "./moonbeam";
import { OptimismScoreBreakdown } from "./optimism";
import { PolygonScoreBreakdown } from "./polygon";
import { ZkSyncEraScoreBreakdown } from "./zkSyncEra";

export interface ScoreBreakdownResponse {
  address: string;
  reputeXScore: number;
  legacyReputeXScore: number;
  customScore: boolean;
  blacklisted: boolean;
  lastUpdated: Date;
  scoreBreakdown?: ScoreBreakdown;
  syncBlockNumber?: SyncBlockNumber;
}

interface ScoreBreakdown {
  ethereum: EthereumScoreBreakdown;
  polygon: PolygonScoreBreakdown;
  bsc: BinanceScoreBreakdown;
  avalanche: AvalancheScoreBreakdown;
  arbitrum: ArbitrumScoreBreakdown;
  optimism: OptimismScoreBreakdown;
  base: BaseScoreBreakdown;
  moonbeam: MoonbeamScoreBreakdown;
  linea: LineaScoreBreakdown;
  zkSyncEra: ZkSyncEraScoreBreakdown;
}

interface SyncBlockNumber {
  ethereum: number;
  polygon: number;
  bsc: number;
  avalanche: number;
  arbitrum: number;
  optimism: number;
  base: number;
  moonbeam: number;
  linea: number;
  zkSyncEra: number;
}
