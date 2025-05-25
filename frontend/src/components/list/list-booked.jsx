import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "@/components/ui/card";
import { DetailBook } from "../card";
import { usePost } from "@/contexts/post-context.jsx";
import { format } from "date-fns";
const ListBooked = () => {
  const { post, filters } = usePost();
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
  const bookingHistory = [];
  console.log("All posts:", post);
  console.log("Available bookings:", availableBookings);
  console.log("Booking history:", bookingHistory);
  return (
    <div>
      <Tabs defaultValue="Book">
        <TabsList className="w-full">
          <TabsTrigger value="Book" className="cursor-pointer">
            Book
          </TabsTrigger>
          <TabsTrigger value="History" className="cursor-pointer">
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Book">
          <Card className="min-h-screen">
            <CardContent className="p-6">
              {availableBookings.map((p) => {
                const time = `${p.start_time} - ${p.end_time}`;
                return (
                  <div key={p.id} className="mb-3">
                    <DetailBook
                      sym={p.doctor?.department}
                      date={time}
                      doctor={p.doctor?.username}
                      status={p.confirms?.[0]?.confirm || true}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="History">
          <Card className="min-h-screen">
            <CardContent className="p-6">
              {bookingHistory.map((p) => {
                const time = `${p.start_time} - ${p.end_time}`;
                return (
                  <div key={p.id} className="mb-3">
                    <DetailBook
                      sym={p.doctor?.department}
                      date={time}
                      doctor={p.doctor?.username}
                      status={p.confirms?.[0]?.confirm || false}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListBooked;
