
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ReactTab = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Transformers Toys</Tab>
          <Tab>Marvel Toy</Tab>
          <Tab>Avengers Toy</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
