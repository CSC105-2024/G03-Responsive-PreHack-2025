import { FindDoctor } from "@/components/card";
import { ListBook } from "@/components/list";
import { CreateBook} from "@/components/popup"
import { PostProvider } from "@/contexts/post-context.jsx";
import { useAuth } from "@/contexts/auth-context.jsx";

const DashboardMo = () => {
    const { user } = useAuth()
    const DoctorRole = user[0].role === "DOCTOR"
    return (
        <PostProvider>
            <section>
                <FindDoctor />
                <div className="mt-16">
                    <div className="flex justify-between items-center">
                        <h1>Available Doctors </h1>
                        {DoctorRole && (
                            <CreateBook />
                        )}
                    </div>
                    <ListBook />
                </div>
            </section>
        </PostProvider>
    )
}

export default DashboardMo;