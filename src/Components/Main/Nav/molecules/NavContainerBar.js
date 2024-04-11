import React from "react";

import FirstLevelNav from "../molecules/FirstLevelNav";
import SecondLevelNav from "../molecules/SecondLevelNav";
import NavElement from "../molecules/NavElement";

import {constantRoute} from '../../../../schema/constantRoute';
const NavContainerBar = (props) => {

    const {openContainer, handlerClickButton, setActiveSecondLevel} = props

    return (
        <ul className={`nav__container ${ openContainer ? "open" : ""}`}>
            {
                constantRoute.map((item, index) =>
                    item?.array.length > 0 ?
                        <FirstLevelNav key={`link_${item.id}${index}`}
                                       item={item}
                        >
                            <ul className={`nav__category`}>
                                {
                                    item.array.length > 0 ? item.array.map((item, index) =>
                                        <SecondLevelNav key={`category_${item.id}${index}`}
                                                        item={item}
                                                        level={"second"}
                                                        handlerClickButton={handlerClickButton}
                                                        setActiveLevel={setActiveSecondLevel}
                                        />
                                    ) : ""
                                }
                            </ul>
                        </FirstLevelNav> : <NavElement key={`link_${item.id}${index}`}
                                                       item={item}
                                                       level={"first"}
                                                       handlerClickButton={handlerClickButton}
                                                       setActiveLevel={setActiveSecondLevel}
                        />
                )
            }
        </ul>
    )
}

export default NavContainerBar;