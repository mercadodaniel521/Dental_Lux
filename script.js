document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#mobile-menu") && !event.target.closest("#menu-toggle")) {
      mobileMenu.classList.remove("active")
    }
  })

  // Auth Modal
  const authBtn = document.getElementById("auth-btn")
  const authModal = document.getElementById("auth-modal")
  const closeAuthModal = document.getElementById("close-auth-modal")

  authBtn.addEventListener("click", () => {
    authModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  closeAuthModal.addEventListener("click", () => {
    authModal.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Auth Tabs
  const tabItems = document.querySelectorAll(".tab-item")
  const tabPanes = document.querySelectorAll(".tab-pane")
  const switchTabLinks = document.querySelectorAll(".switch-tab")

  tabItems.forEach((item) => {
    item.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all tabs and panes
      tabItems.forEach((tab) => tab.classList.remove("active"))
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      // Add active class to current tab and pane
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  switchTabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const tabId = this.getAttribute("data-tab")

      // Find and click the corresponding tab
      document.querySelector(`.tab-item[data-tab="${tabId}"]`).click()
    })
  })

  // Auth Forms Submission
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Simulate login - in a real app, this would make an API call
    console.log("Login submitted")
    authModal.classList.remove("active")
    document.body.style.overflow = ""
    // Redirect to dashboard in a real app
    // window.location.href = 'dashboard.html';
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Simulate registration - in a real app, this would make an API call
    console.log("Registration submitted")
    authModal.classList.remove("active")
    document.body.style.overflow = ""
    // Redirect to dashboard in a real app
    // window.location.href = 'dashboard.html';
  })

  // Appointment Modal
  const appointmentBtns = document.querySelectorAll(
    "#appointment-btn, #hero-appointment-btn, #cta-appointment-btn, .mobile-btn",
  )
  const appointmentModal = document.getElementById("appointment-modal")
  const closeAppointmentModal = document.getElementById("close-appointment-modal")
  const appointmentForm = document.getElementById("appointment-form")
  const appointmentDate = document.getElementById("appointment-date")
  const appointmentTime = document.getElementById("appointment-time")
  const appointmentFormContainer = document.getElementById("appointment-form-container")
  const appointmentSuccess = document.getElementById("appointment-success")

  appointmentBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      appointmentModal.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  })

  closeAppointmentModal.addEventListener("click", () => {
    appointmentModal.classList.remove("active")
    document.body.style.overflow = ""
    // Reset form state
    setTimeout(() => {
      appointmentFormContainer.style.display = "block"
      appointmentSuccess.classList.add("hidden")
      appointmentForm.reset()
      appointmentTime.disabled = true
    }, 300)
  })

  // Enable time selection only after date is selected
  appointmentDate.addEventListener("change", function () {
    if (this.value) {
      appointmentTime.disabled = false
    } else {
      appointmentTime.disabled = true
      appointmentTime.value = ""
    }
  })

  // Set min date to today
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, "0")
  const dd = String(today.getDate()).padStart(2, "0")
  appointmentDate.min = `${yyyy}-${mm}-${dd}`

  // Appointment form submission
  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Disable submit button and show loading state
    const submitBtn = document.getElementById("submit-appointment")
    submitBtn.disabled = true
    submitBtn.textContent = "Enviando..."

    // Simulate form submission - in a real app, this would make an API call
    setTimeout(() => {
      // Show success message
      appointmentFormContainer.style.display = "none"
      appointmentSuccess.classList.remove("hidden")

      // Reset form
      appointmentForm.reset()
      appointmentTime.disabled = true
      submitBtn.disabled = false
      submitBtn.textContent = "Solicitar Cita"

      // Close modal after delay
      setTimeout(() => {
        appointmentModal.classList.remove("active")
        document.body.style.overflow = ""

        // Reset view for next time
        setTimeout(() => {
          appointmentFormContainer.style.display = "block"
          appointmentSuccess.classList.add("hidden")
        }, 300)
      }, 3000)
    }, 1500)
  })

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === authModal) {
      authModal.classList.remove("active")
      document.body.style.overflow = ""
    }
    if (e.target === appointmentModal) {
      appointmentModal.classList.remove("active")
      document.body.style.overflow = ""
      // Reset form state
      setTimeout(() => {
        appointmentFormContainer.style.display = "block"
        appointmentSuccess.classList.add("hidden")
        appointmentForm.reset()
        appointmentTime.disabled = true
      }, 300)
    }
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Simulate form submission - in a real app, this would make an API call
      alert("Mensaje enviado correctamente. Nos pondremos en contacto con usted pronto.")
      contactForm.reset()
    })
  }
})

