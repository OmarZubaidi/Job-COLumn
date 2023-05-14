import './map.scss';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';

interface Props {
  userLocation: string;
  jobLocation: string;
}

export function Map({ userLocation, jobLocation }: Props) {
  return (
    <iframe
      id="map"
      title="map"
      src={`https://www.google.com/maps/embed/v1/directions?origin=${userLocation},UK&destination=${jobLocation},UK&key=${GOOGLE_MAPS_API_KEY}`}
    />
  );
}
