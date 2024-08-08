export interface LineaScoreBreakdown {
  finalScore: number;
  lineaContribution: number;
  defiCategoryScore: {
    finalScore: number;
    tvlScore: number;
    pancakeSwapScore: any;
    sushiSwapScore: any;
    syncSwapScore: any;
    nileExchangeScore: any;
    iZiSwapScore: any;
    zeroLendScore: any;
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
