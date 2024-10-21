import React, { useState } from 'react';
import priceListData from '../../../fakeData/priceListData'; // Make sure this is the correct path
import { useTranslation } from 'react-i18next';

const PriceListArea = () => {
   const [searchQuery, setSearchQuery] = useState(''); // Track search input
   const { t } = useTranslation(); // Translation hook

   // Function to handle search input change
   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   // Filter priceListData based on search query
   const filteredData = priceListData.filter(item => {
      const searchTerm = searchQuery.toLowerCase();
      return item.label.toLowerCase().includes(searchTerm);
   });

   return (
      <div className="container mt-4" style={{ maxWidth: '1200px' }}>
         {/* Search input */}
         <div className="row mb-4">
            <div className="col-12">
               <input
                  type="text"
                  placeholder={t('Որոնում․․․')}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="form-control"
               />
            </div>
         </div>

         {/* Filtered price list data */}
         <div className="row">
            {filteredData.map((item, index) => (
               <div key={index} className="col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                     <div className="card-body">
                        <h5 className="card-title">{item.label}</h5>
                        <p className="card-text">
                           {t('Արժեք')}: <span style={{ fontWeight: 'bold' }}>{item.value} {t('AMD')} </span>
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Display a message if no results are found */}
         {filteredData.length === 0 && (
            <p>{t('No data found for')} "{searchQuery}".</p>
         )}
      </div>
   );
};

export default PriceListArea;
