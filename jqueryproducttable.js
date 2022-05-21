$(document).ready(function(){

    const products = [];
    var indexForEdit;
    function Tocheck(){
     let flag=1;
     var sku = $("#product_sku").val();
     var name =$("#product_name").val();
     var price =$("#product_price").val();
     var quantity=$("#product_quantity").val();
     if(sku ==""){
        $("#sku").text("");
         $("#sku").text(" * SKU field should not be empty").css("color","#FF5733");
         flag=0;
     }
     else if(isNaN(sku)){
        $("#sku").text("");
        $("#sku").text(" * SKU field should be integer").css("color","#FF5733"); 
          flag=0;
      }
     else{
         $("#sku").text(" ");
      }
     if(name ==""){
         $("#name").text("*name field should not be empty").css("color","#FF5733");
         flag=0;
     }
     else if(!isNaN(name)){
         $("#name").text("*name field should be string").css("color","#FF5733");
         flag=0;
     }
     else{
        $("#name").text(" ");
     }

     if(price ==""){
         $("#price").text("*price field should not be empty").css("color","#FF5733");
         flag=0;
     }
     else if(isNaN(price)){
         $("#price").text("*product field should be integer").css("color","#FF5733");
         flag=0;
     }
    else{
        $("#price").text(" ");
    }

     if(quantity ==""){
         $("#quantity").text("*quantity field should not be empty").css("color","#FF5733");
        
         flag=0;
     }
     else if(isNaN(quantity)){
         $("#quantity").text("*quantity field should be integer").css("color","#FF5733");
         
         flag=0;
     }
    else{
        $("#quantity").text(" ");
    }
     return flag;
    }
    $("#add_product").click(function(){
     if(Tocheck()){
      $(".error").hide();
      $(".success").show();
     if($("#add_product").val() == "update"){
         products[indexForEdit][0]=$("#product_sku").val();
         products[indexForEdit][1]=$("#product_name").val();
         products[indexForEdit][2]=$("#product_price").val();
         products[indexForEdit][3]=$("#product_quantity").val();
         console.log("Updated Product "+products);
         $("#add_product").val("add product");
     }
     else{
       var sku = $("#product_sku").val();
       var name =$("#product_name").val();
       var price =$("#product_price").val();
       var quantity=$("#product_quantity").val();
       var temp=[sku,name,price,quantity];
       products.push(temp);
     }
       display();
    }
    else{
        $(".error").show();
    }
     });
      function display(){
         $("#product_list").show();
         var text=" <tr><th>SKU</th> <th>Name</th><th>Price</th><th>Quantity</th><th>Action<th></tr> ";
         for(let i=0 ;i<products.length ;i++){
             text+= "<tr id='"+i+"'>";
             for(j=0;j<=3;j++){
                 text+="<td>"+products[i][j]+"</td>";
             }
             text+="<td><a href='#' class='editItem'>Edit</a>&nbsp&nbsp&nbsp<a href='#' class='deleteItem'>Delete</a></td></tr>";
         }
         console.log(text);
         $('#table').html(text);
      }
     $("#product_list").on("click",".deleteItem",function(event){
         if(confirm("Do you want to delete")){
            $(event.target).parent().parent().remove();
            var d= $(event.target).parent().parent()[0].id;
            products.splice(d,1);
            if(products.length == 0){
                $("#product_list").hide();
            }
         }
     });
     $("#product_list").on("click",".editItem",function(event){
         indexForEdit = $(event.target).parent().parent()[0].id;
         $("#product_sku").val(products[indexForEdit][0]);
         $("#product_name").val(products[indexForEdit][1]);
         $("#product_price").val(products[indexForEdit][2]);
         $("#product_quantity").val(products[indexForEdit][3]);
         $("#add_product").val("update");
     });
     $("#notification").on("click",".close",function(event){
        $(event.target).parent().hide();
     });
 });

 