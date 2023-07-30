import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import styles from "./Map.module.css";
import DetectClick from "./DetectClick";
import ChangeCenter from "./ChangeCenter";
import Button from "../Buttons/Button";

const MapContent = ({
  mapPostion,
  geolocationPosition,
  getPosition,
  isLoadingPosition,
}) => {
  const { cities } = useCities();
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPostion}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

export default MapContent;
