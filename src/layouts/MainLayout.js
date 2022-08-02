import React from "react";
import Navbar from "../components/Navbar";
export default function MainLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
}
