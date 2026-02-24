

# Redesign da Pagina Frota — Conteudo Profissional Completo

## Resumo

Reescrever a pagina `/frota` com todo o conteudo fornecido pelo usuario, seguindo o design system existente (carbon-gradient, glass-card, Framer Motion). Textos hardcoded em portugues, sem i18n — mesmo padrao do SkudoGuard e SkudoUltra.

---

## Estrutura da Pagina

### Secao 1 — HERO
- Badge: "Frotas Corporativas" com icone Truck
- Titulo: "Para Minha Frota"
- Subtitulo: "Solucoes de Alta Performance para Frotas Corporativas"
- Texto de posicionamento: "O veiculo de frota e o posto de trabalho do seu colaborador. Proporcionar um ambiente seguro e termicamente controlado nao e apenas conforto, e eficiencia operacional e dever de cuidado."
- Fundo bg-carbon-gradient com separator-accent

### Secao 2 — CONFORTO TERMICO E SAUDE DO MOTORISTA
- Titulo da secao: "Conforto Termico e Saude do Motorista"
- Subtitulo: "Horas ao volante sob sol forte causam fadiga precoce e exposicao perigosa a radiacoes."
- 3 cards glass-card com icones minimalistas:
  - Thermometer → "Bloqueio de Calor (IR)" — "Reducao drastica da temperatura interna, diminuindo o uso do ar-condicionado e o consumo de combustivel."
  - Shield → "Protecao UV Total" — "Escudo contra raios ultravioleta, prevenindo doencas de pele e o envelhecimento precoce de componentes internos."
  - Eye → "Reducao de Ofuscamento" — "Maior visibilidade e menos cansaco visual, aumentando a seguranca ativa na conducao."

### Secao 3 — SEGURANCA E PROTECAO DE ATIVOS
- bg-carbon-gradient (alternando fundo)
- Titulo: "Seguranca e Protecao de Ativos"
- Subtitulo: "Vidros sao os pontos mais vulneraveis em tentativas de invasao ou vandalismo."
- 3 cards glass-card:
  - Layers → "Tecnologia Antiestilhacamento" — "Em caso de impacto, a pelicula retem os fragmentos de vidro, protegendo o motorista de ferimentos e dificultando o acesso ao interior do veiculo."
  - Lock → "Privacidade Estrategica" — "Reduz a visibilidade externa sobre equipamentos, ferramentas e cargas, desestimulando acoes criminosas por oportunidade."
  - Clock → "Barreira de Tempo" — "Aumenta o tempo necessario para uma invasao, fator crucial para a preservacao da integridade fisica da equipe."

### Secao 4 — POR QUE ESCOLHER INSULFILM PARA SUA FROTA?
- Titulo: "Por que escolher INSULFILM para sua frota?"
- 3 cards com checklist:
  - Award → "Padronizacao" — "Garanta a mesma estetica e nivel de protecao em toda a sua frota nacional."
  - RefreshCw → "Durabilidade" — "Peliculas que nao desbotam, nao criam bolhas e mantem a performance por anos."
  - DollarSign → "Valor de Revenda" — "Protecao do interior contra o ressecamento causado pelo sol, preservando o patrimonio da empresa."

### Secao 5 — CTA FINAL
- bg-carbon-gradient
- Titulo: "Atendimento Especializado para Frotas"
- Subtitulo: "Condicoes especiais, orcamento personalizado e logistica sob medida para a sua frota."
- Botao WhatsApp verde: "Solicitar Orcamento"

---

## Detalhes Tecnicos

### Arquivo editado: `src/pages/Frota.tsx`
- Reescrita completa do componente
- Imports adicionais: Eye, Lock, Clock, Layers, Award, RefreshCw do lucide-react
- Manter mesmas animacoes (fadeInUp, stagger, scaleIn, fadeInLeft)
- Adicionar fadeInRight para layouts em grid alternados
- Todos os textos hardcoded exatamente como fornecidos pelo usuario
- WHATSAPP URL mantida: `https://wa.me/5511976136911?text=Preciso%20de%20películas%20para%20minha%20frota`
- Nenhum arquivo adicional necessario

