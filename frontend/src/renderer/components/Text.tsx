import { RendererProps } from "../../common/common.type";

function Text(props: RendererProps) {
  const { data } = props;
  return <p style={data.styles}>{data.content}</p>;
}

export default Text;
