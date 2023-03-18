const menuIcon = document.querySelectorAll('#icon');

menuIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

const closeMenu = () => {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.body.style.overflow = 'scroll';
};

closeMenu();

const designers = [
  {
    name: 'Zendaya',
    founder: 'Founder of Zendaya fashion\'s choices',
    text: 'Her street style looks are usually comfortable and with a mix of athleisure and rock & roll items, in neutral colors. On red carpets, she will wow everyone with a bold choice in a bright color.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmcwoQ1ND1zeTSvAbi5pL9j3h5rtat6etK9v-DUu08mxpFK98lOFs3v544GVmL4xIKmM&usqp=CAU',
    alt: 'Zendaya photo',
  },
  {
    name: 'Billie Eilish',
    founder: 'Founder of Billie Eilish outfits',
    text: 'Her fashion sense is totally unique and different from the famous women artist when she became popular. She wears baggy and oversized clothes— the skater and hip-hop styles.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXd_udHICKhe7w-qxBpTAG-BKqf5nQRgfW5Q&usqp=CAU',
    alt: 'Billie eilish',
  },
  {
    pass: 'pass',
  },
  {
    name: 'Kate Middleton',
    founder: 'Founder of Kate Middleton style',
    text: ' No matter what, however, it seems as if every item of clothing Kate wears is immediately bought out by voracious fans who want to recreate her looks. Known as the "Kate effect,</p>',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrwdNWfK1m6XHKMc98c_79AHtcO09LvSF3ATkZ6l64VAgqydWE1bnoCjAWVFGwqFGrBA&usqp=CAU',
    alt: 'kate middleton',
  },
  {
    name: 'Princess Diana',
    founder: 'Founder of Princess Diana Outfits',
    text: 'Her "Elvis dress" featuring all-over pearls and a cropped jacket with a high collar is one of the late princess\' most iconic looks.',
    img: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fade9f008-2871-11ed-a830-74a6c8fbb722.jpg?crop=1916%2C2873%2C92%2C253',
    alt: 'princess diana',
  },
  {
    name: 'Olivia Rodrigo',
    founder: 'Founder of Olivia Rodrigo Styles',
    text: '  Olivia\'s dress is custom-made from Blumarine, but you can get a similar Y2K-inspired blue halter dress and get crafty with some butterfly appliqués.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcPQz4XVMfVWb2RR6RGR0uh97Urq-8ZiqWA&usqp=CAU',
    alt: 'Olivia Rodrigo',
  },
  {
    name: 'Rihanna',
    founder: 'Founder of Fenty beauty collection',
    text: 'She sets the tone whether she is sitting in the front row or organising her own show with her brand Fenty, created with LVMH.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvduopujwGCOIWNTgUcpu_XumHbThzCzum5g&usqp=CAU',
    alt: 'Rihanna',
  },
];

const designerList = document.createElement('div');
designerList.classList.add('celebrities');

for (let i = 0; i < designers.length; i += 1) {
  if (i === 2) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = 'More';
    btn.innerHTML += '<i class="fa fa-angle-down"></i>';

    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      document.querySelectorAll('.hide').forEach((designer) => {
        designer.style.display = 'flex';
      });
    });
    designerList.appendChild(btn);
  } else {
    const fashionCelebrity = document.createElement('div');
    fashionCelebrity.classList.add('fashion-celebrities');
    if (i > 2) {
      fashionCelebrity.classList.add('hide');
    }

    const fashionImages = document.createElement('div');
    fashionImages.classList.add('fashion-images');

    const image = document.createElement('img');
    image.classList.add('images');
    image.src = designers[i].img;
    image.alt = designers[i].alt;

    fashionImages.appendChild(image);

    const fashionBio = document.createElement('div');
    fashionBio.classList.add('fashion-bio');

    const name = document.createElement('h3');
    name.classList.add('name');
    name.innerHTML = designers[i].name;

    const founder = document.createElement('span');
    founder.classList.add('founder');
    founder.innerHTML = designers[i].founder;

    const text = document.createElement('p');
    text.classList.add('text');
    text.innerHTML = designers[i].text;

    fashionBio.appendChild(name);
    fashionBio.appendChild(founder);
    fashionBio.appendChild(text);

    fashionCelebrity.appendChild(fashionImages);
    fashionCelebrity.appendChild(fashionBio);

    designerList.appendChild(fashionCelebrity);

    document.getElementById('designers').appendChild(designerList);
  }
}

document.getElementById('designers').appendChild(designerList);
