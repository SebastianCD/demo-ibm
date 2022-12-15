import LinearStepper from "./LinearStepper";
import Introduction from "./Introduction";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
      <Introduction />
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper sx={{
            width: 1000,
            mx: 'auto'
          }} component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;