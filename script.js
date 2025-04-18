// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update icon
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Experience Timeline Data
const experiences = [
    {
        title: 'Senior Process Engineer',
        company: 'Example Chemical Industries',
        period: '2020 - Present',
        description: 'Led process optimization initiatives resulting in 25% increase in production efficiency. Managed a team of 5 engineers in implementing new sustainable manufacturing processes.'
    },
    {
        title: 'Process Engineer',
        company: 'Industrial Solutions Corp',
        period: '2017 - 2020',
        description: 'Optimized chemical production processes reducing waste by 30%. Collaborated with cross-functional teams to implement new quality control systems.'
    },
    {
        title: 'Junior Process Engineer',
        company: 'Chemical Manufacturing Ltd',
        period: '2015 - 2017',
        description: 'Assisted in plant operations and process monitoring. Participated in equipment troubleshooting and maintenance.'
    }
];

// Projects Data
const projects = [
    {
        title: 'Process Optimization Project',
        category: 'industrial',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3',
        description: 'Implemented advanced process control systems to optimize chemical production.',
        technologies: ['Process Control', 'SCADA', 'Data Analytics']
    },
    {
        title: 'Sustainable Manufacturing Research',
        category: 'research',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3',
        description: 'Research project on implementing sustainable practices in chemical manufacturing.',
        technologies: ['Green Chemistry', 'Sustainability', 'Process Design']
    },
    {
        title: 'Plant Safety System Design',
        category: 'academic',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3',
        description: 'Designed and implemented comprehensive safety systems for chemical plants.',
        technologies: ['Safety Systems', 'Risk Assessment', 'AutoCAD']
    }
];

// Certificates Data
const certificates = [
    {
        title: 'Professional Process Engineer',
        issuer: 'Engineering Council',
        date: '2020',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3'
    },
    {
        title: 'Advanced Process Safety Management',
        issuer: 'Safety Institute',
        date: '2019',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3'
    },
    {
        title: 'Sustainable Engineering Practices',
        issuer: 'Green Engineering Association',
        date: '2018',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3'
    }
];

// Populate Experience Timeline
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card fade-in ${project.category}`;
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Populate Certificates
function populateCertificates() {
    const certificatesGrid = document.querySelector('.certificates-grid');
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card fade-in';
        certCard.innerHTML = `
            <div class="certificate-image">
                <img src="${cert.image}" alt="${cert.title}">
            </div>
            <div class="certificate-content">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
                <p class="date">${cert.date}</p>
            </div>
        `;
        certificatesGrid.appendChild(certCard);
    });
}

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the form data
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateExperience();
    populateProjects();
    populateCertificates();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
}); 