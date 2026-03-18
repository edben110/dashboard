import { BottomGrid } from "./BottomGrid";
import { HeroRow } from "./HeroRow";
import { SideRail } from "./SideRail";
import { TopBar } from "./TopBar";
import { TopCards } from "./TopCards";

export function DashboardView() {
  return (
    <div className="page-bg">
      <div className="dashboard-shell">
        <TopBar />

        <div className="content-layout">
          <SideRail />

          <main className="main-area">
            <HeroRow />
            <TopCards />
            <BottomGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
