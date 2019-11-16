// Libraries
import React from "react";
import { Menu, Icon } from "antd";

// Components
import { EnumMenuComponent } from "@Containers/Generic/Components/menu";
import { Mode } from "../models";

// Types
import { Navbar } from "@App/types";

export default React.memo((props: Navbar.Redux.IMappedProps) => {
  //* UI
  const { SubMenu } = Menu;

  //* States
  const { mode, theme } = props;

  //* Dispatches
  const { updateMode } = props;

  const ChangeMenuMode = () => {
    const menuItems = EnumMenuComponent({
      SelectedItem: mode,
      Items: Mode
    });

    return (
      <Menu theme={theme} onClick={(e) => updateMode(e.key as Mode)}>
        {menuItems}
      </Menu>
    );
  };

  const renderBody = (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1", mode]}
      forceSubMenuRender={true}
      mode={mode}
      theme={theme}
    >
      <Menu.Item key="1">
        <Icon type="smile" theme="twoTone" />
        Pokemon
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="calendar" />
        Navigation Two
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="appstore" />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub1-2" title="Submenu">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="setting" />
            <span>Preferences</span>
          </span>
        }
      >
        <SubMenu key="changeMenuMode" title={<span>Menu</span>}>
          {ChangeMenuMode()}
        </SubMenu>
      </SubMenu>
    </Menu>
  );

  return <div id="navbar">{renderBody}</div>;
});
