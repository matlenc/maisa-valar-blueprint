import { createFileRoute } from "@tanstack/react-router";
import maisaPortrait from "@/assets/maisa-valar.jpg";
import planaLogo from "@/assets/plana-logo.jpg";
import ebookCover from "@/assets/ebook-cover.jpg";

export const Route = createFileRoute("/ebook")({
  head: () => ({
    meta: [
      { title: "Ebook Plan.A — Guia Completo para Abrir Sua Clínica" },
      {
        name: "description",
        content:
          "O guia definitivo, escrito por Maisa Valar, para abrir, estruturar e regularizar sua clínica com segurança jurídica, financeira e operacional.",
      },
      { property: "og:title", content: "Ebook Plan.A — Abra sua clínica com método" },
      {
        property: "og:description",
        content:
          "Da escolha do CNPJ à pasta sanitária, do plano financeiro à gestão de processos. O passo a passo que Maisa Valar usa há mais de 20 anos.",
      },
    ],
  }),
  component: EbookPage,
});

const CHECKOUT_URL = "https://kiwify.com.br/"; // TODO: substituir pelo link real do Kiwify

const chapters = [
  { n: "01", title: "Primeiros Passos", body: "Resumo executivo, estrutura organizacional, jurídica e plano de marketing da clínica." },
  { n: "02", title: "Modelo de Negócio", body: "MEI, Sociedade Unipessoal, EPP, franquia: como escolher o formato ideal e evitar erros caros." },
  { n: "03", title: "Passo a Passo para Abrir", body: "Da ideia ao CNPJ ativo: contrato social, registros nos conselhos e formalização sem dor de cabeça." },
  { n: "04", title: "Pasta Sanitária", body: "Todos os documentos exigidos pela Vigilância Sanitária, alvarás, laudos técnicos e POPs." },
  { n: "05", title: "Gestão de Processos", body: "Como identificar e eliminar gargalos, padronizar fluxos e usar tecnologia como aliada." },
  { n: "06", title: "Sustentabilidade Financeira", body: "Separação PF/PJ, fluxo de caixa, precificação e crescimento sólido a longo prazo." },
  { n: "07", title: "Comunicação & Atendimento", body: "Por que o melhor marketing começa na recepção e como construir relacionamentos duradouros." },
  { n: "08", title: "Análise SWOT da Clínica", body: "Forças, fraquezas, oportunidades e ameaças aplicadas à realidade do empreendedor da saúde." },
];

const forWho = [
  "Fisioterapeutas, dentistas, médicos e profissionais da saúde prontos para abrir a primeira clínica",
  "Empreendedores que já operam mas sentem que a clínica está desorganizada e insegura juridicamente",
  "Profissionais que querem sair do CLT e estruturar um negócio próprio com método e segurança",
  "Gestores que precisam regularizar a Vigilância Sanitária e os conselhos profissionais",
];

const bonuses = [
  "Checklist completo da Pasta Sanitária",
  "Modelo de Análise SWOT aplicada à saúde",
  "Roteiro passo a passo da formalização",
  "Acesso ao Mentor Estratégico Plan.A para tirar dúvidas sobre o conteúdo",
];

function EbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <a href="/" className="flex items-center gap-3">
            <img src={planaLogo} alt="Grupo Plan.A" className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--cream-deep)]" />
          </a>
          <a
            href={CHECKOUT_URL}
            className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--sage-deep)] transition"
          >
            Quero meu ebook
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent) 40%, transparent) 0%, transparent 70%), var(--background)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-12">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">
              Ebook Plan.A • Edição 2026
            </p>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-[var(--ink)]">
              Um guia completo para <em className="italic font-light">abrir sua clínica</em> com método.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--sage-deep)]">
              Escrito por Maisa Valar — fisioterapeuta, advogada empresarial e gestora de clínicas há mais de 23 anos. O passo a passo que tira sua clínica da ideia e a coloca em operação segura, regularizada e lucrativa.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CHECKOUT_URL}
                className="rounded-full bg-[var(--ink)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--sage-deep)] transition"
              >
                Comprar agora
              </a>
              <a
                href="#conteudo"
                className="text-xs uppercase tracking-[0.22em] text-[var(--sage-deep)] underline-offset-4 hover:underline"
              >
                Ver o que você vai aprender
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--sage-deep)]">
              Acesso imediato • PDF + bônus
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--accent) 50%, transparent), transparent)",
              }}
            />
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[var(--cream-deep)]">
              <img src={ebookCover} alt="Capa do ebook Plan.A" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)]/80 to-transparent p-6">
                <p className="font-serif-display text-2xl italic text-[var(--cream)]">Plan.A</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--cream)]/80">
                  Guia para abrir sua clínica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-y border-[var(--cream-deep)] bg-[color-mix(in_oklab,var(--accent)_25%,var(--background))] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">A promessa</p>
          <p className="mt-6 font-serif-display text-3xl md:text-4xl leading-snug text-[var(--ink)]">
            Você não precisa abrir sua clínica no escuro. Em poucas horas de leitura, você terá clareza sobre o modelo jurídico, a documentação sanitária, a precificação e a operação que sua clínica precisa para nascer pronta para crescer.
          </p>
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="conteudo" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">O que você vai aprender</p>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl text-[var(--ink)]">
              Oito capítulos práticos, do CNPJ ao crescimento.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--cream-deep)] md:grid-cols-2">
            {chapters.map((c) => (
              <article key={c.n} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif-display text-2xl italic text-[var(--sage-deep)]">{c.n}</span>
                  <h3 className="font-serif-display text-2xl text-[var(--ink)]">{c.title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--sage-deep)]">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="bg-[color-mix(in_oklab,var(--accent)_18%,var(--background))] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1fr_1.2fr] md:px-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl ring-1 ring-[var(--cream-deep)]">
            <img src={maisaPortrait} alt="Maisa Valar" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">Sobre a autora</p>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl text-[var(--ink)]">Maisa Valar</h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--sage-deep)]">
              Fisioterapeuta, advogada empresarial (OAB/SC) e sócia do Grupo Plan.A. À frente do Centromédico — Serviços de Saúde desde 2004, soma mais de duas décadas estruturando, regularizando e fazendo crescer clínicas multidisciplinares.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--sage-deep)]">
              Este ebook reúne o método que ela aplica diariamente em mentorias e consultorias — agora ao alcance de quem quer abrir a clínica certa, da forma certa, desde o primeiro dia.
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">Para quem é</p>
          <h2 className="mt-4 font-serif-display text-4xl md:text-5xl text-[var(--ink)]">
            Este ebook é para você se…
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[var(--cream-deep)] md:grid-cols-2">
            {forWho.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-background p-8">
                <span className="font-serif-display text-xl italic text-[var(--sage-deep)]">0{i + 1}</span>
                <p className="text-[15px] leading-relaxed text-[var(--ink)]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-[var(--ink)] py-24 md:py-32 text-[var(--cream)]">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--cream)]/60">Bônus inclusos</p>
          <h2 className="mt-4 font-serif-display text-4xl md:text-5xl">
            Mais que um ebook — um kit de partida.
          </h2>
          <ul className="mt-12 grid gap-4 text-left md:grid-cols-2">
            {bonuses.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl border border-[var(--cream)]/15 p-6"
              >
                <span className="font-serif-display text-xl italic text-[var(--cream)]/70">+</span>
                <p className="text-[15px] leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFFER / CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">A oferta</p>
          <h2 className="mt-4 font-serif-display text-5xl md:text-6xl text-[var(--ink)]">
            Sua clínica começa <em className="italic font-light">aqui</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--sage-deep)]">
            Acesso imediato ao ebook completo em PDF, mais os bônus práticos. Pagamento único e seguro via Kiwify.
          </p>

          <div className="mt-12 inline-flex flex-col items-center gap-4 rounded-2xl border border-[var(--cream-deep)] bg-background p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--sage-deep)]">Ebook Plan.A</p>
            <p className="font-serif-display text-5xl text-[var(--ink)]">Acesso vitalício</p>
            <a
              href={CHECKOUT_URL}
              className="mt-4 rounded-full bg-[var(--ink)] px-10 py-4 text-xs uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--sage-deep)] transition"
            >
              Comprar pelo Kiwify
            </a>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--sage-deep)]">
              Entrega imediata por e-mail
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--cream-deep)] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-[11px] uppercase tracking-[0.22em] text-[var(--sage-deep)] md:flex-row md:px-12">
          <p>© Grupo Plan.A — Maisa Valar</p>
          <a href="/" className="hover:text-[var(--ink)] transition">Conhecer a mentoria</a>
        </div>
      </footer>
    </div>
  );
}
