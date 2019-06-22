/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Menu, Icon, Switch } from "antd";
import PropTypes from "prop-types";

const { SubMenu } = Menu;

function SideNavBar({ _state, _actions }) {
  const { mode, theme } = _state;
  const { changeMode, changeTheme } = _actions;

  const renderChangeTheme = () => {
    return (
      <>
        <Switch onChange={() => changeTheme()} /> Change Theme
      </>
    );
  };

  const renderBody = () => {
    return (
      <>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={mode}
          theme={theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            Navigation One
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
                <span>Navigation Four</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  };

  return (
    <div id="side-navbar">
      {renderBody()}
      {renderChangeTheme()}
    </div>
  );
}

SideNavBar.defaultProps = {
  _state: {},
  _actions: {}
};

SideNavBar.propTypes = {
  _state: PropTypes.instanceOf(Object),
  _actions: PropTypes.instanceOf(Object)
};

export default SideNavBar;
