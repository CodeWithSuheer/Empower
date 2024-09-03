import React, { useState } from 'react'
import Table from '../../components/Table';
import Table2 from '../../components/Table2';
import Table3 from '../../components/Table3';

const D_Table = () => {
    const [showData, setShowData] = useState(true);

    const handleShow = () => {
        setShowData(!showData);
    }

    return (
        <>
            <section className='w-full px-4 pt-2 pb-6'>
                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <div className="summary_heading font-bold text-gray-600 text-sm">
                        Table Widgets
                    </div>

                    <div onClick={handleShow} className="icon text-[#036A79] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-5 ${!showData ? "-rotate-180" : ""}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>

                    </div>
                </div>

                <p className='mt-1.5 h-px w-full bg-gray-400'></p>

                {/* TABLES */}
                {showData && (
                    <div className="mt-4 pl-4 pb-6 flex justify-start gap-x-4 overflow-x-auto custom-scrollbar">
                        <Table />
                        <Table2 />
                        <Table3 />
                    </div>

                )}
            </section >
        </>
    )
}

export default D_Table;