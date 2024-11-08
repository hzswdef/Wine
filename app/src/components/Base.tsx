import Content from "@components/regions/Content";
import Sidebar from "@components/regions/sidebar/Sidebar.tsx";

const Base = () => (
  <div className="w-full flex h-full bg-custom-100">
    <Sidebar />
    <Content />
  </div>
);

export default Base;
