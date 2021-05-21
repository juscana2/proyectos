import React from 'react'
import Format from '../numberFormat'
import { Card, Image, Label, Button } from 'semantic-ui-react'





function Product(props) {
  return (
    <Card style={{ marginTop: 15 }}>
      <Image size="small" src={props.picture} />
      <Card.Content>
        <Card.Header style={{ fontSize: 15 }}>{props.name}</Card.Header>
        <Card.Meta>
          <Format number={props.price} />
        </Card.Meta>
        <Card.Description>
          <Label>{props.marca}</Label>
          <Label>{props.status} en stock</Label>
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button
        style={{marginTop:'15px'}}
          basic
          compact
          color='blue'
          floated='right'
          onClick={props.onSaveProduct}
        >
          Agregar al carrito
        </Button>

      </Card.Content>

      <Card.Content extra>
        <Button
          basic
          compact
          color='red'
          floated='right'
         
           onClick={props.onRemoveProduct}
        >
          Eliminar del carrito
        </Button>
      </Card.Content>


      <Card.Content extra>
    
        <Button.Group floated='right'>
      
          <Button
           
           compact
           onClick={props.onIncrementProduct}> +
          <img width='30'src='../Image/addcart.png'></img></Button>
          <Button
         
          compact
          onClick={props.onRemoveProduct}
          >- <img width='30'src='../Image/removecart.png'></img></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default Product
