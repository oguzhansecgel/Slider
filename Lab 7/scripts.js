const thmb =document.querySelector('.thumbnails');

var data_0 = {
    photo: 'fotky/jastericka.jpg',
    title: 'Jašterička',
    description: 'Jašterica si užíva prvé jarné slnko a hľadá pritom niečo dobrého pod zub.'
};

var data_1 = {
    photo: 'fotky/chopok.jpg',
    title: 'Chopok',
    description: 'Pohľad z Ďumbiera, najvyššieho vrcholu Nízkych Tatier (2043 m.n.m) na susedný Chopok (2024 m.n.m.). '
};

var data_2 = {
    photo: 'fotky/kamzik.jpg',
    title: 'Kamzík',
    description: 'Zvedavý tatranský kamzík si ide svojou cestou bez ohľadu na turistov. '
};

var data_3 = {
    photo: 'fotky/mlok.jpg',
    title: 'Salamandra',
    description: 'Salamandra škvrnitá sa teší z ďažďa pričom svojím výstražným sfarbením odrádza možných predátorov. '
};

var data_4 = {
    photo: 'fotky/poniklec.jpg',
    title: 'Poniklec',
    description: 'Chlpatý Poniklec slovenský je zákonom chránený posol jari. '
};

var data_5 = {
    photo: 'fotky/ruza.jpg',
    title: 'Skalná ruža',
    description: 'Skalná ruža zdobí hory po celý rok. Bez problémov prežije v mraze, v suchu a takmer bez pôdy. Jej vlastnosti využívajú tiež ľudoví liečitelia.'
};

var data_6 = {
    photo: 'fotky/stangariegel.jpg',
    title: 'Štangarígeľ',
    description: 'Unikátny prírodný výtvor Štangarígeľ  pozostáva z pravidelných päťbokých andezitových pilierov. Niektoré dosahujú výšku až 6 metrov.'
}

var data_7 = {
    photo: 'fotky/vazka.jpg',
    title: 'Vážka červená',
    description: 'Samček Vážky červenej je sfarbený dočervena, zaitaľ čo samičky bývajú menej nápadné, hnedo-žlté.'
}

var data_8 = {
    photo: 'fotky/zapad_zima.jpg',
    title: 'Západ slnka',
    description: 'Ružový západ slnka v snehom pocukrovaných Nízkych Tatrách. '
}

var currentPhoto = 0;
var imagesData = [data_0, data_1, data_2, data_3, data_4, data_5, data_6, data_7, data_8]

var loadPhoto = (photoNumber) => {
    document.getElementById('photo').src = imagesData[photoNumber].photo;
    document.getElementById('photo-title').innerHTML = imagesData[photoNumber].title;
    document.getElementById('photo-description').innerHTML = imagesData[photoNumber].description;
};

loadPhoto(currentPhoto)

imagesData.forEach((item, index) => {
    document.querySelector('.thumbnails').innerHTML += '<div class="thumbnail-box"><div class="hidden-title">'+item.title+'</div><div class="arrow-bottom"></div><div data-arrow="'+index+'"></div><img src="'+item.photo+'" class="nahled" data-index="'+index+'"></div>';
 
});
 
function myFunction(lr)  {
    if (currentPhoto > imagesData.length -1) 
    {
        currentPhoto = 0;
    } 
    else if (currentPhoto < 0) 
    {
        currentPhoto = imagesData.length - 1;
    } 
    else {
      if (lr == 1)
        currentPhoto++;
      else
        currentPhoto--;
    }
      loadPhoto(currentPhoto);
};
thmb.addEventListener('click', (event) => {
    if (event.target.dataset.index) {
        currentPhoto = parseInt(event.target.dataset.index);
        loadPhoto(currentPhoto);
    }
});
