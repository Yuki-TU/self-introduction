import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'], // 画像の参照ディレクトリ
};

export default config;
