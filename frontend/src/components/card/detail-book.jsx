import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleUserRound } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";

const DetailBook = ({doctor, sym, date}) => {
    return (
        <Card>
            <CardHeader>
                <CardDescription>{date}</CardDescription>
                <CardTitle className="text-2xl">{sym}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className="flex items-center space-x-2">
                        <CircleUserRound />
                        <p>{doctor}</p>
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Book</Button>
            </CardFooter>
        </Card>
    )
}
export default DetailBook