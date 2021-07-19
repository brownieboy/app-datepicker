import { config as baseConfig } from './wdio.config.js';
const baseCapability = {
    browserVersion: 'latest',
    'sauce:options': {
        build: new Date().toJSON(),
        screenResolution: '800x600',
        seleniumVersion: '3.141.59',
    },
    specs: ['./dist/tests/**/*.spec.js'],
    browserName: 'googlechrome',
    platformName: 'windows 10',
};
const sauceLabsUser = process.env.SAUCE_USERNAME || '';
const sauceLabsAccessKey = process.env.SAUCE_ACCESS_KEY || '';
export const config = {
    ...baseConfig,
    services: ['sauce'],
    specs: [],
    region: 'us',
    user: sauceLabsUser,
    key: sauceLabsAccessKey,
    sauceConnect: true,
    sauceConnectOpts: {
        user: sauceLabsUser,
        accessKey: sauceLabsAccessKey,
    },
    capabilities: [
        {
            ...baseCapability,
            browserName: 'safari',
            platformName: 'macos 10.13',
            'sauce:options': {
                ...baseCapability['sauce:options'],
                screenResolution: '1024x768',
            },
        },
        {
            ...baseCapability,
            browserName: 'microsoftedge',
            browserVersion: '18',
        },
    ],
};
