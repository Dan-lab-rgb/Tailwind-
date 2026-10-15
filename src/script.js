
let members = [];

function photoBlock(member, sizeClasses = "h-20 w-20", extra = "") {
  return `
    <div class="relative ${sizeClasses} ${extra} shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${member.style.fallback} ring-4 ${member.style.ring}">
      <div class="absolute inset-0 grid place-items-center text-3xl font-black text-white/90">${member.themeIcon}</div>
      <img
        src="${new URL(member.photo, document.baseURI).href}"
        alt="Foto ou avatar de ${member.name}"
        class="absolute inset-0 h-full w-full object-cover"
        
      />
    </div>
  `;
}

function miniTags(member, classes = "") {
  return member.icons.map(icon => `
    <span class="grid h-9 min-w-9 place-items-center rounded-xl border border-white/10 bg-white/5 px-2 text-base ${classes}">${icon}</span>
  `).join("");
}

function openButton() { return ""; }


const decorAssets = {
  daniel: "./recursos/decorações/pokeball.png",
  thavine: "./recursos/decorações/hello-kitty.png",
  guilherme: "./recursos/decorações/trumpet.png",
  matheus: "./recursos/decorações/creeper.png",
  lucas: "./recursos/decorações/f1-car.png",
  diogo: "./recursos/decorações/uncharted4.png"
};

function decorImage(slug, classes, alt = "") {
  const src = decorAssets[slug];
  if (!src) return "";
  return `<img src="${src}" alt="${alt}" aria-hidden="${alt ? "false" : "true"}" class="decor-sticker ${classes}" />`;
}

function danielCard(m) {
  return `
    <article data-reveal class="member-card pokedex-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      ${decorImage("daniel", "absolute -right-4 -top-4 w-24 rotate-12 rounded-full bg-white/90 p-1 opacity-[.35] shadow-xl transition duration-500 group-hover:rotate-6 group-hover:opacity-[.55]")}
      <div class="absolute left-4 top-4 h-4 w-4 rounded-full border-2 border-white/50 bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,.8)]"></div>
      <div class="relative rounded-2xl border border-white/10 bg-slate-100 p-4 text-slate-950 shadow-xl">
        <div class="flex items-center justify-between gap-3 border-b border-slate-300 pb-3">
          <div class="flex items-center gap-3">
            <span class="pokeball-dot"></span>
            <div>
              <p class="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">Nº 001 · Tipo DEV</p>
              <h3 class="text-lg font-black tracking-tight">DANIEL RODRIGUES</h3>
            </div>
          </div>
          <span class="text-xl">⚡</span>
        </div>

        <div class="mt-4 grid place-items-center rounded-2xl border border-slate-300 bg-emerald-100 p-3">
          ${photoBlock(m, "h-28 w-28", "ring-slate-900/10")}
        </div>

        <div class="mt-4 flex flex-wrap gap-2 font-mono text-[10px] font-black uppercase">
          <span class="rounded-lg bg-emerald-500 px-2 py-1 text-white">Jogos</span>
          <span class="rounded-lg bg-amber-400 px-2 py-1 text-slate-950">Guitarra</span>
          <span class="rounded-lg bg-sky-500 px-2 py-1 text-white">PC</span>
        </div>

        <p class="mt-4 font-mono text-xs leading-5 text-slate-700">“${m.motto}”</p>
        <div class="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px] text-slate-700">
          <p><strong>🎮 Atual:</strong> ${m.media}</p>
          <p><strong>💻 Tech:</strong> ${m.tech}</p>
        </div>
      </div>
      <div class="mt-3 flex justify-center gap-2"><span class="h-3 w-3 rounded-full bg-sky-300"></span><span class="h-3 w-3 rounded-full bg-amber-300"></span><span class="h-3 w-3 rounded-full bg-emerald-300"></span></div>
      ${openButton(m, "Consultar Pokédex")}
    </article>`;
}

function thavineCard(m) {
  return `
    <article data-reveal class="member-card kitty-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      ${decorImage("thavine", "absolute -bottom-4 -right-5 w-32 rotate-3 rounded-[2rem] bg-white/90 p-1 opacity-30 shadow-xl transition duration-500 group-hover:-rotate-2 group-hover:opacity-[.45]")}
      <span class="absolute left-5 top-4 text-2xl text-white/70">♡</span><span class="absolute right-6 top-5 text-3xl">🎀</span><span class="absolute left-8 bottom-20 text-xl text-white/70">✦</span>
      <div class="absolute left-3 top-20 h-10 w-10 rounded-full border-2 border-dashed border-white/30"></div>
      <div class="relative text-center">
        <div class="mx-auto w-max rounded-full border border-pink-200 bg-white/70 p-2 shadow-xl">
          ${photoBlock(m, "h-28 w-28", "rounded-full ring-pink-200")}
        </div>
        <span class="mt-4 inline-flex rounded-full border border-pink-100/50 bg-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">cute mode · dança</span>
        <h3 class="mt-3 text-2xl font-black text-white">${m.name}</h3>
        <p class="mt-2 text-sm leading-6 text-pink-50/90">“${m.motto}”</p>

        <div class="mt-5 rounded-2xl border border-white/25 bg-white/15 p-4 text-left backdrop-blur">
          <p class="text-xs font-black uppercase tracking-widest text-white">favoritos do momento</p>
          <p class="mt-2 text-sm text-white">🩰 ${m.hobby}</p>
          <p class="mt-2 text-sm text-white">🎬 ${m.media}</p>
        </div>
        <div class="mt-4 flex justify-center gap-2">${miniTags(m, "bg-white/15")}</div>
        ${openButton(m, "Ver perfil ♡")}
      </div>
    </article>`;
}

function guilhermeCard(m) {
  return `
    <article data-reveal class="member-card trumpet-card music-lines group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      ${decorImage("guilherme", "absolute -bottom-8 -right-8 w-52 rotate-[-13deg] rounded-3xl opacity-20 mix-blend-screen transition duration-500 group-hover:scale-105 group-hover:opacity-30")}
      <span class="absolute right-5 top-4 text-amber-200/30 text-4xl">♫</span>
      <span class="absolute left-5 bottom-24 text-amber-200/20 text-3xl">♪</span>
      <div class="relative">
        <div class="flex items-center gap-4">
          <div class="relative shrink-0">
            ${photoBlock(m, "h-20 w-20", "rounded-full ring-amber-200/40")}
            <span class="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border border-amber-200 bg-emerald-950 text-lg shadow-lg">🎺</span>
          </div>
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-amber-200">trompete · futebol</p>
            <h3 class="mt-1 text-2xl font-black text-white">${m.name}</h3>
            <p class="mt-1 text-sm font-semibold text-emerald-100">⚽ Futebol · 🎺 Trompetista</p>
          </div>
        </div>

        <div class="mt-6 border-l-4 border-amber-300 pl-4">
          <p class="text-xl font-black text-white">“${m.motto}”</p>
          <p class="mt-2 text-sm text-emerald-100/80">${m.fact}</p>
        </div>

        <div class="mt-6 grid gap-2 text-sm text-white">
          <p>🎮 <span class="text-emerald-100/70">Do momento</span> · ${m.media}</p>
          <p>🎵 <span class="text-emerald-100/70">Música</span> · ${m.music}</p>
          <p>🍽️ <span class="text-emerald-100/70">Comida</span> · ${m.food}</p>
        </div>
        ${openButton(m, "Abrir backstage")}
      </div>
    </article>`;
}

function matheusCard(m) {
  return `
    <article data-reveal class="member-card minecraft-card pixel-grid group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      ${decorImage("matheus", "absolute right-4 top-4 w-20 rounded-xl border-4 border-black/20 opacity-30 image-pixelated transition duration-500 group-hover:scale-110 group-hover:opacity-[.45]")}
      <div class="absolute -bottom-5 -left-5 h-20 w-20 rotate-12 bg-emerald-500/15 shadow-[inset_0_0_0_8px_rgba(20,83,45,.18)]"></div>
      <div class="relative font-mono">
        <div class="flex items-center gap-3">
          ${photoBlock(m, "h-20 w-20", "rounded-none ring-emerald-300/30")}
          <div class="min-w-0">
            <h3 class="text-xl font-black uppercase text-white">${m.name}</h3>
            <p class="mt-1 text-xs text-emerald-100">♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</p>
          </div>
        </div>

        <div class="mt-5 rounded-xl border border-emerald-300/20 bg-slate-950/70 p-4 text-sm text-emerald-50">
          <p>&lt;Matheus&gt; ${m.motto}</p>
        </div>

        <div class="mt-4 border-l-4 border-emerald-300 bg-slate-950/50 p-4">
          <p class="text-xs font-black uppercase tracking-widest text-amber-200">🏆 Conquista desbloqueada</p>
          <p class="mt-2 text-sm text-white">Jogar e assistir animes.</p>
        </div>

        <p class="mt-5 text-xs font-black uppercase tracking-widest text-emerald-100">Inventário</p>
        <div class="mt-2 flex gap-2">
          ${m.icons.map(icon => `<span class="inventory-slot grid h-12 w-12 place-items-center border border-white/20 bg-slate-100/10 text-xl">${icon}</span>`).join("")}
          <span class="inventory-slot grid h-12 w-12 place-items-center border border-white/20 bg-slate-100/10 text-xl">⛏️</span>
        </div>
        ${openButton(m, "Abrir inventário")}
      </div>
    </article>`;
}

function ruanCard(m) {
  return `
    <article data-reveal class="member-card space-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div class="space-orbit absolute right-5 top-5"></div>
      <span class="absolute right-8 top-10 text-2xl opacity-60">🛰️</span>
      <span class="absolute left-6 bottom-24 text-2xl opacity-40">✦</span>
      <div class="absolute right-10 bottom-16 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300/20 to-violet-500/20 blur-sm"></div>
      <div class="relative">
        <div class="flex items-center gap-4">
          <div class="relative shrink-0">
            ${photoBlock(m, "h-20 w-20", "rounded-full ring-orange-300/40")}
            <span class="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border border-orange-300 bg-indigo-950 text-lg shadow-lg">🪐</span>
          </div>
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-orange-200">interestelar · .NET</p>
            <h3 class="mt-1 text-2xl font-black text-white">${m.name}</h3>
            <p class="mt-1 text-sm italic text-cyan-100">“${m.motto}”</p>
          </div>
        </div>

        <div class="mt-7">
          <div class="flex items-center justify-between text-xs font-black uppercase tracking-widest text-orange-200"><span>Nível de curiosidade</span><span>9.001+</span></div>
          <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div class="h-full w-full bg-gradient-to-r from-orange-300 to-amber-300"></div></div>
        </div>

        <div class="mt-6 grid gap-2 text-sm text-slate-100">
          <p>🎬 <span class="text-slate-400">Do momento</span> · ${m.media}</p>
          <p>💻 <span class="text-slate-400">Tecnologia</span> · ${m.tech}</p>
          <p>🐾 <span class="text-slate-400">Curiosidade</span> · ${m.fact}</p>
        </div>
        ${openButton(m, "Abrir painel")}
      </div>
    </article>`;
}

function luizCard(m) {
  return `
    <article data-reveal class="member-card medieval-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div class="medieval-corner absolute left-4 top-4">♜</div><div class="medieval-corner absolute right-4 top-4">♜</div>
      <div class="absolute -bottom-10 -right-6 text-[9rem] leading-none text-amber-300/[0.05]">♛</div>
      <div class="absolute left-5 bottom-5 text-3xl text-amber-200/15">⚔</div>
      <div class="relative text-center">
        <div class="relative mx-auto w-max">
          ${photoBlock(m, "h-24 w-24", "rounded-full ring-amber-300/30")}
          <span class="absolute -bottom-1 -right-1 grid h-9 w-9 place-items-center rounded-full border border-amber-300/30 bg-stone-950 text-xl shadow-lg">♛</span>
        </div>
        <p class="mt-4 text-xs font-black uppercase tracking-widest text-amber-200">Casa Augusto · competitivo</p>
        <h3 class="mt-2 text-2xl font-black text-white">${m.name}</h3>
        <p class="mt-3 text-sm italic leading-6 text-amber-50/80">“${m.motto}”</p>

        <div class="mt-6 border-y border-amber-300/20 py-4 text-left">
          <p class="text-sm text-white">⚔️ <strong>Entretenimento:</strong> ${m.media}</p>
          <p class="mt-2 text-sm text-white">🎵 <strong>Trilha:</strong> ${m.music}</p>
          <p class="mt-2 text-sm text-white">💻 <strong>Arsenal tech:</strong> ${m.tech}</p>
        </div>
        ${openButton(m, "Abrir pergaminho")}
      </div>
    </article>`;
}

function lucasCard(m) {
  return `
    <article data-reveal class="member-card racing-card checkered-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      ${decorImage("lucas", "absolute -bottom-5 -right-8 w-52 rotate-[-5deg] rounded-2xl opacity-[.18] mix-blend-screen transition duration-500 group-hover:-translate-x-2 group-hover:opacity-30")}
      <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-white to-sky-400"></div>
      <div class="relative">
        <div class="flex items-start justify-between gap-4">
          <div class="relative shrink-0">
            ${photoBlock(m, "h-20 w-20", "rounded-2xl ring-red-300/30")}
            <span class="absolute -bottom-1 -right-1 rounded-lg border border-white/20 bg-slate-950 px-2 py-1 text-[10px] font-black uppercase text-white shadow-lg">F1</span>
          </div>
          <span class="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-200">🏎️ race weekend</span>
        </div>
        <h3 class="mt-6 text-3xl font-black italic tracking-tight text-white">${m.name}</h3>
        <p class="mt-2 text-sm font-semibold text-sky-100">“${m.motto}”</p>

        <div class="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4 backdrop-blur-sm">
          <p class="text-xs font-black uppercase tracking-widest text-red-200">Telemetria pessoal</p>
          <div class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-100">
            <p>🏁 ${m.hobby}</p><p>🎬 ${m.media}</p><p>🍕 ${m.food}</p><p>🍳 ${m.fact}</p>
          </div>
        </div>
        ${openButton(m, "Abrir box")}
      </div>
    </article>`;
}

function diogoCard(m) {
  return `
    <article data-reveal class="member-card explorer-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div class="route-line absolute inset-0 opacity-30"></div>
      ${decorImage("diogo", "absolute -bottom-1 right-3 w-44 rounded-xl opacity-[.18] mix-blend-screen transition duration-500 group-hover:opacity-[.28]")}
      <div class="relative">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            ${photoBlock(m, "h-16 w-16", "rounded-2xl ring-sky-300/30")}
            <div>
              <p class="text-xs font-black uppercase tracking-widest text-amber-200">expedição · hardware</p>
              <h3 class="mt-1 text-2xl font-black text-white">${m.name}</h3>
            </div>
          </div>
          <div class="grid h-14 w-14 place-items-center rounded-full border border-amber-300/30 bg-slate-950/40 text-2xl">🧭</div>
        </div>
        <p class="mt-5 border-l-4 border-sky-300 pl-4 text-sm italic leading-6 text-slate-100">“${m.motto}”</p>

        <div class="mt-6 grid gap-3">
          <div class="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><span class="text-xs font-black uppercase tracking-widest text-sky-200">Missão atual</span><p class="mt-2 text-sm text-white">🎮 ${m.media}</p></div>
          <div class="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><span class="text-xs font-black uppercase tracking-widest text-amber-200">Equipamento</span><p class="mt-2 text-sm text-white">🖥️ ${m.fact}</p></div>
        </div>
        ${openButton(m, "Abrir diário de bordo")}
      </div>
    </article>`;
}

function lorenaCard(m) {
  return `
    <article data-reveal class="member-card code-card group relative overflow-hidden rounded-3xl border p-5 opacity-0 translate-y-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <span class="absolute right-5 top-14 text-6xl font-black text-fuchsia-300/[0.06]">&lt;/&gt;</span>
      <span class="absolute right-6 bottom-20 text-4xl opacity-20">🎧</span>
      <div class="relative">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            ${photoBlock(m, "h-14 w-14", "rounded-2xl ring-fuchsia-300/30")}
            <div class="flex gap-2"><span class="h-3 w-3 rounded-full bg-rose-400"></span><span class="h-3 w-3 rounded-full bg-amber-300"></span><span class="h-3 w-3 rounded-full bg-emerald-300"></span></div>
          </div>
          <span class="font-mono text-xs text-fuchsia-200">profile.js</span>
        </div>
        <div class="mt-5 font-mono">
          <p class="text-xs text-slate-500">const integrante = {</p>
          <h3 class="mt-2 text-2xl font-black text-white"><span class="text-fuchsia-300">name:</span> "${m.name}",</h3>
          <p class="mt-2 text-sm text-cyan-200"><span class="text-fuchsia-300">motto:</span> "${m.motto}",</p>
          <p class="mt-2 text-sm text-emerald-200"><span class="text-fuchsia-300">hobby:</span> "${m.hobby}",</p>
          <p class="mt-2 text-sm text-amber-200"><span class="text-fuchsia-300">sound:</span> "${m.music}",</p>
          <p class="mt-2 text-xs text-slate-500">};</p>
        </div>

        <div class="mt-6 flex items-end gap-1 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/10 p-4" aria-hidden="true">
          <span class="equalizer-bar h-5"></span><span class="equalizer-bar h-9"></span><span class="equalizer-bar h-4"></span><span class="equalizer-bar h-12"></span><span class="equalizer-bar h-7"></span><span class="equalizer-bar h-10"></span><span class="ml-3 text-xs font-black uppercase tracking-widest text-fuchsia-100">rock + código</span>
        </div>
        ${openButton(m, "Executar perfil")}
      </div>
    </article>`;
}

const cardRenderers = {
  daniel: danielCard,
  thavine: thavineCard,
  guilherme: guilhermeCard,
  matheus: matheusCard,
  ruan: ruanCard,
  luiz: luizCard,
  lucas: lucasCard,
  diogo: diogoCard,
  lorena: lorenaCard
};

const teamGrid = document.querySelector("#teamGrid");

function renderTeam() {
  teamGrid.innerHTML = members.map(member => cardRenderers[member.slug](member)).join("");
  observeRevealElements();
}

const recommendationsGrid = document.querySelector("#recommendationsGrid");
const filterButtons = document.querySelectorAll(".filter-button");

const recommendationMeta = {
  media: { icon: "🎬", label: "Do momento", field: "media" },
  music: { icon: "🎧", label: "Música", field: "music" },
  tech: { icon: "💻", label: "Tecnologia", field: "tech" }
};

function renderRecommendations(type = "media") {
  const meta = recommendationMeta[type];
  const visibleMembers = members.filter(member => type !== "tech" || member.tech !== "Não informado");

  recommendationsGrid.innerHTML = visibleMembers.map(member => `
    <article class="group rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div class="flex items-start gap-4">
        ${photoBlock(member, "h-14 w-14")}
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between gap-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${meta.icon} ${meta.label}</span>
            <span class="text-lg opacity-70">${member.themeIcon}</span>
          </div>
          <p class="mt-2 font-bold leading-6 text-white">${member[meta.field]}</p>
          <p class="mt-2 text-xs text-slate-500">Indicado por <span class="font-semibold ${member.style.accent}">${member.name}</span></p>
        </div>
      </div>
    </article>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => {
      item.className = "filter-button rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white";
    });
    button.className = "filter-button rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition";
    renderRecommendations(button.dataset.filter);
  });
});


const mobileMenuButton = document.querySelector("#mobileMenuButton");
const mobileMenu = document.querySelector("#mobileMenu");

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenuButton.textContent = "☰";
}

mobileMenuButton.addEventListener("click", () => {
  const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMobileMenu();
  else {
    mobileMenu.classList.remove("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.textContent = "×";
  }
});

document.querySelectorAll(".mobile-link").forEach(link => link.addEventListener("click", closeMobileMenu));


let revealObserver;

function observeRevealElements() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  document.querySelectorAll("[data-reveal]").forEach(element => revealObserver.observe(element));
}


fetch("./data/integrantes.json").then(response => response.json()).then(data => { members = data; renderTeam(); renderRecommendations(); observeRevealElements(); }).catch(error => console.error("Não foi possível carregar os integrantes:", error));