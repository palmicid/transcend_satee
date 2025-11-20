# Architecture overview
- frontend: Vite + TS SPA
- backend: Fastify + SQLite (schema in backend/src/db/schema.sql)
- docker-compose orchestrates frontend + backend

# Quick setup
How to run frontend locally: cd frontend && npm run dev

How to run backend locally: cd backend && node src/main.js

Docker quick test: docker compose up --build
