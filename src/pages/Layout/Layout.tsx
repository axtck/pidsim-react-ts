import Topbar from '../../components/Layout/Topbar';
import Sidebar from '../../components/Layout/Sidebar';
import { FunctionComponent } from 'react';
import Routes from '../../routes/Routes';

interface LayoutProps { };

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <>
            <div className="row">
                <Topbar />
            </div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <Routes />
                </div>
            </div>
        </>
    );
}

export default Layout;
