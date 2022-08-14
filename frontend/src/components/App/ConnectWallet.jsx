import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useSignMessage } from 'wagmi'
import { useEffect } from "react";
import useAuth from "../../store/authStore";

const ConnectWallet = () => {
  const { userProfile, address, nonce, getUserNonce, loginUser, setConnectedAddress, setLoginStatus, loginStatus } = useAuth();

  const { data, isError, isLoading, isSuccess, signMessage }  = useSignMessage({
    message: `Verify your nonce: ${nonce}`,
    onSettled(data, error) {
      console.log('Settled', { data, error })
      loginUser({ eth_address: address, signature: data })
    },
    onError(error) {
      console.log('Error', error)
      setLoginStatus("Rejected")
    },
  })

  // console.log("Nonce", nonce)
  useEffect(() => {
    if(nonce !== 0 && (loginStatus !== 'rejected' && loginStatus !== 'loggedin')){
      signMessage()
    }else if(loginStatus !== 'loggedin'){
      loginUser({ eth_address: address, signature: "" })
    }
  },[nonce])

  useAccount({
    onConnect({address, connector, isReconnecting }){
      // console.log("Is Reconnecting", isReconnecting);
      // console.log("Connected to ", address);
      setConnectedAddress(address);
      getUserNonce(address);
    }
  });


  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button onClick={openConnectModal} className="p-3 px-5 text-white text-sm font-bold bg-green-500 rounded-xl" type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  {/* <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}

                  <button onClick={openAccountModal} type="button" className="flex p-1 text-sm font-semibold bg-gray-100 border border-gray-50 rounded-xl items-center">
                    <span className="p-2 px-3 rounded-lg flex items-center space-x-2">{account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}</span>

                    <span className="bg-white p-2 px-3 rounded-lg flex items-center space-x-2">{account.displayName}<MdKeyboardArrowDown className="font-semibold mt-1"/></span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
