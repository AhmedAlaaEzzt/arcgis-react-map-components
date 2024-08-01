import { useState } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import { CenterComponent } from "./components/CenterComponent/CenterComponent";

import "./App.css";

function App() {
  const [viewState, setViewState] = useState<__esri.MapView>();
  const centerComponentID = "center-component";

  return (
    <>
      <div className="mapDiv">
        <ArcgisMap
          center={[55, 25]}
          zoom={13}
          onArcgisViewReadyChange={(event) => {
            const { view }: { view: __esri.MapView } = event.target;
            view.ui.add(centerComponentID, "bottom-right");
            setViewState(view);
          }}
        ></ArcgisMap>
      </div>
      <CenterComponent id={centerComponentID} view={viewState} />
    </>
  );
}

export default App;
