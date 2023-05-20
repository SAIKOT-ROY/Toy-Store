import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AniToys from "./AniToys";
import MarvelToys from "./MarvelToys";
import DcToys from "./DcToys";

const TabsSec = () => {
  return (
    <div>
      <h2></h2>
      <div className="mb-10 border bg-slate-200 rounded-xl p-10">
        <Tabs>
          <div className="font-bold text-center rounded-lg bg-slate-50 w-72 mx-auto">
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
    </div>
  );
};

export default TabsSec;
