import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";

import MapContent from "./MapContent";

const Map = () => {
  const [mapPostion, setMapPostion] = useState([40, 0]);
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const mapLat = searchParams.get("lat");
  const mapLang = searchParams.get("lng");

  useEffect(() => {
    if (mapLang && mapLat) setMapPostion([mapLat, mapLang]);
  }, [mapLang, mapLat]);

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPostion([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );
  return (
    <MapContent
      mapPostion={mapPostion}
      geolocationPosition={geolocationPosition}
      getPosition={getPosition}
      isLoadingPosition={isLoadingPosition}
    />
  );
};

export default Map;
