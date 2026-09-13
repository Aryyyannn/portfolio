import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  // Sirf /admin protect karo
  if (req.nextUrl.pathname !== "/admin") {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");

  if (auth) {
    const [, encoded] = auth.split(" ");
    const decoded = atob(encoded);
    const [user, pass] = decoded.split(":");

    if (
      user === process.env.ADMIN_USERNAME &&
      pass === process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Panel"',
    },
  });
}

export const config = {
  matcher: ["/admin"],
};