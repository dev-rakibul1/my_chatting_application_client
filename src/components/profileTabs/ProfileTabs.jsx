import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Friends from "../../pages/friends/Friends";
import Feed from "../feed/Feed";
import "./ProfileTabs.css";

import { Grid } from "@mui/material";
import { Users } from "../../dummyData";
import About from "../../pages/about/About";

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="profile-tabs"
        >
          <Tab className="tab-items" label="Post" {...a11yProps(0)} />
          <Tab className="tab-items" label="About" {...a11yProps(1)} />
          <Tab className="tab-items" label="Friends" {...a11yProps(2)} />
          <Tab className="tab-items" label="Follower" {...a11yProps(3)} />
          <Tab className="tab-items" label="Following" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Feed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Users?.map((user) => (
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6}>
              <Friends key={user?.id} user={user} />
            </Grid>
          </Grid>
        ))}
      </TabPanel>

      <TabPanel value={value} index={3}>
        Coming soon
      </TabPanel>
      <TabPanel value={value} index={4}>
        Coming soon
      </TabPanel>
    </Box>
  );
}

export default ProfileTabs;
