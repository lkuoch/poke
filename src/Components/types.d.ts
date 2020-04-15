import { LoaderOptions } from "./loader";

export namespace Loader {
  export interface IProps {
    loadingContent: string | JSX.Element;
    loaderOptions?: LoaderOptions;
  }
}
