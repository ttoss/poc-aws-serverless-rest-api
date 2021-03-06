# POC - AWS Serverless REST API

This project was created to demonstrate how to create a REST API using AWS SAM and deploying using [**carlin**](https://carlin.ttoss.dev).

## Creating the API

1. Install:

```
yarn
```

2. Create the [base stack](https://calin.ttoss.dev/docs/Commands/deploy%20base-stack):

```
yarn run create-base-stack
```

3. Deploy:

```
yarn run deploy
```

4. If you want to destroy the stack:

```
yarn run deploy --destroy
```

## API

- **URL**: https://fidkqfgzpb.execute-api.us-east-1.amazonaws.com/v1

This example has three endpoints:

- **GET /print**: return `{ event, context }` in which `event` and `context` are Lambda arguments.
- **GET /now/dayjs**: return the current date returned by Day.js.
- **GET /now/moment**: return the current date returned by Moment.js.

## Carlin

An overview of the [deploy algorithm](https://carlin.ttoss.dev/docs/Commands/deploy#overview):

1. `src/lambda.ts` is bundled in a single file by Webpack and zipped.
2. The zip file is uploaded to a S3 bucket created by base stack.
3. Deploy `src/cloudformation.yml`. **carlin** pass the S3 bucket parameters to template automatically.

## Results

Moment.js was chosen because its size. The bundled file has **690 kB** and, the zipped file, **116.3 kB**.

It took about **79 seconds** the whole deployment process.

![carlin deploy command](/images/sc.png)

## Adding Lambda Layers

You may want to use [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to ignore some packages when Webpack are going to bundle the Lambda code. To do so, [**carlin** provides the command `carlin deploy lambda-layer`](https://carlin.ttoss.dev/docs/commands/deploy-lambda-layer) that automates the layers deployment. At the end, it returns the ARN and some exported name for each layer that can be added to the CloudFormation template:

```yaml
Layers:
  - !ImportValue CarlinLambdaLayerDayjs1dot9dot7
  - !ImportValue CarlinLambdaLayerMoment2dot29dot1
```

Now, the bundled file has **4.9 kB** and, the zipped file, **1.5 kB**.
