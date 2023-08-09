import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <main aria-live="polite">
        <Outlet />
      </main>
    </>
  );
};
