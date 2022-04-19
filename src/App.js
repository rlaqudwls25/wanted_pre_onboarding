import Toggle from "./Components/Toggle";
import Tab from "./Components/Tab";
import Input from "./Components/Input";
import Dropdown from "./Components/Dropdown";
import Slider from "./Components/Slider";
import styled from "styled-components";
import { mixin } from "./Styles/mixin";

function App() {
  return (
    <Wrapper>
      <Toggle />
      <Tab />
      <Input />
      <Slider />
      <Dropdown />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  ${mixin.flexSet("space-evenly", "center", "_")}
  margin-top: 100px;
`;
