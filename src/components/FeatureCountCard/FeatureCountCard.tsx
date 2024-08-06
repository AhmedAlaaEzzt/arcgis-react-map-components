import "./feature-count-card.css";
export const FeatureCountCard = (props: { id: string; title: string }) => {
  const { id, title } = props;

  return (
    <div id={id} className="feature-count-card">
      <div className="title">{title}</div>

      <div className="item">
        <span className="label">LayerView features:</span>
        <span className="value"> 0</span>
      </div>

      <div className="item">
        <span className="label">Layer Features:</span>
        <span className="value"> 0</span>
      </div>
    </div>
  );
};
