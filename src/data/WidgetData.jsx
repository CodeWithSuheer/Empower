import { PiBeerBottleFill } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";

const data = [
    {
        id: 1,
        title: "Inbox",
        desc: "Pre Config Lab User",
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>,
        arr: [
            {
                id: 1,
                text: "Un-read message",
                value: 126
            },
            {
                id: 3,
                text: "Un-read tasks",
                value: 6
            },
        ]
    },
    {
        id: 2,
        title: "Documents",
        desc: "Connectors",
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        ,
        arr: [
            {
                id: 1,
                text: "In progress",
                value: 0
            },
            {
                id: 2,
                text: "Awaiting signature",
                value: 0
            },
            {
                id: 3,
                text: "Approved",
                value: 0
            },
        ]
    },
    {
        id: 3,
        title: "Samples",
        desc: "Connectors",
        icons: <PiBeerBottleFill size={26} />
        ,
        arr: [
            {
                id: 1,
                text: "Pending",
                value: 0
            },
            {
                id: 2,
                text: "Available",
                value: 0
            },
            {
                id: 3,
                text: "In use",
                value: 0
            },
        ]
    },
    {
        id: 4,
        title: "Requests",
        desc: "Connectors",
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        ,
        arr: [
            {
                id: 1,
                text: "Pending",
                value: 0
            },
            {
                id: 2,
                text: "Available",
                value: 0
            },
            {
                id: 3,
                text: "Completed",
                value: 0
            },
            {
                id: 3,
                text: "Released",
                value: 0
            },
        ]
    },
    {
        id: 5,
        title: "Tests",
        desc: "Connectors",
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>

        ,
        arr: [
            {
                id: 1,
                text: "Assigned to me",
                value: 0
            },
            {
                id: 2,
                text: "Pending",
                value: 0
            },
            {
                id: 3,
                text: "In Progress",
                value: 0
            },
            {
                id: 4,
                text: "Completed",
                value: 0
            },
            {
                id: 5,
                text: "Released",
                value: 0
            },
        ]
    },
    {
        id: 6,
        title: "Submissions",
        desc: "Connectors",
        icons: <RiSendPlaneFill size={26} />
        ,
        arr: [
            {
                id: 1,
                text: "Pending",
                value: 0
            },
            {
                id: 2,
                text: "In Progress",
                value: 57
            },
            {
                id: 3,
                text: "Completed",
                value: 1
            },
            {
                id: 4,
                text: "Closed",
                value: 30
            },
        ]
    },
]

export default data;