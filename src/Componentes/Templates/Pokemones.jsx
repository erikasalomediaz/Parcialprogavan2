import React from 'react'
import {   Link} from "react-router-dom";


export default function Pokemones(props){


const item = props.props;



        return (
         
            <div className="container" style={{width: '25rem'}}
             >
                <ul className="list-group" >
                    <li className="list-group-item" style={{height: '2,1rem'}}>
                        {item.name} 

                        {<Link to={`/Detalle/${item.url.split('/')[item.url.split('/').length-2]}`}> Detalle</Link>}
                        {<Link to={`/Moves/${item.url.split('/')[item.url.split('/').length-2]}`}> Moves</Link>}
                    </li>
                </ul>
            
            </div>

        )
   
    

}