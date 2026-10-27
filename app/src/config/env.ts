import * as z from 'zod';

const createEnv = () => {
  const EnvSchema = z.object({
    // microCMSのAPIキー（サーバー専用のためブラウザ側では未設定になる）
    API_KEY: typeof window === 'undefined' ? z.string() : z.string().optional(),
    API_URL: z
      .string()
      .optional()
      .default('https://nerusan.microcms.io/api/v1'),
  });

  const envVars = {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  };

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(z.flattenError(parsedEnv.error).fieldErrors)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join('\n')}
  `,
    );
  }

  return parsedEnv.data ?? {};
};

export const env = createEnv();
