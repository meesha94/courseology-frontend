import "./DetailedCourseCard.scss";

const DetailedCourseCard = ({image, name, category, level, teacher, information}) => {
    return (
    <div className='detailed-card' name="card">
      <div className='detailed-card__image-container'>
        <img src={image} alt="course topic" className='detailed-card__image'/>
        </div>
        <h1 className='detailed-card__name'>{name}</h1>
        <h2 className='detailed-card__category'>{category}</h2>
        <h3 className='detailed-card__level'>{level} </h3>
        <h3 className='detailed-card__teacher'>{teacher}</h3>
        <p className='detailed-card__information'>{information}</p>
    </div>
  )
}

export default DetailedCourseCard;