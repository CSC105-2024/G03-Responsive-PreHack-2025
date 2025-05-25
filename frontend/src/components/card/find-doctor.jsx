import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar.jsx";
import { useState } from "react";
import { usePost } from "@/contexts/post-context.jsx";
const FindDoctor = () => {
  const { setFilters } = usePost();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [symptoms, setSymptoms] = useState("");
  const [time, setTime] = useState("");

  const handleSearch = () => {
    const filterData = {
      date: date,
      time: time,
      symptoms: symptoms,
    };
    console.log("Filter Data:", filterData);
    setFilters(filterData);
  };

  const handleClear = () => {
    setSymptoms("");
    setTime("");
    setDate(new Date());
    setFilters({
      date: null,
      time: "",
      symptoms: "",
    });
    console.log("Clear all filters");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Let’s Find Your Doctor</CardTitle>
        <CardDescription>
          Just a few steps to connect with the doctor that’s right for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-1 gap-3 lg:grid-cols-3">
          {/*sysptoms*/}
          <Select value={symptoms} onValueChange={setSymptoms}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select your symptoms" />
            </SelectTrigger>
            <SelectContent className="p-0">
              <ScrollArea className="max-h-60 scroll-area">
                <SelectItem value="neurology">Headache</SelectItem>
                <SelectItem value="gastroenterology">Stomach ache</SelectItem>
                <SelectItem value="internal-medicine">Fever</SelectItem>
                <SelectItem value="pulmonology">Cough / Sore throat</SelectItem>
                <SelectItem value="dermatology">Rash / Itching</SelectItem>
                <SelectItem value="orthopedics">
                  Joint pain / Back pain
                </SelectItem>
                <SelectItem value="dentistry">
                  Toothache / Swollen gums
                </SelectItem>
                <SelectItem value="ophthalmology">
                  Red eyes / Blurred vision
                </SelectItem>
                <SelectItem value="ent-otolaryngology">
                  Ear ringing / Dizziness
                </SelectItem>
                <SelectItem value="cardiology">
                  Chest pain / Palpitations
                </SelectItem>
                <SelectItem value="obstetrics-gynecology">
                  Irregular menstruation / Menstrual cramps
                </SelectItem>
                <SelectItem value="pediatrics">
                  Sick children / Cough with fever
                </SelectItem>
                <SelectItem value="psychiatry">Anxiety / Depression</SelectItem>
                <SelectItem value="internal-medicine">
                  Annual health check-up
                </SelectItem>
              </ScrollArea>
            </SelectContent>
          </Select>

          {/*time*/}
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">8:00 - 10:00</SelectItem>
              <SelectItem value="2">10:00 - 12:00</SelectItem>
              <SelectItem value="3">13:00 - 15:00</SelectItem>
              <SelectItem value="4">15:00 - 17:00</SelectItem>
            </SelectContent>
          </Select>

          {/*calender*/}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[200px] justify-start text-left font-normal",
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
                  setOpen(false);
                }}
                disabled={(date) => date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
      <CardFooter>
        <div className="space-x-2 w-full flex justify-end ">
          <Button onClick={handleSearch}>Search</Button>
          <Button variant={"outline"} onClick={handleClear}>
            Clear
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default FindDoctor;
