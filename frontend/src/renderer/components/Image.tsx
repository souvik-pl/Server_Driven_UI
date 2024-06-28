import { RendererProps } from "../../common/common.type";

function Image(props: RendererProps) {
  const { data } = props;

  return <img style={data.styles} src={data.content} />;
}

export default Image;
