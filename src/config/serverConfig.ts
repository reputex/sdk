import dotenv from "dotenv";
dotenv.config();

const reputeXBaseUrl =
  process.env?.NODE_ENV === "test"
    ? "https://dev.reputex.io/v1/"
    : "https://api.reputex.io/v1/";

const scoreAPI = {
  getScore: "score/breakdown",
  createScore: "score/create",
  updateScore: "score/update",
  getScoreDid: "score/did/breakdown",
  createScoreDid: "score/did/create",
};

export { reputeXBaseUrl, scoreAPI };
