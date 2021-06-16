function closeModal() {
    document.querySelector(".mask").classList.remove("active");
 }
 
 const image = document.querySelector('.show');
 
 image.addEventListener("click", function (event){
   
    event.preventDefault();

   document.querySelector(".mask").classList.add("active");
 });
 
 document.querySelector('.close').addEventListener("click", closeModal);
 
 
 document.addEventListener("keyup", function (event){
   if (event.keyCode == 27) {
     closeModal();
   }
 })