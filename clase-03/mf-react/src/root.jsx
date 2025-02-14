import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Busqueda from './components/busqueda';
import Clientes from './components/clientes';
import Panel from './components/panel';

export default function Root(props) {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/CRM/">Panel</Link></li>
                        <li><Link to="/CRM/clientes">Clientes</Link></li>
                        <li><Link to="/CRM/busqueda">Busqueda</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/CRM/" element={<Panel />} />
                    <Route path="/CRM/clientes" element={<Clientes />} />
                    <Route path="/CRM/busqueda" element={<Busqueda />} />
                </Routes>
            </div>
        </Router>
    );
}