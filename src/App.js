import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ControlSidebar from "./components/ControlSidebar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <Content/>
            <ControlSidebar/>
            <Footer/>
        </div>
    );
}

export default App;
