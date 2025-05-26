import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context.jsx";
import { User, Mail, Building2, Stethoscope } from "lucide-react";

const DetailDoctor = () => {
  const { user } = useAuth();
  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 backdrop-blur-lg">
      <CardHeader className="flex justify-center text-center pb-6">
        <CardTitle className="text-3xl font-bold text-gray-800 ">
          Your Information
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/60 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1 bg-blue-100 rounded-full">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                First Name
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-800">
              Dr. {user[0]?.username}
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1 bg-green-100 rounded-full">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                Last Name
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {user[0]?.surname}
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1 bg-purple-100 rounded-full">
                <Mail className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                Email Address
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-800 break-all">
              {user[0]?.email}
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1 bg-orange-100 rounded-full">
                <Building2 className="w-4 h-4 text-orange-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                Department
              </p>
            </div>
            <p className="text-lg font-semibold text-gray-800 capitalize">
              {user[0]?.department}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailDoctor;
