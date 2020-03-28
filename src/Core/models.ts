export const RootApiResult = (type: string) => ({
  REQUEST: type ? `${type}/REQUEST` : "REQUEST",
  SUCCESS: type ? `${type}/SUCCESS` : "SUCCESS",
  FAILURE: type ? `${type}/FAILURE` : "FAILURE"
});
