import React from 'react';

interface ErrorProps {
    message: string;
    title?: string;
    path?: string;
}

export default function ErrorPage(error: ErrorProps) {

    return <>
        {error.title || "Oooops"} {error.message} {error.path}
    </>;
}