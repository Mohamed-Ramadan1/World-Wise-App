import { useEffect, useState } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";

import MapContent from "./MapContent";
import { useUrlPostion } from "../../hooks/useUrlPostion";

const Map = () => {
  const [mapLat, mapLang] = useUrlPostion();
  const [mapPostion, setMapPostion] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

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
