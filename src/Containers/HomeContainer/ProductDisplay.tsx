import './ProductDisplay.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../Services/Api/ProductService/ProductApi';
import ProductCard from './ProductCard';

interface ProductDisplayProps { }

const ProductDisplay: React.FunctionComponent<ProductDisplayProps> = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res: any) => {
      setProducts(res.data);
      //console.log(products);
    })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="row xs-1 md-2 g-4">
        {products.map((item, index) => {
          return (
            <ProductCard product={item} key={index} />
          )

        })}

      </div>
    </>
  );
}

export default ProductDisplay;