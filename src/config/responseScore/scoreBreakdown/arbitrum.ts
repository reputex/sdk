export interface ArbitrumScoreBreakdown {
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
    fsaScore: number;
  };
  metaCategoryScore: {
    finalScore: number;
    nftScore: number;
  };
}
