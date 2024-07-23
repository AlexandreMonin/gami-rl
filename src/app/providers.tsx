'use client'

import {NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation'
import React from "react";

export function Providers({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            {children}
        </NextUIProvider>
    )
}