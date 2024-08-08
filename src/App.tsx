import { useState } from "react";

import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SizeStop from "@arcgis/core/renderers/visualVariables/support/SizeStop";
import { ArcgisLegend, ArcgisMap } from "@arcgis/map-components-react";

import { FeatureCountCard } from "./components/FeatureCountCard/FeatureCountCard";
import { ArcSlider } from "./components/ArcSlider/ArcSlider";

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

const geoJSONLayer = new GeoJSONLayer({
  id: "earthquakesGeoJSONLayer",
  url: "http://localhost:3001/earthquakes",
  popupTemplate: template,
  renderer: simpleRenderer,
});

const onThumbDragSlider = (event: __esri.SliderThumbDragEvent) => {
  const { value } = event;

  geoJSONLayer.definitionExpression = `mag >=${value}`;
  geoJSONLayer.refresh();
};

function App() {
  const [mapView, setMapView] = useState<__esri.MapView>();

  return (
    <>
      <div className="mapDiv">
        <ArcgisMap
          basemap={"gray-vector"}
          center={[54.9976298, 25.004775094782516]}
          zoom={15}
          onArcgisViewReadyChange={async (event) => {
            const { map, view }: { map: __esri.Map; view: __esri.MapView } =
              event.target;
            setMapView(view);
            map.add(geoJSONLayer);
          }}
        >
          <ArcgisLegend></ArcgisLegend>
        </ArcgisMap>
      </div>
      {mapView && <FeatureCountCard title="Earthquakes" view={mapView} />}
      {mapView && <ArcSlider view={mapView} onThumbDrag={onThumbDragSlider} />}
    </>
  );
}

export default App;
