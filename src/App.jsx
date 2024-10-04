import AudienceGrowth from "./sections/AudienceGrowth";
import ConsistentSchedule from "./sections/ConsistentSchedule";
import CreateQuick from "./sections/CreateQuick";
import GrowFollowers from "./sections/GrowFollowers";
import ManageAccounts from "./sections/ManageAccounts";
import ScheduleSocialMedia from "./sections/ScheduleSocialMedia";
import SocialMediaAi from "./sections/SocialMediaAi";
import WriteAi from "./sections/WriteAi";

function App() {
  return (
    <div className="items-center justify-center bg-gray-100 lg:flex">
      <div className="grid h-full max-w-screen-lg min-h-screen grid-cols-1 gap-4 p-10 mx-auto gap-y-4 md:grid-cols-2 lg:grid-cols-8 lg:grid-rows-14">
        <CreateQuick />
        <SocialMediaAi />
        <ScheduleSocialMedia />
        <ManageAccounts />
        <ConsistentSchedule />
        <WriteAi />
        <AudienceGrowth />
        <GrowFollowers />
      </div>
    </div>
  );
}

export default App;
