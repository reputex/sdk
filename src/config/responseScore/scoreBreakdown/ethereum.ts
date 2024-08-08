export interface EthereumScoreBreakdown {
  finalScore: number;
  ethereumContribution: number;
  defiCategoryScore: {
    finalScore: number;
    aaveScore: number;
    compoundScore: number;
    eulerScore: number;
    enzymeScore: number;
    uniswapScore: number;
    yearnScore: number;
    curveScore: number;
    lidoScore: number;
    tvlScore: number;
    ironBankScore: number;
    riskScore: number;
    eigenLayerScore: number;
  };
  credibilityCategoryScore: {
    finalScore: number;
    appsInteractionScore: number;
    ensScore: number;
    udScore: number;
    txHistoryScore: number;
    gitcoinScore: number;
    fsaScore: number;
  };
  metaCategoryScore: {
    finalScore: number;
    nftScore: number;
    metaverseScore: number;
    nftTradingScore: number;
    poolTogetherScore: number;
    sandboxScore: number;
  };
  socialImpactScore: {
    finalScore: number;
    uniswapDaoScore: number;
  };
}
