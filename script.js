window.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('checkboxes');
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
});

document.getElementById('btnOrcamento').addEventListener('click', () => {
  document.getElementById('comodosContainer').classList.remove('hidden');
  document.getElementById('dadosFinais').classList.remove('hidden');
  document.getElementById('btnOrcamento').classList.add('hidden');
});

document.querySelectorAll('.comodoToggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const id = toggle.getAttribute('data-comodo');
    const form = document.getElementById(id);
    form.classList.toggle('hidden');
  });
});

const itemEmojis = {
  geladeira: "🧊",
  fogao: "🍳",
  maquina: "🧼",
  microondas: "🍔",
  lavaLoucas: "🍽️",
  forno: "🔥",
  colchao: "🛏️",
  box: "🛏️",
  guardaRoupa: "👚",
  sofa: "🛋️",
  rack: "📺",
  estante: "🖼️"
};

document.getElementById('btnEnviarZap').addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  const carregar = document.getElementById('carregar').value.trim();
  const descarregar = document.getElementById('descarregar').value.trim();
  const data = document.getElementById('data').value;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const itens = Array.from(checkboxes).map(cb => cb.value);

  if (!nome || !carregar || !descarregar || !data || itens.length === 0) {
    alert('Por favor, preencha todos os campos e selecione ao menos um item.');
    return;
  }

  const mensagem = `🚚 ORÇAMENTO

👤 Nome: ${nome}
📍 Endereço de carregar: ${carregar}
📍 Endereço de descarregar: ${descarregar}
📅 Data do carreto: ${data}

📦 Itens selecionados:
${itens.join('\n')}`;

  const zap = `https://wa.me/5511995424085?text=${encodeURIComponent(mensagem)}`;
  window.open(zap, '_blank');

    // Aguarda 1 segundo e redireciona
  setTimeout(() => {
    window.location.href = "/obrigado.html";
  }, 1000);

});