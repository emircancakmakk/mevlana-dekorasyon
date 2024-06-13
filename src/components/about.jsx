import React from 'react';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {' '}
            <div className="img-container">
              <img src="img/about.jpg" className="img-responsive" alt="" />{' '}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Hakkımızda</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph3 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph4 : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: 'translateY(4px)' }}
      >
        <path
          fill="#B90C0A"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
