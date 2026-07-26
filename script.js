const data = {
  personal: {
    name: 'Sharan Swaminathan',
    role: 'FULL STACK DEVELOPER',
    location: 'Coimbatore, Tamil Nadu, India',
    email: 'sharans05122003@gmail.com',
    mobile: '9342485696',
    summary: 'Driven Computer Science graduate and Technical Associate with 2+ years of experience bridging the gap between data structuring and web technologies. Core expertise adept at transforming complex research articles using LaTeX and managing web-ready data structures with XML, and front-end development using HTML, CSS and JavaScript.',
    avatar: 'profile.jpg',
    links: {
      github: 'https://github.com/sharans05122003',
      linkedin: 'https://www.linkedin.com/in/sharans05122003',
      leetcode: 'https://leetcode.com/sharans05122003',
      resume: 'https://drive.google.com/file/d/1tsARhW7cbp2tkJAXk7xYvSWfJNKQdR3T/view?usp=drive_link'
    }
  },
  skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'React.js', 'Node.js', 'MySQL', 'GitHub', 'VS Code'],
  experiences: [
    {
      role: 'Senior Associate - LaTex',
      company: 'TNQ Technologies',
      duration: 'May 2024 – Present',
      location: 'Remote – Coimbatore, Tamil Nadu, India',
      highlights: [
        'Designed and published research articles using LaTex and XML.',
        'Worked in designing web layouts of raw manuscript content.',
        'Improved website performance and speed through optimization techniques by 55%.'
      ]
    }
  ],
  projects: [
    {
      title: 'Ai virtual Keyboard document',
      category: 'frontend',
      image: 'aivk.jpg',
      description: 'A modern React-based virtual keyboard documentation interface powered by HTML, CSS and JavaScript.',
      tags: ['React.js', 'Redux', 'PHP', 'MySQL', 'Git']
    },
    {
      title: 'Task Sync',
      category: 'fullstack',
      image: 'tasksync.jpg',
      description: 'A task management platform with Kotlin, XML, and RESTful backend integration for user-driven workflow automation.',
      tags: ['Node.js', 'Express', 'JavaScript', 'Git']
    }
  ],
  certifications: [
    {
      title: 'Python for Data Science',
      provider: 'Cognitiveclass.ai',
      url: 'https://courses.cognitiveclass.ai/certificates/1e718120ab38497e89e04b3d69fa2481'
    },
    {
      title: 'Introduction to Artificial Intelligence',
      provider: 'Great Learning',
      url: 'https://www.mygreatlearning.com/certificate/UHBLAWLG?referrer_code=GL2KJPHAEZCGE'
    },
    {
      title: 'Functions in Python',
      provider: 'Great Learning',
      url: 'https://www.mygreatlearning.com/certificate/VTZCKZSW?referrer_code=GL2KJPHAEZCGE'
    }
  ]
};

const root = document.documentElement;
root.setAttribute('data-theme', 'dark');

const applyTheme = () => {
  root.setAttribute('data-theme', 'dark');
};
applyTheme();

function populate() {
  document.getElementById('siteName').textContent = data.personal.name.split(' ')[0];
  document.getElementById('heroName').textContent = data.personal.name;
  document.getElementById('heroRole').textContent = data.personal.role;
  document.getElementById('heroSummary').textContent = data.personal.summary;
  document.getElementById('heroLocation').textContent = data.personal.location;
  document.getElementById('heroEmail').textContent = data.personal.email;
  document.getElementById('heroMobile').textContent = data.personal.mobile;
  document.getElementById('heroLocation2').textContent = data.personal.location;
  document.getElementById('heroEmail2').textContent = data.personal.email;
  document.getElementById('heroMobile2').textContent = data.personal.mobile;
  document.getElementById('githubLink').href = data.personal.links.github;
  document.getElementById('linkedinLink').href = data.personal.links.linkedin;
  document.getElementById('leetcodeLink').href = data.personal.links.leetcode;
  document.getElementById('resumeLink').href = data.personal.links.resume;
  document.getElementById('heroAvatar').src = data.personal.avatar;
  document.getElementById('aboutText').textContent = data.personal.summary;
  document.getElementById('year').textContent = new Date().getFullYear();

  const skillList = document.getElementById('skillList');
  skillList.innerHTML = data.skills.map((skill) => `<span class="pill">${skill}</span>`).join('');

  const experienceList = document.getElementById('experienceList');
  experienceList.innerHTML = data.experiences.map((exp) => `
    <article class="experience-card card">
      <h3>${exp.role}</h3>
      <h4>${exp.company}</h4>
      <p><strong>${exp.duration}</strong> · ${exp.location}</p>
      <ul>${exp.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');

  const projectList = document.getElementById('projectList');
  projectList.innerHTML = data.projects.map((project) => `
    <article class="project-card card">
      <img src="${project.image}" alt="${project.title}">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    </article>
  `).join('');

  const certList = document.getElementById('certList');
  certList.innerHTML = data.certifications.map((cert) => `
    <a class="cert-card card cert-link" href="${cert.url}" target="_blank" rel="noreferrer">
      <h3>${cert.title}</h3>
      <p>${cert.provider}</p>
    </a>
  `).join('');
}

populate();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim() || '';
  if (!name) {
    status.textContent = 'Please enter your name.';
    return;
  }
  status.textContent = 'Thanks! Your message has been captured locally for this static site.';
  form.reset();
});
