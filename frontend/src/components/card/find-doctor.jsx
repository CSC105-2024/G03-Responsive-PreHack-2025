import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar.jsx"
import {useState} from "react";

const  FindDoctor = () => {
    const [date, setDate] = useState(new Date())
    return (
        <Card>
            <CardHeader>
                <CardTitle>Let’s Find Your Doctor</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </CardContent>
            <CardFooter>
                <Button>Search</Button>
                <Button variant={'outline'}>Cancel</Button>
            </CardFooter>
        </Card>
    )
}
export default FindDoctor;