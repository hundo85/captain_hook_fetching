import { useState, useEffect } from "react";

// Fetch from url function component
function useFetch(url) {
  const [data, setData] = useState([]);
  // the loading states default value is true, until it's not become fetched
  const [loading, setLoading] = useState(true);

  //Async function waits for the json file from the URL
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    // Here comes the datas
    setData(json);

    // We got the fetched json -> loading state becomes false
    setLoading(false);
  }

  //After fetching we set the data state
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };
