import DetailedCourseCard from "../DetailedCourseCard/DetailedCourseCard";
import "./DetailedCourseCardList.scss";
import { useParams } from "react-router-dom";


const DetailedCourseCardList = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(course => course.id == id)
  return (
    <div className="course-list">
      <DetailedCourseCard
              key={course.id}
              image={course.image}
              name={course.name} 
              category={course.category}
              level={course.level}
              teacher={course.teacher}
              information={course.information}
            />
  </div>
  );
};

export default DetailedCourseCardList;


          