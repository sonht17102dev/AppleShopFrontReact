import { useState, useCallback, useEffect } from "react";
import axios from "axios";
export default function useHttp(domainUrl) {
  const [listProduct, setListProduct] = useState([]);
  const getDatas = useCallback(async () => {
    const results = await axios.get(domainUrl);
    setListProduct(results.data);
  }, [domainUrl]);
  useEffect(() => {
    getDatas();
  }, [getDatas]);

  return listProduct;
}
