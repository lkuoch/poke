import React from "react";
import { Layout, Icon } from "antd";

//* UI
const { Header } = Layout;

export default React.memo(() => {
  return <Header style={{ background: "#fff", padding: 0 }}></Header>;
});
