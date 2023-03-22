ymaps.ready(init);

var myMap

function init() {
  myMap = new ymaps.Map(
    "map",
    {
      center: [62.037224, 129.743324],
      zoom: 13,
      type: "yandex#satellite",
    },
    {
      searchControlProvider: "yandex#search"
    }),
    objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
      hasBalloon: false,
      clusterDisableClickZoom: true
    });

    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  myMap.geoObjects.add(objectManager);

  $.ajax({
    url: "data.json"
}).done(function(data) {
    objectManager.add(data);
});

}

function setCenterHS1() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Царство вечной мерзлоты</font></b><br/>";
}

function setCenterHS2() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Национальный художественный музей</font></b><br/>";
}

function setCenterHS3() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Музей и центр хомуса народов мира</font></b><br/>";
}

function setCenterHS4() {
  myMap.setZoom(17);
  myMap.panTo([62.022957, 129.720770], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = '<img style="width: 230px;" align="left" src="img/P3.jpg">' + "<font size=3><b>Памятник Кулаковскому Алексею Елисеевичу</font></b><br/>Алексей Елисеевич Кулаковский. Ему обязана своим существованием национальная литература. Как и Семен Дежнев, он был исследователем, но его просторы – это историческая и экономическая науки, азы философии и естествознание. Культура Якутского края обогатилась благодаря его открытиям в области изучения языка и фольклора.<br/><font size=3><b>Монумент занесен в список памятников истории и культуры, подлежащих государственной охране как республиканское наследие.</font></b></br><font size=3><b>Дата постройки: </font></b>2012 г.<br/>";
}

function setCenterHS5() {
  myMap.setZoom(17);
  myMap.panTo([62.034075, 129.742319], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = '<img style="width: 175px;" align="left" src="img/P2.jpg">' + "<font size=3><b>Памятник Ойунскому Платону Алексеевичу</font></b><br/>это монумент выдающемуся якутскому писателю, основоположнику якутской советской литературы, крупному общественному и политическому деятелю, ученому Платону Ойунскому.<br/>Монумент занесен в список памятников истории и культуры, подлежащих государственной охране как республиканское наследие.</br><font size=3><b>Дата постройки: </font></b>2003 г.<br/>";
}

function setCenterHS6() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = '<img style="width: 175px;" align="left" src="img/P1.jpg">' + "<font size=3><b>Памятник Матери</font></b><br/>Установлен в 2012 году на берегу озера Сайсары города Якутска в качестве дани уважения матерям, преодолевшим трудности Великой Отечественной войны.<br/><font size=3><b>Дата постройки: </font></b>2012 г.<br/>";
}

function setCenterHS7() {
  myMap.setZoom(13);
  myMap.panTo([61.104425, 127.363824], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Ленские столбы</font></b><br/>Геологическое образование и одноимённый национальный парк в Якутии на берегу реки Лены. Находится в Хангаласском улусе Якутии в 104 км от города Покровска. Ленские столбы представляют собой тянущийся на многие километры комплекс вертикально вытянутых скал, причудливо громоздящихся вдоль берега Лены, глубокой долиной, прорезающей Приленское плато.<br/><font size=3><b>Дата образования парка: </font></b>1995 г.<br/><font size=3><b>Площадь: </font></b>12 179 км²<br/>";
}

function setCenterHS8() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Диринг-Юрях</font></b><br/>";
}

function setCenterHS9() {
  myMap.setZoom(17);
  myMap.panTo([62.012921, 129.684350], {delay: 1500});
  var par = document.querySelector('.par');
  par.innerHTML = "<font size=3><b>Гора Кисилях</font></b><br/>";
}