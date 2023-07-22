import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";

import mainTheme from "./themes/mainTheme";
function App() {
  return (
    <CssVarsProvider theme={mainTheme}>
      <Button variant="solid" color="primary">
        Primary Button
      </Button>
      <Button variant="soft" color="primary">
        Secondary Button
      </Button>
      <Button variant="outlined" color="primary">
        Outlined Button
      </Button>
      {/* Other buttons */}
    </CssVarsProvider>
  );
}

export default App;
