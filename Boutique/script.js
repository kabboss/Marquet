let panier = [];
let total = 0;

function ajouterAuPanier(nomProduit, prixProduit) {
  panier.push({ nom: nomProduit, prix: prixProduit });
  total += prixProduit;

  // Mettez à jour l'affichage du panier
  afficherPanier();
}

function afficherPanier() {
  const totalElement = document.getElementById("total");
  totalElement.textContent = total;
}

function afficherListePanier() {
  let listeProduits = "Votre Panier:\n";

  panier.forEach(item => {
    listeProduits += `${item.nom} - $${item.prix}\n`;
  });

  listeProduits += `\nTotal: $${total}`;

  alert(listeProduits);
}

var templateParams = {
    to_name: "John Doe",
    from_name: "Your Name",
    message: "Hello, this is a test email!"
  };
  
  emailjs.send("service_93knjoh", "template_6fwj1jd", templateParams)
    .then(function(response) {
      console.log("E-mail sent successfully", response);
    }, function(error) {
      console.log("Failed to send e-mail", error);
    });
  
    function afficherListePanier() {
      // Afficher la fenêtre modale
      document.getElementById("liste-panier-modal").innerHTML = listeProduits;
      document.getElementById("modal").style.display = "block";
    }

    function fermerFenetrePanier() {
  document.getElementById("modal").style.display = "none";
}


function afficherListePanier() {
  let produitCount = {};

  panier.forEach(item => {
    produitCount[item.nom] = (produitCount[item.nom] || 0) + 1;
  });

  let listeProduits = "\n";

  for (const nomProduit in produitCount) {
    const quantite = produitCount[nomProduit];
    listeProduits += `${nomProduit} - Quantité: ${quantite} - $${panier.find(item => item.nom === nomProduit).prix * quantite}<br>`;
  }

  listeProduits += `\nTotal: $${total}`;

  // Afficher la fenêtre modale
  document.getElementById("liste-panier-modal").innerHTML = listeProduits;
  document.getElementById("modal").style.display = "block";
}

function changerPage(selectElement) {
  var selectedValue = selectElement.value;
  window.location.href = selectedValue;
}
