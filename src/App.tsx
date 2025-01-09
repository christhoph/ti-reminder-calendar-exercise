import { Logo } from "@/components/Logo";
import { Copyright } from "@/components/Copyright";
import { Calendar } from "@/modules/calendar/Calendar";
import { Reminders } from "@/modules/reminders/Reminders";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider>
      <div className="w-full h-full flex flex-col items-center justify-center bg-light-blue px-8">
        <div className="w-[1120px] max-w-full flex flex-col gap-10">
          <div className="h-11 max-w-72">
            <Logo />
          </div>

          <div className="flex h-[686px] w-full shadow-xxl overflow-hidden rounded-[2.5rem]">
            <div className="h-full flex-1">
              <Reminders />
            </div>

            <div className="h-full w-[450px]">
              <Calendar>
                <Copyright />
              </Calendar>
            </div>
          </div>
        </div>
      </div>
    </ReactQueryProvider>
  );
}

export default App;
