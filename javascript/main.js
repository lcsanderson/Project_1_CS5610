//-----------CLAUDE CODE------------------------
// generate star field
const glyphs = ['+', '*', 'º', '†', '˙', '˚', '·', '×'];
const colors = ['#ff0000', '#c00000', '#800404', '#ff4444', '#de0000'];
const field  = document.getElementById('star-field');

for (let i = 0; i < 65; i++) {
  const el       = document.createElement('span');
  el.className   = 'star';
  el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

  const size  = 8 + Math.random() * 20;
  const dur   = (2.5 + Math.random() * 5).toFixed(2) + 's';
  const delay = (Math.random() * 7).toFixed(2) + 's';
  const color = colors[Math.floor(Math.random() * colors.length)];

  el.style.cssText = `
    left: ${Math.random() * 100}%;
    top:  ${Math.random() * 100}%;
    font-size: ${size}px;
    color: ${color};
    --dur:   ${dur};
    --delay: -${delay};
  `;
  field.appendChild(el);
}

// cursor
const cursor = document.getElementById('star-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.opacity = '1';
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top  = `${e.clientY}px`;
});
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

//-----------CLAUDE CODE END------------------------

// Add a fade-out effect when the "step inside" button is clicked
document.querySelector("a.text-button").addEventListener("click", (e) => {
  e.preventDefault();
  const destination = e.currentTarget.href;
  document.body.style.transition = "opacity 0.5s ease-in-out";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = destination;
  }, 500);
});