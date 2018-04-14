import React, { Component } from "react";

import SideSection from "../SideSection";
import SideSectionUser from "../SideSectionUser";
import SideSectionBook from "../SideSectionBook";

export class SideBar extends Component {
  render() {
    return (
      <div>
        <SideSection title="Authors of the week">
          <SideSectionUser img="abc" fullname="abc" />
          <SideSectionUser img="abc" fullname="abc" />
          <SideSectionUser img="abc" fullname="abc" />
        </SideSection>

        <SideSection title="Books of the year">
          <SideSectionBook
            img="abc"
            title="abc asdnaks asd nask"
            author="abcd"
          />
          <SideSectionBook img="abc" title="abc" author="abcd" />
          <SideSectionBook img="abc" title="abc" author="abcd" />
        </SideSection>
      </div>
    );
  }
}

export default SideBar;
