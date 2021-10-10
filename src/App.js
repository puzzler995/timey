import { createMedia } from "@artsy/fresnel";
import React from "react";
import { Image } from "semantic-ui-react";
import NavBar from "./components/NavBar.component";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});
const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;

const App = () => (
  <>
    <style>{mediaStyles}</style>

    <MediaContextProvider>
      <NavBar>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </NavBar>
    </MediaContextProvider>
  </>
);

export default App;
