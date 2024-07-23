"use client"
import {extendVariants, Button} from "@nextui-org/react";

export const MainButton = extendVariants(Button, {
    variants: {
        color: {
            primary: "bg-[#8b5cf6] text-[#735480]",
        },
        isDisabled: {
            true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
        },
        size: {
            xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
            md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
            xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
        },
    },
    defaultVariants: {
        color: "primary",
    },
    compoundVariants: [
        {
            isDisabled: true,
            color: "primary",
            class: "bg-[#84cc16]/80 opacity-100",
        },
    ],
});