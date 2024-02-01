declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: 'https://next-poc-4f1.pages.dev';
      // Add here the Cloudflare Bindings you want to have available in your application
      // (for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
      //
      // KV Example:
      // MY_KV: KVNamespace
    }
  }
}

export {};
