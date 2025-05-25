import { FindDoctor } from "@/components/card";
import { ListBook } from "@/components/list";
import { CreateBook} from "@/components/popup"
import { PostProvider } from "@/contexts/post-context.jsx";
import { useAuth } from "@/contexts/auth-context.jsx";
import { usePost } from "@/contexts/post-context.jsx";
import { DetailDoctor } from "@/components/card"

const DashboardMo = () => {
    const { user } = useAuth()
    const doctorRole = user[0]?.role === "DOCTOR"
    return (
        <PostProvider>
            <section className="md:min-w-2xl max-w-sm">
                {doctorRole ? (
                    <DetailDoctor />
                ) : (
                    <FindDoctor />
                )}
                <div className="mt-16">
                    {doctorRole && (
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl">Doctor's Schedule</h1>
                            <CreateBook />
                        </div>
                    )}
                    <ListBook role={doctorRole}/>
                </div>
            </section>
        </PostProvider>
    )
}

export default DashboardMo;