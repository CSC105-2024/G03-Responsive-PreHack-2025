import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
const DetailBook = ({ Available }) => {
  const [isAvailable, setIsAvailable] = useState(Available);

  const handleBooking = () => {
    setIsAvailable(false);
  };
  return (
    <Card>
      <CardHeader>
        <CardDescription>12.00 - 13.00 AM</CardDescription>
        <div className="flex justify-between">
          <CardTitle className="text-2xl">Gastroenterologists</CardTitle>
          {!isAvailable && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <EllipsisVertical size={32} />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
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
        {isAvailable ? (
          <Button onClick={handleBooking}>Book</Button>
        ) : (
          <Badge className="bg-orange-400 hover:bg-orange-500">Booked</Badge>
        )}
      </CardFooter>
    </Card>
  );
};
export default DetailBook;
