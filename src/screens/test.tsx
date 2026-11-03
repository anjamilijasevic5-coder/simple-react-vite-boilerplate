const products = [
  { title: 'Cabbage', id: 1 }, 
  { title: 'Garlic', id: 2 },  
  { title: 'Apple', id: 3 },   
  { title: 'Banana', id: 4 },
  { title: 'Strawberry', id: 5 },

];
export default function TestScreens() {
const listItems = products.map(product => (
  <li 
    key={product.id} 
    className={product.title.length > 6 ? "text-red-500 font-bold" : "text-green-500 font-bold"}
  >
    {product.title}
  </li>
));

return (
  <ul>{listItems}</ul>
);
}