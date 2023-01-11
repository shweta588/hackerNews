function Link(props) {
  return <a href={props.url}  style={{textDecoration:"none",color:"black"}}>{props.title}</a>;
}

export default Link;
