function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }

  const allLinks = document.querySelectorAll('.nav-links a, .footer-links a');
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  allLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
  AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: false, // Trigger animation only once
    offset: 100, // Trigger animation when scrolled 100px into the viewport
  });
  