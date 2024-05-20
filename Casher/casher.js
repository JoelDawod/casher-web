
window.onload=function()
{
    fetch("itemsj.json")
    .then((response) => response.json())
    .then((data) =>{
        var listItems=data;
        listItems.forEach(newitem);
    });
}
function newitem(i)
{
    //creating new object for product
    let item=document.createElement("div");
    item.className="item";

    //img of product
    let img=document.createElement("img");
    img.src="download.png";

    img.addEventListener("click",function(){ itempage(i["id"]);});

    //name of product
    let name=document.createElement("p");
    name.innerHTML=i["name"];
    name.className="name";

    //price of product
    let price=document.createElement("p");
    price.innerHTML="price: "+i["price"]+"$";
    price.className="price";

    //add button to add product to the cart
    let but=document.createElement("button");
    but.addEventListener("click",function(){

        //creatin new object to be shown in the cart
        let cartitem=document.createElement("div");
        cartitem.className="item";

        //info of cart_product
        let p=document.createElement("p");
        p.innerHTML=i["name"]+"<br>price: "+i["price"]+"$";

        //remove button to remove product from cart
        let cartbut=document.createElement("button");
        cartbut.innerHTML="remove";
        cartbut.addEventListener("click",function(){

            //subtracting price from total
            let total=document.getElementById("total");
            let v=parseFloat(total.textContent.replace ( /[^\d.]/g,''));
            if(v=='NaN')
            {
                v=0;
            }
            v-=i["price"];
            total.innerHTML="total: "+v+" $";

            //removing product from cart
            items.removeChild(cartitem);
        });
        cartitem.appendChild(cartbut);
        cartitem.appendChild(p);

        //appending cart_product to cart
        let items=document.getElementById("items");
        items.appendChild(cartitem);

        //adding price to total
        let total=document.getElementById("total");
        let v=parseFloat(total.textContent.replace ( /[^\d.]/g,''));
        if(v=='NaN')
        {
            v=0;
        }
        v+=i["price"];
        total.innerHTML="total: "+v+" $";
    });
    but.innerHTML="add";

    //appending all content of product to it
    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    item.appendChild(but);

    //showing product to website
    let main=document.getElementById("main");

    main.appendChild(item);

}
function checkout()
{
    
    let v=document.getElementById("total").innerHTML;
    if(v!="total: 0 $"){
        alert(document.getElementById("total").innerHTML);
        document.getElementById("total").innerHTML="total: 0 $";
        document.getElementById("items").innerHTML="";
    }
    
    
}

function itempage(id)
{
    fetch("itemsj.json")
    .then((response) => response.json())
    .then((data) =>{
        var listItems=data;
        listItems.forEach(function(i){
            if(i["id"]==id)
            {
                window.open(`item.html?id=${id}`);
            }
        })
    });
}