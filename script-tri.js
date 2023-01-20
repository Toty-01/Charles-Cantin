let cards = {
  data: [
    {
      cardDesc: "Premiers échanges entre père et enfant",
      category: "bébé",
      title: "Bébé",
      image: "./pic/baby/baby (4).jpg",
    },
    {
      cardDesc: "Avant / pendant / après",
      category: "grossesse",
      title: "Grossesse",
      image: "./pic/pregnant/enceinte (1).jpg",
    },
    {
      cardDesc: "l'amour n'a de sens que s'il est partagé",
      category: "couple",
      title: "Couple",
      image: "./pic/couple/couple (12).jpg",
    },
    {
      cardDesc: "Couché de soleil en famille",
      category: "famille",
      title: "Famille",
      image: "./pic/family/familly (3).jpg",
    },
    {
      cardDesc: "Baptême du petit de la famille",
      category: "baptême",
      title: "Baptême",
      image: "./pic/baptism/bapteme (1).jpg",
    },
    {
      cardDesc: "Le rire d'un nouveau née est communicatif",
      category: "bébé",
      title: "Bébé",
      image: "./pic/baby/baby (5).jpg",
    },
    {
      cardDesc: "Une famille type pour un moment de partage",
      category: "famille",
      title: "Famille",
      image: "./pic/family/familly (2).jpg",
    },
    {
      cardDesc: "Embrassadse sous un couché de soleil",
      category: "couple",
      title: "Couple",
      image: "./pic/couple/couple (9).jpg",
    },
    {
      cardDesc: "Cadeaux pour le nouveau baptisé",
      category: "baptême",
      title: "Baptême",
      image: "./pic/baptism/bapteme (15).jpg",
    },
    {
      cardDesc: "Les mariés à la sortie de l'église",
      category: "mariage",
      title: "Mariage",
      image: "./pic/wedding/wedding (10).jpg",
    },
    {
      cardDesc: "Un enfant avec une capuche jaune tricotée main",
      category: "bébé",
      title: "Bébé",
      image: "./pic/baby/baby (12).jpg",
    },
    {
      cardDesc: "l'amour à bicyclette",
      category: "couple",
      title: "Couple",
      image: "./pic/couple/couple (5).jpg",
    },
    {
      cardDesc: "Photo d'un baptême en noir et blanc",
      category: "baptême",
      title: "Baptême",
      image: "./pic/baptism/bapteme (7).jpg",
    },
    {
      cardDesc: "Le noir et blanc , le contraste pur",
      category: "portrait",
      title: "Portrait",
      image: "./pic/portrait/portrait (7).jpg",
    },
    {
      cardDesc: "Enfants avec ensemble lapin",
      category: "bébé",
      title: "Bébé",
      image: "./pic/baby/baby (2).jpg",
    },
    {
      cardDesc: "La grossesse presque à terme",
      category: "grossesse",
      title: "Grossesse",
      image: "./pic/pregnant/enceinte (12).jpg",
    },
    {
      cardDesc: "Décoration florale lors d'un mariage en bord de mer",
      category: "mariage",
      title: "Mariage",
      image: "./pic/wedding/wedding (2).jpg",
    },
    {
      cardDesc: "Baptisé devant les yeux du grand frère",
      category: "baptême",
      title: "Baptême",
      image: "./pic/baptism/bapteme (2).jpg",
    },
    {
      cardDesc: "Liés par les choses de la vie",
      category: "couple",
      title: "Couple",
      image: "./pic/couple/couple (2).jpg",
    },
    {
      cardDesc: "Séance photo avec enfant dans mon studio",
      category: "bébé",
      title: "Bébé",
      image: "./pic/baby/baby (8).jpg",
    },
    {
      cardDesc: "Portrait d'une femme entre ombre et lumiere",
      category: "portrait",
      title: "Portrait",
      image: "./pic/portrait/portrait (12).jpg",
    },
    {
      cardDesc: "Un instant , une journée , pour s'unir à jamais",
      category: "mariage",
      title: "Mariage",
      image: "./pic/wedding/wedding (5).jpg",
    },
    {
      cardDesc: "Moment de folie immortalisé entre mère et fille",
      category: "famille",
      title: "Famille",
      image: "./pic/family/familly (1).jpg",
    },
    {
      cardDesc: "Prise de vue apprécié des futurs mariés",
      category: "mariage",
      title: "Mariage",
      image: "./pic/wedding/wedding (9).jpg",
    },
    {
      cardDesc: "Shooting d'une mannequin pour un book professionnel",
      category: "portrait",
      title: "Portrait",
      image: "./pic/portrait/portrait (13).jpg",
    },
    {
      cardDesc: "Décoration de mariage avec thème coloré / rose",
      category: "mariage",
      title: "Mariage",
      image: "./pic/wedding/wedding (6).jpg",
    },
    {
      cardDesc: "Couché de soleil aux antilles / famille nombreuse",
      category: "famille",
      title: "Famille",
      image: "./pic/family/familly (6).jpg",
    },
    {
      cardDesc: "grossesse en noir et blanc",
      category: "grossesse",
      title: "Grossesse",
      image: "./pic/pregnant/enceinte (8).jpg",
    },
    {
      cardDesc: "Une famille réunie pour un anniversaire",
      category: "famille",
      title: "Famille",
      image: "./pic/family/familly (13).jpg",
    },
    {
      cardDesc: "Je propose aussi mes services pour les animaux",
      category: "portrait",
      title: "Portrait",
      image: "./pic/portrait/portrait (4).jpg",
    },
  ],
};
for (let i of cards.data) {
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

  let title = document.createElement("h5");
  title.innerText = i.title;
  container.appendChild(title);
  card.appendChild(container);
  document.getElementById("cards").appendChild(card);

  let name = document.createElement("h6");
  name.classList.add("card-name");
  name.innerText = i.cardDesc.toUpperCase();
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
  let elements = document.querySelectorAll(".card-name");
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