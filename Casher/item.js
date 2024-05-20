function loadweb(id)
{
    fetch("itemsj.json")
    .then((response) => response.json())
    .then((data) =>{
        var listItems=data;
        listItems.forEach(function(i){
            if(i["id"]==id)
            {
                itemData(i);
            }
        })
    });
    console.log(id);
}
function itemData(obj)
{
    document.getElementById("name").innerHTML=obj["name"];
    document.getElementById("data").innerHTML="Price: "+obj["price"]+"<br>Catigory: "+obj["category"]+"<br>Size: "+obj["size"];
}
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}