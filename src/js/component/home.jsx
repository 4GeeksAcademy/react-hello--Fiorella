import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Start Bootstrap
        </a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//Primera card
export const Jumbotron = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">A Warm Welcome</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          libero, magni maxime repellendus reprehenderit nisi placeat a quaerat
          ab est dolorum tenetur temporibus soluta, quis deserunt officiis.
          Sequi, harum laudantium!
        </p>
        <a href="#" className="btn btn-primary">
          Call to action!
        </a>
      </div>
    </div>
  );
};

//cards
export const Card = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={rigoImage} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta a eos voluptatem facere at laudantium mollitia alias, sint est doloremque, aliquid minima aperiam! Reprehenderit sequi dignissimos hic! Culpa, tempora reiciendis.</p>
		<a href="#" className="btn btn-primary">
          Find Out More!
        </a>
	  </div>
    </div>
  </div>
  </div>
  );
};
