'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyHandler = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const proxyHandler = async (event, context) => {
    const { httpMethod, path } = event;
    if (httpMethod === 'GET' && path === '/now') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/plain',
            },
            body: String(dayjs_1.default()),
        };
    }
    if (httpMethod === 'GET' && path === '/print') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ event, context }),
        };
    }
    return {
        statusCode: 403,
        body: 'Execute access forbidden',
    };
};
exports.proxyHandler = proxyHandler;
