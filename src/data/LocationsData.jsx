// src/data/locationsData.js
import { atm, atmIcon, carIcon, shop, p3k, foto, toilet } from '../utils/CustomIcons';

export const GetLocations = (imageBounds, t) => {

  if (!imageBounds) return [];

  return [
    //car taxi
    {
    id: 'taxi',
    position: [imageBounds[1][0] * 0.42, imageBounds[1][1] * 0.75],
    title: t("datamap.taxi.title"),
    icon: carIcon,
    details: (
        <div>
            <p>{t("datamap.taxi.details.p1")}</p>
            <p>{t("datamap.taxi.details.p2")}</p>
            <p>{t("datamap.taxi.details.p3")}</p>
        </div>
    ),
    images: ['/gambarmap/parkirsatu.jpg', '/gambarmap/parkirdua.jpg', '/gambarmap/parkirtiga.jpg', '/gambarmap/parkirempat.jpg']
    },

    //toilet ada 5 toilet
     {
    id: 'toiletsatu',
    position: [imageBounds[1][0] * 0.60, imageBounds[1][1] * 0.79],
    title: t("datamap.toiletsatu.title"),
    icon: toilet,
    details: (
        <div>
            <p>{t("datamap.toiletsatu.details.p1")}</p>
            <p>{t("datamap.toiletsatu.details.p2")}</p>
            <p>{t("datamap.toiletsatu.details.p3")}</p>
        </div>

    ),
     images: ['/gambarmap/toiletparkir1.jpg', '/gambarmap/toiletparkir2.jpg','/gambarmap/toiletparkir3.jpg', '/gambarmap/toiletparkir4.jpg']
    },

    {
    id: 'toiletdua',
    position: [imageBounds[1][0] * 0.77, imageBounds[1][1] * 0.90],
    title: t("datamap.toiletdua.title"),
    icon: toilet,
    details: (
        <div>
            <p>{t("datamap.toiletdua.details.p1")}</p>
            <p>{t("datamap.toiletdua.details.p2")}</p>
            <p>{t("datamap.toiletdua.details.p3")}</p>
        </div>

    ),
    images: ['/gambarmap/toiletutara.jpg', '/gambarmap/toiletutaradua.jpg']
    },

    {
    id: 'toilettiga',
    position: [imageBounds[1][0] * 0.23, imageBounds[1][1] * 0.47],
    title: t("datamap.toilettiga.title"),
    icon: toilet,
    details: (
      <div>
            <p>{t("datamap.toilettiga.details.p1")}</p>
            <p>{t("datamap.toilettiga.details.p2")}</p>
            <p>{t("datamap.toilettiga.details.p3")}</p>
        </div>
    ),
    images: ['/gambarmap/toilettenggara.jpg', '/gambarmap/toilettenggaradua.jpg', '/gambarmap/toilettenggaratiga.jpg', '/gambarmap/toilettenggaraempat.jpg']
    },

    {
    id: 'toiletempat',
    position: [imageBounds[1][0] * 0.35, imageBounds[1][1] * 0.07],
    title: t("datamap.toiletempat.title"),
    icon: toilet,
    details: (
       <div>
            <p>{t("datamap.toiletempat.details.p1")}</p>
            <p>{t("datamap.toiletempat.details.p2")}</p>
            <p>{t("datamap.toiletempat.details.p3")}</p>
        </div>
    ),
    images: ['/gambarmap/toiletselatan.jpg', '/gambarmap/toiletselatandua.jpg', '/gambarmap/toiletselatantiga.jpg', '/gambarmap/toiletselatanempat.jpg']
    },

     {
    id: 'toiletlima',
    position: [imageBounds[1][0] * 0.73, imageBounds[1][1] * 0.50],
    title: t("datamap.toiletlima.title"),
    icon: toilet,
    details: (
         <div>
            <p>{t("datamap.toiletlima.details.p1")}</p>
            <p>{t("datamap.toiletlima.details.p2")}</p>
            <p>{t("datamap.toiletlima.details.p3")}</p>
        </div>
    ),
    images: ['/gambarmap/toiletbarat.jpg', '/gambarmap/toiletbaratdua.jpg', '/gambarmap/toiletbarattiga.jpg', '/gambarmap/toiletbaratempat.jpg']
    },


    
    //p3k
    {
    id: 'p3k',
    position: [imageBounds[1][0] * 0.26, imageBounds[1][1] * 0.44],
    title: t("datamap.p3k.title"),
    icon: p3k,
    details: (
    <div>
            <p>{t("datamap.p3k.details.p1")}</p>
            <p>{t("datamap.p3k.details.p2")}</p>
            <p>{t("datamap.p3k.details.p3")}</p>
        </div>
    ),
     images: ['/gambarmap/p3k.jpg', '/gambarmap/p3ksatu.jpg']
    },

    //shop
     {
    id: 'shopsatu',
    position: [imageBounds[1][0] * 0.35, imageBounds[1][1] * 0.55],
    title: t("datamap.shopsatu.title"),
    icon: shop,
   details: (
  <div>
            <p>{t("datamap.shopsatu.details.p1")}</p>
            <p>{t("datamap.shopsatu.details.p2")}</p>
            <p>{t("datamap.shopsatu.details.p3")}</p>
        </div>
),
     images: ['/gambarmap/shopsatu.jpg', '/gambarmap/shopdua.jpg', '/gambarmap/shoptiga.jpg', '/gambarmap/shopempat.jpg']
    },
    //sport foto

    {
    id: 'fotosatu',
    position: [imageBounds[1][0] * 0.80, imageBounds[1][1] * 0.87],
    title: t("datamap.fotosatu.title"),
    icon: foto,
    details: (
         <div>
            <p>{t("datamap.fotosatu.details.p1")}</p>
            <p>{t("datamap.fotosatu.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotoutarasatu.jpg', '/gambarmap/fotoutaratiga.jpg', '/gambarmap/fotoutaraempat.jpg', '/gambarmap/fotoutaradua.jpg']
    },

    {
    id: 'fotodua',
    position: [imageBounds[1][0] * 0.65, imageBounds[1][1] * 0.66],
     title: t("datamap.fotodua.title"),
    icon: foto,
    details: (
        <div>
            <p>{t("datamap.fotodua.details.p1")}</p>
            <p>{t("datamap.fotodua.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/patungsatu.jpg', '/gambarmap/patungdua.jpg', '/gambarmap/patungtiga.jpg', '/gambarmap/patungempat.jpg']
    },


    {
    id: 'fototiga',
    position: [imageBounds[1][0] * 0.65, imageBounds[1][1] * 0.50],
    title: t("datamap.fototiga.title"),
    icon: foto,
    details: (
       <div>
            <p>{t("datamap.fototiga.details.p1")}</p>
            <p>{t("datamap.fototiga.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fototengahsatu.jpg', '/gambarmap/fototengahdua.jpg', '/gambarmap/fototengahtiga.jpg', '/gambarmap/fototegahempat.jpg']
    },

    {
    id: 'fotoempat',
    position: [imageBounds[1][0] * 0.63, imageBounds[1][1] * 0.37],
     title: t("datamap.fotoempat.title"),
    icon: foto,
    details: (
        <div>
            <p>{t("datamap.fotoempat.details.p1")}</p>
            <p>{t("datamap.fotoempat.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotodepansatu.jpg', '/gambarmap/fotodepantiga.jpg', '/gambarmap/fotodepanempat.jpg', '/gambarmap/fototengah.jpg']
    },


    {
    id: 'fotolima',
    position: [imageBounds[1][0] * 0.77, imageBounds[1][1] * 0.38],
    title: t("datamap.fotolima.title"),
    icon: foto,
    details: (
      <div>
            <p>{t("datamap.fotolima.details.p1")}</p>
            <p>{t("datamap.fotolima.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotobaratsatu.jpg', '/gambarmap/fotobaratdua.jpg', '/gambarmap/fotobarattiga.jpg', '/gambarmap/fotobaratempat.jpg']
    },

    {
    id: 'fotoenam',
    position: [imageBounds[1][0] * 0.47, imageBounds[1][1] * 0.19],
    title: t("datamap.fotoenam.title"),
    icon: foto,
    details: (
        <div>
            <p>{t("datamap.fotoenam.details.p1")}</p>
            <p>{t("datamap.fotoenam.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotojalurtengah.jpg', '/gambarmap/fotojalurtengah2.jpg', '/gambarmap/fotojalurtengah3.jpg', '/gambarmap/fotojalurtengah4.jpg']
    },

     {
    id: 'fototujuh',
    position: [imageBounds[1][0] * 0.41, imageBounds[1][1] * 0.05],
    title: t("datamap.fototujuh.title"),
    icon: foto,
    details: (
        <div>
            <p>{t("datamap.fototujuh.details.p1")}</p>
            <p>{t("datamap.fototujuh.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotoselatansatu.jpg', '/gambarmap/fotoselatandua.jpg', '/gambarmap/fotoselatantiga.jpg', '/gambarmap/fotoselatanempat.jpg']
    },

  ];
};
