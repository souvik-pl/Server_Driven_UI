import React from "react";
import { BodyProps, UISchema } from "../../common/common.type";
import SDUIRenderer from "../../sdui-renderer/SDUIRenderer";

function BodyTop(props: BodyProps) {
  const { response } = props;
  const homepageData: UISchema = response.read();

  return <SDUIRenderer data={homepageData} />;
}

const MemoizedBodyTop = React.memo(BodyTop);

export default MemoizedBodyTop;
