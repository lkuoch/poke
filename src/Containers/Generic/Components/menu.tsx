import React from "react";
import { Menu } from "antd";
import { IGeneric } from "@Types";

export function EnumMenuComponent({ SelectedItem, Items }: IGeneric.IEnumMenuComponentProps) {
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
