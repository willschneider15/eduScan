import { useEffect, useState, memo } from "react";

function CountDownTimer({date}: {date: string}) {
  const [eventTime, seteventTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(date);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        seteventTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="">
      {eventTime ? (
        <div className="text-centered m-auto h-auto py-10">
          <h1 className="font-bold text-xl text-center text-black">Event Started</h1>
        </div>
      ) : (
        <>
          <div className=" m-auto bg-white rounded-xl py-10  border shadow-xl">
            <div className="grid grid-cols-4 ">
              <div className="text-center">
                <span className="text-center">{days}</span>
                <span className="text-center"> Days</span>
              </div>
              
              <div className="text-center">
                <span className="text-center">{hours}</span>
                <span className="text-center"> Hours</span>
              </div>
              
              <div className="text-center">
                <span className="text-center">{minutes}</span>
                <span className="text-center"> Minutes</span>
              </div>
            
              <div className="text-center">
                <span className="text-center">{seconds}</span>
                <span className="text-center"> Seconds</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(CountDownTimer);