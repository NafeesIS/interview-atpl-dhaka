// import Dashboard from "./page";

import Dashboard from "@/app/components/Dashboard";

const WithLayout = ({ children }) => {
  return (
    <div className="flex">
      <Dashboard />
      {children}
    </div>
  );
};

export default WithLayout;
