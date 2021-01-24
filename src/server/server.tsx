import { Server } from "miragejs";
import shopData from "../data/data.json";

export const createServer = ({ environment = "test" } = {}) => {
  let server = new Server({
    environment,
    routes() {
      this.get("/api/shop-data", (): any => {
        return shopData;
      });
    },
  });
  return server;
};
