import React, { useState } from 'react'


const Table2 = () => {

    return (
        <>
            <div className="table bg-white py-2 px-2 rounded-md shadow">
                <h2 className="font-semibold text-sm text-gray-900">Running Empower Systems</h2>

                <div className="overflow-x-auto">
                    <table className="mt-2 w-full text-xs text-left text-gray-500">
                        <thead className="text-[11px] text-gray-600">
                            <tr>
                                <th className="px-1 py-0.5 min-w-[7rem] border border-gray-200" scope="col">
                                    System
                                </th>
                                <th className="px-1 py-0.5 min-w-[6rem] border border-gray-200" scope="col">
                                    Node Name
                                </th>
                                <th className="px-1 py-0.5 min-w-[8rem] border border-gray-200" scope="col">
                                    Running for Status
                                </th>
                                <th className="px-1 py-0.5 min-w-[6rem] border border-gray-200" scope="col">
                                    Project
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b cursor-pointer">
                                <th className="font-medium text-[11px] px-1 py-0.5 min-w-[7rem] border border-gray-200">
                                    KKNC20ASCON
                                </th>
                                <td className="px-1 min-w-[6rem] border border-gray-200">
                                    VLace3mg
                                </td>
                                <td className="px-1 min-w-[8rem] border border-gray-200">
                                    JASNC_3245
                                </td>
                                <td className="px-1 min-w-[6rem] border border-gray-200">
                                    Connect
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div >
        </>
    )
}

export default Table2;
