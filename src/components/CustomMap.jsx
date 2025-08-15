import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BottomSheet from './BottomSheet'; // Import komponen BottomSheet
import { GetLocations } from '../data/LocationsData'
import { useTranslation } from "react-i18next";


const mapImage = '/denah_uluwatu.webp';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [20, 20] }); 
    }
  }, [map, bounds]);
  return null;
}

export default function CustomMap({onBottomSheetChange}) {
  const [imageBounds, setImageBounds] = useState(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const markerRefs = {
    atm: useRef(null),
    sunset: useRef(null),
    toilet: useRef(null),
    food: useRef(null),
  };

  useEffect(() => {
    const img = new Image();
    img.src = mapImage;
    img.onload = () => {
      const newBounds = [[0, 0], [img.height, img.width]];
      setImageBounds(newBounds);
    };
    img.onerror = (error) => {
      console.error('❌ Gagal memuat gambar:', error);
      setImageBounds(null);
    };
  }, []);


const handleMarkerClick = (placeData) => {
  setSelectedPlace(placeData);
  setIsBottomSheetOpen(true); // Buka langsung untuk semua device
  onBottomSheetChange?.(true);
};


  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setSelectedPlace(null);
    onBottomSheetChange?.(false); 
  };

  if (!imageBounds) {
    return (
      <div className="flex items-center justify-center min-h-[300px] bg-gray-100 rounded-lg shadow-lg">
        <p className="text-gray-600 text-lg">Loading map...</p>
      </div>
    );
  }

 const locations = GetLocations(imageBounds, t)

  return (
    <div className="w-full h-screen rounded-lg overflow-hidden shadow-lg">
      
      <MapContainer
        crs={L.CRS.Simple}
        bounds={imageBounds}
        zoom={0}
        minZoom={-2.6} 
        maxZoom={2} 
        maxBounds={imageBounds}
        maxBoundsViscosity={1.0}
        style={{
          width: '100%',
          height: '100%',
        
          background: 'linear-gradient(to bottom, #00a2e8,rgb(104, 172, 83))',
          borderRadius: 0 
        }}
        zoomControl={false}
        scrollWheelZoom={true}
        zoomSnap={0.1}
      >
        <ImageOverlay url={mapImage} bounds={imageBounds} />
        <FitBounds bounds={imageBounds} />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.position}
            icon={loc.icon} 
            ref={markerRefs[loc.id]}
            eventHandlers={{
              click: () => handleMarkerClick(loc, markerRefs[loc.id]),
            }}
          >
            
          </Marker>
        ))}
      </MapContainer>

     
      <div className="fixed bottom-6 left-6 z-50 w-40 h-28 md:w-72 md:h-56 z-[998] border-2 border-white shadow-lg rounded overflow-hidden" 
      onClick={togglePopup}>
        <img
          src="/denah_uluwatu.webp"
          alt="Mini Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="fixed top-29 left-6 z-50 z-[998] border-2 border-white shadow-lg rounded-full overflow-hidden" 
      onClick={togglePopup}>
        <img
          src="/mataangin.png"
          alt="Mini Map"
          className="w-[75px] h-[75px] object-cover"
        />
      </div>


      {isPopupOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 bg-opacity-60 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-[90%] p-2">
          
            <img
              src="/denah_uluwatu.webp"
              alt="Full Map"
              className="w-full h-auto rounded"
            />
           
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 hover:bg-opacity-40 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}



      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeBottomSheet}
        title={selectedPlace ? selectedPlace.title : ''}
        images={selectedPlace ? selectedPlace.images : []}
      >
        {selectedPlace ? (
          <div>
            <p className="text-gray-700 mb-2">{selectedPlace.description}</p>
            {selectedPlace.details}
          </div>
        ) : (
          <p>Pilih lokasi di peta.</p>
        )}
      </BottomSheet>
    </div>
  );
}