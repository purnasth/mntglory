# MntGlory — Server

Backend API built with **NestJS**, **TypeScript**, **Prisma**, and **PostgreSQL**.

---

## Tech Stack

| Tool       | Purpose           |
| ---------- | ----------------- |
| NestJS 11  | Backend framework |
| TypeScript | Language          |
| Prisma 6   | ORM / DB toolkit  |
| PostgreSQL | Database          |
| ESLint 9   | Linting           |
| Prettier   | Code formatting   |
| pnpm       | Package manager   |

---

## Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9
- **PostgreSQL** running locally (or a remote connection string)

---

## Getting Started

### 1. Install dependencies

From the **root** of the monorepo:

```bash
pnpm install
```

Or from the `server/` directory:

```bash
cd server
pnpm install
```

### 2. Configure environment variables

Copy the example env file and fill in your PostgreSQL credentials:

```bash
cp .env.example .env
```

Edit `.env` with your actual database credentials:

```env
# Database
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/mntglory?schema=public"

# App
PORT=3000
CLIENT_URL="http://localhost:5173"
```

### 3. Create the PostgreSQL database

```bash
# Log into PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE mntglory;

# (Optional) Create a dedicated user
CREATE USER mntglory_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE mntglory TO mntglory_user;

# Exit
\q
```

Then update `DATABASE_URL` in `.env` accordingly:

```
DATABASE_URL="postgresql://mntglory_user:your_password@localhost:5432/mntglory?schema=public"
```

### 4. Generate Prisma Client

```bash
pnpm prisma:generate
```

### 5. Run database migrations

After adding models to `prisma/schema.prisma`:

```bash
pnpm prisma:migrate
```

### 6. Start the development server

```bash
pnpm run dev
```

The server will start on `http://localhost:3000` with hot-reload enabled.

---

## Available Scripts

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `pnpm run dev`         | Start dev server with watch mode (hot-reload) |
| `pnpm run build`       | Compile the project to `dist/`                |
| `pnpm run start`       | Start the compiled server                     |
| `pnpm run start:debug` | Start dev server with debug mode              |
| `pnpm run start:prod`  | Start production server from `dist/`          |
| `pnpm run lint`        | Run ESLint                                    |
| `pnpm run format`      | Format code with Prettier                     |
| `pnpm prisma:generate` | Generate Prisma Client from schema            |
| `pnpm prisma:migrate`  | Run Prisma migrations                         |
| `pnpm prisma:studio`   | Open Prisma Studio (visual DB editor)         |

---

## Monorepo Commands (from root)

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `pnpm run dev`        | Start both app and server       |
| `pnpm run dev:server` | Start only the server           |
| `pnpm run dev:app`    | Start only the frontend         |
| `pnpm run build`      | Build both app and server       |
| `pnpm install`        | Install deps for all workspaces |

---

## Project Structure

```
server/
├── prisma/
│   └── schema.prisma       # Database schema & models
├── src/
│   ├── main.ts              # App entry point & bootstrap
│   ├── app.module.ts        # Root module
│   ├── app.controller.ts    # Root controller (health check)
│   ├── app.service.ts       # Root service
│   └── prisma/
│       ├── prisma.module.ts # Global Prisma module
│       └── prisma.service.ts# Prisma client service
├── .env                     # Environment variables (git-ignored)
├── .env.example             # Env template
├── .prettierrc              # Prettier config
├── eslint.config.mjs        # ESLint config (flat config)
├── nest-cli.json            # NestJS CLI config
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## API

All routes are prefixed with `/api`.

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| GET    | `/api`   | Health check / status |

**Response:**

```json
{ "status": "ok", "message": "MntGlory API is running" }
```

---

## Adding New Features

1. **Generate a module** (e.g., `events`):

   ```bash
   npx nest g module events
   npx nest g controller events
   npx nest g service events
   ```

2. **Add a Prisma model** in `prisma/schema.prisma`:

   ```prisma
   model Event {
     id          Int      @id @default(autoincrement())
     title       String
     description String?
     date        DateTime
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
   }
   ```

3. **Run migration:**

   ```bash
   pnpm prisma:migrate
   ```

4. **Inject `PrismaService`** in your service — it's globally available:

   ```ts
   import { Injectable } from '@nestjs/common';
   import { PrismaService } from '../prisma/prisma.service';

   @Injectable()
   export class EventsService {
     constructor(private prisma: PrismaService) {}

     findAll() {
       return this.prisma.event.findMany();
     }
   }
   ```

---

## CORS

CORS is enabled by default for the frontend at `http://localhost:5173`. Configure via the `CLIENT_URL` env variable.

---

## Validation

Global `ValidationPipe` is enabled with:

- **`whitelist: true`** — strips unknown properties from request bodies
- **`transform: true`** — auto-transforms payloads to DTO class instances

Use `class-validator` decorators on your DTOs:

```ts
import { IsString, IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
```
