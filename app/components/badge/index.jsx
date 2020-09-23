import { createElement } from "complate-stream";

export default function Badge({ modifier }, ...children) {
  return <span class={`badge badge-${modifier}`}>${children}</span>;
}
