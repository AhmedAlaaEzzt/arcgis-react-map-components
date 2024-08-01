import "./center-component.css";

export const CenterComponent = (props: { id: string }) => {
  const { id } = props;

  return (
    <div id={id} className="center-component">
      Center:
    </div>
  );
};
