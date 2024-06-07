import React from 'react';

export const Products = (props) => {
  return (
    <div id='products' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Ürünlerimiz</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  <div className='feature-box'>
                    <div className='feature-img' style={{ backgroundImage: `url(${d.img})` }}>
                      <div className='feature-overlay'>
                        <h3>{d.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
