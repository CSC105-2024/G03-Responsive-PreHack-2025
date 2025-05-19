import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { 
    CalendarIcon,
    ChevronsUpDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar.jsx"
import {useState} from "react";

const  FindDoctor = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Let’s Find Your Doctor</CardTitle>
                <CardDescription>Just a few steps to connect with the doctor that’s right for you.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-rows-1 gap-3 lg:grid-cols-3">
                    {/*sysptoms*/}
                    <Select>
                        <SelectTrigger className="w-[250px]">
                            <SelectValue placeholder="Select your symptoms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    {/*time*/}
                    <Select>
                        <SelectTrigger className="w-[250px]">
                            <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    {/*calender*/}
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[250px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                    setDate(selectedDate)
                                    setOpen(false)
                                }}
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    
                </div>
            </CardContent>
            <CardFooter>
                <div className="space-x-2 w-full flex justify-end ">
                    <Button>Search</Button>
                    <Button variant={'outline'}>Clear</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
export default FindDoctor;