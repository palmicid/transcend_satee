import Fastify from 'fastify';
import cors from '@fastify/cors'; // 1. Import the plugin here

const fastify = Fastify({ logger: true });

// 2. Register the imported variable
await fastify.register(cors, { origin: true });

fastify.get('/health', async () => ({ ok: true }));

fastify.listen({ port: 3000, host: '0.0.0.0' })
  .then(() => console.log('backend listening on 3000'))
  .catch(err => { console.error(err); process.exit(1); });
