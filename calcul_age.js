function affichage() {
    let date = document.getElementById('date').value;
    let datee = new Date(date);
    let jour = datee.getDate();
    let mois = datee.getMonth() + 1;
    let annee = datee.getFullYear();

    document.getElementById('jour').textContent = 'Jour: '+jour;
    document.getElementById('mois').textContent = 'Mois: '+mois;
    document.getElementById('annee').textContent = 'Année: '+annee;

    let dateActu = new Date();
    let difference = dateActu - datee;
    let difference_en_jours = Math.floor(difference / (1000 * 60 * 60 * 25));
    let difference_en_annees = (Math.floor(difference_en_jours / 365))+1;
    document.getElementById('diff').innerHTML = 'Vous avez maintenant '+difference_en_annees+' ans';
}