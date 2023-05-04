export interface ServerResponse<Type> {
  success: boolean;
  data: Type | null;
  message: string;
  error: string;
}

export const responseFunction = (
  status: boolean,
  data: any,
  message?: string
) => {
  if (!message) {
    return {
      status: status,
      data: data,
    };
  } else
    return {
      status: status,
      data: data,
      message: message,
    };
};

export const errorResponse = (error: string, message?: string) => {
  return { success: false, data: null, message: message || "", error: error };
};
