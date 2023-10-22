import { Loading } from "pages";
import { useEffect, useState } from "react";

const LoadingonTop = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  return (
    <div className={`overflow  ${loading ? "" : "hidden"}`}>
        <Loading />
      </div>
  )
}

export default LoadingonTop