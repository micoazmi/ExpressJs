# Example Postman Requests

## Register User

Endpoint: POST http://localhost:3000/auth/register

Description: Registers a new user with the provided details.

Request Body:

```
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "gender": "male"
}

```

## Login User

Endpoint: POST http://localhost:3000/auth/login

Description: Logs in a user and returns a JWT access token.
Request Body:

```
{
  "email": "john.doe@example.com",
  "password": "password123"
}

```

Response:

```
{
  "accessToken": "your_jwt_token"
}
```

## Create Product

URL: http://localhost:3000/products

```
Method: POST
Headers:
Authorization: Bearer your_jwt_token
Content-Type: application/json
```

```
{
  "name": "New Product",
  "description": "Description for new product",
  "price": 19.99
}

```

## Get All Products

URL: http://localhost:3000/products

```
Method: GET
Headers:
Authorization: Bearer your_jwt_token
```

## Get Product by ID

URL: http://localhost:3000/products/1

```
Method: GET
Headers:
Authorization: Bearer your_jwt_token
```

## Update Product

URL: http://localhost:3000/products/1

```
Method: PUT
Headers:
Authorization: Bearer your_jwt_token
Content-Type: application/json
```

```
{
  "name": "Updated Product",
  "description": "Updated description",
  "price": 29.99
}
```

## Delete Product

URL: http://localhost:3000/products/1

```
Method: DELETE
Headers:
Authorization: Bearer your_jwt_token
```
