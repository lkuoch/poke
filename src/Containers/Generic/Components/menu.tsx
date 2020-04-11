import React from "react";
import { Menu } from "antd";
import { Generic } from "Core/types";

export function EnumMenuComponent({ SelectedItem, Items }: Generic.Models.IEnumMenuComponentProps) {
  let content: JSX.Element[] = [];
  for (let [key, value] of Object.entries(Items)) {
    content.push(
      <Menu.Item key={value} disabled={SelectedItem === value}>
        {key}
      </Menu.Item>
    );
  }

  return content;
}
