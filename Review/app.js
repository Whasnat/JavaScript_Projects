// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "Making the impossible possible",
    img:
      "https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.0-9/60674163_2227034044043889_2409629068560433152_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGeq15EvLpoCA5ayn_1Bf4LK-GUKEICOdkr4ZQoQgI52aimaVezWPyzGxTzGDZslarQ_iFTLL2iNhu4kNCMXv-D&_nc_ohc=uH3eLJCaJbAAX9FfuZ2&_nc_ht=scontent.fcgp17-1.fna&oh=b9479e3c4d6672290beb6a9a56870df9&oe=607216EE",  
    text:
      "He is Ananta Jalil, also known as Jalil Kaku. He doesn't care if you are Sakib Khan or Amir Khan. He considers Tom Cruse to be his only competitor. His job is to make the impossible possible.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//  Item selection
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Initial Item
let currentItem = 0;

// First Load window
window.addEventListener("DOMContentLoaded", function(){
  displayReview();
});


// Display Individual Review
function displayReview(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


// Button Clicks
nextBtn.addEventListener("click", function(){
  currentItem ++;
  if(currentItem > reviews.length - 1) // if currentItem is at the last item
    currentItem = 0;
  displayReview();
});
prevBtn.addEventListener("click", function(){
  currentItem --;
  if(currentItem < 0 )    // if currentItem is at the first item
    currentItem = reviews.length -1;  
  displayReview();
});

randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() * reviews.length); //generate a random within reviews.length.
  displayReview();
});