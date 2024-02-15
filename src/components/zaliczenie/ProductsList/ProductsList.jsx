import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

const ProductsList = (props) => {
  const { productsList, addProdToCart } = props;
  return (
    
    <div className={commonColumnsStyles.App}> 
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        {productsList.map((prod) => (
          
          <li key={prod.nazwa} onClick={() => addProdToCart(prod)}>
            {prod.nazwa}
          </li>
          
        ))}
      </header>
    
    </div>
  );
}

export default ProductsList;
