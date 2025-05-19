import { ScrollArea } from "@/components/ui/scroll-area"
import { DetailBook } from "@/components/card"


const ListBook = () => {
    return (
        <ScrollArea className="h-72 min-2xl: rounded-md">
            <div className="p-4 space-y-6">
                <DetailBook />
                <DetailBook />
                <DetailBook />
            </div>
        </ScrollArea>
    )
}
export default ListBook;
