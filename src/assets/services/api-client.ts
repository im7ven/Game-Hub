import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f3bce2ca39e49b68dee4b11d1d77aa1",
  },
});
