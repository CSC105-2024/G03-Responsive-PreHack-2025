import { FindDoctor } from "@/components/card";
import { ListBook } from "@/components/list";
import { CreateBook} from "@/components/popup"
import { PostProvider } from "@/contexts/post-context.jsx";

const DashboardMo = () => {
    return (
        <PostProvider>
            <section>
                <FindDoctor />
                <div className="mt-16">
                    <div className="flex justify-between items-center">
                        <h1>Available Doctors </h1>
                        <CreateBook />
                    </div>
                    <ListBook />
                </div>
            </section>
        </PostProvider>
    )
}

export default DashboardMo;