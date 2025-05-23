import { ScrollArea } from "@/components/ui/scroll-area"
import { DetailBook } from "@/components/card"
import { usePost } from "@/contexts/post-context.jsx";

const ListBook = () => {
    const { post } =  usePost();
    return (
        <ScrollArea className="h-80 w-full rounded-md">
            <div className="p-4 space-y-6">
                {post?.map((p) => {
                    const time = `${p.start_time} - ${p.end_time}`;
                    return (
                        <DetailBook
                            key={p.id}
                            sym={p.doctor?.department}
                            date={time}
                            doctor={p.doctor?.username}
                        />
                    )
                })}
            </div>
        </ScrollArea>
    )
}
export default ListBook;
