let burgger = [
    {
        itemcode : "B1001",
        itemname :"Classic Burger (Large)",
        price : 750.00,
        discount : 0
    },{
        itemcode : "B1002",
        itemname :"Classic Burger (Regular) ",
        price : 1500.00,
        discount :15
  
    },{
        itemcode : "B1003",
        itemname :"Turkey Burger",
        price : 1600.00,
        discount : 0

    },{
        itemcode : "B1004",
        itemname :"Chicken Burger (Large) ",
        price : 1400.00,
        discount : 0

    },{
        itemcode : "B1005",
        itemname :"Chicken Burger (Regular)  ",
        price : 800.00,
        discount : 20

    },{
        itemcode : "B1006",
        itemname :"Cheese Burger (Large) ",
        price : 1000.00,
        discount : 0

    },{
        itemcode : "B1007",
        itemname :"Cheese Burger (Regular) ",
        price : 600.00,
        discount : 0

    },{
        itemcode : "B1008",
        itemname :"Bacon Burger ",
        price : 650.00,
        discount : 15

    },{
        itemcode : "B1009",
        itemname :"Shawarma Burger",
        price : 800.00,
        discount : 0

    },{
        itemcode : "B1010",
        itemname :"Olive Burger ",
        price : 1800.00,
        discount : 0

    },{
        itemcode : "B1012",
        itemname :"Double-Cheese Burger ",
        price : 1250.00,
        discount : 20

    },{
        itemcode : "B1013",
        itemname :"Crispy Chicken Burger (Regular) ",
        price : 1200.00,
        discount : 0

    },{
        itemcode : "B1014",
        itemname :"Crispy Chicken Burger (Regular) ",
        price : 1600.00,
        discount : 10

    },{
        itemcode : "B1015",
        itemname :"Paneer Burger ",
        price : 900.00,
        discount :0
}];

let Chicken = [
    {
        itemcode : "B1038",
        itemname :"Fried Chicken (Small)  ",
        price : 1200.00,
        discount : 0
   
    },{
        itemcode : "B1039",
        itemname :" Fried Chicken (Regular) ",
        price : 2300.00,
        discount : 10
   
    },{
        itemcode : "B1040",
        itemname :"Fried Chicken (Large)  ",
        price : 3100.00,
        discount : 5
   
    },{
        itemcode : "B1041",
        itemname :"Fried Chicken (Large)  ",
        price : 2400.00,
        discount : 0
   
    },{
        itemcode : "B1042",
        itemname :"Devilled Chicken (Large)  ",
        price : 900.00,
        discount : 0
   
    },{
        itemcode : "B1043",
        itemname :" BBQ Chicken (Regular) ",
        price : 2100.00,
        discount : 0
   
    }
  ];
let Beverages = [
    {
        itemcode : "B1044",
        itemname :" Pepsi (330ml)  ",
        price : 990.00,
        discount : 5 
    },{
        
        itemcode : "B1045",
        itemname :" Coca-Cola (330ml)  ",
        price : 1230.00,
        discount : 0
    },{
        
        itemcode : "B1046",
        itemname :" Sprite (330ml)   ",
        price : 1500.00,
        discount : 3
    },{
        
        itemcode : "B1047",
        itemname :" Mirinda (330ml)  ",
        price : 850.00,
        discount : 7
    }
  ]

let fries=[
    {
        itemcode:"B1025",
        itemname:"Steak Fries (Large) ",
        pricelkr:1200.00,
        discount:0
    },  {
        itemcode:"B1026",
        itemname:"Steak Fries (Medium)",
        pricelkr:600.00,
        discount:0
    },  {
        itemcode:"B1027",
        itemname:"French Fries (Large)",
        pricelkr:"800.00",
        discount:0
    },  {
        itemcode:"B1028",
        itemname:"French Fries (Medium)",
        pricelkr:650.00,
        discount:0
    },  {
        itemcode:"B1029",
        itemname:"French Fries (Small)",
        pricelkr:450.00,
        discount:0
    },  {
        itemcode:"B1030",
        itemname:"Sweet Potato Fries (Large)",
        pricelkr:600.00,
        discount:0
    },

 ];

let pasta=[
    {
        itemcode:"B1031",
        itemname:"Chicken n Cheese Pasta ",
        pricelkr:1600.00,
        discount:15
    },  {
        itemcode:"B1032",
        itemname:"Chicken Penne Pasta ",
        pricelkr:1700.00,
        discount:0
    },  {
        itemcode:"B1033",
        itemname:"Ground Turkey Pasta Bake",
        pricelkr:2900.00,
        discount:0
    },  {
        itemcode:"B1034",
        itemname:"Creamy Shrimp Pasta ",
        pricelkr:2000.00,
        discount:0
    },  {
        itemcode:"B1035",
        itemname:"Lemon Butter Pasta",
        pricelkr:1950.00,
        discount:0
    },  {
        itemcode:"B1036",
        itemname:"Tagliatelle Pasta",
        pricelkr:2400.00,
        discount:0
    },
    {
        itemcode:"B1037",
        itemname:"Baked Ravioli",
        pricelkr:2000.00,
        discount:0
    }];
Chicken.forEach(element => {
	document.getElementById("burgers").innerHTML +=	
				`<div class="card m-3 " style="width: 18rem;">
				<img class="card-img-top" src="img/burgerHomepage.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${element.itemname}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${element.price}</li>
					<li class="list-group-item">${element.discount}%</li>
				</ul>
				<div class="card-body">
					<button class="btn bg-danger text-light" >Place Order</button>
                      
					<a href="#" class="card-link">Add to Cart</a>
				</div>
				</div>`
	
            });
pasta.forEach(element => {
	document.getElementById("pasta").innerHTML +=	
	
				`<div class="card m-3 " style="width: 18rem;">
				<img class="card-img-top" src="img/burgerHomepage.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${element.itemname}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${element.price}</li>
					<li class="list-group-item">${element.discount}%</li>
				</ul>
				<div class="card-body">
					<button class="btn bg-danger text-light" >Place Order</button>
                      
					<a href="#" class="card-link">Add to Cart</a>
				</div>
				</div>`
	});



fries.forEach(element => {
	document.getElementById("fries").innerHTML +=	
	
				`<div class="card m-3 " style="width: 18rem;">
				<img class="card-img-top" src="img/burgerHomepage.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${element.itemname}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${element.price}</li>
					<li class="list-group-item">${element.discount}%</li>
				</ul>
				<div class="card-body">
					<button class="btn bg-danger text-light" >Place Order</button>
                      
					<a href="#" class="card-link">Add to Cart</a>
				</div>
				</div>`
	
});

Beverages.forEach(element => {
	document.getElementById("Beverages").innerHTML +=	
	
				`<div class="card m-3 " style="width: 18rem;">
				<img class="card-img-top" src="https://blog.ncponline.com/wp-content/uploads/2023/07/Blog_Summer-Beverage-Trends-Feature-Image.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${element.itemname}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${element.price}</li>
					<li class="list-group-item">${element.discount}%</li>
				</ul>
				<div class="card-body">
					<button class="btn bg-danger text-light" >Place Order</button>
                      
					<a href="#" class="card-link">Add to Cart</a>
				</div>
				</div>`
	
});
burgger.forEach(element => {
	document.getElementById("Chicken").innerHTML +=	
	
				`<div class="card m-3 " style="width: 18rem;">
				<img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">${element.itemname}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">${element.price}</li>
					<li class="list-group-item">${element.discount}%</li>
					<li class="list-group-item">Total : </li>
				</ul>
				<div class="card-body">
					<button class="btn bg-danger text-light" >Place Order</button>
                      
					<a href="#" class="card-link">Add to Cart</a>
				</div>
				</div>`
	
});

class StickyNavigation {
	
	
	constructor() {

		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}


new StickyNavigation();





function add(){
    let code=document.getElementById("Item_Code").value;
    let name=document.getElementById("Item_Name").value;
    let price=document.getElementById("Price").value;
    let discount=Number(document.getElementById("Discount").value);
    let catogary=document.getElementById("itemDropdown").value;

    if (catogary =="burgger") {
        let burggers = {
            itemcode : code,
            itemname :name,
            price : price,
            discount : discount
        }
        burgger.push(burggers)
    } else if (catogary == "Chicken"){
        let Chickens = {
            itemcode : code,
            itemname :name,
            price : price,
            discount : discount
        }
        Chicken.push(Chickens)
    }else if (catogary == "Beverages"){
        let Beveragess = {
            itemcode : code,
            itemname :name,
            price : price,
            discount : discount
        }
        Beverages.push(Beveragess)
    }else if (catogary == "Fries"){
        let Friess = {
            itemcode : code,
            itemname :name,
            price : price,
            discount : discount
        }
        fries.push(Friess)
    }else if (catogary == "Pasta"){
        let friess = {
            itemcode : code,
            itemname :name,
            price : price,
            discount : discount
        }
        pasta.push(friess)
    }
    console.log(burgger);
    



    document.getElementById("table").innerHTML+= `
        <tr>
                        <td>${code}</td>
                        <td>${name}</td>
                        <td>${price}</td>
                        <td>${discount}</td>
                        <td>${catogary}</td>
                    
        </tr>
    `
    document.getElementById("Item_Code").value = "";
    document.getElementById("Item_Name").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Discount").value = "";


}

let Customer=[];


function addcustomer(){
    let customercode=document.getElementById("Customer_Code").value;
    let customername=document.getElementById("Customer_Name").value;
    let customernumber=document.getElementById("Customernumber").value;
    let customerbd=document.getElementById("Customerbd").value;


    document.getElementById("tableCustomer").innerHTML+= `
        <tr>
                        <td>${customercode}</td>
                        <td>${customername}</td>
                        <td>${customernumber}</td>
                        <td>${customerbd}</td>
                       
                    
        </tr>
    `




}


 