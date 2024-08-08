export interface BaseScoreBreakdown {
  finalScore: number;
  baseContribution: number;
  defiCategoryScore: {
    finalScore: number;
    tvlScore: number;
    aaveScore: number;
    sushiSwapScore: number;
    uniswapScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
  };
}
