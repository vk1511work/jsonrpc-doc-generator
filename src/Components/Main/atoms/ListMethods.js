import React from "react";
import {Link} from 'react-scroll'
const ListMethods = (props) => {
    const {methods, className = "", type = "method"} = props

    return (
        <ul className={`content__server_methods ${className}`}>
            {
                methods.map((method, index) =>
                    <li key={`list_${method.name}-method`}
                        className={"content__server_method link"}>
                        <Link to={type === "method" ? method.name: method.id}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={500}
                              activeClass={"active"}
                        >
                            {method.name}
                            {index === methods.length - 1 ? "." : ";"}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default ListMethods;