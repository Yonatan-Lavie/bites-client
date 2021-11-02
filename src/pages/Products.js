import React, { useEffect, useState } from 'react';
import { Product } from '../components/Product';

const genarateData = () => {
  var list = [];
  for (var i = 0; i <= 10; i++) {
    list.push(i);
  }
  return list.map((item, key) => <Product key={key} />);
};
export const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(genarateData());
  }, []);
  return <div>{data}</div>;
};
