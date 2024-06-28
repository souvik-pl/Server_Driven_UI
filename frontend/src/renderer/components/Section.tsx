import { RendererProps } from "../../common/common.type";
import Renderer from "../Renderer";

function Section(props: RendererProps) {
  const { data } = props;
  return (
    <section style={data.styles}>
      {data.children.map((child) => (
        <Renderer key={child.id} data={child} />
      ))}
    </section>
  );
}

export default Section;
