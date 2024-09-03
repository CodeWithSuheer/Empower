import React from 'react'
import data from "../../data/HeaderData";


const D_Header = () => {
    return (
        <>
            <section className='w-full px-4 py-4'>
                <div className="flex justify-between items-center">

                    {/* TITLE */}
                    <div className="title flex justify-center items-center gap-x-2">
                        <div className="logo text-[#036A79]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>

                        </div>
                        <div className="title_slogan">
                            <h2 className='text-2xl text-[#036A79] font-bold'>
                                Empower<sup className='text-[10px]'> TM</sup> LMS
                            </h2>
                            <p className='-mt-1 text-xl text-gray-500'>Lab Management System</p>
                        </div>
                    </div>

                    {/* TABS */}
                    <div className="tabs mt-2">
                        <div className="flex gap-x-5 justify-center">
                            {data?.map((data) => (
                                <div key={data?.id} className='tab text-center max-w-[5.2rem] mx-auto cursor-pointer'>
                                    <div className="box bg-[#036A79] text-gray-100 ">
                                        <div className="icon p-3">
                                            {data?.icons}
                                        </div>
                                    </div>
                                    <p className='text-[12px] text-gray-700 font-medium text-wrap'>{data?.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default D_Header
