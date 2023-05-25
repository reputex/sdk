// import { BaseApi } from "./BaseApi";
import { Credentials } from "./Credentials";
import { ReputeXScore } from "./ReputeXScore";

export class ReputeX {
  private credentials: Credentials;
  public score: ReputeXScore;

  constructor(config: {
    accessKey: string;
    secretKey: string;
    origin?: string;
  }) {
    let origin: string | undefined;

    if (typeof window !== "undefined" && window.location.origin) {
      origin = window.location.origin;
    } else if (config.origin) {
      origin = config.origin;
    } else {
      throw new Error(
        "Origin not provided. Please specify the origin in the configuration of ReputeX."
      );
    }

    this.credentials = new Credentials(
      config.accessKey,
      config.secretKey,
      origin
    );
    this.score = new ReputeXScore(this.credentials);
  }
}
