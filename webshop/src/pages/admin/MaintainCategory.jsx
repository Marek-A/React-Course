import { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";

function MaintainCategory() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoriesDbUrl1)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const addCategory = () => {
    categories.push({ "name": categoryRef.current.value });
    fetch(config.categoriesDbUrl1, { "method": "PUT", "body": JSON.stringify(categories) })
      .then(() => {
        setCategories(categories.slice());
        categoryRef.current.value = "";
      });
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    fetch(config.categoriesDbUrl1, { "method": "PUT", "body": JSON.stringify(categories) })
      .then(() => setCategories(categories.slice()));
  }

  return (
    <div>
      <label>Category name</label><br />
      <input ref={categoryRef} type="text" /><br />
      <button onClick={addCategory}>Add new category</button><br /><br />
      {categories.map((element, index) => <div key={index}>{element.name}<button onClick={() => deleteCategory(index)}>X</button></div>)}
    </div>

  )
}

export default MaintainCategory