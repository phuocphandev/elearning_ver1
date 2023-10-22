import { CountUpStatic, CourseList, Overral } from ".";
import Introduction from "./Introduction";
import Sponsor from "./Sponsor";

export const HomeTemplates = () => {
  return (
    <div className="HomeTemplates">
      <Introduction />
      <Sponsor />
      <Overral />
      <CourseList />
      <CountUpStatic />
    </div>
  );
};

export default HomeTemplates;
