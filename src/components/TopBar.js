import React from 'react';
import foto from '../assets/images/Julieta.jpg';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						

				

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Julieta Ventre</span>
								<img className="img-profile rounded-circle" src={foto} alt="Julieta Ventre - Alumna de DH" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;