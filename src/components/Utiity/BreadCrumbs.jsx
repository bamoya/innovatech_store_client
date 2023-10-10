import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const BreadCrumbs = (prev) => {
    const locations = useLocation().pathname.split('/').slice(1)
   
    return (
        <div class="breadcrumbs text-xl text-gray-600 hover:text-gray-800  font-semibold  mb-5">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                {locations?.map( (item) => (
                    <li>
                        <Link
                        to={"/" + locations?.slice(0,locations.indexOf(item)+1).join('/')}>
                            {item}
                        </Link>
                    </li>
                ))}
                {/* <li>{locations && locations[-1]}</li> */}
            </ul>
        </div>
    )
}

export default BreadCrumbs