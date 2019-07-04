import { useState, useEffect } from "react";

import { fetchUrl } from "../utils";
import { ROOT_API } from "../constants";

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      const data = await fetchUrl(`${ROOT_API}countries`);
      setData(data.countries);
      setLoading(false);
    }
    fetchCountries();
  }, []);
  return [data, loading];
};
