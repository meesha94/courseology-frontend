import DetailedCourseCard from '../../components/DetailedCourseCard/DetailedCourseCard';
import EditCourse from '../../containers/EditCourse/EditCourse.jsx';
const Course = ({courses}) => {
  return (
    <div>
        <DetailedCourseCard courses={courses} />
        <EditCourse />
    </div>
  )
}

export default Course