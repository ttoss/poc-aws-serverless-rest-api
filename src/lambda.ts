import type { ProxyHandler } from 'aws-lambda';
import dayjs from 'dayjs';

export const proxyHandler: ProxyHandler = async (event, context) => {
  const { httpMethod, path } = event;

  if (httpMethod === 'GET' && path === '/now') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: String(dayjs()),
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
