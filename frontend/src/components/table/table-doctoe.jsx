import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import { EllipsisVertical, Clock, Calendar, Trash2 } from "lucide-react";

const TableDoctor = ({ post, deletePostUser }) => {
  console.log(post);
  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableCaption className="text-gray-500 font-medium py-4 bg-gray-50/50">
            A list of your recent appointment schedule
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100">
              <TableHead className="w-[150px] font-semibold text-gray-700 px-10">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time Slot</span>
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-700 p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Appointment Date</span>
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-700 px-4">Status</TableHead>
              <TableHead className="text-right font-semibold text-gray-700 px-4">Created Date</TableHead>
              <TableHead className="text-right font-semibold text-gray-700 pr-10">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {post?.map((p, index) => {
              const time = `${p.start_time} - ${p.end_time}`;
              const status = p?.confirm ? "Booked" : "Available";
              return (
                <TableRow
                  key={p.id}
                  className="hover:bg-blue-50/50 transition-all duration-200 border-b border-gray-100"
                >
                  <TableCell className="font-medium text-gray-800 px-10">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-blue-100 rounded">
                        <Clock className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>{time}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700 px-4">
                    {formatDate(p?.post_date)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={`${p?.confirm ? "confirm" : "unConfirm"}`}>
                      {status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-gray-700 pr-6 ">
                    {formatDate(p?.created_at)}
                  </TableCell>
                  <TableCell className="text-right pr-7">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                        >
                          <EllipsisVertical className="w-4 h-4" />
                          <span className="sr-only">Toggle user menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-white shadow-lg border border-gray-200"
                      >
                        <DropdownMenuItem
                          onClick={() => {
                            deletePostUser({ id: p.id });
                          }}
                          className="text-red-600 hover:bg-red-50 cursor-pointer flex items-center space-x-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableDoctor;
