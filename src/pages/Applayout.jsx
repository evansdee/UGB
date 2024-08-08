import styled from "styled-components";
import Nav from "../ui/Nav";
import { Outlet } from "react-router-dom";
import { ToggleProvider } from "../hooks/useMenu";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../ui/Button";
import { linkArr } from "../helper/data";

const StyledApplayout = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
 
`;

const Main = styled.main`
  overflow-x: hidden;
  font-family: verdana;
`;

export default function Applayout() {
  return (
    <StyledApplayout>
      <ToggleProvider>
        <Nav />
      </ToggleProvider>

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <Footer.Description
          title={"Logo"}
          desc={
            "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. "
          }
          icons={[
            { icon: <FaFacebookF />, id: 1 },
            { icon: <FaInstagram />, id: 2 },
            { icon: <FaTwitter />, id: 3 },
          ]}
          render={(ele) => (
            <Button
              key={ele.id}
              bg={"#fff"}
              extra={"border-radius:50%;margin-right:.5em"}
            >
              {ele.icon}
            </Button>
          )}
          color={"#fff"}
        />

        <Footer.Links
          title={"Useful Links"}
          data={linkArr}
          render={(ele) => (
            <>
              <Button key={ele.url} to={ele?.url} pad=".5em 0" color={"#fff"}>
                {ele?.title}
              </Button>
              <hr />
            </>
          )}
        />
        <Footer.Contact
          title={"Contact Us"}
          phone={["081000000", "090393883838"]}
          email={"fiefnie@kf.com"}
          address={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium iste sequi, iusto eveniet possimus? Laborum repellat sed ab repellendus"
          }
        />
      </Footer>
    </StyledApplayout>
  );
}
