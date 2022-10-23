import "./CourseCard.scss";
import {Link} from "react-router-dom";

const CourseCard = ({image, name, category, teacher, id}) => {
   
    return (
      <div className='card' name="card">
      <Link to={`/course/${id}`}>
      <div className='card__image-container'>
        <img src={image} alt="course topic" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h3 className='card__category'>{category} </h3>
        <h3 className='card__teacher'>{teacher}</h3>
        </Link>
        

    </div>
  )
}

export default CourseCard;
