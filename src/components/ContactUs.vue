
<template>
  <div class="background">
    <div class="content">
      <h3 class="title">Contact Us</h3>
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="info-text">
            <h4>Address</h4>
            <p>Our Library Building<br>Pattukulam<br>Pathirappally P.O<br>Alappuzha</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div class="info-text">
            <h4>Email</h4>
            <p>
              <a href="mailto:foundation.prathibhatheeram@gmail.com" class="email-link">
                <span class="full-email">foundation.prathibhatheeram@gmail.com</span>
                <span class="short-email">Click here</span>
              </a>
            </p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-phone-alt"></i>
          <div class="info-text">
            <h4>Phone</h4>
            <p><a href="tel:+91 99476 17322">+91 99476 17322</a></p>
          </div>
        </div>
      </div>
      <form class="contact-form">
        <h4>Send Us a Message</h4>
        <div class="form-group">
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <label for="message"></label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: linear-gradient(120deg, rgba(67, 168, 246, 0.7) 0%, rgba(235, 237, 238, 0.7) 100%), url('@/assets/cntus2.jpg');
  background-size: cover;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background: linear-gradient(120deg, rgba(235, 237, 238, 0.30) 0%, rgba(67, 168, 246, 0.60) 100%);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 100%;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-item i {
  margin-right: 10px;
  color: #333;
}

.info-text h4 {
  margin-bottom: 5px;
  color: #333;
}

.info-text p {
  color: #555;
}

.contact-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  resize: none;
}

button[type="submit"] {
  background-color: #287cd5;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #276cb7;
}

.full-email {
  display: none;
}

.short-email {
  display: inline;
}

@media (min-width: 768px) {
  .contact-info {
    flex-direction: row;
    justify-content: space-between;
  }

  .info-item {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .content {
    max-width: 100%;
  }

  .full-email {
    display: inline;
  }

  .short-email {
    display: none;
  }
}
</style>


