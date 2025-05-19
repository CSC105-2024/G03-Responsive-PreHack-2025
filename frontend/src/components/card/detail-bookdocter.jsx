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
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
const DetailBookDocter = () => {
  const isAvailable = true;
  return (
    <Card>
      <CardHeader>
        <CardDescription>12.00 - 13.00 AM</CardDescription>
        <CardTitle className="text-2xl flex justify-between">
          Gastroenterologists
          {isAvailable && (
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
        </CardTitle>
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
          <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
        ) : (
          <Badge className="bg-orange-400 hover:bg-orange-500">Booked</Badge>
        )}
      </CardFooter>
    </Card>
  );
};
export default DetailBookDocter;
