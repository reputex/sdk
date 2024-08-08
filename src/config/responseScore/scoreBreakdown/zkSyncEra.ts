export interface ZkSyncEraScoreBreakdown {
  finalScore: number;
  zkSyncEraContribution: number;
  defiCategoryScore: {
    finalScore: number;
    tvlScore: number;
    pancakeSwapScore: any;
    syncSwapScore: any;
    iZiSwapScore: any;
    koiFinanceScore: any;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
  };
}
