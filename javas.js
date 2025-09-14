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

  setInterval(changeSlide, 8000);
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
      'Presale', 'Treasury/ Reserve', 'Marketing', 'Team', 
      'Advisors', 'Staking/ Yield Farming', 'Liquidity/ Listings', 
      'Community Development Fund'
    ],
    desc: [
      '300,000,000', '750,000,000', '690,000,000', '300,000,000', 
      '60,000,000', '300,000,000', '300,000,000', '300,000,000'
    ],
    datasets: [{
      data: [10, 25, 23, 10, 2, 10, 10, 10],
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
          label: (context) => {
            const index = context.dataIndex;
            const desc = context.chart.data.desc[index]; // get desc value
            const percent = context.raw; // percentage
            return `${desc} (${percent}%)`; 
          }
        }
      }
    }
  }});
}

let presaleChartInstance;
function renderPresaleChart() {
  const ctx2 = document.getElementById('presaleChart').getContext('2d');
  if (presaleChartInstance) presaleChartInstance.destroy();

  presaleChartInstance = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: [
        'Private Round', 'Round 1', 'Round 2', 'Round 3',
        'Round 4', 'Round 5', 'Round 6', 'Public IDO'
      ],
      desc: [
        '110,000,000', '20,000,000', '25,000,000', '30,000,000',
        '30,000,000', '30,000,000', '30,000,000', '25,000,000'
      ],
      datasets: [{
        data: [36.7, 6.7, 8.3, 10.0, 10.0, 10.0, 10.0, 8.3],
        backgroundColor: [
          '#EF4444', '#FACC15', '#22C55E', '#FB923C',
          '#22D3EE', '#2563EB', '#F43F5E', '#93C5FD'
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: false,   // stops resize loop
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => {
              const index = context.dataIndex;
              const desc = context.chart.data.desc[index];
              const percent = context.raw;
              return `${desc} (${percent}%)`;
            }
          }
        }
      }
    }
  });
}
