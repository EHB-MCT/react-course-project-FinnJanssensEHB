import { useEffect } from "react";
import { useState } from "react";
export const useLoading = (props: unknown) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading: ", loading);
    setLoading(!Boolean(props));
  }, [props]);

  return loading;
};
