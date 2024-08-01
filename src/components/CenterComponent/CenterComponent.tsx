import { useEffect, useState } from "react";
import "./center-component.css";

export const CenterComponent = (props: {
  id: string;
  view: __esri.MapView | undefined;
}) => {
  const { id, view } = props;
  const [center, setCenter] = useState("Not Available");

  useEffect(() => {
    if (view) {
      const { latitude, longitude } = view.center;
      setCenter(`${longitude.toFixed(4)}, ${latitude.toFixed(4)}`);
    }
  }, [view]);

  return (
    <div id={id} className="center-component">
      Center: <span>{center}</span>
    </div>
  );
};
