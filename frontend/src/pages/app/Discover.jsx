import React, { useEffect, useState } from "react";
import AppLayout from "../../components/App/AppLayout";
import useAuth from "../../store/authStore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Discover = () => {
  const [page, setPage] = useState(1);
  const { userProfile } = useAuth();

  return (
    <AppLayout>
      <div className="grid grid-cols-4 gap-4">
        Discover
      </div>
    </AppLayout>
  );
};

export default Discover;
