import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./start.css";
import { TiTick } from "react-icons/ti";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import { PCCC_GeoJson } from "../Helpers/QuestionBank";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
export default function Start(props) {
  const { language, setLanguage } = useContext(QuizContext);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiZ3VuZXJpYm9pIiwiYSI6ImNrMnM0NjJ1dzB3cHAzbXVpaXhrdGd1YjIifQ.1TmNd7MjX3AhHdXprT4Wjg";
  const [viewpoint, setViewpoint] = useState({
    latitude: -24.173568,
    longitude: 150.15767,
    width: "100vw",
    height: "100vh",
    zoom: 6,
  });

  return (
    <div>
      <ReactMapGl
        {...viewpoint}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewpoint => {
          setViewpoint(viewpoint);
        }}
        mapStyle="mapbox://styles/guneriboi/cknqr5qtp07t517rt8ykm55ri"
      >
        {PCCC_GeoJson.features.map(region => (
          <Marker
            id={region.id}
            latitude={region.geometry.coordinates[1]}
            longitude={region.geometry.coordinates[0]}
          >
            <Link to="/mainmenu">
              <div
                className="markerDiv"
                onClick={() => {
                  setLanguage(region.properties.site_name);
                }}
              >
                <div
                  className="wave"
                  style={{ backgroundColor: `${region.properties.color}` }}
                ></div>
                <div className="LanguageName">
                  {region.properties.site_name}
                </div>
              </div>
            </Link>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  );
}
