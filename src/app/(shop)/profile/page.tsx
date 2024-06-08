import { authSession } from "@/auth.config";

import { Title } from "@/components/ui";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await authSession();

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div>
      <Title title="Perfil" />

      {
        JSON.stringify(session.user, null, 2)
      }
    </div>
  );
}
