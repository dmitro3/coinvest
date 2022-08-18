import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react'
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import useExchange from '../../store/exchangeStore';
import { HiSelector } from "react-icons/hi"

const CryptoDropdown = ({ onClick, tokenBaskets }) => {
    const { tokens } = useExchange();
    const [query, setQuery] = useState('')
    const filteredPeople =
      query === ''
        ? tokens
        : tokens.filter((token) =>
            token.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
  
    return (
      <div className="w-72">
        <Combobox onChange={(e) => onClick(e)}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue="Search by name"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name"
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <HiSelector
                  className="h-5 w-5 text-gray-400"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((token) => (
                    <Combobox.Option
                      key={token.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-2 ${
                          active ? 'bg-purple-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={token}
                    >
                      {({ selected, active }) => (
                        <>
                        <div className='flex space-x-2 items-center'>

                        <img
                            src={token.icon}
                            alt={token.name}
                            layout="fill"
                            width="24px"
                            height="24px"
                            objectFit="cover"
                            className="inline-block border bg-white h-8 w-8 rounded-full ring-2 ring-white"
                          />
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {token.name}
                          </span>
                        </div>
                          {/* {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null} */}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    )
}

export default CryptoDropdown