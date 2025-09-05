window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');
  const menuLinks = document.querySelectorAll('.menu-link');

  menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
  closeBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  menuLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // Slideshow
  const slideshowSection = document.getElementById('slideshow-section');
  const slideContent = document.querySelector('.slide-content');

  const slides = [
    {
      image: "imgs/homeBGs/newDesign/1.jpg",
      title: `eCommerce Via Esports <br>Video Games<br> 
        <span class="highlight-white">Gamify eCommerce<br>& GamiFi transactions</span>`,
      subtitle: `The first in kind Multifaceted & Play2Earn<br>Marketplace using Gaming, Streaming and Play<br>funding features powered by AI & Blockchain.`
    },
    {
      image: "imgs/homeBGs/newDesign/2.jpg",
      title: `The First ever<br> Web3.0 "Play2Earn"<br>
        <span class="highlight-white">Network Marketplace!</span>`,
      subtitle: `Esports PvP Games & Tournaments with Real Life's<br> Tangible assets - Cash & NFTs as Rewards.`
    },
    {
      image: "imgs/homeBGs/newDesign/3.jpg",
      title: `Connect Gamers,<br> Teams, Streamers &<br>Community Organizers<br> 
         <span class="highlight-white">with Brands Worldwide</span>`,
      subtitle: `We offer Unique & Lucrative monetization streams<br> to profit via their Skills and Playtime.`
    }
  ];

  let index = 0;
  function changeSlide() {
    const slide = slides[index];
    slideshowSection.style.backgroundImage = `url('${slide.image}')`;
    slideContent.innerHTML = `
      <h1 class="title gradient-text">${slide.title}</h1>
      ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
    `;
    index = (index + 1) % slides.length;
  }

  setInterval(changeSlide, 10000);
  changeSlide();

  // Render charts ONCE
  renderTokenChart();
  renderPresaleChart();
});

let tokenChartInstance;
function renderTokenChart() {
  const ctx = document.getElementById('tokenChart').getContext('2d');
  if (tokenChartInstance) tokenChartInstance.destroy();

  tokenChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Treasury/Reserve', 'Marketing', 'Founding Team', 'Advisors',
        'Staking/Yield Farming', 'Liquidity', 'Community Fund', 'Token Sales'
      ],
      datasets: [{
        data: [25, 25, 15, 2.7, 10, 10, 10, 2.3],
        backgroundColor: [
          '#EF4444', '#FACC15', '#22C55E', '#FB923C',
          '#22D3EE', '#2563EB', '#F43F5E', '#93C5FD'
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      transitions: { active: { animation: { duration: 0 } } }, // stop flicker
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label || ''}: ${context.raw || 0}%`
          }
        }
      }
    }
  });
}

let presaleChartInstance;
function renderPresaleChart() {
  const ctx2 = document.getElementById('presaleChart').getContext('2d');
  if (presaleChartInstance) presaleChartInstance.destroy();

  presaleChartInstance = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: [
        'Presale Phase 1', 'Presale Phase 2', 'Presale Phase 3',
        'Presale Phase 4', 'Presale Phase 5', 'Presale Phase 6', 'IDO'
      ],
      datasets: [{
        data: [2000000, 2000000, 1500000, 1500000, 1500000, 2000000, 10000000],
        backgroundColor: [
          '#EF4444', '#FACC15', '#22C55E', '#FB923C',
          '#22D3EE', '#2563EB', '#F43F5E'
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
  responsive: false,   // ⛔ stops resize loop
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label || ''}: ${context.raw || 0}`
      }
    }
  }
}

  });
}
