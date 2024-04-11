import React, {useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const FirstLevelNav = (props) => {
    const {item, children} = props
    const navRef = useRef(null);
    const location = useLocation();

    const handleClick = () => {
        navRef.current.classList.toggle("active");
    }

    useEffect(() => {
        const locationCheck = item.url === "" ? item.array.some(el => el.url === location.pathname) : location.pathname === item.url

        if (locationCheck) {
            handleClick()
        }
    }, []);

    return (
        <li className={"nav__link"}>
            <span className={`nav__link_title`}
                  id={`link-${item.id}`}
                  ref={navRef}
                  onClick={handleClick}
            >
                {item.name}
            </span>
            {children}
        </li>
    )
}

export default FirstLevelNav;