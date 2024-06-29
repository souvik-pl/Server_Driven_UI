import { SDUIRendererProps } from "../common/common.type";
import { COMPONENT } from "../common/component.enum";
import Container from "./components/Container";
import Image from "./components/Image";
import Section from "./components/Section";
import Text from "./components/Text";

function SDUIRenderer(props: SDUIRendererProps) {
  const { data } = props;

  return (
    <>
      {data.type === COMPONENT.CONTAINER && <Container data={data} />}
      {data.type === COMPONENT.SECTION && <Section data={data} />}
      {data.type === COMPONENT.TEXT && <Text data={data} />}
      {data.type === COMPONENT.IMAGE && <Image data={data} />}
    </>
  );
}

export default SDUIRenderer;
