# ReputeX SDK
---

**Features**:

- Create, Update and Get ReputeX Score
- Create and Get ReputeX Score using did
- Fully **Typescript** ready out-of-the box

# 🚀 Quick start

If you're new to ReputeX, check the [quickstart guide in the official docs](https://docs.reputex.io/) on how to get started.

If you're already familiar with ReputeX and have your server set up. Then follow along to connect your SDK:

## 1. Install ReputeX

The easiest way to integrate the ReputeX SDK into your JavaScript project is through the npm module.

Install the package via `npm`:

```shell
npm install @reputex/sdk
```

or `yarn`:

```shell
yarn add @reputex/sdk
```

Import ReputeX:

```js
import ReputeXSdk from "@reputex/sdk";
```

## 2. Initialize ReputeX

After your dependency is added, you simply need to initialize ReputeXSdk:

> **⚠️ Warning**: Make sure to keep your api key and secret private

```javascript
const reputexSdk = new ReputeX(
  "31e4a631-be27-4d0a-86f0-f22abbc6f88e",
  "65a31dba29639e719988c8d427357cf84b5215fb63a37fdbd74ca92cd0edf857"
);
```

After that you can call and use reputexSdk functionalities as described in our [extensive docs](https://docs.reputex.io/)
