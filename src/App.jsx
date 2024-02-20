import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShoppingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useState } from "react";
import { products } from "../src/common/consts/produkty.js";

function App() {
  const [productList, setProductList] = useState(products);  //do filtorwania
  const [productListToDisplay, setProductListToDisplay] = useState(productList); //lista produktow do wyswietlenia
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddToShoppingCart = (itemToAdd) => {
    shoppingList.push(itemToAdd);
    setShoppingList([...shoppingList]); 
  };

  const handleDeleteFromShoppingCart = (itemIndexToDelete) => {
    shoppingList.splice(itemIndexToDelete, 1);
    setShoppingList([...shoppingList]);
  };

  const handleFoodFilter = (e) => {
    console.log(e.currentTarget.filterName);
    const nameFilter = e.currentTarget.filterName.value.toLowerCase();
    const categoryFilter = e.currentTarget.category.value;
    const isFoodProduct = e.currentTarget.isFoodProduct.checked;

    setProductListToDisplay(
      productList.filter((prod) => {
        const filterData = categoryFilter
          ? prod.kategoria === categoryFilter && prod.nazwa.includes(nameFilter)
          : prod.nazwa.includes(nameFilter);
        if (isFoodProduct) {
          return filterData && prod.produktSpozywczy;
        }
        return filterData;
      })
    );
  };

  const handleAddNewProd = (e) => {
    const productName = e.target.prodName.value;
    const categoryName = e.target.prodCat.value;
    const isFoodProduct = e.target.isProdFood.checked;
    const newProduct = {
      nazwa: productName,
      kategoria: categoryName,
      produktSpozywczy: isFoodProduct,
    };

    productList.push(newProduct);
    setProductList([...productList]);
    setProductListToDisplay([...productList]);
  };
  return (
    <div className={styles.appWrapper}>
    <AddProducts addNewProd={handleAddNewProd}  />
    <ProductsFilters 
    productsList={productList}
    foodFilter={handleFoodFilter}/>
      <div className={styles.columnsWrapper}>
        <ProductsList 
        productsList={productListToDisplay}
        addProdToCart={handleAddToShoppingCart}/>
        <ShoppingList 
        shoppingList={shoppingList}
        deleteProd={handleDeleteFromShoppingCart}/>
 
      </div>
      
    </div>
  );
}

export default App;