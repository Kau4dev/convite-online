document.addEventListener("DOMContentLoaded", () => {
  const envelopeTrigger = document.getElementById("envelope-trigger");
  const introOverlay = document.getElementById("intro-overlay");
  const mainContent = document.getElementById("main-content");

  // Garante que o site começa no topo ao recarregar
  window.scrollTo(0, 0);

  envelopeTrigger.addEventListener("click", () => {
    // 1. Inicia a animação do envelope (Aba abre, selo some, carta sobe)
    // As transições estão definidas no CSS com delays
    envelopeTrigger.classList.add("is-open");

    // Esconde a dica de "Toque para abrir"
    document.querySelector(".click-hint").style.display = "none";

    // 2. Tempo total da animação do envelope antes de sumir com o overlay
    // (0.6s aba + espera + 0.8s carta subindo = aprox 1.5s)
    setTimeout(() => {
      introOverlay.classList.add("intro-fade-out");

      // 3. Quando o overlay terminar de sumir, mostra o conteúdo e libera o scroll
      setTimeout(() => {
        introOverlay.style.display = "none";
        mainContent.classList.remove("hidden");
        // Uma pequena animação de scroll suave para o início do convite
        mainContent.scrollIntoView({ behavior: "smooth" });
      }, 800); // Tempo da transição de opacidade do overlay
    }, 1600); // Tempo de espera para ver a cartinha saindo do envelope
  });
});
