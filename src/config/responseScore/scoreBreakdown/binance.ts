export interface BinanceScoreBreakdown {
  finalScore: number;
  binanceContribution: number;
  defiCategoryScore: {
    finalScore: number;
    venusScore: number;
    tvlScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
  };
  metaCategoryScore: {
    finalScore: number;
    nftScore: number;
  };
  socialImpactScore: {
    finalScore: number;
  };
}
