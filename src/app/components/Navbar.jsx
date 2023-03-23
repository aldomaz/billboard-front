"use client";

import { getBackgroundColors } from "../../services/client-side/navbarServices";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {

    const router = useRouter();

    const auth = () => {
        const token = sessionStorage.getItem("token");

        if(!token){
            router.push('/login');
        }
    }

    useEffect(() => {
        auth();
    }, []);

    const logout = () => {
        sessionStorage.clear();
        router.push('/login');
    }

    return (
        <header>
            <nav className={`nav`}>
                <button
                    className="logout_button"
                    onClick={() => logout()}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
