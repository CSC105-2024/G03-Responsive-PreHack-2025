import { ScrollArea } from "@/components/ui/scroll-area"
import { DetailBook } from "@/components/card"
import {usePost} from "@/contexts/post-context.jsx";


const ListBook = () => {
    const { post } = usePost();
    return (
        <ScrollArea className="h-80 w-full rounded-md">
            <div className="p-4 space-y-6">
                {post?.data?.data.map((p) => (
                    <DetailBook 
                        key={p.id}
                        doctor={p.doctor?.username}
                        sym={p.department}
                        date={p.post_date}
                    />
                ))}
            </div>
        </ScrollArea>
    )
}
export default ListBook;
