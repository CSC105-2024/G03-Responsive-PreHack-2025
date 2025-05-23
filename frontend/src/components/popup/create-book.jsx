import { Button } from "@/components/ui/button";
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { usePost } from "@/contexts/post-context.jsx";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { cn } from "@/lib/utils.js";
import { Calendar } from "@/components/ui/calendar.jsx";
import { Popover } from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const CreateBook = () => {
  const { createPost, loading } = usePost();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [openC, setOpenC] = useState(false); 
  const [openD, setOpenD] = useState(false);

  const handleSave = async () => {
    const timeSlot = time.split("-");
    const start = timeSlot[0];
    const end = timeSlot[1];
    
    await createPost({
      start_time: start,
      end_time: end,
      post_date: date,
    });
    if (loading) setOpenD(true);
  };
  
  useEffect(() => {
    if (loading) {
      setOpenC(true);
    }
  }, [loading]);

  return (
    <Dialog open={openD} onOpenChange={setOpenD}>
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
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8:00-10:00">8:00 - 10:00</SelectItem>
                <SelectItem value="10:00-12:00">10:00 - 12:00</SelectItem>
                <SelectItem value="13:00-15:00">13:00 - 15:00</SelectItem>
                <SelectItem value="15:00-17:00">15:00 - 17:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Date
            </Label>
            <Popover open={openC} onOpenChange={setOpenC}>
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
                    setDate(selectedDate);
                    setOpenC(false);
                  }}
                  disabled={(date) => date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSave}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default CreateBook;
