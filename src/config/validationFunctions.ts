import responseMessage from "../config/responseMessage";

export const isStringNullOrEmpty = (str: string | null | undefined) => {
  return str == null || str.trim() === "";
};

export const validateStringNullOrEmpty = (str: string | null | undefined) => {
  if (isStringNullOrEmpty(str)) {
    throw new Error(responseMessage.INVALID_INPUT);
  }
};
