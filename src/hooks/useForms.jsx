import { useState } from "react";

export const useForms = () => {
  const [openNewForm, setOpenNewForm] = useState(false);

  return {
    openNewForm,
    setOpenNewForm,
  };
};
