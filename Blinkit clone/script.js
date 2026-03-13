// add to cart //

// select btns//

let button=document.querySelectorAll(".btn")

let ItemCount=document.getElementById("cartItem")
let cartPrice=document.getElementById("cartPrice")
let cartbtn=document.getElementById("cart-btn")

let count=0;
let total=0;

button.forEach(function(btn){
    btn.addEventListener('click',function(){

   


       let product= btn.parentElement;


       let productPrice=product.querySelector(".price").innerText;

       productPrice.replace("rs","");

       productPrice=parseInt(productPrice);
       

       count++;
       total+=productPrice;

       

       

       ItemCount.innerText=count+  "Item"
       ItemCount.style.padding="5px";
       ItemCount.style.fontWeight="600"
       ItemCount.style.marginBottom="10px"

       cartPrice.innerText=total;
       cartPrice.style.position="relative"
       cartPrice.style.right="40%"
       cartPrice.style.marginTop="28px"
       cartPrice.style.fontWeight="500"

       cartbtn.style.display="block";

       
    

       
       


       

    

    
       
   
       

      


    })

    

})

const loginbtn=document.querySelector(".Login-btn")
loginbtn.addEventListener('click',()=>{
   window.location.href="login.html"
})


const login=document.querySelector(".account")
login.addEventListener('click',()=>{
   window.location.href="login.html";
})

const linkdin=document.getElementById("linkdin")
const github=document.getElementById("github")

linkdin.addEventListener('click',()=>{
   window.location.href="https://www.linkedin.com/in/harsh-kumar-152b18389?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPIrOuB54T6O1JD5nebDYXw%3D%3D"
})

github.addEventListener('click',()=>{
   window.location.href="https://github.com/harshkumar225?tab=repositories"
})









//const login=document.querySelector(".login-page")
//window.addEventListener('click',()=>{
   // window.location.href="login.html"
//})

        