import { createFileRoute } from "@tanstack/react-router";
import maisaPortrait from "@/assets/maisa-valar.jpg";
import ebookCover from "@/assets/ebook-cover.jpg";

export const Route = createFileRoute("/ebook")({
  head: () => ({
    meta: [
      { title: "Ebook Plan.A — Abra Sua Clínica com Método | Maisa Valar" },
      {
        name: "description",
        content:
          "O guia editorial definitivo para abrir e estruturar sua clínica com segurança jurídica, financeira e sanitária. Por Maisa Valar — Grupo Plan.A.",
      },
      { property: "og:title", content: "Ebook Plan.A — Abra sua clínica com método" },
      {
        property: "og:description",
        content:
          "Da escolha do CNPJ à Vigilância Sanitária, do plano financeiro à precificação. Acesso imediato via Kiwify.",
      },
    ],
  }),
  component: EbookPage,
});

const CHECKOUT_URL = "https://kiwify.com.br/"; // TODO: substituir pelo link real do Kiwify

// Scoped design tokens — Emerald Prestige + Cormorant/Karla.
// Não tocamos no styles.css global; tudo vive dentro deste escopo.
const tokens = {
  "--e-ink": "#064e3b",
  "--e-emerald": "#0d7a5f",
  "--e-gold": "#c9a84c",
  "--e-gold-soft": "#e6cf8c",
  "--e-cream": "#f5f0e0",
  "--e-cream-deep": "#ece4cd",
} as React.CSSProperties;

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" } as React.CSSProperties;
const body = { fontFamily: "'Karla', system-ui, sans-serif" } as React.CSSProperties;

const featured = [
  {
    kicker: "Cap. 01 — Fundação",
    title: "Primeiros Passos",
    excerpt:
      "Resumo executivo, estrutura organizacional e jurídica, plano de marketing e financeiro. A leitura de raio-X que toda clínica precisa antes do CNPJ.",
  },
  {
    kicker: "Cap. 02 — Modelo",
    title: "Qual CNPJ é o seu?",
    excerpt:
      "MEI, Sociedade Unipessoal, EPP ou Franquia — vantagens, limites e armadilhas tributárias. Como escolher o formato que protege o seu lucro.",
  },
];

const grid = [
  { n: "03", title: "Passo a Passo para Abrir", body: "Do contrato social ao alvará: o caminho documental sem retrabalho." },
  { n: "04", title: "Pasta Sanitária", body: "Cada documento exigido pela Vigilância, em ordem e com checklist." },
  { n: "05", title: "Gestão de Processos", body: "POPs, fluxogramas e tecnologia para eliminar gargalos da operação." },
  { n: "06", title: "Sustentabilidade Financeira", body: "PF x PJ, fluxo de caixa, precificação e cálculo da hora clínica." },
  { n: "07", title: "Comunicação & Atendimento", body: "Por que o melhor marketing nasce na recepção da sua clínica." },
  { n: "08", title: "Análise SWOT", body: "Forças, fraquezas, oportunidades e ameaças aplicadas à saúde." },
];

const bonuses = [
  "Checklist completo da Pasta Sanitária",
  "Modelo de Análise SWOT aplicada à clínica",
  "Roteiro passo a passo da formalização",
  "Acesso ao Mentor Estratégico Plan.A",
];

function EbookPage() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        ...tokens,
        ...body,
        background: "var(--e-cream)",
        color: "var(--e-ink)",
      }}
    >
      {/* MASTHEAD */}
      <header
        className="border-b"
        style={{ borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--e-emerald)" }}
            >
              Plan.A Editions
            </span>
          </div>
          <p className="hidden md:block text-[10px] uppercase tracking-[0.35em]" style={{ color: "var(--e-emerald)" }}>
            Vol. 01 · 2026 · Saúde & Empreendedorismo
          </p>
          <a
            href={CHECKOUT_URL}
            className="rounded-none border px-5 py-2 text-[10px] uppercase tracking-[0.3em] transition hover:opacity-80"
            style={{
              borderColor: "var(--e-ink)",
              background: "var(--e-ink)",
              color: "var(--e-cream)",
            }}
          >
            Comprar
          </a>
        </div>
      </header>

      {/* HERO — MAGAZINE COVER */}
      <section className="border-b" style={{ borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            {/* Left: editorial title */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.4em] mb-8"
                  style={{ color: "var(--e-gold)", ...body }}
                >
                  — A Edição do Empreendedor da Saúde —
                </p>
                <h1
                  className="text-[68px] md:text-[120px] leading-[0.92] tracking-[-0.02em]"
                  style={serif}
                >
                  Abra
                  <br />
                  sua <em className="italic font-light" style={{ color: "var(--e-gold)" }}>clínica</em>
                  <br />
                  com método.
                </h1>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-md text-[15px] leading-[1.7]" style={{ color: "color-mix(in oklab, var(--e-ink) 80%, transparent)" }}>
                  Um guia editorial em oito capítulos, escrito por <strong>Maisa Valar</strong> — fisioterapeuta, advogada empresarial e gestora de clínicas há 23 anos.
                </p>
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition hover:opacity-90"
                  style={{
                    background: "var(--e-gold)",
                    color: "var(--e-ink)",
                  }}
                >
                  Comprar ebook
                </a>
              </div>
            </div>

            {/* Right: cover image with caption */}
            <div className="md:col-span-5">
              <figure className="relative">
                <div
                  className="aspect-[3/4] w-full overflow-hidden"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px color-mix(in oklab, var(--e-ink) 50%, transparent)",
                  }}
                >
                  <img src={ebookCover} alt="Capa do ebook Plan.A" className="h-full w-full object-cover" />
                </div>
                <figcaption
                  className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--e-emerald)" }}
                >
                  <span>Cover · Edição 2026</span>
                  <span>56 pp · PDF</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section
        className="border-b"
        style={{
          background: "var(--e-ink)",
          color: "var(--e-cream)",
          borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-20 md:py-28 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-8" style={{ color: "var(--e-gold)" }}>
            Editorial
          </p>
          <blockquote className="text-3xl md:text-5xl leading-[1.15] italic" style={serif}>
            “Você não precisa abrir sua clínica no escuro. Em poucas horas de leitura, você terá clareza sobre o modelo jurídico, a documentação sanitária, a precificação e a operação que sua clínica precisa para nascer pronta para crescer.”
          </blockquote>
          <p className="mt-10 text-[11px] uppercase tracking-[0.35em]" style={{ color: "var(--e-gold-soft)" }}>
            Maisa Valar — Sócia, Grupo Plan.A
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLES (magazine top stories) */}
      <section className="border-b" style={{ borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">
          <div className="flex items-end justify-between border-b pb-6 mb-12" style={{ borderColor: "color-mix(in oklab, var(--e-ink) 25%, transparent)" }}>
            <h2 className="text-3xl md:text-5xl" style={serif}>
              Nesta edição
            </h2>
            <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "var(--e-emerald)" }}>
              Capítulos em destaque
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {featured.map((f) => (
              <article key={f.title}>
                <p className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: "var(--e-gold)" }}>
                  {f.kicker}
                </p>
                <h3 className="text-4xl md:text-6xl leading-[0.95] mb-6" style={serif}>
                  {f.title}
                </h3>
                <p className="text-[16px] leading-[1.7]" style={{ color: "color-mix(in oklab, var(--e-ink) 78%, transparent)" }}>
                  {f.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GRID of remaining chapters */}
      <section className="border-b" style={{ borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-6" style={{ color: "var(--e-emerald)" }}>
            Sumário
          </p>
          <h2 className="text-3xl md:text-5xl mb-14" style={serif}>
            Mais capítulos
          </h2>

          <div
            className="grid gap-px"
            style={{
              background: "color-mix(in oklab, var(--e-ink) 18%, transparent)",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {grid.map((g) => (
              <article
                key={g.n}
                className="p-8 md:p-10"
                style={{ background: "var(--e-cream)" }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl italic" style={{ ...serif, color: "var(--e-gold)" }}>
                    {g.n}
                  </span>
                  <h3 className="text-2xl" style={serif}>
                    {g.title}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.65]" style={{ color: "color-mix(in oklab, var(--e-ink) 78%, transparent)" }}>
                  {g.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR — editorial profile */}
      <section
        className="border-b"
        style={{
          background: "var(--e-cream-deep)",
          borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-center">
            <figure className="md:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={maisaPortrait} alt="Maisa Valar" className="h-full w-full object-cover grayscale-[20%]" />
              </div>
              <figcaption className="mt-4 text-[10px] uppercase tracking-[0.35em]" style={{ color: "var(--e-emerald)" }}>
                Retrato · Maisa Valar, OAB/SC
              </figcaption>
            </figure>
            <div className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.4em] mb-6" style={{ color: "var(--e-gold)" }}>
                A autora
              </p>
              <h2 className="text-5xl md:text-7xl leading-[0.95] mb-8" style={serif}>
                Maisa <em className="italic font-light">Valar</em>
              </h2>
              <p className="text-[16px] leading-[1.75] mb-5" style={{ color: "color-mix(in oklab, var(--e-ink) 82%, transparent)" }}>
                Fisioterapeuta, advogada empresarial e sócia do Grupo Plan.A. À frente do Centromédico — Serviços de Saúde desde 2004, soma mais de duas décadas estruturando, regularizando e fazendo crescer clínicas multidisciplinares.
              </p>
              <p className="text-[16px] leading-[1.75]" style={{ color: "color-mix(in oklab, var(--e-ink) 82%, transparent)" }}>
                Este ebook reúne o método que ela aplica diariamente em mentorias e consultorias — agora ao alcance de quem quer abrir a clínica certa, da forma certa, desde o primeiro dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS strip */}
      <section
        className="border-b"
        style={{
          background: "var(--e-ink)",
          color: "var(--e-cream)",
          borderColor: "color-mix(in oklab, var(--e-ink) 15%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16 md:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] mb-4" style={{ color: "var(--e-gold)" }}>
                Inclusos
              </p>
              <h2 className="text-4xl md:text-5xl" style={serif}>
                Mais que um <em className="italic">ebook</em>.
              </h2>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {bonuses.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 border-t py-4 text-[14px] leading-[1.6]"
                  style={{ borderColor: "color-mix(in oklab, var(--e-cream) 18%, transparent)" }}
                >
                  <span className="text-xl" style={{ ...serif, color: "var(--e-gold)" }}>+</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CHECKOUT — final stand */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-8" style={{ color: "var(--e-emerald)" }}>
            Acesso imediato
          </p>
          <h2 className="text-6xl md:text-8xl leading-[0.95] mb-10" style={serif}>
            Sua clínica
            <br />
            <em className="italic font-light" style={{ color: "var(--e-gold)" }}>começa aqui.</em>
          </h2>

          <div
            className="mx-auto inline-flex flex-col items-center gap-5 px-10 py-12"
            style={{
              border: "1px solid color-mix(in oklab, var(--e-ink) 25%, transparent)",
              background: "var(--e-cream-deep)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "var(--e-emerald)" }}>
              Ebook Plan.A · Edição 2026
            </p>
            <p className="text-5xl" style={serif}>
              Acesso vitalício
            </p>
            <p className="text-[13px] leading-[1.6] max-w-sm" style={{ color: "color-mix(in oklab, var(--e-ink) 75%, transparent)" }}>
              Pagamento único e seguro via Kiwify. PDF + bônus entregues no seu e-mail em instantes.
            </p>
            <a
              href={CHECKOUT_URL}
              className="mt-4 inline-flex items-center justify-center px-12 py-5 text-[11px] uppercase tracking-[0.3em] transition hover:opacity-90"
              style={{
                background: "var(--e-ink)",
                color: "var(--e-gold)",
                borderBottom: "2px solid var(--e-gold)",
              }}
            >
              Comprar pelo Kiwify →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t"
        style={{
          background: "var(--e-ink)",
          color: "color-mix(in oklab, var(--e-cream) 70%, transparent)",
          borderColor: "color-mix(in oklab, var(--e-cream) 20%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-10 text-[10px] uppercase tracking-[0.3em] md:flex-row md:items-center md:px-12">
          <p>© Grupo Plan.A — Maisa Valar</p>
          <p style={{ color: "var(--e-gold-soft)" }}>Plan.A Editions · Vol. 01 · 2026</p>
          <a href="/" className="hover:opacity-80 transition" style={{ color: "var(--e-gold)" }}>
            Conhecer a mentoria →
          </a>
        </div>
      </footer>
    </div>
  );
}
