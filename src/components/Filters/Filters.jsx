import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';



function TabPanel(props) {
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

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function Filters( {filters, selectedFilterIndex, setSelectedFilterIndex}) {
  // const [value, setValue] = React.useState();

  //  function allyProps(index) {
  //     return {
  //       id: `simple-tab-${index}`,
  //       'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
    // setValue(newValue)
  };

  return (
    <div>
        <Tabs 
            value={selectedFilterIndex}
            onChange={handleChange} 
            aria-label="basic tabs example"
            TabIndicatorProps = {{
                style: {
                    // backgroundColor: 'var(--color--primary)',
                     backgroundColor: "#34c94b" ,
                },
            }}
             textColor='#34c94b' className={styles.tab}
            // className={styles.tabs} 
            >
            {filters.map((ele, idx) => (
                <Tab key={idx} className={styles.tab}  label={ele.label} {...allyProps(idx)} />
            ))}
            </Tabs>
            {/* {filters.map((ele, idx) => (
                  // <TabPanel key={idx} value={ele.label} index={idx} ></TabPanel>
                  <TabPanel key={idx} value={selectedFilterIndex} index={ele.label} ></TabPanel>

            ))} */}
            {filters.map((ele, idx) => (
    <TabPanel key={idx} value={selectedFilterIndex} index={idx}>
        {ele.label}
    </TabPanel>
))}



    </div>
  );
}