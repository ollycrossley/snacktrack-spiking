import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children, value }) {
  return (
    <>
      <Header />
      <Nav />
      <h2>{value}</h2>
      <main>{children}</main>
    </>
  );
}
