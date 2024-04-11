import React, {useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import { scrollSpy } from 'react-scroll';

import {constantRoute} from '../../schema/constantRoute';

import CreateDomElement from './CreateDomElement';
import NavBar from './Nav/NavBar';
import ScrollTopButton from "./atoms/ScrollTopButton";
import {scrollUp} from "../../utils/processing_index";
import NotFound from "./NotFound";
import {TITLE} from "../../constants/text";

const Main = () => {
    const location = useLocation();

    useEffect(() => {
        scrollSpy.update();
        scrollUp()
    }, [location.pathname]);

    return (
        <main className={"main-container"}>
            <div className={"main-container__wrapper"}>
                <NavBar />
                <Switch>
                    {
                        constantRoute.map((item, index) =>
                            item?.array.length === 0 && item.schema !== null ?
                                <Route key={`${item.id}_route${index}`} exact path={item?.url}>
                                    <CreateDomElement schema={item?.schema} id={item?.id} applicability={item}/>
                                </Route> :
                                item?.array.length > 0 ? item?.array.map((el, index) =>
                                    <Route key={`${el.id}_route${index}`} exact path={el?.url}>
                                        <CreateDomElement schema={el?.schema} id={el?.id} applicability={item}/>
                                    </Route>
                                ) : <Route key={`${item.id}_route${index}`} exact path={item?.url} component={item.component}></Route>
                        )
                    }
                    <Route><NotFound/></Route>
                </Switch>
                <ScrollTopButton />
            </div>
        </main>
    )
}

export default Main