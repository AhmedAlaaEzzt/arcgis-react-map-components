import { useEffect, useRef } from "react";
import Slider from "@arcgis/core/widgets/Slider";

export const ArcSlider = (props: {
  view: __esri.MapView;
  onThumbDrag?: (event: __esri.SliderThumbDragEvent) => void;
}) => {
  const { view, onThumbDrag } = props;
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sliderRef.current || !view) return;

    const slider = new Slider({
      container: sliderRef.current,
      min: 0,
      max: 10,
      steps: 1,
      values: [0], // Initial value set to 0
      visibleElements: {
        labels: true,
        rangeLabels: true,
      },
    });

    if (onThumbDrag) {
      slider.on("thumb-drag", (event) => {
        onThumbDrag(event);
      });
    }

    view.ui.add(sliderRef.current, { position: "top-left" });

    return () => slider && slider.destroy();
  }, [view, sliderRef, onThumbDrag]);
  return (
    <div
      ref={sliderRef}
      style={{
        width: "200px",
        height: "100px",
      }}
    ></div>
  );
};
