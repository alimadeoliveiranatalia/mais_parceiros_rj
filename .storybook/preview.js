import "../styles/globals.scss";
import Image from "next/image";

const image = Image.default;

Object.defineProperty(Image, 'default', {
  configurable: true,
  value: (props) => <image {...props} unoptimized />
});

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }