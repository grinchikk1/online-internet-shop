import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get("/data.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default getData;
