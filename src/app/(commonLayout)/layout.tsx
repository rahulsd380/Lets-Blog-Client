import { ReactNode } from 'react';
import Footer from '@/Components/Shared/Footer/Footer';
import Navbar from '@/Components/Shared/Navbar/Navbar';
import "../../app/globals.css";

const HomeLayout = ({children} : {children:ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default HomeLayout;