import { auth } from "../lib/auth";
import { headers } from "next/headers";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const headersList = await headers();
  const cookieHeader = headersList.get("cookie") || "";

  const session = await auth.api.getSession({
    headers: { cookie: cookieHeader },
  });

  return <NavbarClient session={session} />;
}
