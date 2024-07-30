import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisLegend, ArcgisMap } from "@arcgis/map-components-react";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SizeStop from "@arcgis/core/renderers/visualVariables/support/SizeStop";

import "./App.css";

const template = new PopupTemplate({
  title: "{type} - {mag}",
  content: "type: {type} - Magnitude: {mag}",
});

const simpleMarkerSymbol = new SimpleMarkerSymbol({ color: "green" });

const sizeVariable = new SizeVariable({
  field: "mag",
  stops: [
    new SizeStop({ value: 1, size: "4px" }),
    new SizeStop({ value: 10, size: "40px" }),
  ],
});

const simpleRenderer = new SimpleRenderer({
  symbol: simpleMarkerSymbol,
  visualVariables: [sizeVariable],
});

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        center={[54.9976298, 25.004775094782516]}
        zoom={12}
        onArcgisViewReadyChange={(event) => {
          const map = event.target.map as __esri.Map;

          const geoJSONLayer = new GeoJSONLayer({
            url: "http://localhost:3001/earthquakes",
            popupTemplate: template,
            renderer: simpleRenderer,
          });

          map.add(geoJSONLayer);
        }}
      >
        <ArcgisLegend></ArcgisLegend>
      </ArcgisMap>
    </div>
  );
}

export default App;
