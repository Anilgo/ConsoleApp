import { useEffect, useState, Fragment } from 'react';
import './App.css';
import Person from './Components/Person';
import SidebarMenu from './Components/SidebarMenu';
import TopBar from './Components/TopBar';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <TopBar />
            <SidebarMenu />
            <div style={{ marginLeft: '260px' }}>
                <Person />
            </div>
        </div>
    );
}
export default App;