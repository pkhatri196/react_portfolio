import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Navbar({ heroRef, skillsRef, projectsRef, contactRef }) {
  const [value, setValue] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    scrollToSection(newValue);
  };

  const scrollToSection = (index) => {
    const sections = [homeRef, skillsRef, projectsRef, contactRef];
    sections[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ca1083" }}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "Kalam", fontSize: "40px" }}
          >
            PK
          </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="white"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Tab
              label="Home"
              sx={{ textTransform: "none", fontSize: "16px" }}
            />
            <Tab
              label="Skills"
              sx={{ textTransform: "none", fontSize: "16px" }}
            />
            <Tab
              label="Projects"
              sx={{ textTransform: "none", fontSize: "16px" }}
            />
            <Tab
              label="Contact"
              sx={{ textTransform: "none", fontSize: "16px" }}
            />
          </Tabs>

          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{ width: 250, bgcolor: "#ca1083", color: "white" }}
              role="presentation"
              onClick={handleDrawerClose}
              onKeyDown={handleDrawerClose}
            >
              <List>
                {["Home", "Skills", "Projects", "Contact"].map(
                  (text, index) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => scrollToSection(index)}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";

// function Navbar() {
//   const [value, setValue] = React.useState(0);
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#ca1083" }}>
//       <Toolbar>
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {/* Logo Section */}
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ fontFamily: "Kalam", fontSize: "40px" }}
//           >
//             PK
//           </Typography>

//           {/* Tabs Section */}
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="inherit"
//             indicatorColor="white"
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//             }}
//           >
//             <Tab
//               label="Home"
//               sx={{ textTransform: "none", fontSize: "16px" }}
//             />
//             <Tab
//               label="Skills"
//               sx={{ textTransform: "none", fontSize: "16px" }}
//             />
//             <Tab
//               label="Projects"
//               sx={{ textTransform: "none", fontSize: "16px" }}
//             />
//             <Tab
//               label="Contact"
//               sx={{ textTransform: "none", fontSize: "16px" }}
//             />
//           </Tabs>

//           {/* Hamburger Menu for Mobile */}
//           <IconButton
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerOpen}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Drawer for Mobile Menu */}
//           <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
//             <Box
//               sx={{ width: 250, bgcolor: "#ca1083", color: "white" }}
//               role="presentation"
//               onClick={handleDrawerClose}
//               onKeyDown={handleDrawerClose}
//             >
//               <List>
//                   <ListItem button>
//                     <ListItemText primary="Home" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="Skills" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="Projects" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="Contact" />
//                   </ListItem>
//               </List>
//             </Box>
//           </Drawer>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar
