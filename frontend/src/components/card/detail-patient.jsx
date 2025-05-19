import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailPatient = () => {
  return (
    <div className="flex justify-center lg:w-full w-70">
      <Card className="w-full max-w-3xl">
        <CardHeader className="flex justify-center">
          <CardTitle className="lg:text-4xl text-3xl">Your information</CardTitle>
        </CardHeader>
        <CardContent className="lg:mx-10">
          <div className="lg:mb-5">
            <p className="lg:text-2xl font-bold">Name</p>
            <p>Very Niceguy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailPatient;