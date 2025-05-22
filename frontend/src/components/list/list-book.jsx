import { ScrollArea } from "@/components/ui/scroll-area"
import { DetailBook } from "@/components/card"


const ListBook = (Available) => {
    return (
        <ScrollArea className="h-80 w-full rounded-md">
            <div className="p-4 space-y-6">
                <DetailBook Available={Available} />
                <DetailBook Available={Available} />
                <DetailBook Available={Available} />
                <DetailBook Available={Available} />
                <DetailBook Available={Available} />
            </div>
        </ScrollArea>
    )
}
export default ListBook;
