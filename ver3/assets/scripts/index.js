// AS Team Portfolio - Complete HEMA Structure with Experience Cards
const teamMembers = {
  hema: {
    name: "Akula Hema Priya",
    title: "Web Developer",
    email: "hema69387@gmail.com",
    phone: "+91 8309939143",
    college: "A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru",
    degree: "Diploma in Computer Engineering",
    grades: "1st year: 86% | 3rd sem: 84% | 4th sem: 89%",
    img: "../assets/images/hema.avif",
    experience: [
      {
        title: "C++ Programming Training",
        duration: "3 Months",
        desc: "Learned C++ fundamentals, OOP concepts and problem-solving skills."
      },
      {
        title: "NestFind Project Work", 
        duration: "6 Months",
        desc: "Frontend Developer role - designed responsive UI and modern web layouts."
      }
    ],
    skills: [
      {name: "HTML", level: "90%"},
      {name: "CSS", level: "85%"},
      {name: "JavaScript", level: "75%"},
      {name: "Python", level: "70%"},
      {name: "Android Programming", level: "80%"}
    ]
  },
  lokeswari: {
    name: "Lokeswari Battina",
    title: "AI & ML Student",
    email: "battinalokeswari@gmail.com",
    college: "AANM&VVRSR Polytechnic, Gudlavalleru",
    degree: "Diploma in AI & ML",
    img: "../assets/images/lokii.avif",
    experience: [
      {
        title: "Frontend Developer Intern",
        duration: "2023 - Present",
        desc: "Developed responsive web pages using HTML, CSS, and JavaScript at ABC Company."
      }
    ],
    skills: [
      {name: "HTML & CSS", level: "90%"},
      {name: "JavaScript", level: "75%"},
      {name: "Prolog", level: "70%"},
      {name: "Data Analysis", level: "80%"},
      {name: "Logical Thinking", level: "85%"}
    ]
  },
  suneela: {
    name: "Suneela Gummadi",
    title: "Content Creator & Web Developer",
    email: "suneelagummadi@gmail.com",
    college: "AANM & VVRSR Polytechnic",
    degree: "Diploma in AIML",
    img: "../assets/images/work.webp",
    experience: [
      {
        title: "Content Creator",
        duration: "2020 - 2024",
        desc: "Created engaging digital content, managed branding strategies and visual storytelling."
      },
      {
        title: "College Management System",
        duration: "2024",
        desc: "Developed responsive web application using HTML, CSS, and MySQL."
      }
    ],
    skills: [
      {name: "HTML5", level: "90%"},
      {name: "CSS3", level: "85%"},
      {name: "JavaScript", level: "80%"},
      {name: "MySQL", level: "75%"},
      {name: "Responsive Design", level: "90%"}
    ]
  },
  asini: {
    name: "Asini Botla",
    title: "AIML Student",
    email: "asinibotla4@gmail.com",
    phone: "9701975416",
    college: "A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru",
    degree: "Diploma in AIML",
    img: "../assets/images/asini.jpg",
    experience: [
      {
        title: "College Info Portal Project",
        duration: "2024",
        desc: "Developed web portal providing comprehensive college information for new students."
      }
    ],
    skills: [
      {name: "HTML", level: "80%"},
      {name: "CSS", level: "75%"},
      {name: "Python", level: "70%"},
      {name: "Web Development", level: "75%"}
    ]
  }
};

// Portfolio Display Function - HEMA STRUCTURE
function showPortfolio(memberId) {
  const member = teamMembers[memberId];
  document.getElementById('team').style.display = 'none';
  document.getElementById('portfolio-container').style.display = 'block';
  document.documentElement.scrollTop = 0;

  // Hero Section
  document.querySelector('.hero-text h1').innerHTML = `<i class="fas fa-user"></i> Hello, It's me`;
  document.querySelector('.hero-text h2').innerHTML = `<strong>${member.name}</strong>`;
  document.querySelector('.hero-text p').innerHTML = `Diploma student specializing in <strong>${member.title}</strong>`;
  document.querySelector('.hero-img img').src = member.img;

  // About Section
  document.getElementById('about-title').textContent = 'About ' + member.name;
  document.getElementById('about-content').innerHTML = `
    <h3><i class="fas fa-user"></i> Who I Am</h3>
    <p>Motivated <strong>${member.degree}</strong> student from <strong>${member.college}</strong>.</p>
    <p>Passionate about creating innovative web solutions and modern technologies.</p>
    <h3><i class="fas fa-bullseye"></i> Career Objective</h3>
    <p>To become a professional developer building creative web applications.</p>
  `;

  // Education Section
  document.getElementById('education-content').innerHTML = `
    <h3><i class="fas fa-graduation-cap"></i> ${member.degree}</h3>
    <p><strong>${member.college}</strong></p>
    <p><strong>2023 - 2026</strong></p>
    ${member.grades ? `<p><strong>Academic Performance:</strong> ${member.grades}</p>` : ''}
  `;

  // EXPERIENCE SECTION - NEWLY ADDED
  const experienceHTML = member.experience ? member.experience.map(exp => `
    <div class="box experience-card">
      <h3><i class="fas fa-briefcase"></i> ${exp.title}</h3>
      ${exp.duration ? `<p><strong>Duration:</strong> ${exp.duration}</p>` : ''}
      <p>${exp.desc}</p>
    </div>
  `).join('') : '<p>No experience available</p>';
  
  document.getElementById('experience-content').innerHTML = experienceHTML;

  // Skills Section
  document.getElementById('skills-content').innerHTML = member.skills.map(skill => `
    <div class="skill" style="--level: ${skill.level}">
      <span>${skill.name}</span>
      <div class="skill-bar">
        <div class="skill-level"></div>
      </div>
    </div>
  `).join('');

  // Contact Section
  document.getElementById('contact-content').innerHTML = `
    <h3><i class="fas fa-envelope"></i> Get In Touch</h3>
    <p><strong>Name:</strong> ${member.name}</p>
    <p><strong>Email:</strong> ${member.email}</p>
    ${member.phone ? `<p><strong>Phone:</strong> ${member.phone}</p>` : ''}
    <p><strong>Location:</strong> Gudlavalleru, Andhra Pradesh</p>
  `;
}

// Back to Team Function
function backToTeam() {
  document.getElementById('team').style.display = 'block';
  document.getElementById('portfolio-container').style.display = 'none';

  // Text reset
  document.querySelector('.hero-text h1').innerHTML =
    `<i class="fas fa-users"></i> Welcome to AS Team`;
  document.querySelector('.hero-text h2').innerHTML =
    `<strong>Diploma Developers</strong>`;
  document.querySelector('.hero-text p').innerHTML =
    `Creative web development students from <strong>A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru</strong>`;

  // ✅ Hero image reset to TEAM image
  const heroImg = document.getElementById('hero-main-img') ||
                  document.querySelector('.hero-img img');
  if (heroImg) {
    heroImg.src = '../assets/images/team.jfif';
    heroImg.alt = 'Team Photo';
  }
}


// Print CV Function
function printCV() {
  window.print();
}

// Scroll Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight) {
      sec.classList.add('visible');
    }
  });
});

// Mouse Hover Effects - HEMA Style
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.team-card, .box, .experience-card').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.transform = `translate(${(x/rect.width-0.5)*12}px, ${(y/rect.height-0.5)*12}px)`;
      el.style.boxShadow = `0 15px 35px rgba(0,0,0,0.3)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0,0)';
      el.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
    });
  });

  // Skills animation on hover
  document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.querySelector('.skill-level').style.width = skill.style.getPropertyValue('--level');
    });
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// SCROLL TO TEAM FUNCTION - FIXED ✅
function scrollToTeam() {
  document.getElementById('team').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}
