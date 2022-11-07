# Products REST API

## Description

Simple REST API.

## Techstack

- `express`
- `typescript`
- `mongodb`
- `mongoose`

## Table of contents

## Prerequisities

- `node` installed

## Usage

Clone repository

```
git clone https://github.com/wojciechszmelczerczyk/ts-express-products-api.git
```

Navigate to folder

```
cd /ts-express-products-api
```

Install dependencies

```
npm i
```

Run REST API

```
npm run dev
```

## API

| Method |                 Endpoint                 |
| :----: | :--------------------------------------: |
|  GET   |     [`/api/prodcuts`](./docs/get.md)     |
|  GET   | [`/api/products/:id`](./docs/getById.md) |
|  POST  |    [`/api/products`](./docs/post.md)     |
|  PUT   |   [`/api/products/:id`](./docs/put.md)   |
| DELETE | [`/api/products/:id`](./docs/delete.md)  |
