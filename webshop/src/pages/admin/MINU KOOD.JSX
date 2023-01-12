import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

function AddProduct() {
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();


    function AddNewProduct() {
        let productsFromFile = localStorage.getItem("product");
        productsFromFile = JSON.parse(productsFromFile) || [];
        const newProduct = {
            "id": Number(idRef.current.value),
            "name": nameRef.current.value,
            "price": Number(priceRef.current.value),
            "image": imageRef.current.value,
            "category": categoryRef.current.value,
            "description": descriptionRef.current.value,
            "active": activeRef.current.checked,


        };
        // Add the new product to the products array
        productsFromFile.push(newProduct);
        productsFromFile = JSON.stringify(productsFromFile);
        localStorage.setItem("product", productsFromFile);

    }

    return (
        <div>
            <div>
                <label>ID</label> <br />
                <input ref={idRef} defaultValue={productCreated.id} type="number" /> <br />
                <label>Name</label> <br />
                <input ref={nameRef} defaultValue={productCreated.name} type="text" /> <br />
                <label>Price</label> <br />
                <input ref={priceRef} defaultValue={productCreated.price} type="number" /> €<br />
                <label>Image</label> <br />
                <input ref={imageRef} defaultValue={productCreated.image} type="text" /> <br />
                <label>Category</label> <br />
                <input ref={categoryRef} defaultValue={productCreated.category} type="text" /> <br />
                <label>Description</label> <br />
                <input ref={descriptionRef} defaultValue={productCreated.description} type="text" /> <br />
                <label>Active</label> <br />
                <input ref={activeRef} defaultChecked={productCreated.active} type="checkbox" /> <br />
            </div>
            <button onClick={AddNewProduct}>Add Product</button>
            <Routes>
                <Route path="admin/add-product" element={<AddProduct />} />
            </Routes>
        </div>
    );
}

export default AddProduct;
