import React from "react";
import { Menu } from "antd";
import { Generic } from "__Types__";

export function EnumMenuComponent({ SelectedItem, Items }: Generic.Models.IEnumMenuComponentProps) {
  let content = [];
  for (let [key, value] of Object.entries(Items)) {
    content.push(
      <Menu.Item key={value} disabled={SelectedItem === value}>
        {key}
      </Menu.Item>
    );
  }

  return content;
}
