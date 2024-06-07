import React from 'react';

export const Header = (props) => {
  const backgroundImage =
    props.data && props.data.img ? `url(${props.data.img})` : 'none';
  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: backgroundImage,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust the height as needed
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity and color as needed
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : 'Loading'}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              <a href="#about" className="btn btn-custom btn-lg page-scroll">
                Daha Fazlasını Öğren
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
