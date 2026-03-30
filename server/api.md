# MntGlory — API Documentation

Base URL: `http://localhost:3000/api`

All requests/responses use `Content-Type: application/json`.

---

## Health Check

### `GET /api`

Returns server status.

**Response** `200`

```json
{
  "status": "ok",
  "message": "MntGlory API is running"
}
```

---

## Authentication

### `POST /api/auth/signup`

Create a new user account.

**Request Body**

| Field      | Type   | Required | Rules       |
| ---------- | ------ | -------- | ----------- |
| `name`     | string | Yes      |             |
| `email`    | string | Yes      | Valid email |
| `password` | string | Yes      | Min 6 chars |

**Example Request**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

**Response** `201`

```json
{
  "message": "Account created successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Error Responses**

| Status | Message                  | When                    |
| ------ | ------------------------ | ----------------------- |
| `400`  | Validation errors        | Invalid/missing fields  |
| `409`  | Email already registered | Email is already in use |

---

### `POST /api/auth/login`

Authenticate an existing user.

**Request Body**

| Field      | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

**Example Request**

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

**Response** `201`

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Error Responses**

| Status | Message             | When                          |
| ------ | ------------------- | ----------------------------- |
| `400`  | Validation errors   | Invalid/missing fields        |
| `401`  | Invalid credentials | Wrong email or wrong password |

---

## Authentication Header

For protected endpoints, include the JWT token in the `Authorization` header:

```
Authorization: Bearer <accessToken>
```

The token expires in **7 days**.
