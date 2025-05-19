import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FindDoctor = () => {
  return (
    <div className="flex justify-center lg:w-full w-70">
      <Card className="w-full max-w-3xl">
        <CardHeader className="flex justify-center">
          <CardTitle className="lg:text-4xl text-3xl">Your information</CardTitle>
        </CardHeader>
        <CardContent className="lg:mx-10">
          <div className="lg:mb-4">
            <p className="lg:text-2xl font-bold">Name</p>
            <p>Dr. Very Niceguy</p>
          </div>
          <div>
            <p className="lg:text-2xl font-bold">Department</p>
            <p>Gastroenterologist</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FindDoctor;