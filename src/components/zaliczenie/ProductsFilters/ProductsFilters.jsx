import styles from "../../../common/styles/Headers.module.scss";

const ProductsFilters = (props) => {
  const { productsList, foodFilter } = props;

  const categories = Array.from(
    new Set(productsList.map((el) => el.kategoria))
  );

  return (
    <>
      <form onChange={foodFilter}>
        <div className={styles.Wrapper}>Products Filters</div>;
        Wyszukaj po nazwie produktu:
        <input type="text" name="filterName" />
        Kategorie:
        <select name="category">
          <option></option>
          {categories.map((cat) => (
            <option key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <label>
          Tylko produkty spożywcze
          <input type="checkbox" name="isFoodProduct" />
        </label>
      </form>
    </>
  );
};


export default ProductsFilters;