import Card from 'react-bootstrap/Card';
import '../styles/card.css'
import { useNavigate } from 'react-router-dom';

function CustomCard({image, title, description, lastUpdated}) {
  let nav = useNavigate();
  return (
    <Card className="bg-dark text-white custom-card" onClick={() => {nav(`/details/${title}`)}} >
      <Card.Img src={image} alt="Card image" style={{height: "400px"}} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>Last updated {lastUpdated} mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CustomCard;