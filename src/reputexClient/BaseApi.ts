import axios from "axios";
import { Credentials } from "./Credentials";
import { reputeXBaseUrl } from "../config/serverConfig";
import { ServerResponse } from "../config/commonResponse";

export class BaseApi {
  protected readonly baseUrl: string = reputeXBaseUrl;
  protected readonly authHeaders = {
    "x-api-key": this.credentials.getAccessKey(),
    "x-api-secret": this.credentials.getSecret(),
    origin: this.credentials.getOrigin(),
  };

  constructor(private credentials: Credentials) {}

  protected async makeGetRequest(
    endpoint: string,
    params?: Record<string, any> | null
  ): Promise<ServerResponse<any>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await axios.get(url, {
        params,
        headers: {
          ...this.authHeaders,
        },
      });
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data || {
          success: false,
          data: null,
          message: error?.response?.data?.message || "",
          error: error.message,
        }
      );
    }
  }

  protected async makePostRequest(
    endpoint: string,
    data?: Record<string, any> | null
  ): Promise<ServerResponse<any>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await axios.post(url, data, {
        headers: {
          ...this.authHeaders,
        },
      });
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data || {
          success: false,
          data: null,
          message: error?.response?.data?.message || "",
          error: error.message,
        }
      );
    }
  }
}
