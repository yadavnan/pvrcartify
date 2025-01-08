export default function Button(props) {
  return (
    <div className="button-container">
      <button className="button" onClick={props.btnClick}>
        {props.text}
      </button>
    </div>
  );
}
