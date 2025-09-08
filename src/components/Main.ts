import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  return `
    <div class="over-wrapper" style="position: relative; overflow: hidden">
    ${Header() + Sidebar()}
    </div>
  `;
};

export default Main;
