import { useSearchParams } from "react-router-dom";
const useUrlPostion = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
};

export { useUrlPostion };
