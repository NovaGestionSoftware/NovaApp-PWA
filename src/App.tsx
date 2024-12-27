import MainContent from "./views/MainContent";
import SideBar from "./Components/ui/SideBar";

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  );
}
