export const FeatureCountCard = (props: {
  title: string;
  count: number;
  inViewCount: number;
}) => {
  const { title, count, inViewCount } = props;

  return (
    <div className="featureCountCard">
      <h2>{title}</h2>
      <p>Total Features: {count}</p>
      <p>Features in View: {inViewCount}</p>
    </div>
  );
};
