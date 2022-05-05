import { useEffect } from "react";
import { useState } from "react";
export const useLoading = (props: Array<any>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading: ", loading);
    if (props.length > 0) {
      setLoading(false);
    }
    console.log(props);
  }, [props]);

  return loading;
};
