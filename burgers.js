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

    burgger.forEach(element => {
        document.getElementById("burgers123").innerHTML +=	
                    `
                    <div class="card m-3 " style="width: 18rem;">
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
