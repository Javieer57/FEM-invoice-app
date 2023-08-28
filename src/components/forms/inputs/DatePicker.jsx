import { useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({ label }) => {
  const [startDate, setStartDate] = useState(new Date());
  const datepicker = useRef(null);

  const formatMonthYear = () => {
    const calendar = datepicker.current;

    const currentMonth = calendar.querySelector(
      ".react-datepicker__current-month",
    );
    const month = currentMonth.textContent.slice(0, -4);
    const monthAbbr = month.slice(0, 3);
    const year = currentMonth.textContent.slice(-4);
    currentMonth.innerHTML = `<abbr class="no-underline" title="${month}">${monthAbbr}</abbr> ${year}`;
  };

  return (
    <div>
      <label
        htmlFor="date"
        className="mb-2 text-sm font-semibold text-purple300"
      >
        {label}
      </label>

      <div className="date-picker" ref={datepicker}>
        <ReactDatePicker
          dateFormat="dd MMM yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onCalendarOpen={formatMonthYear}
          onMonthChange={formatMonthYear}
        />
      </div>
    </div>
  );
};
