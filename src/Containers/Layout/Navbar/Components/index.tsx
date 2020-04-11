import React from "react";
import { Menu, Layout } from "antd";
import { EnumMenuComponent } from "Containers/Generic/Components/menu";
import { Mode as ModeModel } from "../models";
import { Navbar } from "Core/types";

//* UI
const { SubMenu } = Menu;
const { Sider } = Layout;

export default React.memo((props: Navbar.Redux.IMappedProps) => {
  //* States
  const { mode, theme } = props;

  //* Dispatches
  const { updateMode } = props;

  //* Renders
  const changeMenuMode = () => {
    const menuItems = EnumMenuComponent({
      SelectedItem: mode,
      Items: ModeModel
    });

    return (
      <Menu theme={theme} onClick={(e) => updateMode(e.key as ModeModel)}>
        {menuItems}
      </Menu>
    );
  };

  const renderBody = (
    <Menu defaultSelectedKeys={["1", mode]} forceSubMenuRender={true} mode={mode} theme={theme}>
      <Menu.Item key="1">Pokemon</Menu.Item>
      <Menu.Item key="2">Navigation Two</Menu.Item>
      <SubMenu
        key="sub2"
        title={
          <span>
            <span>Preferences</span>
          </span>
        }
      >
        <SubMenu key="changeMenuMode" title={<span>Menu</span>}>
          {changeMenuMode()}
        </SubMenu>
      </SubMenu>
    </Menu>
  );

  return (
    <Sider id="navbar" trigger={null} theme={theme} collapsible>
      {renderBody}
    </Sider>
  );
});
