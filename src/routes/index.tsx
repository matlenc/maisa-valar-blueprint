import { createFileRoute } from "@tanstack/react-router";
import maisaPortrait from "@/assets/maisa-valar.jpg";
import maisaPortrait2 from "@/assets/maisa-valar-3.jpg";
import planaLogo from "@/assets/plana-logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const pillars = [
  {
    n: "01",
    title: "Estruturação da Clínica",
    body: "Modelo de negócio, definição do formato jurídico, contrato social, escolha do CNAE principal e enquadramento ideal. Da abertura ao funcionamento seguro e organizado da clínica.",
  },
  {
    n: "02",
    title: "Gestão Financeira",
    body: "Organização financeira da operação, separação PF/PJ, controle de despesas e receitas, cálculo da hora clínica e precificação estratégica. Construção de uma clínica financeiramente saudável e sustentável.",
  },
  {
    n: "03",
    title: "Processos & Operação",
    body: "Padronização de processos, estruturação dos setores, definição de responsáveis e organização das tarefas da equipe. Uma jornada da cliente clara, organizada e alinhada à experiência da clínica.",
  },
  {
    n: "04",
    title: "Segurança Jurídica",
    body: "Adequação jurídica da operação, contratos com fornecedores, pacientes e colaboradores. Proteção da clínica em todas as etapas do crescimento.",
  },
];

const numbers = [
  { v: "20+", l: "anos gerindo clínicas" },
  { v: "2004", l: "à frente do Centromédico" },
  { v: "OAB/SC", l: "advogada empresarial" },
  { v: "Plan A", l: "sócia & método próprio" },
];

const modules = [
  "Diagnóstico estratégico para reconhecer o momento atual da sua clínica ou operação",
  "Alinhamento da agenda de trabalho e definição das fases da mentoria",
  "Organização dos dados empresariais, financeiros, fornecedores e serviços",
  "Estruturação da equipe, setores e documentação da operação",
  "Desenvolvimento do organograma e fluxograma operacional da clínica",
  "Definição das responsabilidades de cada cargo, materiais e ações corretivas",
  "Organização das despesas, receitas e fluxo de caixa da operação",
  "Cálculo da hora clínica e construção da precificação estratégica",
  "Estruturação de extratos, relatórios gerenciais e análises financeiras",
  "Projeção de faturamento para curto, médio e longo prazo",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <img src={planaLogo} alt="Grupo Plan A" className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--cream-deep)]" />
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-[var(--sage-deep)]">
            <a href="#mentoria" className="hover:text-[var(--ink)] transition">A Mentoria</a>
            <a href="#maisa" className="hover:text-[var(--ink)] transition">Maisa Valar</a>
            <a href="#programa" className="hover:text-[var(--ink)] transition">Programa</a>
            <a href="#vagas" className="hover:text-[var(--ink)] transition">Vagas</a>
          </div>
          <a
            href="#vagas"
            className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--sage-deep)] transition"
          >
            Quero minha vaga
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, var(--cream-deep) 0%, transparent 60%), radial-gradient(40% 40% at 90% 80%, color-mix(in oklch, var(--sage) 22%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">
              <span className="h-px w-10 bg-[var(--sage-deep)]" />
              Mentoria exclusiva — Grupo Plan A
            </div>
            <h1 className="font-serif-display text-balance text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] text-[var(--ink)]">
              Da paixão à <em className="italic text-[var(--sage-deep)]">clínica de sucesso</em>:
              estruture, blinde e cresça.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
              Uma mentoria estratégica para profissionais da saúde que querem abrir, organizar
              e escalar uma clínica com solidez jurídica, financeira e operacional, guiada por
              quem vive isso há mais de 20 anos.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#vagas"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-[var(--cream)] hover:bg-[var(--sage-deep)] transition"
              >
                Garantir minha vaga
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#mentoria" className="text-sm tracking-wide text-[var(--sage-deep)] underline underline-offset-4 decoration-1 hover:text-[var(--ink)]">
                Conhecer o método Plan A
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-y-6 gap-x-8 sm:grid-cols-4">
              {numbers.map((n) => (
                <div key={n.l}>
                  <div className="font-serif-display text-3xl text-[var(--ink)]">{n.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">{n.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -inset-4 -z-10 rounded-[2rem]"
                style={{ background: "color-mix(in oklch, var(--sage) 28%, transparent)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full"
                style={{ background: "var(--champagne)" }}
              />
              <img
                src={maisaPortrait}
                alt="Maisa Valar — empresária, fisioterapeuta e advogada"
                className="relative rounded-[1.75rem] object-cover shadow-[0_30px_80px_-30px_rgba(40,60,60,0.35)]"
              />
              <div className="absolute -left-6 bottom-10 hidden rounded-2xl bg-[var(--cream)] px-5 py-4 shadow-xl ring-1 ring-[var(--cream-deep)] md:block">
                <div className="font-serif-display text-xl italic text-[var(--ink)]">Maisa Valar</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]">Sócia · Grupo Plan A</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / WHISPER */}
      <section className="border-y border-[var(--cream-deep)] bg-[color-mix(in_oklch,var(--cream-deep)_55%,var(--cream))] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-[11px] uppercase tracking-[0.28em] text-[var(--sage-deep)] md:px-12">
          <span>Fisioterapeuta</span><span>·</span>
          <span>Advogada OAB/SC</span><span>·</span>
          <span>Gestora desde 2004</span><span>·</span>
          <span>Método Plan A</span><span>·</span>
          <span>Assessoria à Saúde</span>
        </div>
      </section>

      {/* MENTORIA — pillars */}
      <section id="mentoria" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">A mentoria</div>
              <h2 className="mt-6 font-serif-display text-balance text-5xl leading-[1.02] text-[var(--ink)] md:text-6xl">
                Quatro pilares para uma clínica que <em className="italic">opera, cresce e protege.</em>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
                Você não precisa fazer faculdade de Administração, Direito e Contabilidade para gerir
                sua clínica com segurança. A profissional da saúde precisa de estruturação empresarial,
                clareza na direção e um plano estratégico que sustente o crescimento da operação.
                Em 90 dias, organizamos os pilares essenciais para transformar decisões em crescimento
                sólido, seguro e sustentável.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-[var(--cream-deep)] sm:grid-cols-2 lg:col-span-7">
              {pillars.map((p) => (
                <article key={p.n} className="bg-[var(--card)] p-8 transition hover:bg-[color-mix(in_oklch,var(--sage)_8%,var(--card))]">
                  <div className="font-serif-display text-2xl italic text-[var(--sage-deep)]">{p.n}</div>
                  <h3 className="mt-4 text-lg font-medium tracking-tight text-[var(--ink)]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAISA — about */}
      <section id="maisa" className="relative py-28 md:py-36">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--cream-deep), transparent)" }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full" style={{ background: "color-mix(in oklch, var(--sage) 25%, transparent)" }} />
              <img src={maisaPortrait2} alt="Maisa Valar" className="relative rounded-[1.75rem] object-cover shadow-2xl" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">Quem é Maisa</div>
            <h2 className="mt-6 font-serif-display text-balance text-5xl leading-[1.02] text-[var(--ink)] md:text-6xl">
              Coragem, resiliência, foco e <em className="italic">visão estratégica.</em>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--muted-foreground)]">
              <p>
                Natural de São Miguel do Oeste (SC), Maisa deixou sua cidade aos 16 anos para estudar
                Fisioterapia na UNIVALI, em Itajaí. Aos 20, já enfrentava seu primeiro grande desafio:
                assumir sozinha a gestão de uma clínica multidisciplinar.
              </p>
              <p>
                Desde 2004 lidera o <span className="text-[var(--ink)]">Centromédico — Serviços de Saúde</span>,
                empresa da família. Sócia do <span className="text-[var(--ink)]">Grupo Plan A</span>, criou um
                método exclusivo de gestão que transforma empresas, gera crescimento sustentável e
                inspira profissionais a superarem as limitações da gestão.
              </p>
              <p>
                Inquieta, ampliou sua formação no Direito e, em 2023, conquistou a aprovação na
                <span className="text-[var(--ink)]"> OAB/SC </span> antes mesmo de concluir a graduação
                pela UNIAVAN, em Balneário Camboriú. Hoje alia mais de duas décadas em administração
                de clínicas à atuação como advogada empresarial.
              </p>
            </div>
            <div className="mt-10 font-serif-display text-2xl italic text-[var(--sage-deep)]">
              "Determinação, fé e propósito caminhando juntos."
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section id="programa" className="bg-[color-mix(in_oklch,var(--sage)_85%,var(--ink))] py-28 text-[var(--cream)] md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--champagne)]">O programa</div>
              <h2 className="mt-6 font-serif-display text-balance text-5xl leading-[1.02] md:text-6xl">
                Do sonho à <em className="italic">operação estruturada.</em>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--cream)]/75">
                Um percurso prático para profissionais da saúde que desejam construir uma clínica
                organizada, segura e preparada para crescer. Com acompanhamento personalizado, o
                programa entrega clareza estratégica e direcionamento em cada etapa da estruturação
                de um negócio.
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--cream)]/70">
                Tudo pensado para transformar dúvidas e improvisos em uma operação sólida, organizada
                e sustentável.
              </p>
              <div className="mt-12 rounded-2xl border border-[var(--cream)]/15 p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--champagne)]">Bônus exclusivo</div>
                <div className="mt-2 font-serif-display text-2xl">E-book Plan A + Mentor Estratégico</div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--cream)]/70">
                  Acesso ao guia completo e ao Mentor Estratégico Plan.A — uma inteligência de apoio
                  à gestão para decisões mais claras, seguras e lucrativas.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ol className="divide-y divide-[var(--cream)]/10 border-y border-[var(--cream)]/10">
                {modules.map((m, i) => (
                  <li key={m} className="flex items-baseline gap-6 py-5">
                    <span className="font-serif-display text-2xl italic text-[var(--champagne)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-[var(--cream)]/90">{m}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage-deep)]">Para quem</div>
          <h2 className="mt-6 font-serif-display text-balance text-5xl leading-[1.02] text-[var(--ink)] md:text-6xl">
            Para a profissional da saúde que <em className="italic">decidiu profissionalizar</em> a própria clínica.
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              "Quem quer abrir a primeira clínica com segurança",
              "Quem já abriu mas se sente perdida no jurídico",
              "Quem precisa regularizar Pasta Sanitária",
              "Quem quer crescer sem virar refém da operação",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-[var(--cream-deep)] bg-[var(--card)] p-5">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ background: "var(--sage)" }} />
                <p className="text-[15px] leading-relaxed text-[var(--ink)]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / VAGAS */}
      <section id="vagas" className="px-6 pb-28 md:px-12">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[var(--ink)] px-8 py-20 text-center text-[var(--cream)] md:px-16 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-40"
            style={{
              background:
                "radial-gradient(50% 50% at 20% 20%, color-mix(in oklch, var(--sage) 60%, transparent) 0%, transparent 60%), radial-gradient(40% 40% at 90% 80%, color-mix(in oklch, var(--champagne) 50%, transparent) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--champagne)]">Turma exclusiva · 30 vagas</div>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif-display text-balance text-5xl leading-[1.02] md:text-6xl">
              Sua clínica merece um <em className="italic">Plano A.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[var(--cream)]/75">
              Garanta sua vaga na mentoria com Maisa Valar e saia com clareza, método e um plano
              executável para os próximos 90 dias.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--cream)] px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-[var(--ink)] hover:bg-[var(--champagne)] transition"
            >
              Quero minha vaga →
            </a>
            <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--cream)]/55">
              Vagas limitadas · confirmação por contato direto
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--cream-deep)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-[11px] uppercase tracking-[0.22em] text-[var(--muted-foreground)] md:flex-row md:px-12">
          <div className="flex items-center gap-3">
            <img src={planaLogo} alt="Grupo Plan A" className="h-9 w-9 rounded-full object-cover" />
            <span>Grupo Plan A · Maisa Valar</span>
          </div>
          <div>© {new Date().getFullYear()} · Mentoria de Estruturação Clínica</div>
        </div>
      </footer>
    </div>
  );
}
