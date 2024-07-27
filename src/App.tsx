import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import PopupTemplate from "@arcgis/core/PopupTemplate";

import "./App.css";

const template = new PopupTemplate({
  title: "{type} - {mag}",
  content: "type: {type} - Magnitude: {mag}",
});

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        onArcgisViewReadyChange={(event) => {
          const map = event.target.map as __esri.Map;

          const geoJSONLayer = new GeoJSONLayer({
            url: "http://localhost:3001/earthquakes",
            popupTemplate: template,
          });

          map.add(geoJSONLayer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
