import { FC, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarIcon, Fade } from "..";
import {
  addMonths,
  format,
  getDaysInMonth,
  setDate as dateFnsSetDate,
  getDate,
} from "date-fns";

interface CalendarProps {
  initalDate: Date;
  onDateChange: (date: Date) => void;
}

const Calendar: FC<CalendarProps> = ({ initalDate, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(initalDate ?? new Date());

  const { daysInMonth } = useMemo(() => {
    if (date) {
      const daysInMonth = getDaysInMonth(date);
      return { daysInMonth };
    }
    return { daysInMonth: 1 };
  }, [date]);

  return (
    <div className="relative">
      <div
        onClick={setShowCalendar.bind(null, (prev) => !prev)}
        className="rounded-[4px] bg-item flex items-center justify-between border border-input hover:border-input-focus px-5 py-4 cursor-pointer"
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
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <p
                key={Math.random() * index}
                onClick={() => {
                  const result = dateFnsSetDate(date, index + 1);
                  setDate(result);
                  setShowCalendar(false);
                  onDateChange(result);
                }}
                className={`text-sm font-bold cursor-pointer ${
                  getDate(date) - 1 === index && "text-primary"
                }`}
              >
                {index + 1}
              </p>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Calendar;
