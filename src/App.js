import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./redux/catSlice";

function App() {
  const { cats } = useSelector(state => state.cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Cats gallery</h1>
      <div className="gallery">
        {cats.map(cat => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={cat.image.url}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
