// import { BaseApi } from "./BaseApi";
import { Credentials } from "./Credentials";
import { ReputeXScore } from "./ReputeXScore";

export class ReputeX {
  private credentials: Credentials;
  public score: ReputeXScore;

  constructor(accessKey: string, secretKey: string) {
    this.credentials = new Credentials(accessKey, secretKey);
    this.score = new ReputeXScore(this.credentials);
  }
}
