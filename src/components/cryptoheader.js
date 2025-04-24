import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRandomFields } from '../slice/cryptoSlice.js';
import CryptoRow from './cryptodata';


const CryptoTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crypto.data);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateRandomFields());
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);
  

  return (
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-100">
        <tr>
          <th></th>
          <th>#</th><th>Name</th><th>Price</th>
          <th>1h %</th><th>24h %</th><th>7d %</th>
          <th><div className='i-head'><p>Market Cap</p><img  className='i-icon' src='/i-icon.png' alt='information'/></div></th>
          <th><div className='i-head'><p>Volume (24h)</p><img  className='i-icon' src='/i-icon.png' alt='information'/></div></th>
          <th><div className='i-head'><p>Circulating Supply</p><img  className='i-icon' src='/i-icon.png' alt='information'/></div></th>
          <th>Last 7 Days</th>
        </tr>
      </thead>
      <tbody>
        {data.map((asset, index) => <CryptoRow key={asset.id} asset={asset} index={index + 1} />)}
      </tbody>
    </table>
  );
};

export default CryptoTable;