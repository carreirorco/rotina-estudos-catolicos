# ✝️ Rotina de Estudos Católicos - Versão 2.0

Guia prático completo para catequese e preparação para Batismo/Crisma com sistema avançado de acompanhamento diário.

## 🎯 O Que Foi Implementado

### 1. Dashboard "Meu Dia Hoje" 📅
- **Banner destacado** com o dia da semana e data completa
- **Contador de streak** mostrando dias consecutivos de estudo
- **Card de estudo do dia** com material, ação e duração específicos
- **Mistério do terço** correspondente ao dia da semana
- **Oração da semana** para memorização
- **Barra de progresso** do dia em tempo real

### 2. Layout de 3 Colunas (Desktop)

#### Sidebar Esquerda (Fixa):
- **Timer Pomodoro** com presets de 25, 30 e 45 minutos
- **Checklist rápido** das 5 atividades diárias
- **Mini calendário** da semana com indicadores visuais
- **Notas diárias** com salvamento automático

#### Conteúdo Principal:
- Seção "Meu Dia Hoje" com informações concentradas
- Rotina Semanal com modo compacto/expandido
- Orações Essenciais
- Materiais Necessários
- Acompanhamento Semanal
- Estatísticas e Histórico

#### Sidebar Direita (Fixa):
- **Mistério do terço** do dia (visual grande)
- **Santo do dia** (placeholder)
- **Versículo do dia** aleatório
- **Orações rápidas** com modal

### 3. Sistema de Progresso e Histórico 📊

#### Contador de Streak:
- Calcula dias consecutivos automaticamente
- Considera dia completo com 4+ atividades
- Salva melhor recorde
- Atualiza em tempo real

#### Calendário Mensal:
- Visualização completa do mês
- Cores indicando dias completos/parciais/vazios
- Destaque do dia atual

#### Estatísticas por Atividade:
- Gráficos de barra para cada atividade
- Análise dos últimos 30 dias
- Porcentagem de conclusão

#### Sistema de Conquistas:
- 🎯 Primeira Semana (7 dias)
- 🔥 7 Dias Seguidos
- ⭐ 30 Dias Seguidos
- 📿 Todas as Orações Memorizadas
- Notificações quando conquistas são desbloqueadas

### 4. Timer Pomodoro Integrado ⏱️
- Interface circular elegante
- Presets: 25min, 30min, 45min
- Controles: Iniciar, Pausar, Resetar
- Notificação quando completo
- Alert visual e sonoro

### 5. Sistema de Notas Diárias 📝
- Campo de texto por dia
- Salvamento automático a cada 30 segundos
- Salvamento manual com feedback visual
- Persistência com localStorage
- Histórico separado por data

### 6. Tema Escuro/Claro 🌙☀️
- Toggle no header
- Salva preferência no localStorage
- Transições suaves
- Cores otimizadas para leitura

### 7. Sistema de Notificações 🔔
- Permissão do browser
- Notificação às 8h20 (horário de estudo)
- Alerta quando timer completa
- Notificação de conquistas desbloqueadas

### 8. Export/Import de Dados 💾📂
- Exporta todos os dados em JSON
- Backup com data no nome do arquivo
- Importação com confirmação
- Preserva todo histórico e progresso

### 9. Seções Colapsáveis
- Botão +/− em cada seção
- Salva estado expandido/colapsado
- Melhora navegação em dispositivos móveis
- Transições animadas

### 10. Modo Compacto para Rotina Semanal
- Toggle entre visualização expandida e compacta
- Economia de espaço vertical
- Mantém informações essenciais visíveis

### 11. Modal de Orações ⚡
- Orações rápidas na sidebar direita
- Modal com texto completo
- Inclui: Pai Nosso, Ave Maria, Glória, Credo
- Fechamento por botão ou clique fora

### 12. Atalhos de Teclado ⌨️
- **Alt + 1-7**: Navegar entre seções
- **Ctrl + S**: Salvar notas rapidamente

### 13. Progressive Web App (PWA) 📱
- Instalável como aplicativo
- Funciona offline
- Service Worker para cache
- Ícones e splash screen
- Atalhos do aplicativo

### 14. Funcionalidades Originais Mantidas
- Smooth scroll
- Highlight de navegação
- Animações fade-in
- Tracker semanal interativo
- Sistema de metas clicável
- Progresso semanal

## 🎨 Melhorias de UX

### Responsividade Total:
- Layout de 3 colunas em desktop (>1200px)
- Layout de 1 coluna em tablets/mobile
- Sidebars ocultas automaticamente em telas pequenas
- Navegação otimizada para touch

### Indicadores Visuais:
- 🟢 Verde: Dia/atividade completa
- 🟡 Amarelo: Parcialmente completo
- ⚪ Cinza: Vazio
- 🔵 Azul: Dia atual

### Feedback Imediato:
- Checkboxes atualizam progresso instantaneamente
- Timer mostra contagem regressiva
- Notas mostram "Salvo!" ao gravar
- Hover effects em todos elementos interativos

## 📊 Dados Salvos no LocalStorage

Todos os dados são salvos localmente no navegador:
- `checklist_YYYY-MM-DD`: Checklist de cada dia
- `notes_YYYY-MM-DD`: Notas de cada dia
- `trackerState`: Estado da tabela de tracker semanal
- `goalsState`: Estado das metas
- `theme`: Preferência de tema (claro/escuro)
- `bestStreak`: Melhor sequência de dias
- `achievement_*`: Conquistas desbloqueadas

## 🚀 Como Usar

### Primeira Vez:
1. Abra [index.html](index.html) no navegador
2. Ative notificações (botão 🔔 no header)
3. Marque suas atividades do dia no checklist lateral
4. Use o timer para sessões de estudo focado
5. Anote reflexões no campo de notas

### Uso Diário:
1. Veja o dashboard "Meu Dia Hoje" para saber o que fazer
2. Marque atividades conforme completa
3. Use o timer Pomodoro para estudos
4. Acompanhe seu streak de dias consecutivos

### Acompanhamento:
1. Navegue até "Estatísticas" para ver progresso
2. Consulte o calendário mensal
3. Veja gráficos por atividade
4. Desbloqueie conquistas

## 💻 Tecnologias

- **HTML5** com estrutura semântica
- **CSS3** com variáveis e grid layout
- **JavaScript Vanilla** (sem frameworks)
- **LocalStorage** para persistência
- **Service Worker** para PWA
- **Notification API** para lembretes

## 📱 Instalação como App

### Chrome/Edge (Desktop):
1. Abra a página
2. Clique no ícone de instalação na barra de endereços
3. Confirme "Instalar"

### Mobile:
1. Abra a página no navegador
2. Menu → "Adicionar à tela inicial"
3. App estará disponível como aplicativo nativo

## 🔒 Privacidade

- Todos os dados ficam no seu navegador
- Nenhuma informação é enviada para servidores
- Funciona 100% offline após primeira carga
- Use Export/Import para backup manual

## 🎯 Próximos Passos Sugeridos

Para futuras melhorias, considere:
- Sincronização em nuvem (Firebase/Supabase)
- Integração com APIs de santos e leituras do dia
- Gráficos mais avançados (Chart.js)
- Sistema de badges e recompensas
- Compartilhamento de progresso
- Versão para múltiplos usuários

## 📖 Créditos

Desenvolvido com ❤️ para auxiliar na preparação para os Sacramentos da Iniciação Cristã.

**Ad Maiorem Dei Gloriam!** ✝️
