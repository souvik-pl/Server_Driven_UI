import { SDUIRendererProps } from "../../common/common.type";

function Text(props: SDUIRendererProps) {
  const { data } = props;
  return <p style={data.styles}>{data.content}</p>;
}

export default Text;
