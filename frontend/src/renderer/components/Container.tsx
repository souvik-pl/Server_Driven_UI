import { RendererProps } from "../../common/common.type";
import Renderer from "../Renderer";

function Container(props: RendererProps) {
  const { data } = props;
  return (
    <div style={data.styles}>
      {data.children.map((child) => (
        <Renderer key={child.id} data={child} />
      ))}
    </div>
  );
}

export default Container;
