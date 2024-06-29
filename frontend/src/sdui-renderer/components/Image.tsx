import { SDUIRendererProps } from "../../common/common.type";

function Image(props: SDUIRendererProps) {
  const { data } = props;

  return <img style={data.styles} src={data.content} />;
}

export default Image;
