$(document).ready(function () {
	$('.hamburger-shell').click(function () {
		$('#menu').slideToggle();
	});
});


// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
	// =============================
	// Private methods and propeties
	// =============================
	cart = [];
	
	// Constructor
	function Item(name, price, count,) {
	  this.name = name;
	  this.price = price;
	  this.count = count;
	}
	
	// Save cart
	function saveCart() {
	  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
	}
	
	  // Load cart
	function loadCart() {
	  cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
	}
	if (sessionStorage.getItem("shoppingCart") != null) {
	  loadCart();
	}
	
  
	// =============================
	// Public methods and propeties
	// =============================
	var obj = {};
	
	// Add to cart
	obj.addItemToCart = function(name, price, count) {
	  for(var item in cart) {
		if(cart[item].name === name) {
		  cart[item].count ++;
		  saveCart();
		  return;
		}
	  }
	  var item = new Item(name, price, count);
	  cart.push(item);
	  saveCart();
	}
	// Set count from item
	obj.setCountForItem = function(name, count) {
	  for(var i in cart) {
		if (cart[i].name === name) {
		  cart[i].count = count;
		  break;
		}
	  }
	};
	// Remove item from cart
	obj.removeItemFromCart = function(name) {
		for(var item in cart) {
		  if(cart[item].name === name) {
			cart[item].count --;
			if(cart[item].count === 0) {
			  cart.splice(item, 1);
			}
			break;
		  }
	  }
	  saveCart();
	}
  
	// Remove all items from cart
	obj.removeItemFromCartAll = function(name) {
	  for(var item in cart) {
		if(cart[item].name === name) {
		  cart.splice(item, 1);
		  break;
		}
	  }
	  saveCart();
	}
  
	// Clear cart
	obj.clearCart = function() {
	  cart = [];
	  saveCart();
	}
  
	// Count cart 
	obj.totalCount = function() {
	  var totalCount = 0;
	  for(var item in cart) {
		totalCount += cart[item].count;
	  }
	  return totalCount;
	}
  
	// Total cart
	obj.totalCart = function() {
	  var totalCart = 0;
	  for(var item in cart) {
		totalCart += cart[item].price * cart[item].count+60.00;
	  }
	  return Number(totalCart.toFixed(2));
	}
  
	// List cart
	obj.listCart = function() {
	  var cartCopy = [];
	  for(i in cart) {
		item = cart[i];
		itemCopy = {};
		for(p in item) {
		  itemCopy[p] = item[p];
  
		}
		itemCopy.total = Number(item.price * item.count).toFixed(2);
		cartCopy.push(itemCopy)
	  }
	  return cartCopy;
	}
  
	// cart : Array
	// Item : Object/Class
	// addItemToCart : Function
	// removeItemFromCart : Function
	// removeItemFromCartAll : Function
	// clearCart : Function
	// countCart : Function
	// totalCart : Function
	// listCart : Function
	// saveCart : Function
	// loadCart : Function
	return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
	event.preventDefault();
	var name = $(this).data('name');
	var price = Number($(this).data('price'));
	shoppingCart.addItemToCart(name, price, 1);
	displayCart();
  });
  
  // Clear items
$('.clear-cart').click(function() {
	shoppingCart.clearCart();
	displayCart();
  });
  
  
  function displayCart() {
	var cartArray = shoppingCart.listCart();
	var output = "";
	for(var i in cartArray) {
	  output += "<tr>"
		+"<th class='text-th'>商品名稱</th>"
		+"<th class='text-th text-center number-text'>數量</th>"
        +"<th class='text-th text-right text_p__one'>單價</th>"
		+"<th class='text-th text-right'>小計</th>"
		+"<th class='text-th'></th>"
		+"</tr>"
		+ "<td class='text-td pt-2' >" + cartArray[i].name + "</td>" 
		+ "<td class='text-center'><div class='input-group pt-2'><button class='minus-item input-group-addon btn btn-primary btn-num '  data-name=" + cartArray[i].name + ">-</button>"
		+ "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
		+ "<button class='plus-item btn btn-primary input-group-addon btn-num' data-name=" + cartArray[i].name + ">+</button></div></td>"
		+ " = " 
		+ "<td class='pt-2 text-right text_p__one'>(" +'NT$'+ cartArray[i].price + ")</td>"
		+ "<td class='pt-2 text-right'>"+ cartArray[i].total + "</td>" 
		+ "<td class='text-right pt-2'><button class='delete-item btn btn-outline-danger btn-delete' data-name=" + cartArray[i].name +"><i class='fas fa-trash-alt'></i></button></td>"
		+  "</tr>"
		+"<tr>"
		+"<td class='text-td pt-2' >" + '運費' + "</td>" 
		+"<td class='text-td text-center pt-2' >" +'1'+ "</td>"
		+"<td class='text-td text-right pt-2 text_p__one'>" + '(NT$60)' + "</td>"
		+"<td class='text-td text-right pt-2' >" + '60.00' + "</td>"
		+"<td class='text-td text-right pt-2' >"  + "</td>"
		+  "</tr>";
	}
	$('.show-cart').html(output);
	$('.total-cart').html(shoppingCart.totalCart());
	$('.total-count').html(shoppingCart.totalCount());
  }
  
  $('.show-cart').on("click", ".delete-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.removeItemFromCartAll(name);
	displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.removeItemFromCart(name);
	displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.addItemToCart(name);
	displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
	 var name = $(this).data('name');
	 var count = Number($(this).val());
	shoppingCart.setCountForItem(name, count);
	displayCart();
  });
  
  displayCart();


  $(document).ready(function () {
	var count = 0;
	$(".add-to-cart2").click(function (event) {
		count++;
		$(".add-to-cart2").addClass("size");
		setTimeout(function () {
			$(".add-to-cart2").addClass("hover");
		}, 200);
		setTimeout(function () {
			$(".cart2 > span").addClass("counter");
			$(".cart2 > span.total-count").text(count);
		}, 400);
		setTimeout(function () {
			$(".add-to-cart2").removeClass("hover");
			$(".add-to-cart2").removeClass("size");
		}, 600);
		event.preventDefault();
	});
});
  
  




/* 結帳 */


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			
			current_fs.css({'left': left,});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity,'position': ''});
		}, 
		duration: 200, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	alert('訂單完成')
})


