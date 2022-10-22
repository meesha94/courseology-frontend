import CourseCard from "../CourseCard/CourseCard";

import DetailedCourseCard from "../DetailedCourseCard/DetailedCourseCard";
import "./DetailedCourseCardList.scss";


const DetailedCourseCardList = ({ courses }) => {
  return (
    <div className="course-list">
    {courses.map(course => (
      <Link key={course.id} to={`/course/edit/${course.id}`}>
      <DetailedCourseCard
              key={course.id}
              image={course.image_url}
              name={course.name}
              category={course.category}
              completionTime={course.completionTime}
              price={course.price}
              information={course.information}
            />
      </Link>
    ))}
  </div>
  );
};

export default DetailedCourseCardList;


          