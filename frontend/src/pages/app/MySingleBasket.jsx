import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import AppLayout from "../../components/App/AppLayout";
import useApi from "../../hooks/api";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";
import { BsFillInboxesFill } from "react-icons/bs";
import useExchange from "../../store/exchangeStore";
import CryptoDropdown from "../../components/App/CryptoDropdown";
import { TiDelete } from "react-icons/ti";
import { getUsdPrice } from "../../hooks/useChainlink";
const MySingleBasket = () => {
  const { id } = useParams();
  const { tokens } = useExchange();
  const [basket, setBasket] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [basketTokens, setBasketTokens] = useState([]);
  const [minimumInvestment, setMinimumInvestment] = useState(0.00);
  const minimum = 0.01;

  const getMyBasket = () => {
    setIsLoading(true);
    useApi
      .get(`/baskets?basket=${id}`)
      .then((res) => {
        setIsLoading(false);
        setBasket(res.data.baskets[0]);
        setBasketTokens(res.data.baskets[0].tokens);
      })
      .catch((error) => {
        toast.error("Something went wrong.", {
          position: "top-center",
        });
      });
  };

  const saveBasket = () => {
    setIsSaving(true);
    let tokensArr = [];
    basketTokens.forEach(token => {
      tokensArr.push(token._id);
    })
    useApi
      .put(`/baskets/${basket._id}`, {
        tokens: tokensArr,
      })
      .then((res) => {
        setIsSaving(false);
        toast.success("Basket Updated Successfully!", {
          position: "top-center",
        });
      })
      .catch((error) => {
        console.log("Error", error)
        setIsSaving(false);
        toast.error("Something went wrong.", {
          position: "top-center",
        });
      });
  };

  const addToken = (token) => {
    var tokens = basketTokens;
    var index = tokens.findIndex((t) => t._id === token._id);
    if (index === -1) {
      //   tokens.push(token);
      setBasketTokens((prevState) => [...prevState, token]);
    }
    // setBasketTokens(tokens);
    console.log("selected token", basketTokens);
  };
  const removeToken = (token) => {
    // var tokens = basketTokens;
    // var index = tokens.findIndex((t) => t._id === token._id);
    // tokens.splice(index, 1);
    // setBasketTokens((tokens) => tokens.splice(index, 1));
    // console.log("selected token", tokens);
    setBasketTokens(basketTokens.filter((t) => t._id !== token._id))
  };

  const calculateMinimumInvestment = () => {
    basketTokens.forEach((token)=>{
      getUsdPrice(token.priceAddress).then((data) => {
        setMinimumInvestment((prevState) => prevState + (data * minimum))
      });
    })
  }

  useEffect(() => {
    calculateMinimumInvestment();
  },[basketTokens]);

  useEffect(() => {
    if (id) {
      getMyBasket();
      console.log(basket);
    }
    if(basket){
      calculateMinimumInvestment()
    }
  }, []);
  return (
    <AppLayout>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full h-[500x] py-40">
          <CgSpinnerTwoAlt className="animate-spin text-5xl text-gray-600" />
          <p className="text-xl text-gray-500">Loading basket data...</p>
        </div>
      ) : (
        <div className="flex flex-col space-y-4 ">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-semibold border-b-2 border-gray-600 border-dashed">
                {basket?.name}
              </p>
              {/* <span className="text-gray-500">You have 0 saved baskets</span> */}
              <BiEditAlt className="text-xl text-gray-500 cursor-pointer mt-2" />
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-2 rounded-xl col-span-3">
              <div className="flex flex-col pl-4 py-3 space-y-2">
                <span className="text-sm text-gray-500 font-semibold">
                  Add & Organize Tokens
                </span>
                <CryptoDropdown onClick={addToken} />
              </div>
              <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2">
                        <div className="font-semibold text-left">#</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Tokens</div>
                      </th>
                      {/* <th className="p-2">
                        <div className="font-semibold text-left">Price ($)</div>
                      </th> */}
                      <th className="p-2">
                        <div className="font-semibold text-left">Weights</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    {basketTokens.length <= 0 ? (
                      <tr className="">
                        <td colSpan={4}>
                          <div className="relative w-full flex-col cursor-default select-none py-6 px-4 text-gray-700 flex justify-center items-center space-y-2 border">
                            <BsFillInboxesFill className="text-2xl text-gray-500" />
                            <span className="text-lg text-gray-600">
                              No Tokens Added
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      basketTokens.map((token, index) => (
                        <tr key={token._id}>
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2 flex items-center space-x-2">
                            <img
                              src={token.icon}
                              alt={token.name}
                              layout="fill"
                              width="24px"
                              height="24px"
                              objectFit="cover"
                              className="inline-block border bg-white h-8 w-8 rounded-full ring-2 ring-white"
                            />
                            <div className="font-semibold text-gray-800">
                              {token.name}
                            </div>
                          </td>
                          {/* <td className="p-2">
                            <div className="text-left">1</div>
                          </td> */}
                          <td className="p-2">
                            <div className="text-left font-medium text-green-500">
                              {parseInt(1000 / basketTokens.length) / 10}%
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex justify-center">
                              <button
                                className="text-gray-500 text-2xl hover:text-red-500"
                                onClick={() => removeToken(token)}
                              >
                                <TiDelete />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white space-y-4 p-5 rounded-xl flex flex-col">
              <div className="flex flex-col space-y-1">
                <span className="text-sx text-gray-500">
                  Minimum Investment Amount
                </span>
                <span className="text-3xl text-gray-700">$ {parseFloat(minimumInvestment).toFixed(2)}</span>
              </div>
              <button className="border text-white bg-green-600 py-3 font-semibold px-4 rounded-xl mt-4">
                Invest Now
              </button>
              <button className="flex items-center justify-center space-x-2 border text-purple-600 border-purple-600 py-3 font-semibold px-4 rounded-xl mt-4" onClick={saveBasket} disabled={isSaving}>
                {isSaving && <CgSpinnerTwoAlt className="animate-spin"/>}
                {!isSaving ? <span>Save Basket</span> : <span>Saving...</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default MySingleBasket;
