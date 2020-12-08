import type { ProxyHandler } from 'aws-lambda';

export const proxyHandler: ProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event, context }),
  };
};
