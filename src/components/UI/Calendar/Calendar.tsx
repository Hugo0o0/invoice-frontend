import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarIcon, Fade } from "..";
import { addMonths, format, getDaysInMonth, setDay, setMonth } from "date-fns";

const Calendar = ({ d }: { d?: Date }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date("2003-01-06T00:00:00Z"));
  const daysInMonth = getDaysInMonth(date);
  const day = date.getDate();

  return (
    <div className="relative">
      <div
        onClick={setShowCalendar.bind(null, (prev) => !prev)}
        className="rounded-[4px] bg-item flex items-center justify-between border border-input hover:border-input-focus px-5 py-5 cursor-pointer"
      >
        <p className="text-sm font-bold">{format(date, "dd MMMM yyyy")}</p>
        <CalendarIcon />
      </div>

      <Fade show={showCalendar}>
        <div className="absolute shadow-default top-28 rounded-[4px] w-full z-50 bg-item flex flex-col gap-4 px-4 py-10">
          <div className="flex justify-between items-center">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => {
                const result = addMonths(date, -1);
                setDate(result);
              }}
            />
            <p className="text-sm font-bold">{format(date, "MMMM yyyy")}</p>
            <ArrowRight
              onClick={() => {
                const result = addMonths(date, 1);
                setDate(result);
              }}
              className="cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-7 justify-items-center gap-4">
            {Array.from({ length: daysInMonth }).map((_, index) => {
              console.log(index);
              return (
                <p
                  onClick={() => {
                    const result = setDay(date, index + 1);
                    setDate(result);
                  }}
                  className={`text-sm font-bold cursor-pointer ${
                    day - 1 === index && "text-primary"
                  }`}
                >
                  {index + 1}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Calendar;
