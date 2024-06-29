import { SDUIRendererProps } from "../../common/common.type";
import SDUIRenderer from "../SDUIRenderer";

function Container(props: SDUIRendererProps) {
  const { data } = props;
  return (
    <div style={data.styles}>
      {data.children.map((child) => (
        <SDUIRenderer key={child.id} data={child} />
      ))}
    </div>
  );
}

export default Container;
