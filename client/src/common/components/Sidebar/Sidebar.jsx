import "./styles.sass";
import NextermLogo from "@/common/img/logo.png";
import { mdiCog, mdiServerOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {

    const location = useLocation();

    const navigation = [
        { title: "Settings", path: "/settings", icon: mdiCog },
        { title: "Servers", path: "/servers", icon: mdiServerOutline }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    }

    return (
        <div className="sidebar">
            <img src={NextermLogo} alt="Nexterm Logo" />
            <hr />

            <nav>
                {navigation.map((item, index) => (
                    <Link key={index} className={"nav-item" + (isActive(item.path) ? " nav-item-active " : "")}
                          to={item.path}>
                        <Icon path={item.icon} />
                    </Link>
                ))}
            </nav>
        </div>
    );
};