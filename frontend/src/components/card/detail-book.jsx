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

const DetailBook = () => {
    return (
        <Card>
            <CardHeader>
                <CardDescription>12.00 - 13.00 AM</CardDescription>
                <CardTitle className="text-2xl">Gastroenterologists</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className="flex items-center space-x-2">
                        <CircleUserRound />
                        <p>Dr.SomeThing</p>
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