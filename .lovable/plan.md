

# Nova Pagina: Peliculas Arquitetonicas — Para Minha Residencia

## Resumo

Criar a pagina `/residencial` seguindo o mesmo padrao visual e estrutural das paginas emocionais existentes (teste_proposta, skudoguard), mas adaptada para o contexto residencial/arquitetonico. Conteudo extraido da landing page oficial. Textos hardcoded em portugues. Foco no conforto, economia, protecao da familia dentro de casa e qualidade de vida.

---

## Dados extraidos do site oficial

- **Video YouTube:** paCtipjRfPI
- **Problemas que resolve:** Gastos extras com energia eletrica, ausencia de privacidade, excesso de luz e calor, protecao e seguranca
- **6 categorias de peliculas:** Espelhadas, Transparentes, Refletivas, Neutras, Nao Refletivas, Antivandalismo e Seguranca
- **5 beneficios principais:** Reducao de calor e economia de energia, Privacidade e reducao de claridade, Protecao contra estilhacos, Manutencao do design ou personalizacao, Reducao do desbotamento e envelhecimento
- **Diferenciais:** Atendimento pre-venda (especialistas, diagnostico, especificacao tecnica), Produto (alto desempenho, OEM, familias Performance e Premium, garantia certificada), Servico de Aplicacao (aplicadores credenciados, protecao do ambiente, certificado individual)
- **Clientes:** Logos de clientes corporativos

---

## Estrutura da pagina

1. **Hero + Video** (paCtipjRfPI) — badge "Peliculas Arquitetonicas", titulo "Peliculas originais INSULFILM", subtitulo "Desempenho surpreendente para projetos residenciais." Botoes ancora: Nossas Peliculas, Beneficios, Diferenciais.

2. **O Problema** — secao emocional focada nos problemas reais de uma residencia: calor excessivo, conta de luz alta, moveis desbotando, falta de privacidade. Cards com icones e estatisticas (CountUp): ex. "ate 80% de rejeicao de calor", "ate 99% de bloqueio UV", "ate 30% de economia na conta de energia".

3. **Nossas Peliculas** — grid com 6 cards das categorias (Espelhadas, Transparentes, Refletivas, Neutras, Nao Refletivas, Seguranca). Cada card com icone, titulo, descricao curta do site.

4. **Principais Beneficios** — 5 cards com icones: Reducao de Calor, Privacidade, Protecao contra Estilhacos, Design, Anti-desbotamento. Textos do site oficial.

5. **Proteja Sua Casa e Sua Familia** — secao emocional: foco na familia dentro de casa, criancas brincando perto de janelas, protecao UV para a pele, moveis e pisos protegidos. Layout lado a lado com placeholder de imagem.

6. **CTA intermediario** — "Transforme sua residencia. Fale com um especialista." + WhatsApp.

7. **Nossos Diferenciais** — 3 blocos: Atendimento Pre-venda, Produto, Servico de Aplicacao. Cada um com icone e bullet points do site oficial. Destaque para garantia certificada.

8. **Familias de Produtos** — 2 cards: Performance (eficientes e economicas) e Premium (maximo desempenho e maior durabilidade).

9. **Garantia Certificada** — secao com destaque: certificado individual por projeto, garantia com lastro industrial.

10. **CTA Final** — "Faca seu orcamento agora" + formulario ou WhatsApp.

---

## Arquivos

### Novo:
- `src/pages/Residencial.tsx` — pagina completa, textos em PT hardcoded

### Editados:
- `src/App.tsx` — nova rota `/residencial`
- `src/components/Header.tsx` — o link "Para Minha Residencia" ja existe no dropdown Arquitetura apontando para `/residencial`

---

## Detalhes tecnicos

- Base visual identica as demais paginas emocionais (bg-carbon-gradient, glass-card, card-premium-hover, separator-accent, tipografia extrabold + font-light)
- Mesmas animation variants reutilizadas (fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger, emotionalFade)
- CountUp para estatisticas de beneficios
- Video YouTube ID: `paCtipjRfPI` com mesmos parametros (controls=0, autoplay=1, mute=1, loop=1)
- Icones Lucide: Sun, Thermometer, Eye, Shield, Palette, Sparkles, ShieldCheck, Award, Users, Home, Zap, Lock
- Mensagem WhatsApp adaptada para peliculas residenciais
- Foco emocional no conforto da familia, economia e protecao — nunca apenas no vidro

