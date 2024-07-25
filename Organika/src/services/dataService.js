import axios from 'axios';

let catalog = [
  {
    title: 'Orange',
    category: 'fruit',
    price: 23.0,
    image: 'oranges.jpeg',
    _id: '1',
  },
  {
    title: 'Milk',
    category: 'farm',
    price: 14.56,
    image: 'milk.jpeg',
    _id: '2',
  },
  {
    title: 'Banana',
    category: 'fruit',
    price: 11.14,
    image: 'banana.png',
    _id: '3',
  },
  {
    title: 'Chesse',
    category: 'farm',
    price: 99.99,
    image: 'chesse.png',
    _id: '4',
  },
  {
    title: 'Hoodie',
    category: 'Merchandise',
    price: 60.0,
    image: 'hoodie.jpeg',
    _id: '5',
  },
  {
    title: 'Vitamins',
    category: 'Merchandise',
    price: 25.2,
    image: 'vitamins.png',
    _id: '6',
  },
  {
    title: 'Coffee',
    category: 'Merchandise',
    price: 37.33,
    image: 'coffee.png',
    _id: '7',
  },
];

class DataService {
  async getProducts() {
    // uncomment to use the store without the API
    // return catalog;

    // get products from the API
    let response = await axios.get('http://127.0.0.1:5000/api/products');
    return response.data;
  }

  addProdToCart(product) {
    let cart = this.readCart();

    cart.push(product);

    // save to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  readCart() {
    const cartString = localStorage.getItem('cart'); // strings

    // parse the string to an array
    if (cartString) {
      return JSON.parse(cartString);
    } else {
      return []; // empty cart
    }
  }

  clearClart() {
    localStorage.setItem('cart', '');
  }
}

export default DataService;
