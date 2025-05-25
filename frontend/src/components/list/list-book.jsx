import { ScrollArea } from "@/components/ui/scroll-area";
import { DetailBook } from "@/components/card";
import { usePost } from "@/contexts/post-context.jsx";
import { TableDoctor } from "@/components/table";

const ListBook = ({ role }) => {
    const { post, deletePostUser } = usePost();
    console.log(post);
    return (
        <div>
            {!role ? (
                post?.map((p) => {
                    const time = `${p.start_time} - ${p.end_time}`;
                    return (
                        <div className="mb-3">
                            <DetailBook
                                key={p.id}
                                sym={p.doctor?.department}
                                date={time}
                                doctor={p.doctor?.username}
                            />
                        </div>
                    );
                })
            ) : (
                <TableDoctor post={post} deletePostUser={deletePostUser} />
            )}
        </div>
    );
};

export default ListBook;
