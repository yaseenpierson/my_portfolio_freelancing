/**
 * Environment configuration utility.
 * Safely accesses and validates application environment variables
 * rather than scattering import.meta.env across components.
 */

interface EnvConfig {
  email: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  isDev: boolean;
  isProd: boolean;
}

export const env: EnvConfig = {
  email: {
    serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY || '',
  },
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
