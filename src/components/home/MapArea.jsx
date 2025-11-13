import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export const MapArea = ({ places = [] }) => {
  useKakaoLoader();

  return (
    <div className=" h-[calc(100vh-150px)]">
      <Map
        className="w-full h-full"
        id="map"
        center={
          places.length
            ? { lat: places[0].latitude, lng: places[0].longitude }
            : { lat: 33.450701, lng: 126.570667 }
        }
        level={4}
      >
        {places.map((p, idx) => (
          <MapMarker
            key={idx}
            position={{ lat: p.latitude, lng: p.longitude }}
            title={p.name}
          />
        ))}
      </Map>
    </div>
  );
};
