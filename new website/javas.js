window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Slideshow Script
    const slideshowSection = document.getElementById('slideshow-section');
    const images = [
        "imgs/homeBGs/newDesign/1.jpg",
        "imgs/homeBGs/newDesign/2.jpg",
        "imgs/homeBGs/newDesign/3.jpg",
        "imgs/homeBGs/newDesign/4.jpg"
    ];

    let index = 0;

    function changeImage() {
        const imgUrl = `url('${images[index]}')`;
        slideshowSection.style.backgroundImage = imgUrl;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000);
    changeImage();

    
    const btnOpportunity = document.getElementById('btn-opportunity');
    const contentOpportunity = document.getElementById('content-opportunity');

    const btnInvest = document.getElementById('btn-invest');
    const contentInvest = document.getElementById('content-invest');

    btnOpportunity.addEventListener('click', () => {
      contentOpportunity.classList.toggle('hidden');
    });

    btnInvest.addEventListener('click', () => {
      contentInvest.classList.toggle('hidden');
    });
    





// Run once after DOM is loaded
//window.addEventListener('DOMContentLoaded', () => {
  renderTokenChart();
  renderPresaleChart();
//});

});

let tokenChartInstance = null;
let presaleChartInstance = null;

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
          '#22D3EE', '#0c1017ff', '#F43F5E', '#93C5FD'
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  // Allow better control via CSS
      animation: false,            // Prevent zoom on load
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.label || ''}: ${context.raw || 0}%`
          }
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#fff',
            font: { size: 14, weight: '500' }
          }
        }
      }
    }
  });
}

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
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.label || ''}: ${context.raw || 0}`
          }
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#fff',
            font: { size: 14, weight: '500' }
          }
        }
      }
    }
  });
}