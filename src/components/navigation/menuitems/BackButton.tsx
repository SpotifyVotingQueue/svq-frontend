import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton(): JSX.Element {
    let navigate = useNavigate();

    return <>
        <button style={{ height: '5vh', width: '5vh', marginLeft: '2.5vh', marginTop: '2.5vh', display: 'flex' }}
            className="text-primary fill-primary" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 my-auto mr-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
    </>;
}