export default function ProductImage(props) {
  return (
    <div className="img-container">
      <img src={props.imgURL} alt={props.desc} width={200} />
    </div>
  );
}
