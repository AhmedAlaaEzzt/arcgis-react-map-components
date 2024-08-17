import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import "./App.css";

const template = new PopupTemplate({
  title: "{type} - {mag}",
  content: "type: {type} - Magnitude: {mag}",
});

const simpleMarkerSymbol = new SimpleMarkerSymbol({ color: "green" });

const simpleRenderer = new SimpleRenderer({
  symbol: simpleMarkerSymbol,
});

const geoJSONLayer = new GeoJSONLayer({
  url: "http://localhost:3001/earthquakes",
  popupTemplate: template,
  renderer: simpleRenderer,
});

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        center={[54.9976298, 25.004775094782516]}
        zoom={12}
        onArcgisViewReadyChange={(event) => {
          const { map }: { map: __esri.Map } = event.target;

          map.add(geoJSONLayer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
