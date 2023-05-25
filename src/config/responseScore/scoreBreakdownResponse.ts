interface ScoreBreakdown {
  ethereum: {
    finalScore: number;
    ethereumContribution: number;
    defiCategoryScore: {
      finalScore: number;
      aaveScore: number;
      compoundScore: number;
      tvlScore: number;
      curveScore: number;
      enzymeScore: number;
      eulerScore: number;
      lidoScore: number;
      uniswapScore: number;
      yearnScore: number;
    };
    credibilityCategoryScore: {
      finalScore: number;
      appsInteractionScore: number;
      ensScore: number;
      txHistoryScore: number;
      udScore: number;
      gitcoinScore: number;
    };
    metaCategoryScore: {
      finalScore: number;
      metaverseScore: number;
      nftScore: number;
      nftTradingScore: number;
      poolTogetherScore: number;
      sandboxScore: number;
    };
    socialImpactScore: {
      finalScore: number;
      uniswapDaoScore: number;
    };
  };
  polygon: {
    finalScore: number;
    polygonContribution: number;
    defiCategoryScore: {
      finalScore: number;
      aaveScore: number;
      tvlScore: number;
    };
    credibilityCategoryScore: {
      finalScore: number;
      appsInteractionScore: number;
      txHistoryScore: number;
      udScore: number;
    };
    metaCategoryScore: {
      finalScore: number;
      nftScore: number;
      poolTogetherScore: number;
      sandboxScore: number;
    };
    socialImpactScore: {
      finalScore: number;
    };
  };
  bsc: {
    finalScore: number;
    binanceContribution: number;
    defiCategoryScore: {
      finalScore: number;
      tvlScore: number;
      venusScore: number;
    };
    credibilityCategoryScore: {
      finalScore: number;
      appsInteractionScore: number;
      txHistoryScore: number;
    };
    metaCategoryScore: {
      finalScore: number;
      nftScore: number;
    };
    socialImpactScore: {
      finalScore: number;
    };
  };
  avalanche: {
    finalScore: number;
    avalancheContribution: number;
    defiCategoryScore: {
      finalScore: number;
      aaveScore: number;
      tvlScore: number;
    };
    credibilityCategoryScore: {
      finalScore: number;
      appsInteractionScore: number;
      txHistoryScore: number;
    };
    metaCategoryScore: {
      finalScore: number;
      nftScore: number;
      poolTogetherScore: number;
    };
    socialImpactScore: {
      finalScore: number;
    };
  };
  arbitrum: {
    finalScore: number;
    arbitrumContribution: number;
    defiCategoryScore: {
      finalScore: number;
      aaveScore: number;
      uniswapScore: number;
      yearnScore: number;
      abracadabraScore: number;
      qiDaoScore: number;
      siloFinanceScore: number;
      tvlScore: number;
    };
    credibilityCategoryScore: {
      finalScore: number;
      appsInteractionScore: number;
      txHistoryScore: number;
    };
    metaCategoryScore: {
      finalScore: number;
      nftScore: number;
    };
  };
}

interface SyncBlockNumber {
  ethereum: number;
  polygon: number;
  bsc: number;
  avalanche: number;
}

export interface ScoreBreakdownResponse {
  address: string;
  reputeXScore: number;
  customScore: boolean;
  blacklisted: boolean;
  lastUpdated: Date;
  scoreBreakdown?: ScoreBreakdown;
  syncBlockNumber?: SyncBlockNumber;
}
export interface DidScoreBreakdownResponse {
  didResolved: boolean;
  did: string;
  data: {
    didScore: {
      blacklisted: boolean;
      reputeXScore: number;
      customScore: number;
      lastUpdated: Date;
      scoreBreakdown?: ScoreBreakdown;
      syncBlockNumber?: SyncBlockNumber;
    };
    addressWiseBreakdown?: Array<{
      address: string;
      reputeXScore: number;
      customScore: number;
      blacklisted: boolean;
      lastUpdated: Date;
      scoreBreakdown: ScoreBreakdown;
      syncBlockNumber: SyncBlockNumber;
    }>;
  };
  warnings: Array<{ address: string; message: string }>;
}
