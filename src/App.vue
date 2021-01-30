<template>
  <div id="app">
    <!-- navbar -->
          <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><em style="color: red; font-size:25px; font-weight:800">GALAXY. A</em><br/> Clothings</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>       
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="active"><a class="nav-link" href="#">Home</a></li>
              <li><a class="nav-link" href="#">Store</a></li>
              <li><a class="nav-link" href="#">Services</a></li>
              <li ><a class="nav-link" href="3">About Us</a></li>
              <li><a class="nav-link" href="#">Contact Us</a></li>
              <li ><a class="nav-link" href="#"><font-awesome-icon style="color:red"  v-on:click="[seen()]" :icon="['fas', 'shopping-cart']"/><span class="item-number">{{ totalQuantity }}</span></a></li>
            </ul>
          </div>
        </div>
      </nav>

    <!-- end of navbar -->

    <!-- header -->

        <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>YOU WILL ALWAYS FEEL THE  <br><span class="text-danger">DRIP....</span></h1>
              <button class="btn btn-danger">Explore our goods <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/> </button>
            </div>
          </div> 
        </div> 
      </div>

    <!-- item sectionr -->

    <!-- Body -->
      
    <div class="main-container">
        <div  v-for="product in products" :key="product.id" class="product">
            <img v-bind:src="require('./assets/'+product.img)" alt="product.name" class="main-img"/>
            <div @click="updateCart(product, 'add')" class="add-to-cart">Add to cart</div>
            <h3 class="goods">{{ product.name }}</h3>
            <h3 class="price">{{ product.price }}</h3>
        </div>
    </div>

    <!-- end of item section     -->

    <!-- Cart Overlay -->

    <div class="cart-overlay">
      <div class="cart" v-if="seen">
        <span class="close-cart">
          <font-awesome-icon v-on:click="[unseen()]" :icon="['fas', 'window-close']"/>
        </span>
        <h2>Your Cart</h2>
    
        <div  class="cart-content">
          <!-- Cart-item -->
          <div v-for="product in cart" :key="product.id" id="cart-item">
            <img v-bind:src="require('./assets/'+product.img)" alt="product.name" class="main-img"/>
            <div class="price_name">
              <h3>{{ product.name }}</h3>
              <h3 class="price-h3"> {{ product.price }}</h3>
            </div>
            
            <div class="add_subtract">
              <h3 @click="updateCart(product, 'subtract')" class="plus" style="cursor:pointer">-</h3>
              <h3>{{ product.quantity }}</h3>
              <h3 @click="updateCart(product, 'add')" class="minus" style="cursor:pointer">+</h3>
            </div>
          </div>
          <!-- end of cart-item -->
        </div>

        <!-- Cart footer -->
        <div class="cart-footer">
            <h3>Your total : $<span class="cart-total">{{ totalPrice }}</span></h3>
          </div>
          <!-- End of Cart footer -->
      </div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

 export default {
   name: 'App',
//   components: {
//     HelloWorld
//   }

data() {
        return {
            products: [
                {
                id: 1,
                name:'Chelsea Boot',
                price: '40',
                img: 'IMG-20210128-WA0018.jpg',
                quantity: 0
            },{
                    id: 2,
                    name:'Hublot Watch',
                    price: '50',
                    img: 'IMG-20210128-WA0028.jpg',
                    quantity: 0
                },{
                    id: 3,
                    name:'Men Sneaker',
                    price: '65',
                    img: 'IMG-20210128-WA0040.jpg',
                    quantity: 0
                },{
                    id: 4,
                    name:'White Sneaker',
                    price: '20',
                    img: 'IMG-20210128-WA0048.jpg',
                    quantity: 0},
                    {
                id: 1,
                name:'Men Suit',
                price: '80',
                img: 'navy blue blazer outfit men wedding.jpeg',
                quantity: 0
            },{
                    id: 2,
                    name:'Loius Vuition',
                    price: '30',
                    img: 'IMG-20210128-WA0023.jpg',
                    quantity: 0
                },{
                    id: 3,
                    name:'Brown Sneakers',
                    price: '35',
                    img: 'IMG-20210128-WA0043.jpg',
                    quantity: 0
                },{
                    id: 4,
                    name:'Wristwatch',
                    price: '25',
                    img: 'IMG-20210128-WA0021.jpg',
                    quantity: 0},
                    
            ],
            showCart: false,
            carts: []
        }
        
    },
    computed: {
            cart () {
                return this.products.filter(product => product.quantity > 0);
            },
            totalQuantity() {
                return this.products.reduce(
                (total, product) => total + product.quantity, 
                0
                );
            },
            
            totalPrice() {
              return this.products.reduce((total, product) => {
                let newPrice = product.price
                return total + newPrice * product.quantity
              }, 0)
            },
            
        },
    methods: {
      seen: function() {
        document.querySelector('.cart-overlay').style.visibility='visible'
        document.querySelector('.cart').style.transform = 'translateX(0%)';  
      },
      
      unseen: function() {
        document.querySelector('.cart-overlay').style.visibility='hidden'
        document.querySelector('.cart').style.transform = 'translateX(101%)';
      },
  
      updateCart(product, updateType) {
     
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].id === product.id) {
                      
                        if (updateType === 'subtract') {
                            if (this.products[i].quantity !== 0) {
                                this.products[i].quantity--;
                                }

                        } else if (updateType === 'add') {
                            this.products[i].quantity++
                            this.products[i].price
                        }
                      else if (updateType === 'clear') {
                          console.log(this.products.length);
                          console.log(this.products[i]);
                      }
                        break;
                    }
                    
                }

            },        

    },

 }
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  /* Header */

.header{
    background-image: url("./assets/pexels-artem-beliaikin-994517.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 65vh;
    width: 100%;
    margin-bottom: 50px;
}

.header h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    color: #FFFFFF;
    padding-top: 180px;
    padding-bottom: 50px;
}

.header button{
    width: 250px;
    padding: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
}

  /* End of header */

/* Bootstrap Header */

.image-1, .image-2, .image-3, .image-4 {
  height: 25vh;
}

.carousel-inner {
  height: 65vh;
}

/* End of Bootstrap Header */

  /* Item Section */

.main-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
  justify-content: center;
  width: 80%;
  margin: auto; 
}

.item-number {
  color: red;
  font-weight: 600;
	width: 13px;
	height: 20px;
	border-radius: 25% 25% 25% 25%;
	padding: 0 0 0 2px;
  position: relative;
  top: -10px;
  left: -6px;
}


.product {
   display: inline-block;
   position: relative;
   overflow: hidden;
   width: 200px;
   left: 50px;
   margin-bottom: 10px
}

.price {
  color: gold;
  letter-spacing: 0.3rem;
  font-size: 20px;
  font-weight: 700;
}
.goods {
  letter-spacing: 0.2rem;
  font-size: 20px;
}
.main-img {
    width: 200px;
    height: 230px;
    border-radius: 5%;
}
.add-to-cart {
    background-color: orange;
    color: white;
    width: 150px;
    height: 29px;
    padding-top: 3px;
    border-radius: 6%;
    position: absolute;
    right: 0px;
    top: 150px;
    transform: translateX(101%);
    cursor: pointer;
    transition: all 0.6s linear;
    letter-spacing: 0.3rem;
}
.add-to-cart:hover {
  transform: translateX(0%);
}

.main-img:hover ~ .add-to-cart {
  transform: translateX(0);
}

@media screen and (max-width: 900px) {
  .product {
    left: 50px;
  }
}

  /* End of Item Sections */

  /* Cart Overlay */

.cart-overlay {
position: absolute;
 top: 0;
	right: 0;
	width: 100%;
	height: 1440px;
 background: transparent;
  background: rgba(240, 157, 81, 0.5);
 z-index: 2;
	visibility: hidden;
 transition: all 0.6s linear;
 }

 .cart {
position: fixed;
 top: 0;
 right: 0;
 width: 30%;
 height: 100%;
 overflow: scroll;
 background: gray;
 z-index: 3;
 background: rgb(231, 226, 221);
 padding: 1.5rem;
 transform: translateX(101%);
 transition: all 0.8s linear;
 }

 .showCart {
	transform: translateX(0);
 }

 .transparentBcg {
	visibility: visible;
 }

 .close-cart {
  position: relative;
  left: -200px;
	font-size: 1.7rem;
	cursor: pointer;
 }

/* End of Cart Overlay */

/* ------Cart-item-------------- */

#cart-item {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  padding-bottom: 20px
}

 .cart h2 {
	text-transform: capitalize;
	text-align: center;
	letter-spacing: 0.3rem;
	margin-bottom: 2rem;
 }


#cart-item img {
width: 120px;
height: 97px
}

.price_name {
  height: 97px;
  display: grid;
  grid-gap: 25px
}

.add_subtract {
  height: 97px;
  display: grid;
  position: relative;
  top: -13px;
  justify-content: end;
}

#cart-item h4 {
font-size: 0.85rem;
text-transform: capitalize;
letter-spacing: 0.3rem;;
}

.item-amount {
text-align: center;
margin-bottom: 0;
}

.remove-item {
color: grey;
cursor: pointer;
}

.fa-chevron-up, .fa-chevron-down {
color: orange;
cursor: pointer;
}

 @media screen and (max-width: 900px) {
	.cart {
		width: 30vw;
		min-width: 375px;
  }
  .close-cart {
    left: -153px;
  }
  #cart-item img {
    width: 85px;
  }
 }

/* ----------End of Cart Item---------- */

.cart-footer {
margin-top: 2rem;
letter-spacing: 0.3rem;
text-align: center;
}

.cart-footer h3 {
text-transform: capitalize;
margin-bottom: 1rem;
}

.clear-cart {
background-color: orange;
width: 12rem;
height: 45px;
text-transform: capitalize;
cursor: pointer;
overflow: hidden;
border: none;
font-size: 1rem;
letter-spacing: 0.3rem;
}

.cart-total {
text-transform: capitalize;
margin-bottom: 1rem;
font-weight: 800;
}

  /* End of Cart Footer */

</style>
