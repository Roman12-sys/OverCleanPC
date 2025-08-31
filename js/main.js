// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ simple
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const ans = item.querySelector('.faq-a');
    const open = ans.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    if (!open) ans.classList.add('open');
    btn.setAttribute('aria-expanded', String(!open));
    ans.setAttribute('aria-hidden', String(open));
  });
});

// Testimonios accesible carousel
const testimonials = [
  { text: "“Me dejaron la PC como nueva. Atención de 10.”", author: "Camila" },
  { text: "“Rápidos, claros y muy buena onda. Recomendado.”", author: "Lautaro" },
  { text: "“Excelente servicio, mi PC vuela ahora.”", author: "María" },
  { text: "“Profesionales y atentos. Volvería.”", author: "Juan" },
  { text: "“Limpieza impecable, precio justo.”", author: "Ana" },
  { text: "“Me explicaron todo paso a paso.”", author: "Pedro" },
  { text: "“Servicio rápido y confiable.”", author: "Sofía" },
  { text: "“Mi PC durará más gracias a ellos.”", author: "Diego" },
  { text: "“Atención personalizada de 10.”", author: "Lucía" },
  { text: "“Recomiendo al 100%.”", author: "Martín" },
  { text: "“Trabajo de calidad, muy satisfecho.”", author: "Valentina" },
  { text: "“Eficientes y amables.”", author: "Facundo" },
  { text: "“Mi PC nunca había estado tan bien.”", author: "Carolina" },
  { text: "“Servicio excepcional.”", author: "Gonzalo" },
  { text: "“Gracias por el cuidado.”", author: "Florencia" }
];

const carousel = document.getElementById('testimonials-carousel');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
const indicatorsContainer = document.getElementById('indicators');

let currentIndex = 0;

// Crear indicadores
testimonials.forEach((_, i) => {
  const indicator = document.createElement('button');
  indicator.className = 'indicator';
  indicator.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
  indicator.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
  carousel.innerHTML = `<blockquote class="testimonial">${testimonials[currentIndex].text} — <strong>${testimonials[currentIndex].author}</strong></blockquote>`;
  indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
  carousel.setAttribute('aria-live', 'polite');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel();
});

// Navegación por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

updateCarousel();
