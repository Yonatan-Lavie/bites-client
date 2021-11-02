import React from 'react';
import testProduct from '../assets/testProduct.jpg';
import { Card, Button } from 'react-bootstrap';

export const Product = ({
  name = 'עוגה בחושה',
  price = 50.5,
  image = testProduct,
  description = ' עוגה בחושה אינגליש קייק',
  category = 'קטגוריה',
}) => {
  return (
    <Card style={{ width: '18rem' }} dir="rtl">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {category} : {name}
        </Card.Title>
        <Card.Text>
          {'תיאור'} :{description}
        </Card.Text>
        <Card.Text>
          {'מחיר'}: {price}
        </Card.Text>
        <Button variant="primary">הוסף מוצר</Button>
      </Card.Body>
    </Card>
  );
};
