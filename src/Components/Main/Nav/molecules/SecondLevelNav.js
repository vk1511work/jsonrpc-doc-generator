import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Link, scroller} from 'react-scroll'
import NavElement from "./NavElement";
const SecondLevelNav = (props) => {
    const {item, handlerClickButton, setActiveLevel, level} = props
    const location = useLocation();
    const [activeCont, setActiveCont] = useState(false)

    const clickSecondElement = () => {
        const locationCheck = location.pathname === item?.url

        if (locationCheck) {
            setActiveCont(!activeCont)
        } else {
            handlerClickButton()
            setActiveCont(true)
        }
    }

    useEffect(() => {
        if (item.schema?.methods.find(item => item?.name === location?.hash.substring(1))) {
            setActiveCont(true)
            setTimeout(()=> {
                scroller.scrollTo(location?.hash.substring(1), {
                    duration: 200,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                    offset: -80,
                });
            },10)
        }
    }, []);


    return (
        <React.Fragment>
            <NavElement item={item}
                        setActiveLevel={setActiveLevel}
                        level={level}
                        handlerClickButton={clickSecondElement}
                        children={
                            <ul className={`nav__link nav__category ${activeCont ? "active" : ""}`}>
                                {
                                    item.schema?.methods?.map(el =>
                                        <Link key={`${el.name}-method`}
                                              if={`${el.name}-link`}
                                              className={`nav__link nav__category_link nav__category_link-method`}
                                              to={el.name}
                                              spy={true}
                                              smooth={true}
                                              offset={-80}
                                              duration={500}
                                              activeClass={"active"}
                                              onClick={handlerClickButton}
                                              hashSpy
                                        >
                                            {el.name}
                                        </Link>
                                    )
                                }
                            </ul>
                        }
            />
        </React.Fragment>
    )
}

export default SecondLevelNav;