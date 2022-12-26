import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./VerticalTabs.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        mt: 7,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          sx={{ textAlign: "left" }}
          className="vertical-tabs-items"
          label="Overview"
          {...a11yProps(0)}
        />
        <Tab
          className="vertical-tabs-items"
          label="Work and education"
          {...a11yProps(1)}
        />
        <Tab
          className="vertical-tabs-items"
          label="Contact and basic info"
          {...a11yProps(2)}
        />
        <Tab
          className="vertical-tabs-items"
          label="Family and relations"
          {...a11yProps(3)}
        />
        <Tab
          className="vertical-tabs-items"
          label="About me"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Overview
      </TabPanel>
      <TabPanel value={value} index={1}>
        Work and education
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contact and basic info
      </TabPanel>
      <TabPanel value={value} index={3}>
        Family and relations
      </TabPanel>
      <TabPanel value={value} index={4}>
        About me
      </TabPanel>
    </Box>
  );
}

export default VerticalTabs;
