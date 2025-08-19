import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";


export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    const token = request.cookies.get("propnex_admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    if (token) {
      const {payload} = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET as string)
      );


      if (payload.role !== "PROPXNEX_ADMIN") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
