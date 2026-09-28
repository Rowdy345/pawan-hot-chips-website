import React, { useState } from "react";
import "./Website.css";

const phoneNumber = "917388872088";

const products = [
  {
    name: "Hot Chips",
    category: "Chips",
    description: "Crispy hot chips packed with the bold, familiar flavors you came for.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A bowl of golden potato chips",
    label: "A little heat",
  },
  {
    name: "Namkeen Mix",
    category: "Namkeen",
    description: "A joyful mix of textures and savory spices for every kind of gathering.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A colorful assortment of savory Indian snacks",
    label: "The crowd-pleaser",
  },
  {
    name: "Masala Biscuits",
    category: "Biscuits",
    description: "Golden biscuits infused with traditional Indian masala. A delightful chai-time bite.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Freshly baked golden biscuits",
    label: "Made for chai",
  },
  {
    name: "Cheese & Spice",
    category: "Specials",
    description: "A moreish cheese-seasoned crunch with a little extra kick in every handful.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A delicious assortment of crunchy chips",
    label: "For the bold",
  },
];

const categories = ["All snacks", "Chips", "Namkeen", "Biscuits", "Specials"];

const locations = [
  {
    name: "Gomti Nagar",
    address: "L-48 Uday Tower, Kathautha Chauraha, Lucknow 226010",
    map: "https://maps.app.goo.gl/hTnaaL511fLTgtz56",
  },
  {
    name: "Jankipuram",
    address: "Jankipuram, Lucknow, Uttar Pradesh 226021",
    map: "https://maps.app.goo.gl/udSyV3hQyuWNZTJv5",
  },
];

function orderLink(message = "Hi! I'd like to know more about Pawan Hot Chips.") {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 16" fill="none">
      <path d="M1 8h17m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M16 8.3c0 4.4-6 9.2-6 9.2S4 12.7 4 8.3a6 6 0 1 1 12 0Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Website() {
  const [activeCategory, setActiveCategory] = useState("All snacks");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProducts = activeCategory === "All snacks"
    ? products
    : products.filter((product) => product.category === activeCategory);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span>Lucknow, come snack with us</span>
        <span className="announcement-dot" aria-hidden="true">✳</span>
        <a href="#locations">Two neighborhood shops <ArrowIcon diagonal /></a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Pawan Hot Chips home" onClick={closeMenu}>
          <span className="wordmark-stamp" aria-hidden="true">P</span>
          <span>pawan<span className="wordmark-light">hot chips</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#collection" onClick={closeMenu}>The good stuff</a>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#locations" onClick={closeMenu}>Find a shop</a>
          <a className="nav-order" href={orderLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Say hello on WhatsApp <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark">✳</span> Your Lucknow snack stop</p>
            <h1>Good days<br />start with<br /><em>a little crunch.</em></h1>
            <p className="hero-description">Big-hearted Indian snacks, full of flavor and made for sharing. Or not. We understand.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collection">Find your favorite <ArrowIcon /></a>
              <a className="text-link" href={orderLink()} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span> Spicing up Lucknow, one snack at a time.</div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1400&q=90" alt="A generous bowl of crisp, golden chips ready to share" />
            <div className="hero-image-caption"><span>THE SNACK<br />BREAK CLUB</span><span className="caption-spark">✳</span></div>
            <div className="hero-seal"><span>GOOD<br />MOOD<br />FOOD</span><span className="seal-star">✳</span></div>
          </div>
        </section>

        <div className="ticker" aria-label="Made for chai, made for sharing, made for one more handful">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => <span className="ticker-group" key={index}>MADE FOR CHAI <b>✳</b> MADE FOR SHARING <b>✳</b> MADE FOR ONE MORE HANDFUL <b>✳</b></span>)}
          </div>
        </div>

        <section className="collection section-wrap" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">A very good place to start</p><h2>The snack <em>line-up.</em></h2></div>
            <p className="section-aside">A little salty, a little spicy,<br />a lot hard to put down.</p>
          </div>
          <div className="collection-toolbar">
            <div className="category-tabs" role="group" aria-label="Filter snacks by category">
              {categories.map((category) => (
                <button className={activeCategory === category ? "category-tab is-active" : "category-tab"} type="button" key={category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
            <span className="product-count">{visibleProducts.length} good things</span>
          </div>
          <div className="product-grid" aria-live="polite">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product.name} style={{ "--card-index": index }}>
                <a className="product-image-link" href={orderLink(`Hi! I'd like to ask about ${product.name}.`)} target="_blank" rel="noreferrer" aria-label={`Ask about ${product.name} on WhatsApp`}>
                  <img className="product-image" src={product.image} alt={product.imageAlt} loading="lazy" />
                  <span className="product-image-arrow"><ArrowIcon diagonal /></span>
                  <span className="product-label">{product.label}</span>
                </a>
                <div className="product-details">
                  <div className="product-title-row"><h3>{product.name}</h3><span>{product.category}</span></div>
                  <p>{product.description}</p>
                  <a className="product-order" href={orderLink(`Hi! I'd like to ask about ${product.name}.`)} target="_blank" rel="noreferrer">Ask us about it <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="collection-footnote">Looking for a particular flavor? Ask us what’s in store today.</p>
        </section>

        <section className="story" id="story">
          <div className="story-image-wrap">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85" alt="An inviting spread of Indian snacks and savory treats" loading="lazy" />
            <span className="story-image-tag">A GOOD THING<br />SHARED IS BETTER</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">A little about us</p>
            <h2>Lucknow tastes<br />better <em>together.</em></h2>
            <p>We’re Pawan Hot Chips: your neighborhood stop for the familiar, the flavorful, and the “just one more handful” kind of good.</p>
            <p>From a quick chai-time bite to snacks for the whole get-together, there’s always something worth passing around.</p>
            <a className="text-link" href="#locations">Come by and say hello <ArrowIcon /></a>
          </div>
        </section>

        <section className="values section-wrap" aria-label="What makes Pawan Hot Chips special">
          <div className="value-item"><span className="value-mark">01</span><h3>Full of flavor</h3><p>Familiar favorites with plenty of personality.</p></div>
          <div className="value-item"><span className="value-mark">02</span><h3>Made to share</h3><p>Good snacks make good company even better.</p></div>
          <div className="value-item"><span className="value-mark">03</span><h3>Right around here</h3><p>Two friendly neighborhood stops in Lucknow.</p></div>
        </section>

        <section className="locations" id="locations">
          <div className="location-heading">
            <p className="eyebrow">Not far from your next snack</p>
            <h2>Find your <em>nearest Pawan.</em></h2>
            <p>Drop in, take your time, leave with something crunchy.</p>
          </div>
          <div className="location-list">
            {locations.map((location, index) => (
              <article className="location-card" key={location.name}>
                <span className="location-number">0{index + 1}</span><PinIcon />
                <div className="location-info"><h3>{location.name}</h3><p>{location.address}</p></div>
                <a className="location-link" href={location.map} target="_blank" rel="noreferrer" aria-label={`Get directions to ${location.name}`}>Get directions <ArrowIcon diagonal /></a>
              </article>
            ))}
          </div>
          <div className="hours-line"><span className="open-dot" /> Every day, 9 AM–10 PM <span className="hours-divider">·</span> <a href="tel:+917388872088">+91 73888 72088</a></div>
        </section>

        <section className="final-cta">
          <span className="cta-spark" aria-hidden="true">✳</span>
          <p className="eyebrow">Your next snack is a message away</p>
          <h2>Shall we get<br /><em>the good stuff?</em></h2>
          <a className="button button-light" href={orderLink()} target="_blank" rel="noreferrer">Chat with us on WhatsApp <ArrowIcon /></a>
          <span className="cta-side-note">We’ll help you find<br />your new favorite.</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-stamp" aria-hidden="true">P</span><span>pawan<span className="wordmark-light">hot chips</span></span></a>
          <p>Big-hearted snacks.<br />Right here in Lucknow.</p>
          <div className="footer-links"><span>SHOP</span><a href="#collection">The good stuff</a><a href="#story">Our story</a><a href="#locations">Find a shop</a></div>
          <div className="footer-documents"><span>STORE INFO</span><a href="/documents.html#privacy">Privacy</a><a href="/documents.html#ordering">Ordering</a><a href="/documents.html#terms">Terms</a><a href="/documents.html#returns">Returns</a></div>
          <div className="footer-contact"><span>COME SAY HELLO</span><a href="tel:+917388872088">+91 73888 72088</a><a href="mailto:pawanhotchips@gmail.com">pawanhotchips@gmail.com</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pawan Hot Chips</span><span>Made for good days and great snacks. <span className="footer-star">✳</span></span><a href="https://instagram.com/pawanhotchips" target="_blank" rel="noreferrer">Instagram <ArrowIcon diagonal /></a></div>
      </footer>
    </>
  );
}