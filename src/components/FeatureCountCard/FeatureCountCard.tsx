import { useEffect, useState } from "react";
import "./feature-count-card.css";
export const FeatureCountCard = (props: {
  title: string;
  view: __esri.MapView;
}) => {
  const { title, view } = props;
  const featureCountCardID = "featureCountCard";
  const [layerFeaturesCount] = useState<number | string>("-");

  useEffect(() => {
    view.ui.add(featureCountCardID, "bottom-right");
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
