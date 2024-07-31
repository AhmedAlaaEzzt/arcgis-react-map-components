import "./style.css";
export function CustomWidget(props: { id: string; text: string }) {
  const { id, text } = props;
  return (
    <div className="customWidget text" id={id}>
      {text}
    </div>
  );
}
