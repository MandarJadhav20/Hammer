const tabs=document.querySelectorAll('.nav-tab')
const line=document.querySelector('.line')

tabs.forEach((tab)=>{
    tab.addEventListener('mouseenter',(e)=>{
        const {left,width}=e.target.getBoundingClientRect();
        const navleft=e.target.parentElement.getBoundingClientRect().left
    
    line.style.width=`${width}px`;
    line.style.left=`${left-navleft}px`;
    })

    tab.addEventListener('mouseleave',()=>{
        line.style.width='0'
    })
});

const searchButton=document.getElementById('searchButton')
const serachoverlay=document.getElementById('serachoverlay')
const closeButton=document.getElementById('closeButton')
const body=document.body


searchButton.addEventListener('click',()=>{
    serachoverlay.style.display='flex';
    body.classList.add('overlay-active')
})

closeButton.addEventListener('click',()=>{
    serachoverlay.style.display='none';
    body.classList.remove('overlay-active')
})

document.addEventListener('DOMContentLoaded',()=>{
    const openButton=document.getElementById('opensideBar')
    const closeButton=document.getElementById('closeSidebar')
    const offcanvass=document.getElementById('offCanvass')

    openButton.addEventListener('click',()=>{
        offcanvass.classList.add('active')
    })

    closeButton.addEventListener('click',()=>{
        offcanvass.classList.remove('active')
    })

})

const images = {
    smartwatches: "./assets/assets/top categories img 1.jpg",
    headphones: "./assets/assets/top categories img 2.jpg",
    earbuds: "./assets/assets/top categories img 3.jpg",
    toothbrushers: "./assets/assets/top categories img 4.jpg",
  };
  
  const mainImage = document.getElementById("main-image");
  const buttons = document.querySelectorAll(".section-button");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      const newImage = images[category];
  
      
      mainImage.style.transform = "translateX(-100%)";
      mainImage.style.opacity = "0";
  
      setTimeout(() => {
       
        mainImage.src = newImage;
        mainImage.alt = category;
  
      
        mainImage.style.transform = "translateX(100%)";
        mainImage.style.opacity = "0";
  
        setTimeout(() => {
          mainImage.style.transform = "translateX(0)";
          mainImage.style.opacity = "1";
        }, 100);
      }, 600); 
    });
  });
  

  //sale
  const saleEndDate=new Date("2025-01-31T23:59:59").getTime()

  const countdownInterval=setInterval(()=>{
    const now=new Date().getTime()
    const timeLeft=saleEndDate-now

    if(timeLeft>0){
        const days=Math.floor(timeLeft / (1000*60*60*24))
        const hours=Math.floor(timeLeft % (1000*60*60*24)/(1000*60*60))
        const minutes=Math.floor(timeLeft %(1000*60*60)/(1000*60))
        const seconds=Math.floor(timeLeft%(1000*60)/1000)

        document.getElementById("days").textContent=days
        document.getElementById("hours").textContent=hours;
        document.getElementById("minutes").textContent=minutes
        document.getElementById("seconds").textContent=seconds
    } else{
        clearInterval(countdownInterval)
        document.querySelector('.countdown-container').innerHTML="<h1>The sale Has ended!</h1>"
    }
  },1000)

  //swapping slider
  const imagess= document.querySelectorAll(".slider-img")
  let currentIndex=0;

  function changeImage(){
    imagess[currentIndex].classList.remove("active")

    imagess[currentIndex].classList.add('fade')

    currentIndex=(currentIndex+1) % imagess.length

    setTimeout(()=>{
        imagess[currentIndex].classList.remove('fade')
        imagess[currentIndex].classList.add('active')
    },1000)
  }
  imagess[0].classList.add('active')

  setInterval(changeImage,4000)


//amoled display
const bravo = document.querySelector('.bravo');
const slider = document.querySelector('.slider');

let isDragging = false;

slider.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const rect = bravo.parentElement.getBoundingClientRect();
    const newWidth = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    bravo.style.width = `${newWidth}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

//3d rotation
// var angle = 0;
// function galleryspin(sign) { 
// spinner = document.querySelector("#spinner");
// if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
// spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
// }

//mutiple carosuel
const carousell = document.querySelector('.carousell');
const cards = document.querySelectorAll('.cardd');
const prevButton = document.querySelector('.prevv');
const nextButton = document.querySelector('.nextt');

let currentIndexx = 0;

function updateCarousel() {

  const offset = -currentIndexx * (cards[0].offsetWidth + 20); // Include margin
  carousell.style.transform = `translateX(${offset}px)`;
}

// Move to the next set of cards
nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndexx++;
    updateCarousel();
  }
});


prevButton.addEventListener('click', () => {
  if (currentIndexx> 0) {
    currentIndexx--;
    updateCarousel();
  }
});


window.addEventListener('resize', updateCarousel);


//cart code
  const products=[
    {
        image:'./assets/assets/featured collection img1.png',
        title:'SCREEN TWS',
        old_price:8999,
        new_price:1899,
        des:'ANC + ENC | Touch Screen'
    },
    {
        image:'./assets/assets/featured collection img2.png',
        title:'ACTIVE 2.0',
        old_price:5999,
        new_price:1699,
        des:'ANC + ENC | Touch Screen'
    },
    {
        image:'./assets/assets/featured collection img3.png',
        title:'SPLENDOR',
        old_price:6999,
        new_price:1299,
        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img4.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,
        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img5.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,
        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img6.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,
        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img7.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,
        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img8.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,

        des:'Bluetooth Neckband'
    },
    {
        image:'./assets/assets/featured collection img7.png',
        title:'Stellar',
        old_price:5999,
        new_price:1399,
        des:'Bluetooth Neckband'
    },
  ]

  //cart
  const openshopping=document.querySelector('.shopping')
  const closeShopping=document.querySelector('.closeShopping')
  const list=document.querySelector('.list')
  const listCard=document.querySelector('.listCard')
  const bodyy=document.querySelector('body')
  const total=document.querySelector('.total')
  const quantity=document.querySelector('.quantity')


let listCards=[]

function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('item')

        newDiv.innerHTML=`
        <img src='${value.image}'/>
        <div class='title'>${value.title}</div>
<div class='price'>
<span>Rs. ${value.new_price}</span><span>Rs. ${value.old_price}</span>
</div>

        <div>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <span>(233)</span>
        </div>
        <p>${value.des}</p>
        <button onclick='addToCart(${key})' class='btn btn-warning'>BUY IT NOW</button>
        `
        list.appendChild(newDiv)
    })
}
initApp()

function addToCart(key){
  console.log("working")
  if(listCards[key]==null){
      listCards[key]={...products[key],quantity:1}
  }
  else{
      listCards[key].quantity+=1
  }
  reloadCart()
}

function reloadCart(){
  listCard.innerHTML=""
  let count=0;
  let totalPrice=0

  listCards.forEach((value,key)=>{
      if(value!=null){
          // totalOffer=value.discount_price*value.quantity
          totalPrice+=value.new_price*value.quantity
          count+=value.quantity
          let newDiv=document.createElement("li")
          newDiv.innerHTML=`
          <img src='${value.image}'/>
          <div>${value.title}</div>
          <div>${value.new_price*value.quantity.toLocaleString()}</div>
          <div>
          <button onclick="changeQuantity(${key},
          ${value.quantity-1})">-</button>
          <div class='count'>${value.quantity}</div>
          
          <button onclick="changeQuantity(${key},
          ${value.quantity+1})">+</button>

          </div>
          
          `
          listCard.appendChild(newDiv)
      }
  })
  total.innerHTML= 'Amount Payable is : &#8377;' +totalPrice.toLocaleString()
  quantity.innerHTML=count;
  totalsaving.innerHTML= '&#8377;' +totalOffer.toLocaleString()
}
function changeQuantity(key,quantity){
  if(quantity<=0){
      delete listCards[key]
  }
  else{
      listCards[key].quantity=quantity
  }
  reloadCart()
}


//scrollto to button



const scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.addEventListener("scroll", () => {
  
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});


scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});
