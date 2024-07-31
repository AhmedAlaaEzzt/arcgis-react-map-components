import "./center-component.css";

/**
 * React component that can be used in an ArcGIS JS SDK application.
 * This component dynamically displays the center of the map extent
 * @param {*} view an instance of a `Mapview` or `SceneView`
 * @param {string} id - The `id` of the components's parent HTML div element
 * @returns The components's HTML div
 */
export const CenterComponent = (props: { id: string }) => {
  const { id } = props;

  return (
    <div id={id} className="center-component">
      Center:
    </div>
  );
};
