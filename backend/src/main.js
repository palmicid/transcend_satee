import Fastify from 'fastify';
import cors from '@fastify/cors';
import metricsPlugin from 'fastify-metrics';
import fs from 'fs';
import pino from 'pino';

// === Create log stream for Logstash ===
const logDir = '/var/log/app';
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
const logStream = fs.createWriteStream(`${logDir}/app.log`, { flags: 'a' });
const logger = pino({}, logStream);

// === Init Fastify ===
const fastify = Fastify({ logger });

// === Register Plugins ===
await fastify.register(cors, { origin: true });
await fastify.register(metricsPlugin, { endpoint: '/metrics' });

// === Routes ===
fastify.get('/health', async () => ({ ok: true }));
fastify.get('/ping', async () => ({ pong: 'it works!' }));

// === Start Server ===
fastify.listen({ port: 3000, host: '0.0.0.0' })
  .then(() => console.log('Backend listening on port 3000'))
  .catch(err => { console.error(err); process.exit(1); });
