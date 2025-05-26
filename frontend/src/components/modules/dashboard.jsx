import { FindDoctor } from "@/components/card";
import { ListBookDoctor } from "@/components/list";
import ListBookPatient from "@/components/list/list-bookPatient.jsx";
import { CreateBook } from "@/components/popup";
import { PostProvider } from "@/contexts/post-context.jsx";
import { useAuth } from "@/contexts/auth-context.jsx";
import { usePost } from "@/contexts/post-context.jsx";
import { DetailDoctor } from "@/components/card";
import {ConfirmProvider} from "@/contexts/confirm-context.jsx";

const DashboardMo = () => {
  const { user, isAuth } = useAuth();
  const doctorRole = user?.[0]?.role === "DOCTOR";
  
  return (
    <PostProvider>
      <ConfirmProvider>
        
        <section className="md:min-w-7xl min-w-md">
          <div
            className="relative bg-[url('https://plus.unsplash.com/premium_photo-1681995277879-42e0d91897e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            bg-cover bg-center h-96 rounded-lg flex items-center justify-center"
          >
          </div>
          <div className="relative z-10 md:min-w-5xl mx-auto md:-mt-36 -mt-26 w-[350px]">
            {doctorRole ? <DetailDoctor /> : <FindDoctor />}
            <div className="mt-16">
              {doctorRole && (
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl">Doctor's Schedule</h1>
                  <CreateBook />
                </div>
              )}
              {doctorRole && isAuth && ( <ListBookDoctor role={doctorRole} /> )}
              {!doctorRole && isAuth && ( <ListBookPatient /> )}
              
            </div>
          </div>
        </section>
      </ConfirmProvider>
    </PostProvider>
  );
};

export default DashboardMo;