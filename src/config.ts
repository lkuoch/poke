export default (isProd: boolean) => ({
  isProd,

  features: {},

  vars: {
    pokeGraph: "https://beta.pokeapi.co/graphql/v1beta",
  },
});
