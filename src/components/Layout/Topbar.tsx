import { FunctionComponent } from "react";
import { IRouteLink } from "../../types";

interface TopbarProps { };

const Topbar: FunctionComponent<TopbarProps> = () => {
    const routes: IRouteLink[] = [
        {
            label: "Simulator",
            route: "/simulator"
        },
        {
            label: "About",
            route: "/about"
        }
    ];


    /************
    * Render
    ************/
    const navLis = routes.map((r, i) => {
        return <li key={i} className="nav-item"><a className="nav-link" href={r.route}>{r.label}</a></li>
    });

    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/home">pidsim</a>
                <ul className="navbar-nav">
                    {navLis}
                </ul>
            </div>
        </nav>
    );
}

export default Topbar;
