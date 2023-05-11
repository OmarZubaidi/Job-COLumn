import "./map.scss";

const GOOGLE_MAPS_API_KEY = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

interface Props {
  userLocation: string;
  jobLocation: string;
}

export function Map({ userLocation, jobLocation }: Props) {
  return (
    <iframe
      id="map"
      width="95%"
      height="400"
      src={`https://www.google.com/maps/embed/v1/directions?origin=${userLocation}&destination=${jobLocation}&key=${GOOGLE_MAPS_API_KEY}`}
      title="map"
    />
  );
}
