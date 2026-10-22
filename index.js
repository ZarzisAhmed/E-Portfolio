document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MOBILE NAV TOGGLE
    ========================================================= */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            const open = navLinks.classList.toggle("nav-open");
            hamburger.setAttribute("aria-expanded", String(open));
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("nav-open");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* =========================================================
       SCROLL PROGRESS BAR
    ========================================================= */
    const progressBar = document.getElementById("scrollProgress");

    const updateProgress = () => {
        if (!progressBar) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + "%";
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    /* =========================================================
       BACK TO TOP BUTTON
    ========================================================= */
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================================================
       HIGHLIGHT ACTIVE NAVIGATION LINK
    ========================================================= */
    const sections = document.querySelectorAll("section");
    const navAnchors = document.querySelectorAll("nav ul li a");

    const highlightNav = () => {
        if (document.body.dataset.page === "project") return;
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navAnchors.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", highlightNav);
    highlightNav();

    /* =========================================================
       SCROLL REVEAL ANIMATIONS (+ skill bar fill)
    ========================================================= */
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                const level = entry.target.querySelector(".skill-level");
                if (level) {
                    const value = level.getAttribute("data-level");
                    requestAnimationFrame(() => {
                        level.style.width = value;
                    });
                }

                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));

    /* =========================================================
       TIMELINE LINE ANIMATION
    ========================================================= */
    const timelineEls = document.querySelectorAll(".timeline");

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    timelineEls.forEach(el => timelineObserver.observe(el));

    /* =========================================================
       HERO TYPEWRITER EFFECT
    ========================================================= */
    const typedEl = document.querySelector(".typed-text");

    if (typedEl) {
        const roles = ["Computer Science Student at AIUB", "React & Next.js Enthusiast", "Problem Solver", "Fitness & Guitar Lover"];
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const type = () => {
            const current = roles[roleIndex];

            if (!deleting) {
                charIndex++;
                typedEl.textContent = current.slice(0, charIndex);

                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(type, 1600);
                    return;
                }
            } else {
                charIndex--;
                typedEl.textContent = current.slice(0, charIndex);

                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }

            setTimeout(type, deleting ? 40 : 90);
        };

        type();
    }

});