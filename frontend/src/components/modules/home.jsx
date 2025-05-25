import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useAuth } from "@/contexts/auth-context.jsx";
import { useNavigate } from "react-router-dom";

const HomeMo = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(isAuth ? "/dashboard" : "/system/sign-in");
    };

    return (
        <section>
            <div className="relative container flex flex-col items-center">
                <div className="grid lg:grid-cols-2">
                    <div className="flex w-full flex-col gap-8 px-10 py-20 md:px-14">
                        <h1 className="text-5xl font-semibold tracking-tighter md:text-7xl">
                            The Blocks Built
                            <br />
                            With Shadcn
                            <br />
                            &amp; Tailwind.
                        </h1>
                        <p className="tracking-tight text-muted-foreground md:text-xl">
                            Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.
                        </p>
                        <div className="flex w-full gap-2">
                            <Button
                                className="text-md h-12 w-fit rounded-full px-10"
                                onClick={handleClick}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    
                    <div className="relative h-full w-full bg-muted-2/50 p-4 transition-all ease-in-out group-hover:bg-muted-2 place-self-end lg:w-4/6">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl">
                            <img
                                src="https://shadcnblocks.com/images/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg"
                                alt="Modern architecture with colorful blocks"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                        
                        <div className="absolute top-4 -ml-4 flex h-full w-full flex-col items-center justify-between p-10">
                            <p className="flex w-full items-center text-xl tracking-tighter text-background">
                                2025 <span className="mx-2 h-2.5 w-[1px] bg-white" /> March
                            </p>

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-center text-6xl font-semibold tracking-tight text-background">
                                    New <br /> Collection
                                </h2>
                                <div className="mt-2 h-1 w-6 rounded-full bg-background" />
                                <p className="mt-10 max-w-sm px-2 text-center text-lg leading-5 font-light tracking-tighter text-background/80">
                                    Discover our latest release of beautifully crafted components.
                                </p>
                            </div>

                            <a
                                href="#"
                                className="group mb-6 flex cursor-pointer flex-col items-center justify-center text-background"
                            >
                                <ChevronUp
                                    size={30}
                                    className="transition-all ease-in-out group-hover:-translate-y-2"
                                />
                                <p className="text-xl tracking-tight">See All</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMo;
