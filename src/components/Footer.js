import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6>Features</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Cool stuff</a></li>
              <li><a href="#" className="text-decoration-none">Random feature</a></li>
              <li><a href="#" className="text-decoration-none">Team feature</a></li>
            </ul>
          </div>
          <div className="col">
            <h6>Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Resource</a></li>
              <li><a href="#" className="text-decoration-none">Resource name</a></li>
            </ul>
          </div>
          <div className="col">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Team</a></li>
              <li><a href="#" className="text-decoration-none">Locations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
