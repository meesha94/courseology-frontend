import DetailedCourseCard from '../../components/DetailedCourseCard/DetailedCourseCard';
import EditCourse from '../../containers/EditCourse/EditCourse.jsx';
const Course = () => {
  return (
    <div>
        <DetailedCourseCard courses={courses} />
        <EditCourse />
    </div>
  )
}

export default Course