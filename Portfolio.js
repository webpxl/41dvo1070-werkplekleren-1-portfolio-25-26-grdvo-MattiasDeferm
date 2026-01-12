// set footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // set circular progress backgrounds from data-percent attributes
    document.querySelectorAll('.circle').forEach(c=>{
    const p = parseInt(c.getAttribute('data-percent') || '0',10);
    const deg = Math.round(p * 3.6);
    c.style.background = `conic-gradient(var(--teal) 0deg ${deg}deg, rgba(11,102,115,0.08) ${deg}deg 360deg)`;
});