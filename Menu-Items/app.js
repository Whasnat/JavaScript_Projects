// MenuItemLIST // External-API// MenuItemObjects // listItems
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Pizza Italiano",
    category: "lunch",
    price: 18.99,
    img: "./images/item-11.jpeg",
    desc: `Authentic Italian pizza. Made with italian frmalino flower, Hemalian Pink Sault, freshly made Goat chese and romanio tomato sauce`,
  },
  {
    id: 11,
    title: "Pumpkin Pie",
    category: "dessert",
    price: 6.99,
    img: "./images/item-12.jpeg",
    desc: `Authentic Italian pie. Made with pumpkin, cane sugar, flower, vanilla extract and love`,
  },
  {
    id: 12,
    title: "Steak Dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-12.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut `,
  },
];

const selectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  filters();
});

// Dynamic filters function
function filters(){
  //iterate over the menu and return categories as an array
  const categories = menu.reduce((values, item) => {
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },["all"]); 

  // Map the categories array as buttons
  const categoryBtn = categories.map(category => {
    return `<button class="filter-btn" type="button" data-id =${category}>${category}</button>`
  }).join("");

  btnContainer.innerHTML = categoryBtn; // add the buttons in btn-container


  //Filter menu items on click
  const filterBtn = document.querySelectorAll(".filter-btn"); // Select the btn class
  filterBtn.forEach(btn => {
    btn.addEventListener("click", e => {
      const category = e.currentTarget.dataset.id;  // get each btn by data-[id]
      const menuCategory = menu.filter(menuItem => {
        if(menuItem.category === category){
          return menuItem;
        }
      });
      if(category === "all"){
        displayMenuItems(menu);
      } else{
        displayMenuItems(menuCategory);
      }
    });
  });
}



// Display Menu Items on DOM Content Loaded
function displayMenuItems (menuItems){
  let displayMenu = menuItems.map(item => {
    
    //[use `` not '' or ""]
    return `<article class="menu-item">                                 
          <img src=${item.img} alt=${item.title} class="photo">
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;

        //***NOTE*** [To map HTML-template from a function use `` in return, not '' or "" ]
});
displayMenu = displayMenu.join("");
selectionCenter.innerHTML = displayMenu; // add display items to section-center
}