import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({image, name, category, teacher, id}) => {
   
    return (
      <div className='card' name="card">
      
      <div className='card__image-container'>
        <img src={image} alt="course topic" className='card__image'/>
        </div>
        <Link to={`/course/${id}`}className='card__name-link'>
        <h1 className='card__name'>{name}</h1>
        </Link>
        <h3 className='card__category'>{category} </h3>
        <h3 className='card__teacher'>{teacher}</h3>
       
        

    </div>
  )
}

export default CourseCard;
