import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context.jsx";

const DetailDoctor = () => {
  const { user } = useAuth();
  return (
      <Card className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <CardHeader className="flex justify-center">
          <CardTitle className="text-2xl">Your information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">First Name</p>
              <p>Dr. {user[0]?.username}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Name</p>
              <p>{user[0]?.surname}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email address</p>
              <p>{user[0]?.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Department</p>
              <p>{user[0]?.department}</p>
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default DetailDoctor;