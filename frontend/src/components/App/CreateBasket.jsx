import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import useApi from '../../hooks/api';
import useAuth from "../../store/authStore";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import toast, { Toaster } from 'react-hot-toast';

export default function CreateBasket() {
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const { userProfile } = useAuth();

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleCreateBasket = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const basketData = {
      name: e.target[0].value,
      description: e.target[1].value,
      user: userProfile._id,
      tokens: [],
    }
    useApi.post("/baskets", basketData).then((res) => {
      setIsLoading(false);
      closeModal();
      toast.success("Basket Created Successfully!", {
        position:"top-center",
      })
    }).catch((error) => {
      toast.error("Something went wrong.", {
        position: "top-center"
      })
    })
  }

  return (
    <>
        <button
          type="button"
          onClick={openModal}
          className="bg-purple-600 py-2 px-4 rounded-xl text-white hover:bg-purple-700 duration-200"
        >
          Create Basket
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center pt-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="easei-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-xl h-full transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Invest in your ideas 
                  </Dialog.Title>
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-gray-500">
                        Create a smallcase of your own stock picks. Invest immediately or save it for later
                    </p>
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-1 ">
                        <form onSubmit={handleCreateBasket} className="relative w-full space-y-8">
                        <div class="relative">
                            <label class="absolute px-2 ml-2 -mt-3 text-gray-600 bg-white font-semibold">Name</label>
                            <input type="text" class="block w-full px-4 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" name="name" placeholder="Give your basket a name"/>
                        </div>
                        <div class="relative">
                            <label class="absolute px-2 ml-2 -mt-3 text-gray-600 bg-white font-semibold">Description</label>
                            <textarea class="block w-full px-4 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" name="name" placeholder="What's your basket about?"></textarea>
                        </div>
                        <div className="flex justify-end mt-4 space-x-3 border-t py-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-xl border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-purple-600 flex items-center space-x-2 py-2 px-4 rounded-xl text-white hover:bg-purple-700 duration-200"
                                disabled={isLoading}
                            >
                              {isLoading && <CgSpinnerTwoAlt className="animate-spin"/>}
                              {!isLoading ? <span>Save</span> : <span>Saving...</span>}
                            </button>
                        </div>
                        </form>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
