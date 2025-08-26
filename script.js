document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Simple typewriter effect
  const el = document.querySelector(".typewrite");
  if (el) {
    const words = JSON.parse(el.getAttribute("data-words") || "[]");
    let i=0, j=0, del=false;
    function type() {
      const word = words[i % words.length];
      el.textContent = word.substring(0,j);
      if (!del && j++ === word.length) { del=true; setTimeout(type,1000); return; }
      if (del && j-- === 0) { del=false; i++; }
      setTimeout(type, del?50:100);
    }
    type();
  }
});
