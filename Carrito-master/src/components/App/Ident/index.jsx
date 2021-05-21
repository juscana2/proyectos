import React from 'react'
import ReactDom from 'react-dom'
import { user} from 'semantic-ui-react'



     
const user ={
  firstName:'Hus',
  lastName:'tienda',
  picture1: 'Image/carro.png',
}


function getName(user){
    return `${user.firstName} ${user.lastName} ${user.picture1}`
}

const name='Husnia'

const element=<div>holaaa{getName(user)}</div>
const container =document.getElementById('root')



export default Ident;
//ReactDom.render(element,container)