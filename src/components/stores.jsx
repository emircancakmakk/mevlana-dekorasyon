import React from 'react';

const stores = [
  {
    name: 'Hepsiburada',
    url: 'https://www.hepsiburada.com/magaza/mevlana-dekorasyon-orman-urunler',
  },
  {
    name: 'Trendyol',
    url: 'https://www.trendyol.com/magaza/mevlana-dekorasyon-orman-urunleri-m-397212?sst=0',
  },
  { name: 'N11', url: 'https://www.n11.com/magaza/mevlanapvchirdavat' },
];

export const Stores = () => {
  return (
    <div id="stores">
      <div className="stores-container">
        <div className="section-title">
          <h2>Mağazalar</h2>
          <p>Sanal mağazalarımıza aşağıdaki bağlantılardan ulaşabilirsiniz.</p>
        </div>
        <div className="stores-buttons">
          {stores.map((store, index) => (
            <a key={index} href={store.url} className="store-button">
              {store.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
