import { useEffect, useState } from "react";

const useFetching = (url, value) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(url);
        if (!res.ok || !url) {
          throw new Error("No data match");
        }
        const dataRes = await res.json();
        setData(dataRes);
      } catch (err) {
        setData([]);
        console.log(err.message);
      }
    })();
  }, [url, value]);

  return {
    data,
  };
};

export default useFetching;
