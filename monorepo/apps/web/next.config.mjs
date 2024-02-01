import '@monorepo/env/src/env/env.mjs';

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@monorepo/env', '@monorepo/ui'],
};

export default config;
