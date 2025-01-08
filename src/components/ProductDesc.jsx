export default function ProductDesc(props) {
  return (
    <div className="detail-container">
      <h3>{props.title}</h3>
      <p>$ {props.price}</p>
    </div>
  );
}
