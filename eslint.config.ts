import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import prettierConfig from 'eslint-config-prettier'
import reactCompilerConfig from 'eslint-plugin-react-compiler'
// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactCompilerConfig.configs['recommended'],
  reactHooks.configs['recommended-latest'],
  storybook.configs['flat/recommended'],
  prettierConfig
)
