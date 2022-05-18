import { useEffect } from "react";
import { useState } from "react";
export const useLoading = (props: Array<any>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.length > 0) {
      setLoading(false);
    }
  }, [props]);

  return loading;
};
