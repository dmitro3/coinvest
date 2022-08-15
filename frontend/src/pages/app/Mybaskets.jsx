import React, { useEffect, useState } from "react";
import AppLayout from "../../components/App/AppLayout";
import BasketRow from "../../components/App/BasketRow";
import Pagination from "../../components/App/Pagination";
import useApi from "../../hooks/api";
import useAuth from "../../store/authStore";
import CreateBasket from "../../components/App/CreateBasket"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Mybaskets = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(1);
  const [baskets, setBaskets] = useState([]);
  const { userProfile } = useAuth();
  console.log("User", userProfile);
  const getMyBaskets = () => {

        useApi.get(`/baskets?user=${userProfile._id}&page=${page}&status=open`).then((res) => {
            setBaskets(res.data.baskets);
            setTotalPages(res.data.totalPages);
        })
    }
  useEffect(() => {
    if(userProfile){
      getMyBaskets()
      console.log(baskets)
    }
  },[])
  return (
    <AppLayout>
      <div className="flex flex-col space-y-4 ">
        <div className="flex items-center justify-between py-3">
            <div>
                <p className="text-2xl font-semibold">Created Baskets</p>
                <span className="text-gray-500">You have 0 saved baskets</span>
            </div>
            <div>
                <CreateBasket/>
            </div>
        </div>
        <div className="grid grid-cols-4">
            <div className="bg-white p-2 rounded-xl col-span-3">
              {
                baskets.map((basket)=> (
                  <BasketRow basket={basket} key={basket._id}/>
                ))
              }
              <Pagination page={page} totalPages={totalPages} total={total} setPage={setPage}/>
            </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Mybaskets;
