# Products REST API

## Description

Simple REST API.

## Techstack

- `express`
- `typescript`
- `mongodb`
- `mongoose`

## Table of contents

- [Prerequisities](#prerequisities)
- [Usage](#usage)
- [Postman collection](#postman-collection)
- [Architecture](#architecture)
- [API](#api)

## Prerequisities

- `node` installed
- http client

## Usage

### Clone repository

```
git clone https://github.com/wojciechszmelczerczyk/ts-express-products-api.git
```

### Navigate to folder

```
cd /ts-express-products-api
```

### Install dependencies

```
npm i
```

### Env

Create `.env` file in project root directory.

```dockerfile
# Some port number
PORT=

# MongoDB uri
DB_URI=
```

Run REST API

```
npm run dev
```

## Postman collection

You can import provided [postman collection](./ts-express-products-api.postman_collection.json) to test api.

## Architecture

### Introduction

Library used to develop app architecture [routing-controllers](https://github.com/typestack/routing-controllers). REST API using `Controller`, `Service` and `Repository` approach.

GET `/api/products`

User send request to the server, server query database and find all products.

<details>

<summary>Example</summary>
<img src="./.github/img/arch-get.png">

</details>
<br/>

## API

| Method |                 Endpoint                 |
| :----: | :--------------------------------------: |
|  GET   |     [`/api/products`](./docs/get.md)     |
|  GET   | [`/api/products/:id`](./docs/getById.md) |
|  POST  |    [`/api/products`](./docs/post.md)     |
|  PUT   |   [`/api/products/:id`](./docs/put.md)   |
| DELETE | [`/api/products/:id`](./docs/delete.md)  |
