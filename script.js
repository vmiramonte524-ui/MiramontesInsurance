// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // WhatsApp button animation
  const whatsappBtn = document.querySelector('.btn-whatsapp');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', function() {
      this.querySelector('i').classList.add('animate-bounce');
    });
    whatsappBtn.addEventListener('mouseleave', function() {
      this.querySelector('i').classList.remove('animate-bounce');
    });
  }

  // Testimonial carousel functionality
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length > 0) {
    let currentIndex = 0;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
      });
    }
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
    showTestimonial(0);
  }
});
// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = this.elements['name'].value.trim();
    const phone = this.elements['phone'].value.trim();
    const message = this.elements['message'].value.trim();
    
    if (!name || !phone || !message) {
      alert('Por favor complete los campos requeridos (Nombre, Teléfono y Mensaje)');
      return;
    }

    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show a success message
    alert(`Gracias ${name}, hemos recibido tu mensaje. Te contactaremos al ${phone} en menos de 24 horas.`);
    
    // Reset form
    this.reset();
    
    // Optional: Send data to server
    // const formData = new FormData(this);
    // fetch('/contact', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    //   this.reset();
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('Hubo un error al enviar tu mensaje. Por favor inténtalo de nuevo.');
    // });
  });
}
