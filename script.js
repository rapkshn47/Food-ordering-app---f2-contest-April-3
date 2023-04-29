function getMenu(){
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      const menuItems = data.menu;
    })
    .catch(error => {
      console.error('Error fetching menu:', error);
    });
}

function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order = {
          burgers: [
            { name: 'Cheeseburger 1' },
            { name: 'Cheeseburger 2' },
            { name: 'Cheeseburger 3' }
          ]
        };
        resolve(order);
      }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {        
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        resolve(orderStatus);
      }, 1000);
    });
}

function thankyouFnc() {
    console.log('Thank you for eating with us today!');
}

async function handlePromises() {
    try {
      await getMenu();
  
      const order = await takeOrder();
  
      const orderStatus = await orderPrep();
  
      const paidStatus = await payOrder();
  
      if (paidStatus.paid) {
        thankyouFnc();
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  
handlePromises();
  
