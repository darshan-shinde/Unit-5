import {Link} from "react-router-dom";
import "./all.css";

const Navbar = () => {
    const nav = [
        {title:"home" , to:"/"},
        {title:"Products" , to:"/Products"},
        {title:"Cart" , to:"/Cart"},
    ];
    return (
       <div className="main">
           <div className="left">Darshan Shinde</div>
          <div className="right">
            {nav.map(e => 
               <Link key={e.title} to={e.to} style={{margin:"5px" , TextDecoration: "none"}}>{e.title}</Link>   
              )} 
           </div> 
       </div>
        );
}

export {Navbar}