
import "./Main.scss";
import CourseCardList from "../../components/CourseCardList/CourseCardList";

const Main = ({ courses }) => {
  return (
    <div>
      <CourseCardList title={"Results"} courses={courses} />
    </div>
  );
};

export default Main;