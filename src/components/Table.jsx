import React, { useState } from 'react'
import data from '../data/TableData'
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';


const Table = () => {
    const [expandedNodes, setExpandedNodes] = useState({});

    const toggleNode = (id) => {
        setExpandedNodes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };


    return (
        <>
            <div className="table bg-white py-2 px-2 rounded-md shadow">
                <h2 className="font-semibold text-sm text-gray-900">Instruments: Empower-Info-FirForUse</h2>

                <div className="overflow-x-auto">
                    <table className="mt-2 w-full text-xs text-left text-gray-500">
                        <thead className="text-[11px] text-gray-600">
                            <tr>
                                <th className="px-1 py-0.5 min-w-[7rem] border border-gray-200" scope="col">
                                    System Status
                                </th>
                                <th className="px-1 py-0.5 min-w-[6rem] border border-gray-200" scope="col">
                                    Instruments
                                </th>
                                <th className="px-1 py-0.5 min-w-[6rem] border border-gray-200" scope="col">
                                    Node Type
                                </th>
                                <th className="px-1 py-0.5 min-w-[6rem] border border-gray-200" scope="col">
                                    Node Loc
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {data.map((item) => (
                        <div key={item.id} className="pt-1 hs-accordion-treeview-root" role="tree">
                            <div className="hs-accordion-group" role="group">
                                <div className="hs-accordion active" role="treeitem">
                                    <div className="hs-accordion-heading py-0 flex items-center gap-x-0.5 w-full">
                                        <button
                                            aria-controls={`collapse-main-${item.id}`}
                                            aria-expanded={expandedNodes[item.id] || false}
                                            onClick={() => toggleNode(item.id)}
                                            className="hs-accordion-toggle flex justify-center items-center rounded-md focus:outline-none"
                                        >
                                            {expandedNodes[item.id] ? (
                                                <IoMdArrowDropdown size={18} />
                                            ) : (
                                                <IoMdArrowDropright size={18} />
                                            )}
                                        </button>
                                        <div className="grow hs-accordion-selectable rounded-md cursor-pointer">
                                            <div className="flex items-center gap-x-1">
                                                <div className="grow">
                                                    <span className="text-xs text-blue-600 font-semibold">
                                                        {item.mainHeading}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {expandedNodes[item.id] && (
                                        <div
                                            id={`collapse-main-${item.id}`}
                                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                            role="group"
                                        >
                                            <div className="hs-accordion active" role="treeitem">
                                                <div className="hs-accordion-heading py-0 flex items-center gap-x-0.5 w-full">
                                                    <button
                                                        aria-controls={`collapse-sub-${item.id}`}
                                                        aria-expanded={expandedNodes[`sub-${item.id}`] || false}
                                                        onClick={() => toggleNode(`sub-${item.id}`)}
                                                        className="hs-accordion-toggle ps-1 flex justify-center items-center rounded-md focus:outline-none"
                                                    >
                                                        {expandedNodes[`sub-${item.id}`] ? (
                                                            <IoMdArrowDropdown size={18} />
                                                        ) : (
                                                            <IoMdArrowDropright size={18} />
                                                        )}
                                                    </button>
                                                    <div className="grow hs-accordion-selectable rounded-md cursor-pointer">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="text-xs text-blue-600 font-semibold">
                                                                    {item.subHeading}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {expandedNodes[`sub-${item.id}`] && (
                                                    <div
                                                        id={`collapse-sub-${item.id}`}
                                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                                        role="group"
                                                    >
                                                        <table className="mt-2 w-full text-xs text-left text-gray-500">
                                                            <tbody>
                                                                {item.arr.map((detail) => (
                                                                    <tr key={detail.id} className="border-b cursor-pointer">
                                                                        <th className="font-medium text-[11px] py-0.5 min-w-[7rem] border border-gray-200">
                                                                            {detail.systemStatus}
                                                                        </th>
                                                                        <td className="px-1 min-w-[6rem] border border-gray-200">
                                                                            {detail.instruments}
                                                                        </td>
                                                                        <td className="px-1 min-w-[6rem] border border-gray-200">
                                                                            {detail.nodeType}
                                                                        </td>
                                                                        <td className="px-1 min-w-[6rem] border border-gray-200">
                                                                            {detail.nodeLoc}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Table
