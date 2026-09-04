document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  // FAQ accordion
  document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const wasOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        const plus = other.querySelector("button span");
        if (plus) plus.textContent = "+";
      });

      if (!wasOpen) {
        item.classList.add("active");
        const plus = button.querySelector("span");
        if (plus) plus.textContent = "−";
      }
    });
  });

  // Testimonials
  const testimonials = [
    {
      text: "Hemant Tiwari & Associates has been extremely professional and supportive. All our GST and Income Tax work is handled on time.",
      name: "Rajesh Kumar, Business Owner"
    },
    {
      text: "Professional guidance and clear communication throughout the process. We received timely support whenever we needed it.",
      name: "Client Review, Ayodhya"
    },
    {
      text: "A dependable team for tax and compliance work. The process was explained clearly and handled professionally.",
      name: "Client Review, Business Owner"
    }
  ];

  let current = 0;
  const text = document.getElementById("testimonialText");
  const name = document.getElementById("testimonialName");

  function showTestimonial(index) {
    if (!text || !name) return;
    text.style.opacity = "0";
    name.style.opacity = "0";

    setTimeout(() => {
      text.innerHTML = testimonials[index].text;
      name.textContent = testimonials[index].name;
      text.style.opacity = "1";
      name.style.opacity = "1";
    }, 150);
  }

  document.getElementById("nextTestimonial")?.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  document.getElementById("prevTestimonial")?.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  // Current year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Add a subtle shadow when scrolling
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 10);
  });
});
