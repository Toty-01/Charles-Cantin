

let products = {
  data: [
    {
      productName: "Premiers échanges entre père et enfant",
      category: "bébé",
      price: "Bébé",
      image: "./pic/baby/baby (4).jpg",
    },
    {
      productName: "Avant / pendant / après",
      category: "grossesse",
      price: "Grossesse",
      image: "./pic/pregnant/enceinte (1).jpg",
    },
    {
      productName: "l'amour n'a de sens que s'il est partagé",
      category: "couple",
      price: "Couple",
      image: "./pic/couple/couple (12).jpg",
    },
    {
      productName: "Couché de soleil en famille",
      category: "famille",
      price: "Famille",
      image: "./pic/family/familly (3).jpg",
    },
    {
      productName: "Baptême du petit de la famille",
      category: "baptême",
      price: "Baptême",
      image: "./pic/baptism/bapteme (1).jpg",
    },
    {
      productName: "Le rire d'un nouveau née est communicatif",
      category: "bébé",
      price: "Bébé",
      image: "./pic/baby/baby (5).jpg",
    },
    {
      productName: "Une famille type pour un moment de partage",
      category: "famille",
      price: "Famille",
      image: "./pic/family/familly (2).jpg",
    },
    {
      productName: "Embrassadse sous un couché de soleil",
      category: "couple",
      price: "Couple",
      image: "./pic/couple/couple (9).jpg",
    },
    {
      productName: "Cadeaux pour le nouveau baptisé",
      category: "baptême",
      price: "Baptême",
      image: "./pic/baptism/bapteme (15).jpg",
    },
    {
      productName: "Les mariés à la sortie de l'église",
      category: "mariage",
      price: "Mariage",
      image: "./pic/wedding/wedding (10).jpg",
    },
    {
      productName: "Un enfant avec une capuche jaune tricotée main",
      category: "bébé",
      price: "Bébé",
      image: "./pic/baby/baby (12).jpg",
    },
    {
      productName: "l'amour à bicyclette",
      category: "couple",
      price: "Couple",
      image: "./pic/couple/couple (5).jpg",
    },
    {
      productName: "Photo d'un baptême en noir et blanc",
      category: "baptême",
      price: "Baptême",
      image: "./pic/baptism/bapteme (7).jpg",
    },
    {
      productName: "Le noir et blanc , le contraste pur",
      category: "portrait",
      price: "Portrait",
      image: "./pic/portrait/portrait (7).jpg",
    },
    {
      productName: "Enfants avec ensemble lapin",
      category: "bébé",
      price: "Bébé",
      image: "./pic/baby/baby (2).jpg",
    },
    {
      productName: "La grossesse presque à terme",
      category: "grossesse",
      price: "Grossesse",
      image: "./pic/pregnant/enceinte (12).jpg",
    },
    {
      productName: "Décoration florale lors d'un mariage en bord de mer",
      category: "mariage",
      price: "Mariage",
      image: "./pic/wedding/wedding (2).jpg",
    },
    {
      productName: "Baptisé devant les yeux du grand frère",
      category: "baptême",
      price: "Baptême",
      image: "./pic/baptism/bapteme (2).jpg",
    },
    {
      productName: "Liés par les choses de la vie",
      category: "couple",
      price: "Couple",
      image: "./pic/couple/couple (2).jpg",
    },
    {
      productName: "Séance photo avec enfant dans mon studio",
      category: "bébé",
      price: "Bébé",
      image: "./pic/baby/baby (8).jpg",
    },
    {
      productName: "Portrait d'une femme entre ombre et lumiere",
      category: "portrait",
      price: "Portrait",
      image: "./pic/portrait/portrait (12).jpg",
    },
    {
      productName: "Un instant , une journée , pour s'unir à jamais",
      category: "mariage",
      price: "Mariage",
      image: "./pic/wedding/wedding (5).jpg",
    },
    {
      productName: "Moment de folie immortalisé entre mère et fille",
      category: "famille",
      price: "Famille",
      image: "./pic/family/familly (1).jpg",
    },
    {
      productName: "Prise de vue apprécié des futurs mariés",
      category: "mariage",
      price: "Mariage",
      image: "./pic/wedding/wedding (9).jpg",
    },
    {
      productName: "Shooting d'une mannequin pour un book professionnel",
      category: "portrait",
      price: "Portrait",
      image: "./pic/portrait/portrait (13).jpg",
    },
    {
      productName: "Décoration de mariage avec thème coloré / rose",
      category: "mariage",
      price: "Mariage",
      image: "./pic/wedding/wedding (6).jpg",
    },
    {
      productName: "Couché de soleil aux antilles / famille nombreuse",
      category: "famille",
      price: "Famille",
      image: "./pic/family/familly (6).jpg",
    },
    {
      productName: "grossesse en noir et blanc",
      category: "grossesse",
      price: "Grossesse",
      image: "./pic/pregnant/enceinte (8).jpg",
    },
    {
      productName: "Une famille réunie pour un anniversaire",
      category: "famille",
      price: "Famille",
      image: "./pic/family/familly (13).jpg",
    },
    {
      productName: "Je propose aussi mes services pour les animaux",
      category: "portrait",
      price: "Portrait",
      image: "./pic/portrait/portrait (4).jpg",
    },
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};