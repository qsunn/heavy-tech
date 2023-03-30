import { s } from "@/app/styles";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

export const Footer = () => {

  return (
    <footer className={`grid place-items-center relative w-full`}>
      <div
        className={`${s.bgImage} bg-[url('./images/divider.svg')] hidden md:grid place-items-center absolute z-10 top-[-0.62rem] overflow-x-hidden h-5 w-full`}
      />
      <div className={`${s.gridRow} w-full`}>
        <Form />
        <Navigation />
      </div>
    </footer>
  );
};
