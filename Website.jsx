import React from "react";

export default function Website() {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f5f5f5"
    },
    header: {
      background: "linear-gradient(135deg, #d32f2f 0%, #ff6f00 100%)",
      color: "white",
      padding: "60px 20px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    },
    headerTitle: {
      margin: 0,
      fontSize: "48px",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
    },
    headerSubtitle: {
      margin: "10px 0 0 0",
      fontSize: "24px",
      fontWeight: "300",
      opacity: 0.9
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px"
    },
    section: {
      marginBottom: "50px"
    },
    sectionTitle: {
      fontSize: "32px",
      color: "#d32f2f",
      marginBottom: "30px",
      textAlign: "center",
      borderBottom: "3px solid #ff6f00",
      paddingBottom: "15px"
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      marginBottom: "30px"
    },
    productCard: {
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, boxShadow 0.3s",
      cursor: "pointer"
    },
    productImage: {
      width: "100%",
      height: "200px",
      background: "linear-gradient(135deg, #ff9800 0%, #ffc107 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "60px"
    },
    productInfo: {
      padding: "20px"
    },
    productName: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#333",
      margin: "0 0 10px 0"
    },
    productDescription: {
      color: "#666",
      fontSize: "14px",
      margin: "0 0 15px 0",
      lineHeight: "1.5"
    },
    aboutSection: {
      background: "white",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    },
    aboutText: {
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#555",
      marginBottom: "20px"
    },
    ctaButton: {
      display: "inline-block",
      background: "linear-gradient(135deg, #d32f2f 0%, #ff6f00 100%)",
      color: "white",
      padding: "16px 40px",
      fontSize: "18px",
      fontWeight: "bold",
      textDecoration: "none",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(211, 47, 47, 0.4)",
      transition: "transform 0.3s, boxShadow 0.3s",
      textAlign: "center"
    },
    footer: {
      background: "#333",
      color: "white",
      textAlign: "center",
      padding: "40px 20px",
      marginTop: "60px"
    },
    footerText: {
      margin: "10px 0"
    }
  };

  const products = [
    {
      name: "Hot Chips",
      emoji: "🌶️",
      description: "Crispy, spicy hot chips loaded with authentic flavors"
    },
    {
      name: "Namkeen Mix",
      emoji: "🥨",
      description: "Perfect blend of roasted namkeen with a savory punch"
    },
    {
      name: "Masala Biscuits",
      emoji: "🍪",
      description: "Golden biscuits infused with traditional Indian masala"
    },
    {
      name: "Cheese & Spice",
      emoji: "🧀",
      description: "Crunchy snack with a delightful cheese and spice combo"
    }
  ];

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🔥 PAWAN HOT CHIPS</h1>
        <p style={styles.headerSubtitle}>Premium Namkeen & Biscuits</p>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        {/* About Section */}
        <section style={{ ...styles.section, ...styles.aboutSection }}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.aboutText}>
            Welcome to Pawan Hot Chips – your go-to destination for authentic, delicious, and flavorful snacks! 
            We specialize in crafting premium namkeen and biscuits that bring together traditional recipes 
            with modern taste preferences.
          </p>
          <p style={styles.aboutText}>
            Every product is carefully prepared with the finest ingredients to ensure maximum crunchiness, 
            flavor, and satisfaction. Whether you're looking for a quick snack or want to impress your guests, 
            Pawan Hot Chips has got you covered!
          </p>
        </section>

        {/* Products Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <div style={styles.productGrid}>
            {products.map((product, index) => (
              <div key={index} style={styles.productCard}>
                <div style={styles.productImage}>{product.emoji}</div>
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productDescription}>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <div style={styles.productGrid}>
            <div style={{textAlign: "center", padding: "20px"}}>
              <div style={{fontSize: "40px", marginBottom: "10px"}}>✨</div>
              <h3>Premium Quality</h3>
              <p>Only the finest ingredients go into every batch</p>
            </div>
            <div style={{textAlign: "center", padding: "20px"}}>
              <div style={{fontSize: "40px", marginBottom: "10px"}}>🎯</div>
              <h3>Authentic Taste</h3>
              <p>Traditional recipes with a modern twist</p>
            </div>
            <div style={{textAlign: "center", padding: "20px"}}>
              <div style={{fontSize: "40px", marginBottom: "10px"}}>🚚</div>
              <h3>Fresh Delivery</h3>
              <p>Guaranteed fresh products delivered to your doorstep</p>
            </div>
            <div style={{textAlign: "center", padding: "20px"}}>
              <div style={{fontSize: "40px", marginBottom: "10px"}}>💯</div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our top priority</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{...styles.section, textAlign: "center", padding: "40px", background: "white", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}>
          <h2 style={{fontSize: "32px", color: "#333", marginBottom: "20px"}}>Ready to Order?</h2>
          <p style={{fontSize: "18px", color: "#666", marginBottom: "30px"}}>
            Contact us on WhatsApp to place your order and enjoy exclusive deals!
          </p>
          <a 
            href="https://wa.me/917060830393" 
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 16px rgba(211, 47, 47, 0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(211, 47, 47, 0.4)";
            }}
          >
            📱 Order on WhatsApp
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Pawan Hot Chips. All rights reserved.</p>
        <p style={styles.footerText}>🌶️ Premium Namkeen & Biscuits 🌶️</p>
        <p style={styles.footerText}>Contact: <a href="https://wa.me/917060830393" style={{color: "#ff6f00", textDecoration: "none"}}>+91 7060830393</a></p>
      </footer>
    </div>
  );
}
