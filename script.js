const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

searchBtn?.addEventListener("click", () => {
  searchOverlay.classList.add("open");
  setTimeout(() => searchInput.focus(), 50);
});
closeSearch?.addEventListener("click", () => searchOverlay.classList.remove("open"));
searchOverlay?.addEventListener("click", e => {
  if (e.target === searchOverlay) searchOverlay.classList.remove("open");
});

const items = [
  ["Math 1", "Subject", "Calculus & Functions"],
  ["Math 2", "Subject", "Linear Algebra"],
  ["Data Communication", "Subject", "Networks & Protocols"],
  ["Programming", "Subject", "C / Python Basics"],
  ["Linux", "Subject", "Commands & Shell"],
  ["Cyber Security", "Subject", "Security Fundamentals"],
  ["Networking Labs", "Practical Lab", "Hands-on networking exercises"],
  ["Linux Labs", "Practical Lab", "Linux command-line practice"],
  ["Programming Labs", "Practical Lab", "Programming exercises"],
  ["Lecture Notes", "Resource", "Organized course material"],
  ["PDF Library", "Resource", "Course PDFs and references"],
  ["Questions & Exams", "Resource", "Practice and previous exams"]
];

searchInput?.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ""; return; }
  const matches = items.filter(x => x.join(" ").toLowerCase().includes(q)).slice(0, 8);
  searchResults.innerHTML = matches.length
    ? matches.map(x => `<div class="search-result"><b>${x[0]}</b> · ${x[1]}<br><small>${x[2]}</small></div>`).join("")
    : `<p style="color:#7f8d9e">No results found.</p>`;
});

document.getElementById("allSubjectsBtn")?.addEventListener("click", () => {
  document.getElementById("subjects").scrollIntoView({behavior:"smooth"});
});
