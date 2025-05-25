import { SquareArrowLeft } from "lucide-react";
import { SignUpForm } from "@/components/from";
import { Link, useNavigate } from "react-router-dom";
import doc from "../../assets/doc.png";


const SignUpMo = () => {
    const navigate = useNavigate();

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-10 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start ">
                    <Link to="/" className="flex items-center text-3xl">
                        <span className="text-cyan-500 font-bold">D</span>
                        <span>ocOnTime</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <SignUpForm />
                    </div>
                </div>

                <SquareArrowLeft
                    className="size-6 cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="relative bg-muted lg:block hidden">
                <img
                    src={doc}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover "
                />
            </div>
        </div>
    );
};

export default SignUpMo;