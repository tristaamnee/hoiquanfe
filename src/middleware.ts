import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/rounting";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vie|en|chi)/:path*"],
};
