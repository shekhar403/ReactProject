import Card from 'react-bootstrap/Card';
import '../styles/card.css'

function CustomCard({image, title, description, lastUpdated}) {
  return (
    <Card className="bg-dark text-white custom-card">
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