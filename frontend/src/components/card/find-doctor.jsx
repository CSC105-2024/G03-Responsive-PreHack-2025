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
import {useAuth} from "@/contexts/auth-context.jsx";
import {useNavigate} from "react-router-dom";

const FindDoctor = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const {isAuth} = useAuth();
  const navigate = useNavigate();

  return (
      <Card className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <CardHeader>
          <CardTitle className="text-2xl">Let’s Find Your Doctor</CardTitle>
          <CardDescription>
            Just a few steps to connect with the doctor that’s right for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-rows-1 gap-3 lg:grid-cols-3">
            {/*sysptoms*/}
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select your symptoms" />
              </SelectTrigger>

              <SelectContent className="p-0">
                <ScrollArea className="max-h-60 scroll-area">
                  <SelectItem value="1">Headache</SelectItem>
                  <SelectItem value="2">Stomach ache</SelectItem>
                  <SelectItem value="3">Fever</SelectItem>
                  <SelectItem value="4">Cough / Sore throat</SelectItem>
                  <SelectItem value="5">Rash / Itching</SelectItem>
                  <SelectItem value="6">Joint pain / Back pain</SelectItem>
                  <SelectItem value="7">Toothache / Swollen gums</SelectItem>
                  <SelectItem value="8">Red eyes / Blurred vision</SelectItem>
                  <SelectItem value="9">Ear ringing / Dizziness</SelectItem>
                  <SelectItem value="10">Chest pain / Palpitations</SelectItem>
                  <SelectItem value="11">
                    Irregular menstruation / Menstrual cramps
                  </SelectItem>
                  <SelectItem value="12">
                    Family planning / Pregnancy check-up
                  </SelectItem>
                  <SelectItem value="13">
                    Sick children / Cough with fever
                  </SelectItem>
                  <SelectItem value="14">Anxiety / Depression</SelectItem>
                  <SelectItem value="15">Annual health check-up</SelectItem>
                </ScrollArea>
              </SelectContent>
            </Select>

            {/*time*/}
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8:00-10:00">8:00 - 10:00</SelectItem>
                <SelectItem value="10:00-12:00">10:00 - 12:00</SelectItem>
                <SelectItem value="13:00-15:00">13:00 - 15:00</SelectItem>
                <SelectItem value="15:00-17:00">15:00 - 17:00</SelectItem>
              </SelectContent>
            </Select>

            {/*calender*/}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
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
                    disabled={(date) =>
                        date < new Date("1900-01-01")
                    }
                    initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
        <CardFooter>
          <div className="space-x-2 w-full flex justify-end ">
            <Button
                onClick={() => {
                  if (!isAuth) {
                    navigate("/system/sign-in");
                  }
                }}
            >
              Search
            </Button>
            <Button
                variant={"outline"}
                onClick={() => {
                  setTime("")
                }}
            >
              Clear
            </Button>
          </div>
        </CardFooter>
      </Card>
  );
};
export default FindDoctor;