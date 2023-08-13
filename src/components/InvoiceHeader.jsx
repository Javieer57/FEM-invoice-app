import { PillBtn } from "./PillBtn";
import { StatusBadge } from "./StatusBadge";

export const InvoiceHeader = ({ invoice }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-5 font-medium text-gray200 tablet:w-auto tablet:justify-start tablet:gap-3">
        Status
        <div>
          <StatusBadge status={invoice?.status} />
        </div>
      </div>

      <Actions invoice={invoice} />
    </>
  );
};

const Actions = ({ invoice }) => {
  const action = (e) => {
    e.preventDefault();
    console.log(invoice?.id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-wrap items-center gap-2 bg-white px-6 py-5 shadow-light tablet:static tablet:gap-4 tablet:p-0 tablet:shadow-none">
      <PillBtn onClick={action} color={"lightPurple"}>
        Edit
      </PillBtn>
      <PillBtn onClick={action} color={"orange"}>
        Delete
      </PillBtn>
      <PillBtn onClick={action} color={"purple"}>
        Mark as Paid
      </PillBtn>
    </div>
  );
};
