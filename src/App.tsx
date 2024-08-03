import { useState } from "react";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SizeStop from "@arcgis/core/renderers/visualVariables/support/SizeStop";
import { ArcgisLegend, ArcgisMap } from "@arcgis/map-components-react";

import { FeatureCountCard } from "./components/FeatureCountCard/FeatureCountCard";

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
  url: "http://localhost:3001/earthquakes",
  popupTemplate: template,
  renderer: simpleRenderer,
  definitionExpression: "mag > 6",
  refreshInterval: 0.125,
});

function App() {
  const featureCountCardID = "featureCountCard";
  const [featuresCount, setFeaturesCount] = useState(0);

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
            map.add(geoJSONLayer);
            view.ui.add(featureCountCardID, "bottom-right");
            const featuresCount = await geoJSONLayer.queryFeatureCount();
            setFeaturesCount(featuresCount);
          }}
        >
          <ArcgisLegend></ArcgisLegend>
        </ArcgisMap>
      </div>
      <FeatureCountCard
        id={featureCountCardID}
        title="Earthquakes"
        count={featuresCount}
        inViewCount={0}
      />
    </>
  );
}

export default App;
