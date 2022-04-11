import axios from "axios";

const getData = async (url) => {
  const data = await axios(url);
  return data;
};

export default getData;
