import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";


function EditProduct() {

  const [DbProducts, setDbProducts] = useState([]); // peab olema kõige üleval muidu error

  const { productId } = useParams();
  const [idUnique, setIdUnique] = useState(true);
  const productFound = DbProducts.find(element => element.id === Number(productId));
  const index = DbProducts.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    fetch(config.productsDbUrl1)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
      });
  }, []);

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }

    DbProducts[index] = updatedProduct;
    navigate("/admin/maintain-product");
  }
  const checkIdUniqueness = () => {
    const found = DbProducts.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }


  return (
    <div>
      {productFound !== undefined &&
        <div>
          {idUnique === false && <div>ID not unique!</div>}
          <label>ID</label> <br />
          <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
          <label>Name</label> <br />
          <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
          <label>Price</label> <br />
          <input ref={priceRef} defaultValue={productFound.price} type="number" /> €<br />
          <label>Image</label> <br />
          <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
          <label>Category</label> <br />
          <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
          <label>Description</label> <br />
          <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
          <label>Active</label> <br />
          <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
          <button disabled={idUnique === false} onClick={changeProduct}>Save edit</button>
        </div>}
      {productFound === undefined && <div>Toodet ei leitud</div>}
    </div>

  )

}

export default EditProduct


//KODUNE FOR 11 JAN : AddProduct, SingleProduct, EditProduct eesti keeles

/* //EditProduct

//SingleProduct -- koju
//1. URLis muutuja /:id alsuel
//2. Kust siia lehele satun, pean tegema <Link to="" ning saaatma urli sisse muutuja */
/* //       element.id      (Link osas import)
//3. useParams abil võtan selle muutuja siia faili (useParams osas import)
//4. võtan kõik tooted  (ehk teen productsFormFile osas importi)
//5. otsin üles õige toote --- leitudToode= tooted[index];
//       nüüd kasutan viisin -- leitudToode= toode.find(element => element.id === urlId)
//6. urlis asuvad muutujad on alati sõnad ehk urlId on sõna aga element.id alati numbrid
//       pean tegema teisenduse, mis muudab sõna numbriks.
//7. kuvan välja HTMLis leitudToode.id ja leitudToode.name jne.abs
//8. kontroll, et kui ei leitud üles, siis näita "Toodet ei leitud", mitte ära mine errorisse

//AddProduct - jääb koju

//9. 7x refi: idRef, nameRef, priceRef jne
//10. 7x labeli ja inputi ja kõik ref-d sisestame inputi sisse
//11. teeme nupu ja seome funktsiooniga
//12. seosme kõik refid kokku üheks objektiks, stiilis :{id: idRef.current.value, name: nameRef.......}
//13. .push ühtseks objektiks tehtud toode


//Edits:
//13. paneme kõikide inputide sisse defaultValue=""
//14. otsime üles õige järjekorranumbri, sest AINULT järjekorranumbriga saab muuta ja ka kustutada
//15. asendame toote järjekorranumbri abil: tooted[index] = uusToode; */
