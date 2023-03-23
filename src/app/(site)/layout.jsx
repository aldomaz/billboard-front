import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SiteLayout({ children }) {

    return (
        <div id="container">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}
