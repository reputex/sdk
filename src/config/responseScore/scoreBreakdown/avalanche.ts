export interface AvalancheScoreBreakdown {
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
    fsaScore: number;
  };
  metaCategoryScore: {
    finalScore: number;
    nftScore: number;
    poolTogetherScore: number;
  };
  socialImpactScore: {
    finalScore: number;
  };
}
