export interface MoonbeamScoreBreakdown {
  finalScore: number;
  moonbeamContribution: number;
  defiCategoryScore: {
    finalScore: number;
    tvlScore: number;
    sushiSwapScore: number;
    curveScore: number;
    moonwellScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
  };
  socialImpactScore: {
    finalScore: number;
    moonwellDaoScore: number;
  };
}
