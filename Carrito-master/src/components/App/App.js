import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from '../Menu'
import ProductList from '../ProductList'
import CartList from '../CartList'
import Order from '../Order'
import style from './App.css'
//importar el nombre no lo llama
//import user from '../Ident'
//import ReactDOM from '../react-dom'


  



class App extends Component {
  
  
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
     
      
      products: [

        
        {
          id: 1,
          name: 'Tarta de fondat de vainilla con corazones de fresas',
          picture: 'Image/tar1.JPG',
          price: 17034,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'T-blanc',
          status: 5,
        },
        {
          id: 2,
          name: 'Tarta de fondat de vainilla con rosas de frambuesas',
          picture: 'Image/navi2.jpg',
          price: 15382,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'T-glas',
          status: 6,
        },
        {
          id: 3,
          name: 'Tarta de fondat de vainilla con corazones de fresas',
          picture: 'Image/tart2.JPG',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'T-ros',
          status: 2,
        },
        {
          id: 4,
          name: 'Tarta de bizcocho de chocolate turquesa y fucsia.',
          picture: 'Image/nara4.jpg',
          price: 10000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'T-nar',
          status: 6,
        },
        {
          id: 5,
          name: 'Cupcake de nube y chocolate blanco.',
          picture: 'Image/capt5.jpg',
          price: 3780,
          marca: 'C-azul',
          status: 10,
        },
        {
          id: 6,
          name: 'Cupcake de nata y fresa.',
          picture: 'Image/nati6.jpg',
          price: 3733,
          marca: 'C-per',
          status: 8,
        },
        {
          id: 7,
          name: 'Cupcake de mango y macadenia.',
          picture: 'Image/cep7.jpg',
          price: 3700,
          marca: 'C-man',
          status: 8,
        },
        {
          id: 8,
          name: 'Cupcake de caramelo y nuéz.',
          picture: 'Image/cip8.jpg',
          price: 3500,
          marca: 'C-car',
          status: 8,
        },
        {
          id: 9,
          name: 'Galleta de vainilla, Uva y Fresa  ',
          picture: 'Image/gas9.jpg',
          price: 2265,
          marca: 'Cora',
          status: 20,
        },
        {
          id: 10,
          name: 'Galleta de vainilla, chocolate y lila',
          picture: 'Image/galle10.jpg',
          price: 2262,
          marca: 'Ova',
          status: 20,
        },
        {
          id: 11,
          name: 'Galleta de vainilla, nata y caramelo',
          picture: 'Image/galle11.jpg',
          price: 2265,
          marca: 'F & L',
          status: 20,
        },
        {
          id: 12,
          name: 'Galleta de vainilla y mil sabores',
          picture: 'Image/galle12.jpg',
          price: 2269,
          marca: 'Formas',
          status: 20,
        }
      ],
      cart: [],
    }
    

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
    //
    //this.handlerDeleteProduct= this.handlerDeleteProduct.bind(this)

    //
  }
  

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
 
    var statusCopy = Object.assign({}, this.state);
    console.log(statusCopy)
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      console.log(statusCopy)
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
    }
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto sera eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }
  //eliminar producto
 /* handlerDeleteProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto sera eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }*/


  //fin eliminar producto

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    console.log('no esta dentro de if')
    if (undefined !== exist && exist !== null) {
      
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      console.log('dentro de if')
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
      //this.handlerAddProduct(this.state.cart.length, indexProduct)
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          sum={this.state.sum}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CartList
              items={this.state.cart}
              total={this.state.total}
              onOpenOrder={this.handlerOpenOrder}
            />
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
