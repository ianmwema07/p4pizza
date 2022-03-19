function Order(crust,toppings,size,amount){
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
  this.amount = amount;
}

Order.prototype.orderSummary = function() {
  return this.crust + "<br> " + this.size + "<br>" + this.crust  + "<br>" + this.toppings + "<br>" + this.amount;
}

function Delivery(option,location){
  this.option = option;
  this.location = location;
}

Delivery  .prototype.deliverySummary = function() {
  return this.crust + "<br> " + this.size + "<br>" + this.crust  + "<br>" + this.toppings + "<br>" + this.amount;
}

const sizePrices = {
  small : 300,
  medium : 600,
  large : 900
}



var pricesArray
const crustPrices = {
  neapolitanPizza : 120,
  newYorkStylePizza : 240,
  stLouisePizza : 360
}

const toppingsPrices = {
  onions : 100,
  sausage : 200,
  bacon : 300
}

var pricesArray = [
  parseInt(sizePrices.small),
  parseInt(sizePrices.medium),
  parseInt(sizePrices.large),
  parseInt(crustPrices.neapolitanPizza),
  parseInt(crustPrices.newYorkStylePizza),
  parseInt(crustPrices.stLouisePizza),
  parseInt(toppingsPrices.onions),
  parseInt(toppingsPrices.sausage),
  parseInt(toppingsPrices.bacon),
];

/*Getting data from the input form*/
$(document).ready(function(){
  $("form#orderSummary").submit(function(event){
   event.preventDefault();
    var selectedCrust = $("select#pizzaCrust").val();
    var selectedToppings = $("select#toppings").val();
    var selectedSize = $("select#pizzaSize").val();
    var selectedAmount = $("input#pizzaAmount").val();
    var selectedDelivery = $("select#delivery").val();
    var deliveryLocation = $("input#deliveryLocation").val();

   

    var newOrder = new Order(selectedCrust,selectedToppings,selectedSize,selectedAmount);
    // var newDelivery = new Delivery(selectedDelivery,deliveryLocation);


    //Business logic and calculations
    if( newOrder.size == "Small"){
      if ( newOrder.crust == "Neapolitan Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[0] + pricesArray[3] +pricesArray[6];
        }else if(newOrder.toppings == "Sausage"){
          var totalPrice = pricesArray[0] + pricesArray[3] +pricesArray[7];
        }else if(newOrder.toppings == "Bacon"){
          var totalPrice = pricesArray[0] + pricesArray[3] +pricesArray[8];
        }
      }else if(newOrder.crust == "New York Style Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[0] + pricesArray[4] +pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[0] + pricesArray[4] +pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[0] + pricesArray[4] +pricesArray[8];
        }
      }else if(newOrder.crust == "St. Louis Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[0] + pricesArray[5]  +pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[0] + pricesArray[5]  +pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[0] + pricesArray[5]  +pricesArray[8];
        }
      }
    }else if( newOrder.size == "Medium"){
      if ( newOrder.crust == "Neapolitan Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[1] + pricesArray[3] +pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[1] + pricesArray[3] +pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[1] + pricesArray[3] +pricesArray[8];
        }
      }else if(newOrder.crust == "New York Style Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[1] + pricesArray[4]+pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[1] + pricesArray[4]+pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[1] + pricesArray[4]+pricesArray[8];
        }
      }else if(newOrder.crust == "St. Louis Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[1] + pricesArray[5]+pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[1] + pricesArray[5]+pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[1] + pricesArray[5]+pricesArray[8];
        }
      }
    }else if( newOrder.size == "Large"){
      if ( newOrder.crust == "Neapolitan Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[2] + pricesArray[3]+pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[2] + pricesArray[3]+pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[2] + pricesArray[3]+pricesArray[8];
        }
      }else if(newOrder.crust == "New York Style Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[2] + pricesArray[4]+pricesArray[6];
        }else if(newOrder == "Sausage"){
          var totalPrice = pricesArray[2] + pricesArray[4]+pricesArray[7];
        }else if(newOrder == "Bacon"){
          var totalPrice = pricesArray[2] + pricesArray[4]+pricesArray[8];
        }
      }else if(newOrder.crust == "St. Louis Pizza"){
        if (newOrder.toppings == "Onions"){
          var totalPrice = pricesArray[2] + pricesArray[5]+pricesArray[6];
        }else if(newOrder == "Sausage"){
           var totalPrice = pricesArray[2] + pricesArray[5] + pricesArray[7];
        }else if(newOrder == "Bacon"){ 
          alert("Hello");
        }
      }
    }
     $("ol#order").append("<li><span class='summary'>"+newOrder.crust+"  "+newOrder.toppings+" "+newOrder.size+" "+totalPrice+ "</span></li>");
  });
});