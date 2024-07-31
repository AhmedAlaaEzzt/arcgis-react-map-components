export function CustomWidget(props: { id: string; text: string }) {
  const { id, text } = props;
  return <div id={id}>{text}</div>;
}
