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

const DetailBook = ({sym, doctor, date}) => {

  return (
    <Card>
      <CardHeader>
        <CardDescription>{date}</CardDescription>
        <div className="flex justify-between">
          <CardTitle className="text-2xl">{sym}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical size={32} />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
  );
};
export default DetailBook;
