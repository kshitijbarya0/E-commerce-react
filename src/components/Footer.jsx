import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Copyright © 2023 ❤️ {" "}
              <a  href="https://kshitijbarya0.github.io/PersonalPortfolio/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Kshitij Kishore</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/kshitijbarya0" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
