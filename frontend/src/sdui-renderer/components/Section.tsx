import { SDUIRendererProps } from "../../common/common.type";
import SDUIRenderer from "../SDUIRenderer";

function Section(props: SDUIRendererProps) {
  const { data } = props;
  return (
    <section style={data.styles}>
      {data.children.map((child) => (
        <SDUIRenderer key={child.id} data={child} />
      ))}
    </section>
  );
}

export default Section;
