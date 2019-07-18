import { useState, useEffect } from "react";

import { fetchUrl } from "../utils";
import { ROOT_API } from "../constants";

export default countryCode => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function fetchRegions() {
      if (countryCode != null) {
        setLoading(true);
        const data = await fetchUrl(`${ROOT_API}regions/${countryCode}`);
        setData(data.regions);
        setLoading(false);
      }
    }
    fetchRegions();
  }, [countryCode]);
  return [data, loading];
};
