declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      API_KEY: string;
      API_SECRET: string;
      NEW_ADDRESS_FOR_TEST: string;
    }
  }
}
export {};
