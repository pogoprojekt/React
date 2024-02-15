import styles from "../../../common/styles/Headers.module.scss";
import { useState } from "react";


const AddProducts = (props) => {
  const [formData, setFormData] = useState({
    prodName: "",
    prodCat: "",
    isProdFood: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();     //bo odświeża stronę

    props.addNewProd(e);
    setFormData({
      prodName: "",
      prodCat: "",
      isProdFood: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // inne niż[name] nie przytrzymuje wartosci
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className={styles.Wrapper}>Add products</div>;
        <label>Nazwa produktu: </label>
        <input
          type="text"
          name="prodName"
          value={formData.prodName}
          onChange={handleChange}
                  />
        <label>Kategoria produktu: </label>
        <input
          type="text"
          name="prodCat"
          value={formData.prodCat}
          onChange={handleChange}
          
        />
        <label>Produkt spożywczy</label>
        <input
          type="checkbox"
          name="isProdFood"
          checked={formData.isProdFood}
          onChange={handleChange}
        />
        <button type="submit">Dodaj produkt</button>
      </form>
    </>
  );
};

export default AddProducts;