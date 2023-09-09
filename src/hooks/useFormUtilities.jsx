export const useFormUtilities = () => {
  const formatDatePickerMonthYear = (datepicker) => {
    const calendar = datepicker.current;

    const currentMonth = calendar.querySelector(
      ".react-datepicker__current-month",
    );
    const month = currentMonth.textContent.slice(0, -4);
    const monthAbbr = month.slice(0, 3);
    const year = currentMonth.textContent.slice(-4);
    currentMonth.innerHTML = `<abbr class="no-underline" title="${month}">${monthAbbr}</abbr> ${year}`;
  };

  const formatDateToDDMMYYYY = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const formatNewFormData = (data) => {
    const formData = {
      ...data,
      billToInvoiceDate: formatDateToDDMMYYYY(data.billToInvoiceDate),
      billToPaymentTerms: data.billToPaymentTerms.name.split(" ")[1],
    };

    return formData;
  };

  return { formatDatePickerMonthYear, formatDateToDDMMYYYY, formatNewFormData };
};
