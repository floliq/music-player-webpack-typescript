import { generateHeaderData, generateSidebarData } from "../mocks";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  return `
    <div class="over-wrapper" style="position: relative; overflow: hidden">
    ${Header(generateHeaderData()) + Sidebar(generateSidebarData())}
    </div>
  `;
};

export default Main;
