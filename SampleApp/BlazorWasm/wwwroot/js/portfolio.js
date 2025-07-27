// Portfolio JavaScript functionality

// Navbar scroll effect and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Skills progress bar animation
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const targetWidth = bar.style.width;
                    bar.style.setProperty('--target-width', targetWidth);
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 300);
                });
            }
        });
    }, { threshold: 0.3 });

    // Observe skills categories
    document.querySelectorAll('.skills-category').forEach(category => {
        skillsObserver.observe(category);
    });

    // Handle profile image error
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create fallback avatar with initials
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = 'avatar-initials';
            fallbackDiv.innerHTML = '<span>PA</span>';
            fallbackDiv.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                color: white;
                font-size: 4rem;
                font-weight: 600;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                letter-spacing: 0.1em;
            `;
            
            // Replace the image with the fallback
            this.style.display = 'none';
            this.parentNode.appendChild(fallbackDiv);
        });
    }

    // Handle GitHub avatar background image
    const githubAvatar = document.querySelector('.github-avatar');
    if (githubAvatar) {
        const testImage = new Image();
        testImage.onload = function() {
            console.log('GitHub avatar loaded successfully');
            const fallback = githubAvatar.querySelector('.avatar-fallback');
            if (fallback) {
                fallback.style.opacity = '0';
                setTimeout(() => {
                    fallback.style.display = 'none';
                }, 300);
            }
        };
        testImage.onerror = function() {
            console.log('GitHub avatar failed to load, using fallback');
            githubAvatar.style.backgroundImage = 'none';
            const fallback = githubAvatar.querySelector('.avatar-fallback');
            if (fallback) {
                fallback.style.opacity = '1';
                fallback.style.display = 'flex';
            }
        };
        
        // Extract URL from style attribute
        const bgImage = githubAvatar.style.backgroundImage;
        if (bgImage && bgImage !== 'none') {
            const url = bgImage.slice(4, -1).replace(/["']/g, "");
            testImage.src = url;
        } else {
            // No background image set, show fallback
            const fallback = githubAvatar.querySelector('.avatar-fallback');
            if (fallback) {
                fallback.style.opacity = '1';
                fallback.style.display = 'flex';
            }
        }
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            const statusDiv = document.getElementById('contactFormStatus');
            
            if (!name || !email || !message) {
                showStatus('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:abhinavparupati@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showStatus('Opening your email client...', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
                statusDiv.style.display = 'none';
            }, 3000);
        });
    }
    
    function showStatus(message, type) {
        const statusDiv = document.getElementById('contactFormStatus');
        if (statusDiv) {
            statusDiv.textContent = message;
            statusDiv.className = `form-status ${type}`;
            statusDiv.style.display = 'block';
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
