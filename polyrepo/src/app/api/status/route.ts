// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const headersList = headers();
  const host = headersList.get('host');
  try {
    return new Response(JSON.stringify({ services: 'online', host }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ services: 'offline', host }), {
      status: 500,
    });
  }
}
