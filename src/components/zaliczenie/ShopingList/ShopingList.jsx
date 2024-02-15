import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import { useState } from "react";

const ShoppingList = (props) => {
  const { shoppingList, deleteProd } = props;
  const [prodStyle, setProdStyle] = useState([]); //id

  const handleRightMouseButtonClick = (event, idx) => {
    event.preventDefault();
    prodStyle[idx] !== "line-through"
      ? (prodStyle[idx] = "line-through")
      : (prodStyle[idx] = "none");
    setProdStyle([...prodStyle]);
  };


  const handleDeleteProd = (idx) => {
prodStyle.splice(idx, 1);
setProdStyle([...prodStyle]);
    deleteProd(idx);

  };
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {shoppingList.map((prod, index) => (
          <li

            style={{
              textDecoration: prodStyle[index] ? prodStyle[index] : "none", //.inculdes(id)
          }}
            // key={index}
            onContextMenu={(e) => handleRightMouseButtonClick(e, index)}
            onClick={() => handleDeleteProd(index)}
          >
            {prod.nazwa}
          </li>
        ))}
      </header>
     
    </div>
  );
}

export default ShoppingList;