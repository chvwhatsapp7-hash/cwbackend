import { NextResponse } from 'next/server';

export function middleware(request) {
  const origin = request.headers.get('origin');
  const allowedOrigin = 'http://localhost:3001';


  if (request.method === 'OPTIONS') {
    if (origin === allowedOrigin) {
      const preflightResponse = new NextResponse(null, { status: 204 });
      preflightResponse.headers.set('Access-Control-Allow-Origin', allowedOrigin);
      preflightResponse.headers.set('Access-Control-Allow-Credentials', 'true');
      preflightResponse.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
      );
      preflightResponse.headers.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      );

      preflightResponse.headers.set('Vary', 'Origin');
      return preflightResponse;
    }


    return new NextResponse(null, { status: 204 });
  }

  
  const response = NextResponse.next();

  if (origin === allowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    response.headers.set('Vary', 'Origin');
  }

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
