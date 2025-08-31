import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StylesAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6rem;
`;

export default function AppLayout() {
  return (
    <StylesAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StylesAppLayout>
  );
}
