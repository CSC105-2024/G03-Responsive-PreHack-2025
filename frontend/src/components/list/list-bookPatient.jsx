import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "@/components/ui/card";
import { DetailBook } from "../card";
import { usePost } from "@/contexts/post-context.jsx";
import { format } from "date-fns";
import { useConfirm } from "@/contexts/confirm-context.jsx";

const ListBookPatient = () => {
  const { post, filters } = usePost();
  const { confirm } = useConfirm();
  console.log(confirm);

  const availableBookings = useMemo(() => {
    if (!post) return [];

    if (!filters.date && !filters.time && !filters.symptoms) {
      return post;
    }

    return post.filter((p) => {
      if (filters.symptoms) {
        const department = p.doctor?.department?.toLowerCase() || "";
        if (department !== filters.symptoms.toLowerCase()) {
          return false;
        }
      }

      if (filters.time) {
        const timeMap = {
          1: "8:00 - 10:00",
          2: "10:00 - 12:00",
          3: "13:00 - 15:00",
          4: "15:00 - 17:00",
        };

        const selectedTimeSlot = timeMap[filters.time];
        const postTimeSlot = `${p.start_time} - ${p.end_time}`;

        if (selectedTimeSlot && postTimeSlot !== selectedTimeSlot) {
          return false;
        }
      }

      if (filters.date) {
        const postDate = new Date(p.post_date);
        const filterDate = new Date(filters.date);

        if (
          format(postDate, "yyyy-MM-dd") !== format(filterDate, "yyyy-MM-dd")
        ) {
          return false;
        }
      }

      return true;
    });
  }, [post, filters]);

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
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Medical Appointments
        </h1>
        <p className="text-gray-600">
          Manage your bookings and view appointment history
        </p>
      </div>

      <Tabs defaultValue="Book" className="w-full  ">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-lg p-1 flex justify-between items-baseline">
          <TabsTrigger
            value="Book"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm cursor-pointer text-sm font-medium py-2 px-4 transition-all duration-200 rounded-md"
          >
            Available Appointments
          </TabsTrigger>
          <TabsTrigger
            value="History"
            className="data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:shadow-sm cursor-pointer text-sm font-medium py-2 px-4 transition-all duration-200 rounded-md"
          >
            Booking History
          </TabsTrigger>
        </TabsList> 

        <TabsContent value="Book" className="mt-0">
          <Card className="shadow-lg border-0 bg-gradient-to-br ">
            <CardContent className="p-8">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Available Time Slots
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
              </div>

              {availableBookings.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg mb-2">
                    No appointments available
                  </div>
                  <p className="text-gray-500">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {availableBookings.map((p) => {
                    const time = `${p.start_time} - ${p.end_time}`;
                    console.log(p.id);
                    return (
                      <div
                        key={p.id}
                        className="transform transition-all duration-200 hover:scale-[1.02]"
                      >
                        <DetailBook
                          sym={p.doctor?.department}
                          time={time}
                          date={formatDate(p.post_date)}
                          doctor={p.doctor?.username}
                          status={p.confirms?.[0]?.confirm || true}
                          id={p.id}
                        />
                        
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="History" className="mt-0">
          <Card className="min-h-screen shadow-lg border-0 bg-gradient-to-br ">
            <CardContent className="p-8">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Your Appointment History
                </h2>
                <div className="h-1 w-20 bg-green-500 rounded"></div>
              </div>

              {confirm?.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg mb-2">
                    No booking history
                  </div>
                  <p className="text-gray-500">
                    Your confirmed appointments will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {confirm?.map((c) => {
                    const time = `${c.post.start_time} - ${c.post.end_time}`;
                    return (
                      <div
                        key={c.id}
                        className="transform transition-all duration-200 hover:scale-[1.02]"
                      >
                        <DetailBook
                          sym={c.post?.doctor?.department}
                          time={time}
                          date={formatDate(c.post?.post_date)}
                          doctor={c.post?.doctor?.username}
                          status={c.confirms?.confirm}
                          id={c.id}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListBookPatient;
