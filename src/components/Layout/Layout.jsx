/* eslint-disable react/prop-types */
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
