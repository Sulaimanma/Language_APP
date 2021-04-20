import React, { useContext, useState } from "react"
import { QuizContext } from "../Helpers/Context"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./start.css"
import { TiTick } from "react-icons/ti"
import ReactMapGl, { Marker } from "react-map-gl"
import { PCCC_GeoJson } from "../Helpers/QuestionBank"
export default function Start(props) {
  const { language, setLanguage } = useContext(QuizContext)
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiZ3VuZXJpYm9pIiwiYSI6ImNrMnM0NjJ1dzB3cHAzbXVpaXhrdGd1YjIifQ.1TmNd7MjX3AhHdXprT4Wjg"
  const [viewpoint, setViewpoint] = useState({
    latitude: -24.1268,
    longitude: 151.7441,
    width: "100vw",
    height: "100vh",
    zoom: 6,
  })

  return (
    <div>
      <ReactMapGl
        {...viewpoint}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewpoint) => {
          setViewpoint(viewpoint)
        }}
        mapStyle="mapbox://styles/guneriboi/ckmczv7ag7uhh17rv1v1a60qb"
      >
        {PCCC_GeoJson.features.map((region) => (
          <Marker
            id={region.id}
            latitude={region.geometry.coordinates[1]}
            longitude={region.geometry.coordinates[0]}
          >
            <div>{region.properties.site_name}</div>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  )
}
