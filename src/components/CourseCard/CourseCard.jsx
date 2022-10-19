import "./CourseCard.scss";

const CourseCard = (props) => {
    const {image, name, category, completionTime, price} = props;


  
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="placeholder" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h2 className='card__category'>{category}</h2>
        <h3 className='card__time'>{completionTime} </h3>
        <h3 className='card__price'>{price}</h3>
    </div>
  )
}

export default CourseCard;
