import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

// export default authMiddleware({
//   publicRoutes: ["/"], // Add the root route to publicRoutes
//   ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"], // Add root route to ignoredRoutes
// });
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
