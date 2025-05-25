import { ScrollArea } from "@/components/ui/scroll-area";
import { DetailBook } from "@/components/card";
import { usePost } from "@/contexts/post-context.jsx";
import { TableDoctor } from "@/components/table";

const ListBook = () => {
  const { post, deletePostUser } = usePost();
  console.log(post);
  return (
    <div>
      <TableDoctor post={post} deletePostUser={deletePostUser} />
    </div>
  );
};

export default ListBook;
