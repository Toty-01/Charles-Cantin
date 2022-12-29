

let products = {
  data: [
    {
      productName: "Premiers échanges entre père et enfant",
      category: "bébé",
      desc: "Bébé",
      image: "./pic/baby/baby (4).jpg",
    },
    {
      productName: "Avant / pendant / après",
      category: "grossesse",
      desc: "Grossesse",
      image: "./pic/pregnant/enceinte (1).jpg",
    },
    {
      productName: "l'amour n'a de sens que s'il est partagé",
      category: "couple",
      desc: "Couple",
      image: "./pic/couple/couple (12).jpg",
    },
    {
      productName: "Couché de soleil en famille",
      category: "famille",
      desc: "Famille",
      image: "./pic/family/familly (3).jpg",
    },
    {
      productName: "Baptême du petit de la famille",
      category: "baptême",
      desc: "Baptême",
      image: "./pic/baptism/bapteme (1).jpg",
    },
    {
      productName: "Le rire d'un nouveau née est communicatif",
      category: "bébé",
      desc: "Bébé",
      image: "./pic/baby/baby (5).jpg",
    },
    {
      productName: "Une famille type pour un moment de partage",
      category: "famille",
      desc: "Famille",
      image: "./pic/family/familly (2).jpg",
    },
    {
      productName: "Embrassadse sous un couché de soleil",
      category: "couple",
      desc: "Couple",
      image: "./pic/couple/couple (9).jpg",
    },
    {
      productName: "Cadeaux pour le nouveau baptisé",
      category: "baptême",
      desc: "Baptême",
      image: "./pic/baptism/bapteme (15).jpg",
    },
    {
      productName: "Les mariés à la sortie de l'église",
      category: "mariage",
      desc: "Mariage",
      image: "./pic/wedding/wedding (10).jpg",
    },
    {
      productName: "Un enfant avec une capuche jaune tricotée main",
      category: "bébé",
      desc: "Bébé",
      image: "./pic/baby/baby (12).jpg",
    },
    {
      productName: "l'amour à bicyclette",
      category: "couple",
      desc: "Couple",
      image: "./pic/couple/couple (5).jpg",
    },
    {
      productName: "Photo d'un baptême en noir et blanc",
      category: "baptême",
      desc: "Baptême",
      image: "./pic/baptism/bapteme (7).jpg",
    },
    {
      productName: "Le noir et blanc , le contraste pur",
      category: "portrait",
      desc: "Portrait",
      image: "./pic/portrait/portrait (7).jpg",
    },
    {
      productName: "Enfants avec ensemble lapin",
      category: "bébé",
      desc: "Bébé",
      image: "./pic/baby/baby (2).jpg",
    },
    {
      productName: "La grossesse presque à terme",
      category: "grossesse",
      desc: "Grossesse",
      image: "./pic/pregnant/enceinte (12).jpg",
    },
    {
      productName: "Décoration florale lors d'un mariage en bord de mer",
      category: "mariage",
      desc: "Mariage",
      image: "./pic/wedding/wedding (2).jpg",
    },
    {
      productName: "Baptisé devant les yeux du grand frère",
      category: "baptême",
      desc: "Baptême",
      image: "./pic/baptism/bapteme (2).jpg",
    },
    {
      productName: "Liés par les choses de la vie",
      category: "couple",
      desc: "Couple",
      image: "./pic/couple/couple (2).jpg",
    },
    {
      productName: "Séance photo avec enfant dans mon studio",
      category: "bébé",
      desc: "Bébé",
      image: "./pic/baby/baby (8).jpg",
    },
    {
      productName: "Portrait d'une femme entre ombre et lumiere",
      category: "portrait",
      desc: "Portrait",
      image: "./pic/portrait/portrait (12).jpg",
    },
    {
      productName: "Un instant , une journée , pour s'unir à jamais",
      category: "mariage",
      desc: "Mariage",
      image: "./pic/wedding/wedding (5).jpg",
    },
    {
      productName: "Moment de folie immortalisé entre mère et fille",
      category: "famille",
      desc: "Famille",
      image: "./pic/family/familly (1).jpg",
    },
    {
      productName: "Prise de vue apprécié des futurs mariés",
      category: "mariage",
      desc: "Mariage",
      image: "./pic/wedding/wedding (9).jpg",
    },
    {
      productName: "Shooting d'une mannequin pour un book professionnel",
      category: "portrait",
      desc: "Portrait",
      image: "./pic/portrait/portrait (13).jpg",
    },
    {
      productName: "Décoration de mariage avec thème coloré / rose",
      category: "mariage",
      desc: "Mariage",
      image: "./pic/wedding/wedding (6).jpg",
    },
    {
      productName: "Couché de soleil aux antilles / famille nombreuse",
      category: "famille",
      desc: "Famille",
      image: "./pic/family/familly (6).jpg",
    },
    {
      productName: "grossesse en noir et blanc",
      category: "grossesse",
      desc: "Grossesse",
      image: "./pic/pregnant/enceinte (8).jpg",
    },
    {
      productName: "Une famille réunie pour un anniversaire",
      category: "famille",
      desc: "Famille",
      image: "./pic/family/familly (13).jpg",
    },
    {
      productName: "Je propose aussi mes services pour les animaux",
      category: "portrait",
      desc: "Portrait",
      image: "./pic/portrait/portrait (4).jpg",
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");
  

  let desc = document.createElement("h5");
  desc.innerText = i.desc.toUpperCase();
  container.appendChild(desc);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  let name = document.createElement("h6");
  name.classList.add("product-name");
  name.innerText = i.productName;
  container.appendChild(name);
}
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
window.onload = () => {
  filterProduct("all");
};


AOS.init();
