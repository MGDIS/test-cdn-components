import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-cdn-components',
  buildEs5: true,
  extras: {
    cssVarsShim: true,
    shadowDomShim: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
