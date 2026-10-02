/**
 * Environment configuration utility.
 * Safely accesses application environment variables.
 * Only client-safe values prefixed with VITE_ are exposed.
 */

interface EnvConfig {
  isDev: boolean;
  isProd: boolean;
}

export const env: EnvConfig = {
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
