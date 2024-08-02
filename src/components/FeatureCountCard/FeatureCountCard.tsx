import "./feature-count-card.css";
export const FeatureCountCard = (props: {
  title: string;
  count: number;
  inViewCount: number;
}) => {
  const { title, count, inViewCount } = props;

  return (
    <div className="feature-count-card">
      <div>{title}</div>
      <div>Layer Features: {count}</div>
      <div>LayerView features: {inViewCount}</div>
    </div>
  );
};
