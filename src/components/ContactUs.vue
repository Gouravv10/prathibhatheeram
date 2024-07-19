<template>

 <div class="background">
<div class="content">
 <h3 class="title">Contact Us</h3>
<div class="contact-info">
<div class="info-item">
<i class="fas fa-map-marker-alt"></i>
<div class="info-text">
<h4>Address</h4>
<p>Your Address Here</p>
</div>
</div>
<div class="info-item">
<i class="fas fa-envelope"></i>
<div class="info-text">
<h4>Email</h4>
<p><a href="mailto:foundation.prathibhatheeram@gmail.com">foundation.prathibhatheeram@gmail.com</a></p>
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
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
</form>
</div>
</div>
 
</template>
<style scoped>

.background {
  background:linear-gradient(120deg, rgba(67, 168, 246, 0.7) 0%, rgba(235, 237, 238, 0.7) 100%), url('C:\Users\HP\Desktop\vue\ptf\proj\prathibhatheeram\src\assets\cntus2.jpg');
  background-size: cover;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background:linear-gradient(120deg, rgba(235, 237, 238, 0.30) 0%, rgba(67, 168, 246, 0.60)100%);
    padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

.title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-item i {
  font-size: 24px;
  margin-right: 10px;
  color: #333;
}

.info-text h4 {
  font-size: 18px;
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
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  resize:none;
}

button[type="submit"] {
  background-color: #287cd5;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #276cb7;
}
</style>



