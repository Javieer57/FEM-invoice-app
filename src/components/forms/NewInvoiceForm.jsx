import { useForm } from "react-hook-form";
import { TextInput, Select, DatePicker } from "./inputs";
import { PillBtn } from "../PillBtn";

const paymentTerms = [
  { id: 1, name: "Net 1 Day" },
  { id: 2, name: "Net 7 Days" },
  { id: 3, name: "Net 14 Days" },
  { id: 4, name: "Net 30 Days" },
];

export const NewInvoiceForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">New Invoice</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BillFrom register={register} />
        <BillTo register={register} />
        <Actions />
      </form>
    </div>
  );
};

const BillFrom = ({ register }) => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill From</h3>

      <div className="mb-10 grid gap-6">
        <TextInput
          label="Street Address"
          id="billFromStreet"
          register={register}
        />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billFromCity" register={register} />
          <TextInput
            label="Post Code"
            id="billFromPostCode"
            register={register}
          />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billFromCountry"
            register={register}
          />
        </div>
      </div>
    </section>
  );
};

const BillTo = ({ register }) => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill To</h3>

      <div className="mb-10 grid gap-6">
        <TextInput label="Client's Name" id="billToName" register={register} />
        <TextInput
          label="Client's Email"
          id="billToEmail"
          type="email"
          register={register}
        />
        <TextInput
          label="Street Address"
          id="billStreetAdress"
          register={register}
        />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billToCity" register={register} />
          <TextInput
            label="Post Code"
            id="billToPostCode"
            register={register}
          />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billToCountry"
            register={register}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <DatePicker label="Invoice Date" />

          <Select
            label="Payment Terms"
            options={paymentTerms}
            id="billToPaymentTerms"
          />
        </div>

        <TextInput
          label="Project Description"
          id="billToProjectDescription"
          register={register}
        />
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
