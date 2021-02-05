import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RouteConfig from "./routes";
import { fetchStoreData } from "./store/shop.reducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch]);

  return (
    <section>
      <RouteConfig />
    </section>
  );
}

export default App;
