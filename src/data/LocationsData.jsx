// src/data/locationsData.js
import { atm, atmIcon, carIcon, shop, p3k, foto, toilet, ticket, kumbakarna, rsi, panggung, monkey } from '../utils/CustomIcons';

export const GetLocations = (imageBounds, t) => {

  if (!imageBounds) return [];

  return [
    //car taxi
    {
    id: 'taxi',
    position: [imageBounds[1][0] * 0.49, imageBounds[1][1] * 0.80],
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
    position: [imageBounds[1][0] * 0.58, imageBounds[1][1] * 0.81],
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
    position: [imageBounds[1][0] * 0.72, imageBounds[1][1] * 0.90],
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
    position: [imageBounds[1][0] * 0.32, imageBounds[1][1] * 0.58],
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
    position: [imageBounds[1][0] * 0.34, imageBounds[1][1] * 0.17],
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
    position: [imageBounds[1][0] * 0.68, imageBounds[1][1] * 0.63],
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
    position: [imageBounds[1][0] * 0.34, imageBounds[1][1] * 0.56],
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
    position: [imageBounds[1][0] * 0.39, imageBounds[1][1] * 0.69],
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
    position: [imageBounds[1][0] * 0.72, imageBounds[1][1] * 0.88],
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
    position: [imageBounds[1][0] * 0.62, imageBounds[1][1] * 0.73],
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
    position: [imageBounds[1][0] * 0.60, imageBounds[1][1] * 0.58],
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
    position: [imageBounds[1][0] * 0.57, imageBounds[1][1] * 0.45],
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
    position: [imageBounds[1][0] * 0.69, imageBounds[1][1] * 0.46],
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
    position: [imageBounds[1][0] * 0.44, imageBounds[1][1] * 0.32],
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
    position: [imageBounds[1][0] * 0.34, imageBounds[1][1] * 0.12],
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
    {
    id: 'fotodelapan',
    position: [imageBounds[1][0] * 0.23, imageBounds[1][1] * 0.23],
    title: t("datamap.fotodelapan.title"),
    icon: foto,
    details: (
        <div>
            <p>{t("datamap.fotodelapan.details.p1")}</p>
            <p>{t("datamap.fotodelapan.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/fotopojok.jpg', '/gambarmap/fotopojoksatu.jpg', '/gambarmap/fotopojokdua.jpg', '/gambarmap/fotopojoktiga.jpg']
    },

    {
    id: 'ticketcounter',
    position: [imageBounds[1][0] * 0.46, imageBounds[1][1] * 0.59],
    title: t("datamap.ticketcenter.title"),
    icon: ticket,
    details: (
        <div>
            <p>{t("datamap.ticketcenter.details.p1")}</p>
            <p>{t("datamap.ticketcenter.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/git.jpg', '/gambarmap/gitsatu.jpg', '/gambarmap/gitdua.jpg', '/gambarmap/gittiga.jpg']
    },


      {
    id: 'monyetputih',
    position: [imageBounds[1][0] * 0.53, imageBounds[1][1] * 0.54],
    title: t("datamap.monyetputih.title"),
    icon: monkey,
    details: (
        <div>
            <p>{t("datamap.monyetputih.details.p1")}</p>
            <p>{t("datamap.monyetputih.details.p2")}</p>
            <p>{t("datamap.monyetputih.details.p3")}</p>
            <p>{t("datamap.monyetputih.details.p4")}</p>
        </div>
    ),
    images: ['/gambarmap/monyetsatu.jpg', '/gambarmap/monyetdua.jpg', '/gambarmap/monyettiga.jpg', '/gambarmap/monyetempat.jpg']
    },

     {
    id: 'patung',
    position: [imageBounds[1][0] * 0.69, imageBounds[1][1] * 0.76],
     title: t("datamap.danghyangnirartha.title"),
    icon: rsi,
    details: (
        <div>
            <p>{t("datamap.danghyangnirartha.details.p1")}</p>
            <p>{t("datamap.danghyangnirartha.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/patungsatu.jpg', '/gambarmap/patungdua.jpg', '/gambarmap/patungtiga.jpg', '/gambarmap/patungempat.jpg']
    },

     {
    id: 'kumbakarna',
    position: [imageBounds[1][0] * 0.68, imageBounds[1][1] * 0.59],
    title: t("datamap.patungkumbhakarna.title"),
    icon: kumbakarna,
    details: (
       <div>
            <p>{t("datamap.patungkumbhakarna.details.p1")}</p>
            <p>{t("datamap.patungkumbhakarna.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/kumbakarnasatu.jpg', '/gambarmap/kumbakarnadua.jpg', '/gambarmap/kumbakarnatiga.jpg', '/gambarmap/kumbakarnaempat.jpg']
    },

        {
    id: 'panggung',
    position: [imageBounds[1][0] * 0.35, imageBounds[1][1] * 0.32],
    title: t("datamap.panggungkecak.title"),
    icon: panggung,
    details: (
        <div>
            <p>{t("datamap.panggungkecak.details.p1")}</p>
            <p>{t("datamap.panggungkecak.details.p2")}</p>
        </div>
    ),
    images: ['/gambarmap/panggungsatu.jpg', '/gambarmap/panggungdua.jpg', '/gambarmap/panggungtiga.jpg', '/gambarmap/panggungempat.jpg']
    },

    




  ];
};
