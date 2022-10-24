import CourseCard from "../CourseCard/CourseCard";
import "./CourseCardList.scss";

const CourseCardList = ({ courses}) => {
  return (
    <div className="courses-list">
      
        <div className="stars"></div>
        <div className="twinkling"></div> 
       <div className="clouds"></div>
       
   
      {courses?.map((course) => {
        return (
          course && (
            
            <CourseCard
              key={course.id}
              image={course.image}
              name={course.name}
              category={course.category}
              teacher={course.teacher}
              id={course.id}
            />
          
            
          )
        );
      })}
      
    </div>
  );
};

export default CourseCardList;
