import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { EllipsisVertical } from "lucide-react";
import { useConfirm } from "@/contexts/confirm-context.jsx";

const DetailBook = ({ sym, doctor, date, status, id }) => {
    const { createConfirm } = useConfirm();
    return (
        <Card>
            <CardContent className="grid md:grid-cols-2 items-center gap-4">
                <div>
                    <CardDescription className="mb-2">{date}</CardDescription>
                    <CardTitle className="text-2xl mb-2">{sym}</CardTitle>
                    <div className="flex items-center space-x-2">
                        <CircleUserRound />
                        <p>{doctor}</p>
                    </div>
                </div>
                
                <div className="flex justify-end items-center h-full">
                    {status ? (
                        <Button onClick={() => {
                            createConfirm({postId: id});
                        }}>Book</Button>
                    ) : (
                        <Badge variant={`${!status ? 'confirm' : 'unConfirm'}`}>Booked</Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default DetailBook;
