import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AniToys from "./AniToys";
import MarvelToys from "./MarvelToys";
import DcToys from "./DcToys";

const TabsSec = () => {
  return (
    <div className="mb-10">
      <Tabs>
        <div className="text-center">
          <TabList>
            <Tab>Anime</Tab>
            <Tab>Marvel</Tab>
            <Tab>DC</Tab>
          </TabList>
        </div>
        <TabPanel>
          <AniToys></AniToys>
        </TabPanel>
        <TabPanel>
          <MarvelToys></MarvelToys>
        </TabPanel>
        <TabPanel>
          <DcToys></DcToys>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsSec;
