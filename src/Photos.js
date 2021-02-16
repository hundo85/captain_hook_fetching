import React from "react";
import { useFetch } from "./hooks";

function Photos() {
  //We call the useFetch function here with an URL parameter
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  //If the loading state is false the fetch is done and we can use the datas from the fetched json.
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;
