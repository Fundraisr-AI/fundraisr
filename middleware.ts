import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
const { auth } = NextAuth(authConfig);

function determinePublicRoute(path: string): boolean {
  return publicRoutes.some((route: any) => {
    if (typeof route === "string") {
      return route === path;
    }
    if (typeof route === "object" && route.dynamic) {
      return route.pattern.test(path);
    }
    return false;
  });
}

export default auth(async (req: any): Promise<any> => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicRoute: any = determinePublicRoute(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const apiKey = req.headers["x-api-key"] || req.headers.get("x-api-key");
  // Logger.setGlobalVariables(req);
  if (apiKey) {
    return null; // Skip further checks and allow access
  }

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    const redirectUrl = new URL("/signin", nextUrl);
    redirectUrl.searchParams.set("callbackUrl", encodeURI(req.url));

    return Response.redirect(redirectUrl);
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
