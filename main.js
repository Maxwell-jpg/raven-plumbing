const contactModal = document.querySelector(".contactModal")
const bookingModal = document.querySelector(".bookingModal")
const addBookingModal= document.querySelector("#openBookingModal")
const addContactModal= document.querySelector("#openContactModal")




 contactModal.style.display="none";
 bookingModal.style.display="none";

 function showContactModal(){
     contactModal.style.display="block";
 }

function showBookingModal(){

 bookingModal.style.display="block";
}

let name =document.querySelector("#fname").value;
let surname =document.querySelector("#lname").value;
let number =document.querySelector("#number").value;
let email =document.querySelector("#email").value;
let address =document.querySelector("#address").value;
let postcode =document.querySelector("#postcode").value;
let timeDate =document.querySelector("TanD").value;
let reminder = document.querySelector("#remind").value;

let newBooking =`

 <div class="form-con">
          <form method="post email">
            <label class="modelLabel" for="fname"> First Name</label>
            <br />
            <input class="modalInput"  id="fname" type="text" />
            <br />
            <label class="modelLabel" for="lname"> Surname</label>
            <br />
            <input class="modalInput" id="lname" type="text" />
            <br />
            <label class="modelLabel" for="number">Phone Number</label>
            <br />
            <input class="modalInput" id="number" type="text" />
            <br />
            <label class="modelLabel" for="email">Email</label>
            <br />
            <input class="modalInput" id="email" type="email" />
            <br />
            <label class="modelLabel" for="address">address</label>
            <br />
            <input class="modalInput" id="address" type="address" />
            <br />
            <label class="modelLabel" for="postcode">postcode</label>
            <br />
            <input class="modalInput" id="postcode" type="postcode" />
            <br />
            <label class="modelLabel" for="date"> Date and time</label>
            <br />
            <input class="modalInput" id="TanD" type="datetime-local" />
            <br />
               <label class="modelLabel" for="date"> Annual Reminder</label>
               <br />
               <input  id="remind" type="checkbox" />
               <br />
          </form>
        </div>
`;



     function exitModel(){
        let exitModel = document.querySelector("#exit-model");
   bookingModal.style.display='none';
   contactModal.style.display='none';
  } 

