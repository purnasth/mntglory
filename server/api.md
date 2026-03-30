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

---

## Gallery

### `GET /api/gallery`

Retrieve all gallery images. Optionally filter by category using a query parameter.

**Query Parameters**

| Param      | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| `category` | string | No       | Filter images by exact category name |

**Example Requests**

```
GET /api/gallery
GET /api/gallery?category=Education
GET /api/gallery?category=Sport
```

**Response** `200`

```json
[
  {
    "id": 1,
    "url": "https://example.com/images/gallery/photo.webp",
    "alt": "Art Competition",
    "category": "Education",
    "createdAt": "2026-03-31T12:00:00.000Z"
  },
  {
    "id": 2,
    "url": "https://example.com/images/gallery/event.webp",
    "alt": "Parents Day",
    "category": "Events",
    "createdAt": "2026-03-31T11:00:00.000Z"
  }
]
```

Returns an empty array `[]` if no images match the filter.

---

### `POST /api/gallery`

Upload a new image to the gallery. **Requires authentication** (JWT via httpOnly cookie or Bearer token).

**Request Headers**

```
Content-Type: multipart/form-data
Cookie: accessToken=<jwt>
```

_or_

```
Content-Type: multipart/form-data
Authorization: Bearer <accessToken>
```

**Form Data Fields**

| Field      | Type   | Required | Description                              |
| ---------- | ------ | -------- | ---------------------------------------- |
| `image`    | file   | Yes      | Image file (PNG, JPG, WEBP). Max 5 MB    |
| `alt`      | string | Yes      | Alt text describing the image            |
| `category` | string | Yes      | Category (e.g. Education, Events, Sport) |

**Example Request (cURL)**

```bash
curl -X POST http://localhost:3000/api/gallery \
  -H "Cookie: accessToken=<jwt>" \
  -F "image=@/path/to/photo.webp" \
  -F "alt=Annual Sports Day" \
  -F "category=Sport"
```

**Response** `201`

```json
{
  "id": 3,
  "url": "/uploads/gallery/1711900200000-123456789.webp",
  "alt": "Annual Sports Day",
  "category": "Sport",
  "createdAt": "2026-03-31T14:30:00.000Z"
}
```

The `url` field is a server-relative path. Access the image at `<server-base>/<url>`.

**Error Responses**

| Status | Message           | When                          |
| ------ | ----------------- | ----------------------------- |
| `400`  | Validation errors | Invalid/missing fields        |
| `401`  | Unauthorized      | Missing or invalid auth token |
