import React, { useEffect, useState } from "react";
import AppLayout from "../../components/App/AppLayout";
import BasketRow from "../../components/App/BasketRow";
import useAuth from "../../store/authStore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Mybaskets = () => {
  const [page, setPage] = useState(1);
  const { userProfile } = useAuth();

  return (
    <AppLayout>
      <div className="flex flex-col space-y-4 ">
        <div className="flex items-center justify-between py-3">
            <div>
                <p className="text-2xl font-semibold">Created Baskets</p>
                <span className="text-gray-500">You have 0 saved baskets</span>
            </div>
            <div>
                <button className="bg-purple-600 py-2 px-4 rounded-xl text-white hover:bg-purple-700 duration-200">Create Basket</button>
            </div>
        </div>
        <div className="grid grid-cols-4">
            <div className="bg-white p-2 rounded-xl col-span-3">
                <BasketRow/>
                <BasketRow/>
                <BasketRow/>
                <BasketRow/>
                <BasketRow/>
                <BasketRow/>

            </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Mybaskets;
