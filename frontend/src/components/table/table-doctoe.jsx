import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {EllipsisVertical} from "lucide-react";

const TableDoctor = ({ post, deletePostUser }) => {
    console.log(post)
    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableCaption>A list of your recent schedule.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">Time</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Created Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {post?.map((p) => {
                            const time = `${p.start_time} - ${p.end_time}`;
                            const status = p?.confirm ? 'Booked' : 'Not Booked';
                            return (
                                <TableRow
                                    key={p.id}
                                >
                                    <TableCell className="font-medium">{time}</TableCell>
                                    <TableCell>{formatDate(p?.post_date)}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={`${p?.confirm ? 'confirm' : 'unConfirm'}`}
                                        >
                                            {status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{formatDate(p?.created_at)}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <EllipsisVertical size={32} />
                                                    <span className="sr-only">Toggle user menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => {
                                                    deletePostUser({id: p.id})
                                                }}>
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default TableDoctor;