import Product from '../components/product';
import DataService from '../services/dataService';
import './catalog.css';
import { useEffect, useState } from 'react'; //this are the react hooks

function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    loadCatalog();
    console.log('component loaded');
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    console.log(prods);
    setProducts(prods);
  }

  return (
    <div className="catalog">
      <h1>Check out our {products.length} new products</h1>
      {products.map((p) => (
        <Product data={p} />
      ))}
    </div>
  );
}

export default Catalog;
