import { serve } from '@hono/node-server';
import { Hono } from 'hono';
const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});

app.get('/test', c => {
  return c.json({
    code: 200,
    status: 'success',
    data: {
      message: 'test',
    },
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
