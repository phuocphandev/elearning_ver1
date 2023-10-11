import { CountUpStatic, CourseList, Overral } from ".";
import Introduction from "./Introduction";
import Sponsor from "./Sponsor";


export const HomeTemplates = () => {
  return (
    <div className="HomeTemplates">
      <Introduction />
      <Sponsor />
      <Overral />
      <CountUpStatic/>
      <CourseList/>
    </div>
  );
};

export default HomeTemplates;
