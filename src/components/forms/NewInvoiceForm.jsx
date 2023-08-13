import { TextInput } from "./inputs/TextInput";

export const NewInvoiceForm = () => {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">New Invoice</h2>

      <form>
        <section>
          <h3 className="mb-6 font-bold text-purple900">Bill From</h3>

          <TextInput label="Street Address" id="street_address" />
        </section>
      </form>
    </div>
  );
};
