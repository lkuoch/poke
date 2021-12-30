const config = (isProd: boolean) => ({
  isProd,

  features: {},

  vars: {
    graphql_endpoint: "https://beta.pokeapi.co/graphql/v1beta",
  },
});

export default config;
