import { isStringNullOrEmpty } from "../config/validationFunctions";
import responseMessage from "../config/responseMessage";

export class Credentials {
  protected readonly accessKey: string;
  protected readonly secretKey: string;

  constructor(accessKey: string, secretKey: string) {
    if (isStringNullOrEmpty(accessKey) || isStringNullOrEmpty(secretKey)) {
      throw new Error(responseMessage.EMPTY_ACCESS_OR_SECRET_KEY);
    }

    this.accessKey = accessKey;
    this.secretKey = secretKey;
  }

  getAccessKey(): string {
    return this.accessKey;
  }

  getSecret(): string {
    return this.secretKey;
  }
}
