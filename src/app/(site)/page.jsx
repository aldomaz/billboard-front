'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
    const router = useRouter();

    const auth = () => {
        const token = sessionStorage.getItem("token");

        if(!token){
            router.push('/login');
        } else {
            router.push('/news');
        }
    }

    useEffect(() => {
        auth();
    }, [])
    
    return (
        <div>
            <title>home</title>
        </div>
    );
};

export default Home;