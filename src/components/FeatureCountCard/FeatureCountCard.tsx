import "./feature-count-card.css";
export const FeatureCountCard = (props: {
  id: string;
  title: string;
  count: number;
  inViewCount: number;
}) => {
  const { id, title, count, inViewCount } = props;

  return (
    <div id={id} className="feature-count-card">
      <div className="title">{title}</div>

      <div className="item">
        <span className="label">LayerView features:</span>
        <span className="value"> {inViewCount}</span>
      </div>

      <div className="item">
        <span className="label">Layer Features:</span>
        <span className="value"> {count}</span>
      </div>
    </div>
  );
};
