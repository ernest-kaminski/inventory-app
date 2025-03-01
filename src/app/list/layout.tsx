import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";

export default function ListLayout({children}: {children: ReactNode}){
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}