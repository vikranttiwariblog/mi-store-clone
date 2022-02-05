// here use router
import React from 'react';
import { logo } from "../data/data.json";
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="/">
                        <img id="logoImage" src={logo} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/miphones">Mi Phones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/redmiphones">Redmi Phones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/tv">TV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/laptops">Laptops</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/lifestyle">Fitness & Lifestyle</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/NavbarHome">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/audio">Audio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active clr" to="/accessories">Accessories</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar

// here not use router
// import React from 'react';
// import { logo } from "../data/data.json";
// import '../style/Navbar.css';

// const Navbar = () => {
//     return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand logo" href="/">
//                         <img id="logoImage" src={logo} alt=""/>
//                     </a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/miphones">Mi Phones</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/redmiphones">Redmi Phones</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/tv">TV</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/laptops">Laptops</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/lifestyle">Fitness & Lifestyle</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/home">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/audio">Audio</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active clr" href="/accessories">Accessories</a>
//                             </li>
//                         </ul>
//                         <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-primary" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//     )
// }

// export default Navbar