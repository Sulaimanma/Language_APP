import { pcccData } from "./pccc";
import React from "react";

export default function Location() {
  const geoJson = pcccData.map(place => {
    return {
      geometry: {
        type: "Point",
        coordinates: [parseFloat(place.field6), parseFloat(place.field5)],
      },
      type: "Feature",
      properties: {
        site_name: place.field2,

        attribute: place.field3,
      },
    };
  });

  console.log(geoJson);
  return <div></div>;
}
