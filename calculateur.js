alert('Veuillez remplir correctement le formualaire');
function bouton() {
    let p = document.getElementById('montant').value;
    let taux_annuel = document.getElementById('taux').value;
    let duree = document.getElementById('duree').value;
    if (p === '' || taux_annuel === '' || duree === '') {
        alert('Les champs ne doivent pas être vides.');
    } else if (p<0 || taux_annuel<0 || duree<0) {
        alert('Aucune valeur ne doit pas être négative.')
    } else {
        let r = (taux_annuel/12)/100;
        let n = duree*12;
        let M = p * (r*(1+r)^n) / ((1+r)^n - 1);
        let m = (M/duree/12);
        document.getElementById('resultat').innerHTML = 'Le paiement mensuel résultant est: '+m;
    }
}