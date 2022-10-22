import "./CourseCard.scss";

const CourseCard = (props) => {
    const {image, name,completionTime, price} = props;


  
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="placeholder" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h3 className='card__time'>{completionTime} </h3>
        <h3 className='card__price'>{price}</h3>
        

    </div>
  )
}

export default CourseCard;
