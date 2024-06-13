import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const Products = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: 'img/products/1.jpg', title: 'Hettich' },
    { thumb: 'img/products/2.jpg', title: 'Hettich' },
    { thumb: 'img/products/3.jpg', title: 'Hettich' },
    { thumb: 'img/products/4.jpg', title: 'Hettich' },
    { thumb: 'img/products/5.jpg', title: 'Hettich' },
    { thumb: 'img/products/6.jpg', title: 'Hettich' },
    { thumb: 'img/products/7.jpg', title: 'Hettich' },
    { thumb: 'img/products/8.jpg', title: 'Hettich' },
    { thumb: 'img/products/10.jpg', title: 'Hettich' },
    { thumb: 'img/products/11.jpg', title: 'Hettich' },
    { thumb: 'img/products/13.jpg', title: 'Hettich' },
    { thumb: 'img/products/15.jpg', title: 'Hettich' },
  ];

  const images = data.map((obj) => obj.thumb.replace('-small', '-large'));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="products" className="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#B90C0A"
          fill-opacity="1"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149.3C672,171,768,181,864,186.7C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="section-title">
          <h2>Ürünlerimiz</h2>
          <p>
            Kaliteli ve dayanıklı mobilya aksesuarları ile ev ve iş yerlerinize
            estetik ve fonksiyonel çözümler sunuyoruz. Kapak menteşeleri,
            çekmece rayları ve daha fazlası, geniş ürün yelpazemiz ile sizlere
            en iyi hizmeti sunmak için burada.
          </p>
        </div>
        <div className="row">
          <div className="products-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 no-padding"
              >
                <div className="products-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img
                      src={thumb}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ transform: 'translateY(4px)' }}>
        <path
          fill="#333"
          fill-opacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,277.3C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
