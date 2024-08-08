import { ServerResponse } from "../src/config/commonResponse";
import { ScoreBreakdownResponse } from "../src/config/responseScore/scoreBreakdown";
import { ScoreCreateResponse } from "../src/config/responseScore/scoreCreateResponse";
import { ScoreUpdateResponse } from "../src/config/responseScore/scoreUpdateResponse";
import ReputeX from "../src/index";

// Replace the following values with actual test data
const accessKey = process.env.API_KEY || "";
const secretKey = process.env.API_SECRET || "";

const addressOrDomainInvalid = "0x5DD596C901987A2b28C38A9C1DfBf86fFFc15d7";
const addressOrDomainExists = "0x5DD596C901987A2b28C38A9C1DfBf86fFFc15d77";
const addressOrDomainNew =
  process.env.NEW_ADDRESS_FOR_TEST ||
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
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
});
