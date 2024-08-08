export interface OptimismScoreBreakdown {
  finalScore: number;
  optimismContribution: number;
  defiCategoryScore: {
    finalScore: number;
    aaveScore: number;
    curveScore: number;
    qiDaoScore: number;
    sushiSwapScore: number;
    tvlScore: number;
    uniswapScore: number;
    sonneFinanceScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
  };
  metaCategoryScore: {
    finalScore: number;
    farcasterScore: number;
  };
}
