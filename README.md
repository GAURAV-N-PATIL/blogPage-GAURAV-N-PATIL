# blogPage-GAURAV-N-PATIL
---

# 🌐 Simple Blog Page – HTML, CSS & JavaScript

A stylish and responsive **Simple Blog Page** built using **HTML, CSS, and minimal JavaScript**.
The project focuses on clean layout design, semantic HTML, creative theming, and user experience — all without using any frameworks.

This project was created as part of **Web Development 1st Challenge**.

---

## ✨ Features

* 📌 Clean and structured blog layout
* 📰 Multiple blog posts with images and excerpts
* 📚 Sidebar with:

  * Search bar (UI only)
  * Categories
  * Recent posts
  * Author bio
* 🎨 **Multiple visual themes**:

  * Arcane (Hextech-inspired)
  * Cyberpunk (Neon futuristic)
* 🔁 **Theme switcher using JavaScript**
* 💾 Theme preference saved using `localStorage`
* 📱 Responsive layout using Flexbox
* 🎯 No frameworks, no libraries — pure HTML, CSS & JS

---

## 🎨 Theme System

This project supports **multiple themes** using separate CSS files:

* `style-Arcane.css`
* `style-cyberpunk.css`

JavaScript dynamically switches between these stylesheets, allowing users to preview and choose a theme without reloading or editing code.

---

## 🗂️ Project Structure

```
BlogPage-GauravPatil/
│
├── index.html
├── script.js
├── style-Arcane.css
├── style-cyberpunk.css
│
├── images/
│   ├── post1.jpg
│   ├── post2.jpg
│   ├── post3.jpg
│   |── (temporary HTML files for link redirection)
├
└── README.md
```

---

## 🛠️ Technologies Used

* **HTML5** – Page structure & semantics
* **CSS3** – Layout, styling, themes, responsiveness
* **JavaScript (Vanilla)** – Theme switching logic
* **Flexbox** – Responsive layout

---

## 🧠 How Theme Switching Works (Brief Explanation)

* A `<link>` tag in HTML loads the active CSS file
* JavaScript changes the `href` of that tag
* Selected theme name is stored in `localStorage`
* On page reload, the saved theme is restored automatically

This keeps the design modular and easy to extend.

---

## 📸 Screenshot

*screenshot of the final output*
![screen short for cyberpunk theme](<Screenshot 2026-02-08 014110.png>) ![screen short for arcane theme](<Screenshot 2026-02-08 014048.png>)
---

## 🚀 How to Run the Project

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Use the theme buttons to switch styles
4. Explore the layout and content

No setup or installation required.

---

## 🎯 Learning Outcomes

* Understanding semantic HTML structure
* Designing layouts with Flexbox
* Creating and managing multiple CSS themes
* Using JavaScript for DOM manipulation
* Improving UI/UX with minimal tools

---

## 👤 Author

**Gaurav Patil**
Aspiring Web Developer
Passionate about clean UI design and learning modern web technologies.

---

## 📜 License

This project is for **educational purposes**.
Feel free to explore, learn, and modify.

---