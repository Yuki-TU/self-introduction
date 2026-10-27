import path from 'path';

const buildEslintCommand = (filenames) => {
  return `eslint --fix ${filenames
    .filter((f) => f.includes('/src/'))
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;
};

const config = {
  '*.{ts,tsx}': [buildEslintCommand, "bash -c 'yarn typecheck'"],
};

export default config;
