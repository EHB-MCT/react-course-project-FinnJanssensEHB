import ContentLoader from "react-content-loader";

interface IProps {
  instances: number;
}

export default function Loader(props: IProps) {
  const loaderItems: Array<any> = [];
  const loaderItem = (props: number) => (
    <ContentLoader viewBox="0 0 380 65" key={props}>
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="315" height="60" />
      <rect x="320" y="0" rx="5" ry="5" width="60" height="60" />
    </ContentLoader>
  );
  for (let i = 0; i < props.instances; i++) {
    loaderItems.push(loaderItem(i));
  }

  return <>{loaderItems.map((item) => item)}</>;
}
