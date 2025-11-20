import Fastify from 'fastify';
const fastify = Fastify({ logger: true });
fastify.register(require('@fastify/cors'), { origin: true });

fastify.get('/health', async () => ({ ok: true }));

// placeholder route files will be created later
fastify.listen({ port: 3000, host: '0.0.0.0' })
  .then(() => console.log('backend listening on 3000'))
  .catch(err => { console.error(err); process.exit(1); });
