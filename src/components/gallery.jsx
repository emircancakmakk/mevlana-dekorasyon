import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/gallery/01.jpg", title: "Fotoğraf 1" },
    { thumb: "img/gallery/02.jpg", title: "Fotoğraf 2" },
    { thumb: "img/gallery/03.jpg", title: "Fotoğraf 3" },
    { thumb: "img/gallery/04.jpg", title: "Fotoğraf 4" },
    { thumb: "img/gallery/05.jpg", title: "Fotoğraf 5" },
    { thumb: "img/gallery/06.jpg", title: "Fotoğraf 6" },
    { thumb: "img/gallery/07.jpg", title: "Fotoğraf 7" },
    { thumb: "img/gallery/08.jpg", title: "Fotoğraf 8" },
    { thumb: "img/gallery/09.jpg", title: "Fotoğraf 9" },
    { thumb: "img/gallery/10.jpg", title: "Fotoğraf 10" },
    { thumb: "img/gallery/11.jpg", title: "Fotoğraf 11" },
    { thumb: "img/gallery/12.jpg", title: "Fotoğraf 12" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeri</h2>
          <p>Depomuz ve geniş ürün yelpazemiz hakkında bilgi edinin. Yüksek kaliteli ürünlerimizi en iyi şekilde sunmak için modern depolama çözümlerimizle hizmetinizdeyiz.
          </p>
        </div>
        <div className="row">
          <div className="gallery-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 no-padding">
                <div className="gallery-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />
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
    </div>
  );
};
