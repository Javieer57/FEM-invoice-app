import { useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";

export const DatePicker = ({ label, id }) => {
  const { control } = useFormContext();
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

      <Controller
        control={control}
        name={id}
        defaultValue={new Date()}
        render={({ field: { onChange, value } }) => (
          <div className="date-picker" ref={datepicker}>
            <ReactDatePicker
              closeOnScroll={true}
              dateFormat="dd MMM yyyy"
              selected={value}
              onChange={onChange}
              onCalendarOpen={formatMonthYear}
              onMonthChange={formatMonthYear}
            />
          </div>
        )}
      />
    </div>
  );
};
