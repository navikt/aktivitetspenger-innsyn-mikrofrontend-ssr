import node from '@astrojs/node';
import react from '@astrojs/react';
import { defineConfig, envField } from 'astro/config';
import prefixer from 'postcss-prefix-selector';

// https://astro.build/config
export default defineConfig({
    build: {
        assetsPrefix: 'https://cdn.nav.no/dusseldorf/aktivitetspenger-innsyn-mikrofrontend-ssr',
        inlineStylesheets: 'always',
    },
    vite: {
        css: {
            postcss: {
                plugins: [
                    prefixer({
                        prefix: '.aktivitetspenger-innsyn-mikrofrontend-ssr',
                        ignoreFiles: [/module.css/],
                    }),
                ],
            },
        },
    },
    integrations: [react()],
    i18n: {
        defaultLocale: 'nb',
        locales: ['nb', 'nn', 'en'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    env: {
        schema: {
            AKTIVITETSPENGER_INNSYN_URL: envField.string({
                context: 'server',
                access: 'secret',
                default: '#',
            }),
        },
    },
});
