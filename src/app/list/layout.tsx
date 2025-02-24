import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";

export default function ContactLayout({children}: {children: ReactNode}){
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}