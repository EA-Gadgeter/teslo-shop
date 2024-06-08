import { redirect } from "next/navigation";

import { authSession } from "@/auth.config";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await authSession();

  if (session?.user) {
    return redirect("/");
  }

  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">{children}</div>
    </main>
  );
}
