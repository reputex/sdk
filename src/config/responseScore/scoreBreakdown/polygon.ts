export interface PolygonScoreBreakdown {
  finalScore: number;
  polygonContribution: number;
  defiCategoryScore: {
    finalScore: number;
    aaveScore: number;
    tvlScore: number;
    riskScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    udScore: number;
    appsInteractionScore: number;
    txHistoryScore: number;
    fsaScore: number;
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
}
