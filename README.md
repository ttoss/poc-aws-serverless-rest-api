# POC - AWS Serverless REST API

This project was created to demonstrate how to create a REST API using AWS SAM and deploying using [**carlin**](https://carlin.ttoss.dev).

## API

- **URL**: https://8px4obm3g5.execute-api.us-east-1.amazonaws.com/v1

This example has three endpoints:

- **GET /print**: return `{ event, context }` in which `event` and `context` are Lambda arguments.
- **GET /now/dayjs**: return the current date returned by Day.js.
- **GET /now/moment**: return the current date returned by Moment.js.

## Carlin

At the moment of this README is being written, **carlin** documentation isn't finished. An overview of the algorithm deployment:

1. `./src/lambda.ts` is bundled in a single file by Rollup.js and zip it.
2. Upload the zip file to a S3 bucket used by **carlin**.
3. Deploy `./src/cloudformation.yml`. **carlin** inputs the S3 bucket parameters to template automatically.

## Results

Moment.js was chosen because its size. The bundled file has **181,6 kB** and, the zipped file, **39,9 kB**.

It took about **45 seconds** the whole deployment process.

![carlin deploy command](/images/sc.png)
