import React, {useRef, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const NavElement = (props) => {
    const {item, children, level, handlerClickButton, setActiveLevel} = props
    const classLevel = level === "first" ? "nav__link_title" : "nav__link nav__category_link"

    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const locationCheck = location.pathname === item?.url
        if (locationCheck && level === "first") {
            setActiveLevel("")
        } else if (locationCheck && level === "second") {
            setActiveLevel(navRef.current.innerHTML)
        }
    }, [location.pathname]);

    return (
        <li className={"nav__link"}>
            <NavLink className={({ isActive }) => isActive ? `${classLevel} active` : classLevel}
                     id={`category-${item.id}`}
                     to={item.url}
                     onClick={handlerClickButton}
                     ref={navRef}
                     exact
            >
                {item.name}
            </NavLink>
            {children}
        </li>
    )
}

export default NavElement;