import { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import { useFormUtilities } from "../../../hooks";

export const DatePicker = ({ label, id }) => {
  const datepicker = useRef(null);
  const { control } = useFormContext();
  const { formatDatePickerMonthYear } = useFormUtilities();

  const formatMonthYear = () => {
    formatDatePickerMonthYear(datepicker);
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 text-sm font-semibold text-purple300">
        {label}
      </label>

      <Controller
        control={control}
        name={id}
        defaultValue={new Date()}
        render={({ field: { onChange, value } }) => (
          <div className="date-picker" ref={datepicker}>
            <ReactDatePicker
              id={id}
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
