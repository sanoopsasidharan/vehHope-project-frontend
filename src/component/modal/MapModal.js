import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "./MapModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MapModal({ handleLandLongSetting, lantitudeState, longitudeState }) {
  const [openMap, setOpenMap] = useState(false);
  const [viewPort, setViewPort] = useState({
    longitude: longitudeState,
    latitude: lantitudeState,
    zoom: 4,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    gettingLocation();
    // alert("getting user data");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  function gettingLocation() {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
  }

  const handleGettingPossition = (e) => {
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
    handleLandLongSetting(e.lngLat.lat, e.lngLat.lng);
    alert("set new location");
    setOpenMap(false);
  };

  function successLocation(position) {
    handleLandLongSetting(position.coords.latitude, position.coords.longitude);
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    setTimeout(() => {
      setOpenMap(true);
    }, 1000);
  }

  function errorLocation() {
    handleLandLongSetting(10, 12);
  }

  return (
    <div>
      <Button onClick={handleOpen}>set your location</Button>
      {openMap && (
        <Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="mapModalshowModalsampleDiv">
              <div className="mapModalshowModalDiv">
                <div className="mapModalshowModalcloseButton">
                  <h2 onClick={handleClose}>x</h2>
                </div>
                <ReactMapGl
                  mapboxAccessToken="pk.eyJ1Ijoic2Fub29wc2FzaWRoYXJhbiIsImEiOiJjbDE0d2x4a24wZXBqM2VrYW84Z3p4dWN6In0.lhN0s-umAY4Q2kfSU-wRGA"
                  {...viewPort}
                  // onViewportChange={(newView) => setViewPort(newView)}
                  onClick={handleGettingPossition}
                  style={{ width: 600, height: 400 }}
                  onMove={(evt) => setViewPort(evt.viewPort)}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                  <GeolocateControl trackUserLocation></GeolocateControl>
                  <NavigationControl />
                  {/* <Marker longitude={longitudeState} latitude={lantitudeState}>
                    <p>location</p>
                  </Marker> */}
                </ReactMapGl>
              </div>
            </div>
          </Modal>
        </Box>
      )}
    </div>
  );
}

export default MapModal;
