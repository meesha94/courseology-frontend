import DetailedCourseCardList from '../../components/DetailedCourseCardList/DetailedCourseCardList';
import EditCourse from '../../containers/EditCourse/EditCourse.jsx';
const Course = ({courses}) => {
  return (
    <div>
        <DetailedCourseCardList courses={courses} />
        <EditCourse />
    </div>
  )
}

export default Course