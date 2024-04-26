import React from 'react'
import Image1 from './images/5star.jpg';
import Image2 from './images/bacon.jpg';
import Image3 from './images/chehe.jpg';
import Image4 from './images/deluxe.jpg';
import Image5 from './images/fam.jpg';
import Image6 from './images/header.jpg';
import Image7 from './images/marma.jpg';
import Image8 from './images/menu1.webp';
import Image9 from './images/menu2.jpg';
import Image10 from './images/menu3.jpg';
import Image11 from './images/oat.jpg';
import Image12 from './images/parfait.jpg';
import Image13 from './images/penthouse.jpg';
import Image14 from './images/room.jpg';
import Image15 from './images/saraa.jpg';
import Image16 from './images/spa.jpg';
import Image17 from './images/staff.jpg';
import Image18 from './images/tea.jpg';
import Video from './images/video.mp4';
function App() {
  return (
    <div>
      <nav>
      <div class="nav__bar">
        <div class="nav__header">
          <div class="logo nav__logo">
            <div>H</div>
            <span>HOTEL<br />TAJ</span>
          </div>
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#room">Room</a></li>
          <li><a href="#feature">Features</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </div>
    </nav>

    <header class="header" id="home">
      <div class="section__container header__container">
        <p class="section__subheader">Taj Hotels</p>
        <h1>The Perfect<br />place for you</h1>
        <button class="btn">Take A Tour</button>
      </div>
    </header>

    <section class="booking">
      <div class="section__container booking__container">
        <form action="/">
          <div class="input__group">
            <label for="arrival">Arrival Date</label>
            <input type="text" placeholder="Your Arrival Date" />
          </div>
          <div class="input__group">
            <label for="departure">Departure Date</label>
            <input type="text" placeholder="Your Departure Date" />
          </div>
          <div class="input__group">
            <label for="guests">Guests</label>
            <input type="text" placeholder="No Of Guests" />
          </div>
          <button class="btn">Check Availability</button>
        </form>
      </div>
    </section>

    <section class="about" id="about">
      <div class="section__container about__container">
        <div class="about__grid">
          <div class="about__image">
            <img src={Image16} alt="about" />
          </div>
          <div class="about__card">
            <span><i class="ri-user-line"></i></span>
            <h4>Strong Team</h4>
            <p>
              Unlocking Hospitality Excellence And Ensures Your Perfect Stay
            </p>
          </div>
          <div class="about__image">
            <img src={Image14} alt="about" />
          </div>
          <div class="about__card">
            <span><i class="ri-calendar-check-line"></i></span>
            <h4>Luxury Room</h4>
            <p>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
          </div>
        </div>
        <div class="about__content">
          <p class="section__subheader">ABOUT US</p>
          <h2 class="section__header">Discover Our Underground</h2>
          <p class="section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button class="btn">Book Now</button>
        </div>
      </div>
    </section>

    <section class="room__container" id="room">
      <p class="section__subheader">ROOMS</p>
      <h2 class="section__header">Hand Picked Rooms</h2>
      <div class="room__grid">
        <div class="room__card">
          <img src={Image4} alt="room" />
          <div class="room__card__details">
            <div>
              <h4>Deluxe Suite</h4>
              <p>Well-appointed rooms designed for guests who desire a more.</p>
            </div>
            <h3>Rs. 33,499<span>/night</span></h3>
          </div>
        </div>
        <div class="room__card">
          <img src={Image5} alt="room" />
          <div class="room__card__details">
            <div>
              <h4>Family Suite</h4>
              <p>Consist of multiple rooms and a common living area.</p>
            </div>
            <h3>Rs. 55,599<span>/night</span></h3>
          </div>
        </div>
        <div class="room__card">
          <img src={Image13} alt="room" />
          <div class="room__card__details">
            <div>
              <h4>Luxury Penthouse</h4>
              <p>
                Top-tier accommodations usually on the highest floors of a
                hotel.
              </p>
            </div>
            <h3>Rs. 78,799<span>/night</span></h3>
          </div>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="section__container intro__container">
        <div class="intro__cotent">
          <p class="section__subheader">INTRO VIDEO</p>
          <h2 class="section__header">Meet With Our Luxury Place</h2>
          <p class="section__description">
            Whether you're seeking a cozy and exclusive hideaway or an immersive
            journey beneath the surface, Hotel Miranda promises to be an
            unforgettable stay, where the depths of comfort and excitement await
            your arrival.
          </p>
          <button class="btn">Book Now</button>
        </div>
        <div class="intro__video">
          <video src={Video} autoPlay={true} muted loop></video>
        </div>
      </div>
    </section>

    <section class="section__container feature__container" id="feature">
      <p class="section__subheader">FACILITIES</p>
      <h2 class="section__header">Core Features</h2>
      <div class="feature__grid">
        <div class="feature__card">
          <span><i class="ri-thumb-up-line"></i></span>
          <h4>Have High Rating</h4>
          <p>
            We take pride in curating a selection of hotels that consistently
            receive high ratings and positive reviews.
          </p>
        </div>
        <div class="feature__card">
          <span><i class="ri-time-line"></i></span>
          <h4>Quite Hours</h4>
          <p>
            We understand that peace and uninterrupted rest are essential for a
            rejuvenating experience.
          </p>
        </div>
        <div class="feature__card">
          <span><i class="ri-map-pin-line"></i></span>
          <h4>Best Location</h4>
          <p>
            At our hotel booking website, we take pride in offering
            accommodations in the most prime and sought-after locations.
          </p>
        </div>
        <div class="feature__card">
          <span><i class="ri-close-circle-line"></i></span>
          <h4>Free Cancellation</h4>
          <p>
            We understand that travel plans can change unexpectedly, which is
            why we offer the flexibility of free cancellation.
          </p>
        </div>
        <div class="feature__card">
          <span><i class="ri-wallet-line"></i></span>
          <h4>Payment Options</h4>
          <p>
            Our hotel booking website offers a range of convenient payment
            options to suit your preferences.
          </p>
        </div>
        <div class="feature__card">
          <span><i class="ri-coupon-line"></i></span>
          <h4>Special Offers</h4>
          <p>
            Whether you're planning a romantic getaway, or a business trip, our
            carefully curated special offers cater to all your needs.
          </p>
        </div>
      </div>
    </section>

    <section class="menu" id="menu">
      <div class="section__container menu__container">
        <div class="menu__header">
          <div>
            <p class="section__subheader">MENU</p>
            <h2 class="section__header">Our Food Menu</h2>
          </div>
          <div class="section__nav">
            <span><i class="ri-arrow-left-line"></i></span>
            <span><i class="ri-arrow-right-line"></i></span>
          </div>
        </div>
        <ul class="menu__items">
          <li>
            <img src={Image2} alt="menu" />
            <div class="menu__details">
              <h4>Fggs & Bacon</h4>
              <p>
                It is a culinary innovation that puts a unique spin on the
                beloved breakfast combination.
              </p>
            </div>
          </li>
          <li>
            <img src={Image17} alt="menu" />
            <div class="menu__details">
              <h4>Tea or Coffee</h4>
              <p>
                A classic choice for your daily dose of comfort and calmness.
              </p>
            </div>
          </li>
          <li>
            <img src={Image11} alt="menu" />
            <div class="menu__details">
              <h4>Chia Oatmeal</h4>
              <p>
                Our Chia Oatmeal is a wholesome nutrient-packed breakfast
                delight.
              </p>
            </div>
          </li>
          <li>
            <img src={Image12} alt="menu" />
            <div class="menu__details">
              <h4>Fruit Parfait</h4>
              <p>
                Our Fruit Parfait is a delightful culinary masterpiece of
                freshness and flavor.
              </p>
            </div>
          </li>
          <li>
            <img src={Image7} alt="menu" />
            <div class="menu__details">
              <h4>Marmalade Selection</h4>
              <p>
                Our Marmalade Selection is a delectable medley of vibrant,
                handcrafted citrus preserves.
              </p>
            </div>
          </li>
          <li>
            <img src={Image3} alt="menu" />
            <div class="menu__details">
              <h4>Cheese Plate</h4>
              <p>
                Our cheese plate is a masterpiece that celebrates rich and
                diverse world of cheeses.
              </p>
            </div>
          </li>
        </ul>
        <div class="menu__images">
          <img src={Image8} alt="menu" />
          <img src={Image9} alt="menu" />
          <img src={Image10} alt="menu" />
        </div>
        <ul class="menu__banner">
          <li>
            <span><i class="ri-file-text-line"></i></span>
            <h4>844k</h4>
            <p>people are happy</p>
          </li>
          <li>
            <span><i class="ri-user-line"></i></span>
            <h4>1 crore</h4>
            <p>Active Around World</p>
          </li>
          <li>
            <span><i class="ri-function-line"></i></span>
            <h4>02k</h4>
            <p>Categories Served</p>
          </li>
          <li>
            <span><i class="ri-lightbulb-flash-line"></i></span>
            <h4>10 crore</h4>
            <p>Ideas Raised Funds</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section__container news__container" id="news">
      <div class="news__header">
        <div>
          <p class="section__subheader">BLOG</p>
          <h2 class="section__header">News Feeds</h2>
        </div>
        <div class="section__nav">
          <span><i class="ri-arrow-left-line"></i></span>
          <span><i class="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div class="news__grid">
        <div class="news__card">
          <img src={Image1} alt="news" />
          <div class="news__card__title">
            <p>25th March 2022</p>
            <p>By Vinayak</p>
          </div>
          <h4>Exploring Local Culinary Gems: A Foodie's Guide.</h4>
          <p>
            vinayak as he takes you on a gastronomic adventure through the
            neighborhood surrounding our hotel.
          </p>
        </div>
        <div class="news__card">
          <img src={Image15} alt="news" />
          <div class="news__card__title">
            <p>15th June 2022</p>
            <p>By virat</p>
          </div>
          <h4>Balancing Mind, Body, and Soul at Our Hotel.</h4>
          <p>
            Discover holistic spa treatments, fitness facilities, and
            mindfulness practices that will leave you feeling refreshed.
          </p>
        </div>
        <div class="news__card">
          <img src={Image15} alt="news" />
          <div class="news__card__title">
            <p>08th August 2022</p>
            <p>By Saraa</p>
          </div>
          <h4>Exploring Outdoor Activities Near Our Hotel.</h4>
          <p>
            From hiking and biking trails to water sports and wildlife
            encounters, she highlights ways to experience nature's wonders.
          </p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="logo footer__logo">
            <div>H</div>
            <span>HOTEL<br />Taj</span>
          </div>
          <p class="section__description">
            Taj, India's Strongest Brand across industries and sectors*, is an iconic hospitality brand from the Indian Hotels Company Limited. 
            The brand continues to be one of the most revered and loved hospitality brands with a legacy of over 116 years of impeccable service 
            and genuine warmth. Embodying the spirit of “Tajness”, authentic original palaces, landmark hotels, idyllic resorts and natural safari lodges 
            interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Services</h4>
          <div class="footer__links">
            <li><a href="#">Online Booking</a></li>
            <li><a href="#">Room Customization</a></li>
            <li><a href="#">Virtual Tours</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Concierge Services</a></li>
            <li><a href="#">Customer Support</a></li>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <div class="footer__links">
            <li>
              <span><i class="ri-phone-fill"></i></span>
              <div>
                <h5>Phone Number</h5>
                <p>+91 9876543210</p>
              </div>
            </li>
            <li>
              <span><i class="ri-record-mail-line"></i></span>
              <div>
                <h5>Email</h5>
                <p>info@hoteltaj.com</p>
              </div>
            </li>
            <li>
              <span><i class="ri-map-pin-2-fill"></i></span>
              <div>
                <h5>Location</h5>
                <p>Mumbai</p>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 hotel Taj. All rights reserved.
      </div>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="songsjs.js"></script>
    </div>
  )
}

export default App