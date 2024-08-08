import { BaseApi } from "./BaseApi";
import { scoreAPI } from "../config/serverConfig";
import { ScoreBreakdownResponse } from "../config/responseScore/scoreBreakdown";
import { ScoreCreateResponse } from "../config/responseScore/scoreCreateResponse";
import { ServerResponse } from "../config/commonResponse";
import { ScoreUpdateResponse } from "../config/responseScore/scoreUpdateResponse";
import { validateStringNullOrEmpty } from "../config/validationFunctions";

export class ReputeXScore extends BaseApi {
  async getBreakdown(
    addressOrDomain: string,
    params?: { compactBreakdown?: boolean }
  ): Promise<ServerResponse<ScoreBreakdownResponse>> {
    validateStringNullOrEmpty(addressOrDomain);
    return await this.makeGetRequest(
      `${scoreAPI.getScore}/${addressOrDomain}`,
      params
    );
  }

  async create(
    addressOrDomain: string
  ): Promise<ServerResponse<ScoreCreateResponse>> {
    validateStringNullOrEmpty(addressOrDomain);
    return await this.makePostRequest(
      `${scoreAPI.createScore}/${addressOrDomain}`
    );
  }

  async update(
    addressOrDomain: string
  ): Promise<ServerResponse<ScoreUpdateResponse>> {
    validateStringNullOrEmpty(addressOrDomain);
    return await this.makePostRequest(
      `${scoreAPI.updateScore}/${addressOrDomain}`
    );
  }
}
