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

const crustPrices = {
  neapolitanPizza : 120,
  newYourkStylePizz : 240,
  stLouise : 360
}

const toppingsPrices = {
  onions : 100,
  sausage : 200,
  bacon : 300
}

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
    var newDelivery = new Delivery(selectedDelivery,deliveryLocation);
    
    $("ol#order").append("<li><span class='summary'>"+newOrder.crust+"  "+newOrder.toppings+" "+newOrder.size+ "</span></li>");
   
  });
});