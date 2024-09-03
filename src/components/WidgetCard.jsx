import React from 'react'
import data from "../data/WidgetData";

const WidgetCard = () => {
    return (
        <>
            {data.map((data) => (
                <div key={data?.id} className="box bg-white shadow p-3 min-h-[11rem] rounded-sm">
                    <div className="top flex">
                        <div className="icons">
                            {data?.icons}
                        </div>
                        <div className="w-full title_detail text-center">
                            <h3 className='text-md font-semibold'>{data?.title}</h3>
                            <p className='text-xs text-gray-800 line-clamp-1'>{data?.desc}</p>
                        </div>
                    </div>

                    <p className='mt-1.5 h-px w-full bg-gray-400'></p>


                    <div className="mt-1 details text-xs">
                        {data.arr.map((detail) => (
                            <div className="mb-1 line flex justify-between items-center">
                                <div className="text">{detail.text}</div>
                                <div className="number font-semibold">{detail.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default WidgetCard
