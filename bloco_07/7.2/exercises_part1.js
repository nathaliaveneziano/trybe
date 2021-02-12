const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  const arrayData = Object.values(order);
  const arrayAddress = Object.values(order.address);
  const arrayDelivery = Object.values(order.order.delivery);

  console.log(`Olá ${arrayDelivery[0]}, entrega para: ${arrayData[0]}, Telefone: ${arrayData[1]}, R. ${arrayAddress[0]}, Nº: ${arrayAddress[1]}, AP: ${arrayAddress[2]}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

  const arrayOrder = order.order;

  const pizzas = (Object.keys(arrayOrder.pizza)).join(', ');
  const drinks = (Object.keys(arrayOrder.drinks)).join(', ');
  const payment = order.payment.total = 50;

  console.log('--------------');
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${payment},00.`);
}

orderModifier(order);