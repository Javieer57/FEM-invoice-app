import { FormProvider, useForm } from "react-hook-form";
import { TextInput, Select, DatePicker } from "./inputs";
import { PillBtn } from "../PillBtn";

const paymentTerms = [
  { id: 1, name: "Net 1 Day" },
  { id: 2, name: "Net 7 Days" },
  { id: 3, name: "Net 14 Days" },
  { id: 4, name: "Net 30 Days" },
];

export const NewInvoiceForm = () => {
  const methods = useForm();

  function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const onSubmit = (data) => {
    const formData = {
      ...data,
      billToInvoiceDate: formatDateToDDMMYYYY(data.billToInvoiceDate),
    };
    console.table(formData);
  };

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">New Invoice</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BillFrom />
          <BillTo />
          <Actions />
        </form>
      </FormProvider>
    </div>
  );
};

const BillFrom = () => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill From</h3>

      <div className="mb-10 grid gap-6">
        <TextInput label="Street Address" id="billFromStreet" />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billFromCity" />
          <TextInput label="Post Code" id="billFromPostCode" />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billFromCountry"
          />
        </div>
      </div>
    </section>
  );
};

const BillTo = () => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill To</h3>

      <div className="mb-10 grid gap-6">
        <TextInput label="Client's Name" id="billToName" />
        <TextInput label="Client's Email" id="billToEmail" type="email" />
        <TextInput label="Street Address" id="billStreetAdress" />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billToCity" />
          <TextInput label="Post Code" id="billToPostCode" />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billToCountry"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {/* <Controller
            control={control}
            name="fecha"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                label="Invoice Date"
                id="billToInvoiceDate"
              />
            )}
          /> */}
          <DatePicker label="Invoice Date" id="billToInvoiceDate" />

          <Select
            label="Payment Terms"
            options={paymentTerms}
            id="billToPaymentTerms"
          />
        </div>

        <TextInput label="Project Description" id="billToProjectDescription" />
      </div>
    </section>
  );
};

const Actions = () => {
  return (
    <div className="flex justify-between">
      <PillBtn color="lightPurple">Discard</PillBtn>
      <button className="btn btn-outline">Save as Draft</button>
      <PillBtn type="submit" color="purple">
        Save & Send
      </PillBtn>
    </div>
  );
};

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export const NewInvoiceForm = () => {
//   const { handleSubmit, control } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     console.table({ data });
//   };

//   return (
//     <div>
//       <h1>Formulario con Selector de Fechas</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Fecha:</label>
//           <Controller
//             control={control}
//             name="fecha"
//             defaultValue={new Date()}
//             render={({ field: { onChange, value } }) => (
//               <DatePicker
//                 selected={value}
//                 onChange={onChange}
//                 dateFormat="dd/MM/yyyy"
//               />
//             )}
//           />
//         </div>
//         <div>
//           <button type="submit">Enviar</button>
//         </div>
//       </form>
//     </div>
//   );
// };
