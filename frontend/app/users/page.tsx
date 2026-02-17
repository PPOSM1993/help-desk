import UsersTable from "./components/UsersTable";
import { getUsers } from "./services/users.server";

export default async function UsersPage() {

    const users = await getUsers()

    return (
        <>
            <div className="space-y-6">
                {/* HEADER */}
                <div>
                    <h1 className="text-2xl font-semibold">Usarios</h1>
                    <p className="text-sm text-muted-foreground py-4">
                        Gestion y seguimiento de usuarios
                    </p>
                </div>
                {/* DATA TABLE: SIEMPRE */}
                <UsersTable users={users} />
            </div>
        </>
    )
}