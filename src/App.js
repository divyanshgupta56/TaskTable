import { Box, Paper, ThemeProvider } from "@mui/material";
import TaskSearchBar from "./components/TaskSearchBar";
import theme from "./muiTheme";
import TaskTable from "./components/TaskTable";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "32px" }}
      >
        <Box>
          <TaskSearchBar />

          <TaskTable />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
