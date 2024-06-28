import React from "react";
import { BodyProps, UISchema } from "../../common/common.type";
import Renderer from "../../renderer/Renderer";

function BodyTop(props: BodyProps) {
  const { response } = props;
  const homepageData: UISchema = response.read();

  return <Renderer data={homepageData} />;
}

const MemoizedBodyTop = React.memo(BodyTop);

export default MemoizedBodyTop;
