const MENU_GROUPS = {
  pivo: {
    groups: [
      {
        title: 'Pivo čepované — hladinka',
        note: '0,3 l | 0,475 l',
        items: [
          { name: 'Plzeň 12° (Pilsner Urquell)', price: '48,- | 66,-', unit: '0,3 l | 0,475 l' },
          { name: 'Kozel 11°', price: '37,- | 48,-', unit: '0,3 l | 0,475 l' },
          { name: 'Kozel černý 10°', price: '37,- | 48,-', unit: '0,3 l | 0,475 l' },
          { name: 'Radegast 12°', price: '42,- | 56,-', unit: '0,3 l | 0,475 l' },
          { name: 'Birell Pomelo Grep', price: '37,- | 48,-', unit: '0,3 l | 0,475 l' }
        ]
      },
      {
        title: 'Pivo lahvové',
        items: [
          { name: 'Plzeň 12°', price: '66,-', unit: '0,5 l' },
          { name: 'Frisco', price: '51,-', unit: '0,33 l' },
          { name: 'Corona', price: '62,-', unit: '0,33 l' },
          { name: 'Birell – nealko', price: '48,-', unit: '0,5 l' }
        ]
      },
      {
        title: 'Točená limonáda, Nealko & Energetické nápoje',
        items: [
          { name: 'Bezová limonáda (točená)', price: '10,-', unit: '1 dcl' },
          { name: 'Royal Crown Cola', price: '49,-', unit: '0,25 l' },
          { name: 'Kofola', price: '49,-', unit: '0,25 l' },
          { name: 'Targa pomeranč', price: '49,-', unit: '0,25 l' },
          { name: 'Tonic, Tonic Ginger', price: '49,-', unit: '0,25 l' },
          { name: 'Rauch dle nabídky', price: '49,-', unit: '0,25 l' },
          { name: 'Rajec perlivá, neperlivá', price: '39,-', unit: '0,33 l' },
          { name: 'Malinovka', price: '33,-', unit: '0,33 l' },
          { name: 'Citronka', price: '33,-', unit: '0,33 l' },
          { name: 'Red Bull', price: '65,-', unit: '0,25 l' }
        ]
      },
      {
        title: 'Teplé nápoje',
        items: [
          { name: 'Káva turecká', price: '39,-' },
          { name: 'Espresso', price: '49,-' },
          { name: 'Čaj dle nabídky', price: '39,-' },
          { name: 'Grog', price: '57,-' }
        ]
      }
    ]
  },

  pizza: {
    groups: [
      {
        title: 'Pizza (rajčatový / smetanový základ)',
        note: 'Čerstvě z pece • 19 druhů',
        items: [
          { name: '1. Margherita', desc: 'rajčatové sugo, sýr, oregano', allergen: 'A, G', price: '165,-' },
          { name: '2. Funghi', desc: 'rajčatové sugo, sýr, žampiony, oregano', allergen: 'A, G, L', price: '176,-' },
          { name: '3. Cardinale', desc: 'rajčatové sugo, sýr, šunka, oregano', allergen: 'A, G, L', price: '187,-' },
          { name: '4. Calimero', desc: 'rajčatové sugo, sýr, šunka, kukuřice, oregano', allergen: 'A, G', price: '199,-' },
          { name: '5. Salami', desc: 'rajčatové sugo, sýr, salám, oregano', allergen: 'A, G, M', price: '199,-' },
          { name: '6. Boccolina', desc: 'rajčatové sugo, sýr, slanina, oregano', allergen: 'A, G', price: '199,-' },
          { name: '7. Silvano', desc: 'rajčatové sugo, sýr, šunka, kukuřice, žampiony, oregano', allergen: 'A, G, L', price: '215,-' },
          { name: '8. Hawaii', desc: 'smetanový základ, sýr, šunka, kukuřice, ananas, oregano', allergen: 'A, F, G', price: '220,-' },
          { name: '9. Diavola', desc: 'rajčatové sugo, sýr, pikantní salám, cibule, feferonky, jalapeños, oregano', allergen: 'A, D, G', price: '242,-' },
          { name: '10. Tirola', desc: 'rajčatové sugo, sýr, slanina, šunka, vejce, oregano', allergen: 'A, D, G', price: '220,-' },
          { name: '11. Provenciale', desc: 'rajčatové sugo, sýr, slanina, šunka, kozí rohy, kukuřice, oregano', allergen: 'A, G', price: '220,-' },
          { name: '12. Spinaci', desc: 'smetanový základ, sýr, šunka, špenát, balkánský sýr, oregano', allergen: 'A, F, G', price: '226,-' },
          { name: '13. Venezia', desc: 'rajčatové sugo, sýr, camembert, brusinky, oregano', allergen: 'A, G', price: '220,-' },
          { name: '14. Quattro Formaggi', desc: 'rajčatové sugo, čtyři druhy sýrů, oregano', allergen: 'A, G', price: '242,-' },
          { name: '15. Pronto Special', desc: 'rajčatové sugo, sýr, šunka, salám, gorgonzola, cibule, vejce, oregano', allergen: 'A, G, L, C, M', price: '242,-' },
          { name: '16. Americana', desc: 'rajčatové sugo, sýr, šunka, salám, slanina, vejce, tabasco, oregano', allergen: 'A, G, D', price: '242,-' },
          { name: '17. Prosciutto', desc: 'rajčatové sugo, sýr, mozzarella, prosciutto, rukola, oregano', allergen: 'A, G', price: '242,-' },
          { name: '18. Bella Italia', desc: 'rajčatové sugo, sýr, mozzarella, rajčata, olivy, oregano', allergen: 'A, G', price: '220,-' },
          { name: '19. POKR Pizza', desc: 'rajčatové sugo, sýr, šunka, slanina, feferonky, cibule, chilli, oregano', allergen: 'A, G', price: '237,-' }
        ]
      }
    ],
    extras: [
      '<strong>Suroviny na pizzu navíc:</strong> 30,-',
      '<strong>Dresing / kečup / česnek navíc:</strong> 25,-',
      '<strong>Krabice / obal:</strong> 20,-'
    ]
  },

  'maso-salaty': {
    groups: [
      {
        title: 'Maso na prkně + domácí focaccia',
        items: [
          { name: 'Mix mini řízečků 250 g', desc: 'podáváno s domácí focacciou', price: '220,-', unit: '250 g' },
          { name: 'Mix mini řízečků 500 g', desc: 'podáváno s domácí focacciou', price: '394,-', unit: '500 g' },
          { name: 'Pečené koleno 1000 g', desc: 'podáváno s domácí focacciou', price: '340,-', unit: '1000 g' },
          { name: 'Vepřová žebra 500 g', desc: 'podáváno s domácí focacciou', price: '285,-', unit: '500 g' }
        ]
      },
      {
        title: 'Saláty + domácí focaccia',
        items: [
          { name: 'Míchaný salát se šunkou, vejcem a sýrem', desc: 'dresing + domácí focaccia', price: '199,-' },
          { name: 'Míchaný salát s grilovaným camembertem', desc: 'dresing + domácí focaccia', price: '209,-' },
          { name: 'Míchaný salát s kuřecím masem', desc: 'dresing + domácí focaccia', price: '220,-' },
          { name: 'Míchaný salát s balkánským sýrem', desc: 'olivy, balsamico + domácí focaccia', price: '220,-' },
          { name: 'Caesar salát', desc: 'podáváno s domácí focacciou', price: '220,-' }
        ]
      }
    ],
    extras: [
      '<strong>Speciální nabídka:</strong> Aktuální dobroty a sezónní speciality (vč. burgerů) vám ráda sdělí obsluha.'
    ]
  },

  chutovky: {
    groups: [
      {
        title: 'Chuťovky z kuchyně',
        items: [
          { name: 'Cibulové kroužky', price: '79,-', unit: '200 g' },
          { name: 'Bramborové lupínky', price: '79,-', unit: '200 g' },
          { name: 'Hranolky s kečupem', price: '65,-', unit: '200 g' },
          { name: 'Pizza tyčky', price: '99,-' },
          { name: 'Utopenec', price: '65,-' }
        ]
      },
      {
        title: 'Pochutiny k pivu',
        items: [
          { name: 'Arašídy', price: '39,-' },
          { name: 'Chipsy', price: '42,-' },
          { name: 'Brambůrky', price: '42,-' },
          { name: 'Křupky', price: '39,-' },
          { name: 'Tyčky', price: '49,-' },
          { name: 'Mandle', price: '51,-' },
          { name: 'Kešu', price: '51,-' }
        ]
      }
    ]
  },

  bar: {
    groups: [
      {
        title: 'Míchané nápoje',
        items: [
          { name: 'Cuba Libre', price: '93,-' },
          { name: 'Bavorák', price: '83,-' },
          { name: 'Aperol Spritz', price: '105,-' },
          { name: 'Gin + Tonic', price: '89,-' }
        ]
      },
      {
        title: 'Víno & Sekty',
        items: [
          { name: 'Grüner Veltliner', price: '30,-', unit: '0,1 l' },
          { name: 'Blauer Zweigelt', price: '30,-', unit: '0,1 l' },
          { name: 'Prosecco', price: '65,-', unit: '0,2 l' },
          { name: 'Bohemia Sekt Demi', price: '259,-', unit: '0,75 l' }
        ]
      },
      {
        title: 'Rum',
        note: '0,04 l',
        items: [
          { name: 'Tuzemský rum, Káva', price: '49,-', unit: '0,04 l' },
          { name: 'Cheguevara', price: '49,-', unit: '0,04 l' },
          { name: 'Captain Morgan', price: '58,-', unit: '0,04 l' },
          { name: 'Republika', price: '59,-', unit: '0,04 l' },
          { name: 'Malibu', price: '59,-', unit: '0,04 l' },
          { name: 'Bacardi', price: '64,-', unit: '0,04 l' },
          { name: 'Bucanero', price: '64,-', unit: '0,04 l' },
          { name: 'Havana', price: '64,-', unit: '0,04 l' },
          { name: 'Heffron', price: '69,-', unit: '0,04 l' },
          { name: 'Legendario', price: '64,-', unit: '0,04 l' },
          { name: 'Diplomatico', price: '119,-', unit: '0,04 l' }
        ]
      },
      {
        title: 'Destiláty & Likéry',
        note: '0,04 l',
        items: [
          { name: 'Fernet Stock', price: '54,-', unit: '0,04 l' },
          { name: 'Fernet Stock Citrus', price: '54,-', unit: '0,04 l' },
          { name: 'Becherovka', price: '54,-', unit: '0,04 l' },
          { name: 'Slivovice', price: '60,-', unit: '0,04 l' },
          { name: 'Myslivec', price: '54,-', unit: '0,04 l' },
          { name: 'Jägermeister', price: '64,-', unit: '0,04 l' },
          { name: 'Peprmint', price: '49,-', unit: '0,04 l' },
          { name: 'Baileys', price: '64,-', unit: '0,04 l' }
        ]
      },
      {
        title: 'Whisky & Bourbon',
        note: '0,04 l',
        items: [
          { name: 'Johnnie Walker', price: '64,-', unit: '0,04 l' },
          { name: 'Ballantine’s', price: '64,-', unit: '0,04 l' },
          { name: 'Tullamore Dew', price: '64,-', unit: '0,04 l' },
          { name: 'Chivas Regal', price: '69,-', unit: '0,04 l' },
          { name: 'Jameson', price: '64,-', unit: '0,04 l' },
          { name: 'Jim Beam', price: '65,-', unit: '0,04 l' },
          { name: 'Jack Daniel’s', price: '75,-', unit: '0,04 l' },
          { name: 'Jack Daniel’s Honey', price: '75,-', unit: '0,04 l' }
        ]
      },
      {
        title: 'Vodka, Gin & Tequila',
        note: '0,04 l',
        items: [
          { name: 'Jelzin', price: '49,-', unit: '0,04 l' },
          { name: 'Stolichnaya', price: '59,-', unit: '0,04 l' },
          { name: 'Absolut', price: '59,-', unit: '0,04 l' },
          { name: 'Finlandia', price: '59,-', unit: '0,04 l' },
          { name: 'Beefeater', price: '64,-', unit: '0,04 l' },
          { name: 'Beefeater Pink', price: '64,-', unit: '0,04 l' },
          { name: 'Beefeater Orange', price: '64,-', unit: '0,04 l' },
          { name: 'Olmeca Silver', price: '65,-', unit: '0,04 l' },
          { name: 'Olmeca Gold', price: '65,-', unit: '0,04 l' }
        ]
      }
    ]
  }
};

// Animované pozadí v HERO (plynulé prolínání fotek)
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  }, 5500);
}

// Menu tabule — výchozí záložka "Pivo & Nealko"
let activeCat = 'pivo';
const boardContainer = document.getElementById('boardContainer');
const tabs = document.querySelectorAll('.btab');

function renderBoard() {
  const section = MENU_GROUPS[activeCat];
  if (!section) return;

  const groupsHtml = section.groups.map((group) => `
    <div class="board-group">
      <div class="board-group-head">
        <h3>${group.title}</h3>
        ${group.note ? `<span>${group.note}</span>` : ''}
      </div>
      <div class="board-list">
        ${group.items.map((item) => `
          <article class="board-item">
            <div>
              <div class="board-item-head">
                <h4>${item.name}</h4>
                ${item.allergen ? `<span class="board-allergen">${item.allergen}</span>` : ''}
              </div>
              ${item.desc ? `<p>${item.desc}</p>` : ''}
            </div>
            <div class="board-price">
              ${item.price}
              ${item.unit ? `<small>${item.unit}</small>` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');

  const extrasHtml = section.extras
    ? `<div class="board-extras">${section.extras.map((line) => `<span>${line}</span>`).join('')}</div>`
    : '';

  boardContainer.innerHTML = `<div class="board-groups">${groupsHtml}${extrasHtml}</div>`;
}

tabs.forEach((t) => {
  t.addEventListener('click', () => {
    tabs.forEach((x) => x.classList.remove('active'));
    t.classList.add('active');
    activeCat = t.dataset.cat;
    renderBoard();
  });
});

renderBoard();

// Mobile nav drawer
const navBtn = document.getElementById('navBtn');
const drawer = document.getElementById('drawer');
navBtn.addEventListener('click', () => {
  const hidden = drawer.hasAttribute('hidden');
  if (hidden) {
    drawer.removeAttribute('hidden');
    navBtn.setAttribute('aria-expanded', 'true');
  } else {
    drawer.setAttribute('hidden', '');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});
drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  drawer.setAttribute('hidden', '');
  navBtn.setAttribute('aria-expanded', 'false');
}));

// Interactive Catering Configurator
let selectedVenue = 'V prostorách Pivnice POKR';
document.querySelectorAll('#venueGroup .toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#venueGroup .toggle-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedVenue = btn.dataset.val;
  });
});

document.querySelectorAll('#stationGrid .station-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

const clubForm = document.getElementById('clubForm');
const configResult = document.getElementById('configResult');
clubForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(clubForm);
  const guests = fd.get('guests');
  const name = fd.get('name');
  const contact = fd.get('contact');
  const date = fd.get('date') || 'Upřesníme společně';
  const stations = Array.from(document.querySelectorAll('#stationGrid .station-btn.active'))
    .map((b) => b.dataset.station)
    .join(', ') || 'Dle doporučení';

  const subject = encodeURIComponent(`Poptávka POKR: ${selectedVenue} (${guests} osob) – ${name}`);
  const body = encodeURIComponent(
    `Dobrý den,\n\nmám zájem o: ${selectedVenue}\nPočet osob: ${guests}\nTermín: ${date}\nObčerstvení / servis: ${stations}\nKontakt: ${contact}\n\nS pozdravem,\n${name}`
  );

  configResult.hidden = false;
  configResult.innerHTML = `
    <strong>Poptávka připravena pro ${name} (${guests} osob):</strong><br>
    ${selectedVenue} • ${stations}<br>
    <a href="mailto:info@pivnicepizzapokr.cz?subject=${subject}&body=${body}">Odeslat e-mailem do POKRu</a> nebo zavolejte na <a href="tel:+420725732322">+420 725 732 322</a>.
  `;
});

document.getElementById('year').textContent = new Date().getFullYear();
