import { ScrollArea } from "@/components/ui/scroll-area";
import { DetailBookDocter } from "@/components/card";

const ListDocter = () => {
  return (
    <ScrollArea className="h-72 min-2xl: rounded-md">
      <div className="p-4 space-y-6">
        <DetailBookDocter />
        <DetailBookDocter />
        <DetailBookDocter />
      </div>
    </ScrollArea>
  );
};
export default ListDocter;