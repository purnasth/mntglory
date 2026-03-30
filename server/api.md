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

Retrieve gallery images with cursor-based pagination. Optionally filter by category.

**Query Parameters**

| Param      | Type   | Required | Default | Description                                                                                               |
| ---------- | ------ | -------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `category` | string | No       | —       | Filter by category (`Arts`, `Science`, `Programs`, `Sports`, `Music`, `Educational`, `Cultural`, `Other`) |
| `cursor`   | number | No       | —       | ID of the last item from the previous page (for pagination)                                               |
| `limit`    | number | No       | `12`    | Number of items per page                                                                                  |

**Example Requests**

```
GET /api/gallery
GET /api/gallery?category=Sports
GET /api/gallery?limit=6
GET /api/gallery?category=Arts&cursor=25&limit=12
```

**Response** `200`

```json
{
  "data": [
    {
      "id": 30,
      "url": "/uploads/gallery/1711900200000-123456789.webp",
      "alt": "Art Competition",
      "category": "Arts",
      "createdAt": "2026-03-31T12:00:00.000Z"
    },
    {
      "id": 29,
      "url": "/uploads/gallery/1711900100000-987654321.webp",
      "alt": "Parents Day",
      "category": "Cultural",
      "createdAt": "2026-03-31T11:00:00.000Z"
    }
  ],
  "nextCursor": 18
}
```

- `data` — Array of gallery images (ordered by newest first).
- `nextCursor` — ID to pass as `?cursor=` for the next page. `null` when there are no more items.

Returns `{ "data": [], "nextCursor": null }` if no images match.

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

| Field      | Type   | Required | Description                                                                                  |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------------- |
| `image`    | file   | Yes      | Image file (PNG, JPG, WEBP). Max 10 MB raw (auto-compressed to WebP)                         |
| `alt`      | string | Yes      | Alt text describing the image                                                                |
| `category` | string | Yes      | One of: `Arts`, `Science`, `Programs`, `Sports`, `Music`, `Educational`, `Cultural`, `Other` |

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

---

## Notice

### `GET /api/notice`

Retrieve all notices. Optionally filter by category.

**Query Parameters**

| Param      | Type   | Required | Default | Description                                                                 |
| ---------- | ------ | -------- | ------- | --------------------------------------------------------------------------- |
| `category` | string | No       | —       | Filter by category (`Events`, `Announcements`, `Exam`, `Holiday`, `Others`) |

**Example Requests**

```
GET /api/notice
GET /api/notice?category=Exam
```

**Response** `200`

```json
[
  {
    "id": 1,
    "title": "Annual Exam Schedule",
    "content": "The annual examinations will begin from April 15...",
    "category": "Exam",
    "date": "2026-03-31T00:00:00.000Z",
    "createdAt": "2026-03-31T14:00:00.000Z"
  }
]
```

Returns an empty array `[]` if no notices match.

---

### `POST /api/notice`

Create a new notice. **Requires authentication** (JWT via httpOnly cookie or Bearer token).

**Request Headers**

```
Content-Type: application/json
Cookie: accessToken=<jwt>
```

_or_

```
Content-Type: application/json
Authorization: Bearer <accessToken>
```

**Request Body**

| Field      | Type   | Required | Description                                                    |
| ---------- | ------ | -------- | -------------------------------------------------------------- |
| `title`    | string | Yes      | Title of the notice                                            |
| `content`  | string | Yes      | Full content/body of the notice                                |
| `category` | string | Yes      | One of: `Events`, `Announcements`, `Exam`, `Holiday`, `Others` |
| `date`     | string | No       | ISO date string (defaults to current date if omitted)          |

**Example Request**

```json
{
  "title": "Annual Exam Schedule",
  "content": "The annual examinations will begin from April 15 and end on April 30.",
  "category": "Exam",
  "date": "2026-04-01"
}
```

**Response** `201`

```json
{
  "id": 1,
  "title": "Annual Exam Schedule",
  "content": "The annual examinations will begin from April 15 and end on April 30.",
  "category": "Exam",
  "date": "2026-04-01T00:00:00.000Z",
  "createdAt": "2026-03-31T14:30:00.000Z"
}
```

**Error Responses**

| Status | Message           | When                          |
| ------ | ----------------- | ----------------------------- |
| `400`  | Validation errors | Invalid/missing fields        |
| `401`  | Unauthorized      | Missing or invalid auth token |
