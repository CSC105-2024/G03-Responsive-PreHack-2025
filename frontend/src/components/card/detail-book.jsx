import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleUserRound, Clock, Calendar, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { EllipsisVertical } from "lucide-react";
import { useConfirm } from "@/contexts/confirm-context.jsx";

const DetailBook = ({ sym, doctor, time, date, status, id }) => {
  const { createConfirm } = useConfirm();
  
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 border-l-4 ${status ? 'border-l-blue-500' : 'border-l-green-500'} bg-white/80 backdrop-blur-sm`}>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 ${status ? 'bg-blue-100' : 'bg-green-100'} rounded-full`}>
                <Stethoscope className={`w-5 h-5 ${status ? 'text-blue-600' : 'text-green-600'}`} />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 capitalize">
                {sym}
              </CardTitle>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className={`w-4 h-4 ${status ? 'text-blue-500' : 'text-green-500'}`} />
                <CardDescription className="text-base font-medium">
                  {time}
                </CardDescription>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className={`w-4 h-4 ${status ? 'text-blue-500' : 'text-green-500'}`} />
                    <CardDescription className="text-base font-medium">
                  {date}
                </CardDescription>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-gray-100 rounded-full">
                  <CircleUserRound className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-gray-700 font-medium capitalize">Dr. {doctor}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center h-full">
          {status ? (
            <Button
              onClick={() => {
                createConfirm({ postId: id });
              }}
            >
              Book
            </Button>
          ) : (
            <Badge variant={`${!status ? "confirm" : "unConfirm"}`}>
              Booked
            </Badge>
          )}
        </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailBook;