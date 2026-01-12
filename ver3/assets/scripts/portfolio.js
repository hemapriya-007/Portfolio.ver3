// Portfolio specific functions for myportfolio.html
let currentMember = null;

function loadPortfolio(memberId) {
  fetch('../data/team.json')
    .then(res => res.json())
    .then(data => {
      const member = data[memberId];
      currentMember = member;
      renderPortfolio(member);
    });
}

function renderPortfolio(member) {
  document.getElementById('portfolioContent').innerHTML = generatePortfolioHTML(member);
  initAnimations();
}

function generatePortfolioHTML(member) {
  return `
    <header>
      <div class="logo">Portfolio.</div>
      <nav>
        <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a>
        <a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="home">
      <div class="hero-text">
        <h1>Hello, It's me</h1>
        <h2><strong>${member.name}</strong></h2>
        <p>${member.title}</p>
        <button onclick="downloadPDF()" class="download-btn">Download CV</button>
      </div>
      <div class="hero-img">
        <img src="${member.img}" alt="${member.name}">
      </div>
    </section>

    ${member.about ? `<section id="about"><h2>About</h2><div class="box">${member.about}</div></section>` : ''}
    ${member.education ? `<section id="education"><h2>Education</h2><div class="box">${member.education}</div></section>` : ''}
    
    ${member.skills ? `
    <section id="skills">
      <h2>Skills</h2>
      <div class="box">
        ${member.skills.map(s => `
          <div class="skill" style="--level:${s.level}">
            <span>${s.name}</span>
            <div class="skill-bar">
              <div class="skill-level"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>` : ''}
    
    ${member.projects ? `
    <section id="projects">
      <h2>Projects</h2>
      ${member.projects.map(p => `
        <div class="box">
          <h3>${p.title}</h3>
          <p>${p.desc || ''}</p>
          ${p.tech ? `<p><strong>Tech:</strong> ${p.tech}</p>` : ''}
        </div>
      `).join('')}
    </section>` : ''}
    
    <section id="contact">
      <h2>Contact</h2>
      <div class="box">
        <p><strong>${member.name}</strong></p>
        <p><strong>Email:</strong> ${member.contact.email}</p>
        ${member.contact.phone ? `<p><strong>Phone:</strong> ${member.contact.phone}</p>` : ''}
      </div>
    </section>
    
    <footer>© 2026 ${member.name}</footer>
  `;
}

function downloadPDF() {
  window.print();
}

function initAnimations() {
  // Scroll animations
  window.removeEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleScroll);
  
  // Box hover effects
  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mousemove', handleBoxHover);
    box.addEventListener('mouseleave', handleBoxLeave);
  });
}

function handleScroll() {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight / 1.2) {
      sec.classList.add('visible');
    }
  });
}

function handleBoxHover(e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const offsetX = (x / rect.width - 0.5) * 20;
  const offsetY = (y / rect.height - 0.5) * 20;
  this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  this.style.boxShadow = `${-offsetX}px ${-offsetY}px 30px rgba(0,0,0,0.3)`;
}

function handleBoxLeave() {
  this.style.transform = 'translate(0,0)';
  this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
}

// Load default portfolio (Hema)
document.addEventListener('DOMContentLoaded', () => {
  loadPortfolio('hema');
});
