import { BaseApi } from "./BaseApi";
import { scoreAPI } from "../config/serverConfig";
import {
  DidScoreBreakdownResponse,
  ScoreBreakdownResponse,
} from "../config/responseScore/scoreBreakdownResponse";
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

  async didGetBreakdown(
    did: string,
    params?: { compactBreakdown?: boolean; individualBreakdown?: boolean }
  ): Promise<ServerResponse<DidScoreBreakdownResponse>> {
    validateStringNullOrEmpty(did);
    return await this.makeGetRequest(`${scoreAPI.getScoreDid}/${did}`, params);
  }

  async didCreate(did: string): Promise<ServerResponse<ScoreCreateResponse>> {
    validateStringNullOrEmpty(did);
    return await this.makePostRequest(`${scoreAPI.createScoreDid}/${did}`);
  }
}
