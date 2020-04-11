import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { Pokemon } from "Core/types";

//* UI
const { Content } = Layout;

export default React.memo((props: Pokemon.Redux.IMappedProps) => {
  const { pokemon } = props;

  // Fallback, should put a spinner
  if (!pokemon || !pokemon.length) {
    return null;
  }

  const renderPokemon = () => {
    const pokemonList = pokemon.map((p: any, pIndex) =>
      p.results.map((r: any, rIndex: number) => {
        const pokemonName = String(r.name.charAt(0).toUpperCase() + r.name.slice(1));

        return (
          <Col span={8} key={`${pIndex}${rIndex}`}>
            <Card title={pokemonName} bordered={false}>
              Write description
            </Card>
          </Col>
        );
      })
    );

    return pokemonList;
  };

  return (
    <Content id="pokemon-content">
    <h1>ASOIDJASOIDJ </h1>
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>{renderPokemon()}</Row>
      </div>
    </Content>
  );
});
