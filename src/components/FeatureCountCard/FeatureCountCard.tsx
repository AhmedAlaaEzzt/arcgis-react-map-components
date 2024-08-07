import { useEffect, useState } from "react";
import "./feature-count-card.css";
export const FeatureCountCard = (props: {
  title: string;
  view: __esri.MapView;
}) => {
  const { title, view } = props;
  const featureCountCardID = "featureCountCard";
  const [layerFeaturesCount, setLayerFeaturesCount] = useState<number | string>(
    "-"
  );

  useEffect(() => {
    const peopleGeojson = view.map.findLayerById(
      "earthquakesGeoJSONLayer"
    ) as __esri.GeoJSONLayer;

    const updateFeatureCount = async () => {
      if (peopleGeojson) {
        const featureCount = await peopleGeojson.queryFeatureCount();
        setLayerFeaturesCount(featureCount);
      }
    };

    peopleGeojson.on("refresh", () => {
      updateFeatureCount();
    });

    view.ui.add(featureCountCardID, "bottom-right");
    updateFeatureCount();
  }, [view]);

  return (
    <div id={featureCountCardID} className="feature-count-card">
      <div className="title">{title}</div>

      <div className="item">
        <span className="label">LayerView features:</span>
        <span className="value"> 0</span>
      </div>

      <div className="item">
        <span className="label">Layer Features: </span>
        <span className="value">{layerFeaturesCount}</span>
      </div>
    </div>
  );
};
