import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { ButtonNewUser } from "../ButtonNewUser/ButtonNewUser";
import { Navigation } from "../Navigation/Navigation";

export const AppBarPanel = () => {
  return (
    <AppBar>
      <AppBarSpacer style={{ width: 5 }} />
      <AppBarSection>
        <ButtonNewUser />
      </AppBarSection>
      <AppBarSpacer style={{ width: 5 }} />
      <AppBarSection>
        <span className='k-appbar-separator' />
      </AppBarSection>
      <AppBarSpacer style={{ width: 30 }} />
      <AppBarSection>
        <Navigation />
      </AppBarSection>
    </AppBar>
  );
};
