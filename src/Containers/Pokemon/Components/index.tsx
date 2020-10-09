import React from "react";
import type { IPokemon } from "Core/types";

export default function Pokemon(props: IPokemon.IMappedProps) {
  const { ids, pokemon, tableFields, tableFieldAliases } = props;

  return (
    <>
      <br />
      <h4 className="ui horizontal divider header">Pokemon List</h4>

      <table className="ui celled table">
        <thead>
          <tr>
            {tableFields.map((x) => (
              <th key={x}>{Object.keys(tableFieldAliases!).length ? tableFieldAliases![x] : x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ids.map((x) => (
            <tr key={x}>
              {tableFields.map((f) => (
                <td key={`${f}-${x}`}>{pokemon[f][x]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
