import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {usePost} from "@/contexts/post-context.jsx";
import {PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {cn} from "@/lib/utils.js";
import {Calendar} from "@/components/ui/calendar.jsx";
import {Popover} from "@radix-ui/react-popover";
import {useEffect, useState} from "react";
import {
    CalendarIcon,
} from "lucide-react"
import { format } from "date-fns"

const CreateBook = () => {
    const { createPost, loading } = usePost();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    const handleSave = async () => {
        await createPost({
            department: "Hi",
            post_date: date,
        })
    }

    useEffect(() => {
        if (loading) {
            setOpen(true)
        }
    }, [loading])
    
    return (
        
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add post</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Time
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Date
                        </Label>
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
                                        date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <DialogFooter>
                    <Button 
                        type="submit"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default CreateBook;
