import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RouteConfig from "./routes";
import { fetchStoreData, selectStoreData } from "./store/shop.reducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  // const { data, loading } = useSelector(selectStoreData);

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch]);

  // if (loading) return <h1>Loading..................</h1>;

  return (
    <section>
      <RouteConfig />
      {/* <div>
        {data.map((datum: any, index: any) => {
          return <p key={index}>{datum.product_name}</p>;
        })}
      </div> */}
    </section>
  );
}

export default App;
