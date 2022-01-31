import Card from 'react-bootstrap/Card';
import './ProductDisplay.css';
import blender from '../../Assets/images/blender.jpg';

interface ProductDisplayProps { }

const ProductDisplay: React.FunctionComponent<ProductDisplayProps> = () => {
  return (
    <>
      <div className="row xs-1 md-2 g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="col">
            <Card>
              <Card.Img variant="top" src={blender} className='img' />
              <Card.Body>
                <Card.Title>Mixer Grinder</Card.Title>
                <Card.Text>
                  GIXOO Mixer Grinder, 450-500 W, Capacity(Litre): 1.5 Liter
                  <button className="buy-btn">Buy Now </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

    </>

  );
}

export default ProductDisplay;