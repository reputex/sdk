import { ServerResponse } from "../src/config/commonResponse";
import {
  DidScoreBreakdownResponse,
  ScoreBreakdownResponse,
} from "../src/config/responseScore/scoreBreakdownResponse";
import { ScoreCreateResponse } from "../src/config/responseScore/scoreCreateResponse";
import { ScoreUpdateResponse } from "../src/config/responseScore/scoreUpdateResponse";
import ReputeX from "../src/index";

// Replace the following values with actual test data
const accessKey = "c64d8b7a-583d-49c0-a907-16f46882d741";
const secretKey =
  "b13e075ac7ac57a4ae7bc87922acf43548a5c9f1eed7f4bebacd05a6ce28956f";
const addressOrDomainInvalid = "0x5DD596C901987A2b28C38A9C1DfBf86fFFc15d7";
const addressOrDomainExists = "0x5DD596C901987A2b28C38A9C1DfBf86fFFc15d77";
const addressOrDomainNew = "0xD01A2311cA001241502394d25Bc08b0aD8Cd2229";
const did = "did:hid:testnet:0xB08138Cb5F6Ac6b908F0F70B72F8092EAe12a9cd";
const originUrl = "http://localhost:3030";

describe("ReputeXScore", () => {
  const reputeX = new ReputeX({ accessKey, secretKey, origin: originUrl });
  jest.setTimeout(30000);

  describe("getBreakdown", () => {
    it("should return invalid address", async () => {
      const response: ServerResponse<ScoreBreakdownResponse> =
        await reputeX.score.getBreakdown(addressOrDomainInvalid);
      expect(response.success).toBe(false);
      expect(response.data).toBeNull();
      expect(response.message).toBe("Invalid address!");
      expect(response.error).toBe("");
    });

    it("should return score breakdown for a given address or domain", async () => {
      const response: ServerResponse<ScoreBreakdownResponse> =
        await reputeX.score.getBreakdown(addressOrDomainExists);
      expect(response.success).toBe(true);
      expect(response.message).toBe("ReputeX Score exists for the address.");
      expect(response.error).toBe("");
    });

    it("should return ReputeX Score does not exist for the address.", async () => {
      const response: ServerResponse<ScoreBreakdownResponse> =
        await reputeX.score.getBreakdown(addressOrDomainNew);
      expect(response.success).toBe(false);
      expect(response.data).toBeNull();
      expect(response.message).toBe(
        "ReputeX Score does not exist for the address."
      );
      expect(response.error).toBe("");
    });
  });

  describe("create", () => {
    it("should return ReputeX Score already exists for given address", async () => {
      const response: ServerResponse<ScoreCreateResponse> =
        await reputeX.score.create(addressOrDomainExists);
      expect(response.success).toBe(false);
      expect(response.data).toBeNull();
      expect(response.message).toBe(
        "ReputeX Score already exists for given address."
      );
      expect(response.error).toBe("");
    });

    it("should return ReputeX Score successfully created", async () => {
      const response: ServerResponse<ScoreCreateResponse> =
        await reputeX.score.create(addressOrDomainNew);
      expect(response.success).toBe(true);
      expect(response.message).toBe("OK");
      expect(response.error).toBe("");
    });
  });

  describe("update", () => {
    it("should return reputeX score successfully updated", async () => {
      const response: ServerResponse<ScoreUpdateResponse> =
        await reputeX.score.update(addressOrDomainExists);
      expect(response.success).toBe(true);
      expect(response.message).toBe("Score successfully updated!");
      expect(response.error).toBe("");
    });
  });

  describe("didGetBreakdown", () => {
    it("should return score breakdown for a given did document", async () => {
      const response: ServerResponse<DidScoreBreakdownResponse> =
        await reputeX.score.didGetBreakdown(did);
      expect(response.success).toBe(true);
      expect(response.message).toBe("Scores calculated successfully");
      expect(response.error).toBe("");
    });
  });

  describe("didCreate", () => {
    it("should return score has been created for Did Document.", async () => {
      const response: ServerResponse<ScoreCreateResponse> =
        await reputeX.score.didCreate(did);
      expect(response.success).toBe(true);
      expect(response.message).toBe("OK");
      expect(response.error).toBe("");
    });
  });
});
