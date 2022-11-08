# Get product by id

## Description

<b>URL :</b> `/api/products/:id`

<b>URL parameter:</b> `id=[string]` where `id` is mongoose object id syntax.

<b>Method:</b> `GET`

## Success Response

Code: `200 OK`

Condition: If product with provided correctly id exists.

### Context example

```json
{
  "__v": 0,
  "_id": "6369523318c90dd1e14fd8b0",
  "createdAt": "2022-11-07T18:45:07.229Z",
  "name": "ball",
  "price": 5,
  "updatedAt": "2022-11-07T18:45:07.229Z"
}
```

## Error Response

Code: `400 BAD REQUEST`

Condition: If provided id has incorrect type.

```json
{ "id": "Provided id is incorrect" }
```

Code: `400 BAD REQUEST`

Condition: If product with provided id doesn't exist.

```json
{ "id": "Product with provided id doesn't exist" }
```
