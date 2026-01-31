// ===============================================
// ROTINA DE ESTUDOS CATÓLICOS - SCRIPTS COMPLETOS
// ===============================================

// ===== CONSTANTES E CONFIGURAÇÕES =====
const WEEK_DAYS = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
const WEEK_DAYS_FULL = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const STUDY_SCHEDULE = {
    segunda: {
        material: '📕 Casa da Iniciação Cristã',
        action: 'Ler o capítulo/tema da última aula OU preparar próxima aula. Fazer anotações no caderno. Marcar dúvidas.',
        duration: '⏱️ 8-10 páginas'
    },
    terca: {
        material: '📕 Casa da Iniciação Cristã (cont.)',
        action: 'Continuar capítulo OU aprofundar tema com os textos bíblicos citados no livro. Ler as referências da Bíblia.',
        duration: '⏱️ 8-10 páginas'
    },
    quarta: {
        material: '📖 Evangelho (Mateus)',
        action: 'Ler 1 capítulo. Começar por Mateus 1, depois 2, 3... Ler devagar. Anotar 1 frase que tocou você.',
        duration: '⏱️ 1 capítulo'
    },
    quinta: {
        material: '📘 Catecismo da Igreja Católica',
        action: 'Ler os parágrafos relacionados ao tema da catequese desta semana. Use o índice do CIC para encontrar.',
        duration: '⏱️ 5-8 parágrafos'
    },
    sexta: {
        material: '📗 Introdução à Vida Devota',
        action: 'Ler 1 capítulo (são curtos). Este livro ensina a viver a fé no dia a dia. Perfeito para iniciantes.',
        duration: '⏱️ 1 capítulo (5-10 págs)'
    },
    sabado: {
        material: '✍️ Revisão + Memorização',
        action: 'Revisar anotações da semana. Memorizar 1 oração nova OU parte do Credo. Escrever dúvidas para o catequista.',
        duration: '⏱️ 30 minutos'
    },
    domingo: {
        material: '🕊️ Leitura Livre/Descanso',
        action: 'Ler sobre o santo do dia OU artigo católico OU simplesmente descansar. Dia do Senhor = menos "trabalho".',
        duration: '⏱️ Opcional'
    }
};

const ROSARY_MYSTERIES = {
    domingo: { emoji: '✨', name: 'Mistérios Gloriosos' },
    segunda: { emoji: '😊', name: 'Mistérios Gozosos' },
    terca: { emoji: '😢', name: 'Mistérios Dolorosos' },
    quarta: { emoji: '✨', name: 'Mistérios Gloriosos' },
    quinta: { emoji: '💡', name: 'Mistérios Luminosos' },
    sexta: { emoji: '😢', name: 'Mistérios Dolorosos' },
    sabado: { emoji: '😊', name: 'Mistérios Gozosos' }
};

const PRAYER_PLAN = [
    'Pai Nosso + Ave Maria',
    'Glória ao Pai + Sinal da Cruz',
    'Creio (parte 1)',
    'Creio (parte 2 - completar)',
    'Salve Rainha',
    'Anjo da Guarda + Orações manhã/noite',
    'Ato de Contrição',
    'Ângelus (3x ao dia)'
];

const PRAYERS_TEXT = {
    'pai-nosso': {
        title: 'Pai Nosso',
        text: `Pai nosso, que estais nos céus,
santificado seja o vosso nome,
venha a nós o vosso reino,
seja feita a vossa vontade,
assim na terra como no céu.

O pão nosso de cada dia nos dai hoje,
perdoai-nos as nossas ofensas,
assim como nós perdoamos a quem nos tem ofendido,
e não nos deixeis cair em tentação,
mas livrai-nos do mal.
Amém.`
    },
    'ave-maria': {
        title: 'Ave Maria',
        text: `Ave Maria, cheia de graça,
o Senhor é convosco,
bendita sois vós entre as mulheres
e bendito é o fruto do vosso ventre, Jesus.

Santa Maria, Mãe de Deus,
rogai por nós pecadores,
agora e na hora da nossa morte.
Amém.`
    },
    'gloria': {
        title: 'Glória ao Pai',
        text: `Glória ao Pai, ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre.
Amém.`
    },
    'credo': {
        title: 'Creio (Símbolo dos Apóstolos)',
        text: `Creio em Deus Pai todo-poderoso,
Criador do céu e da terra.
E em Jesus Cristo, seu único Filho, nosso Senhor,
que foi concebido pelo poder do Espírito Santo,
nasceu da Virgem Maria,
padeceu sob Pôncio Pilatos,
foi crucificado, morto e sepultado.
Desceu aos infernos,
ressuscitou ao terceiro dia,
subiu aos céus,
está sentado à direita de Deus Pai todo-poderoso,
donde há de vir a julgar os vivos e os mortos.
Creio no Espírito Santo,
na Santa Igreja Católica,
na comunhão dos santos,
na remissão dos pecados,
na ressurreição da carne,
na vida eterna.
Amém.`
    }
};

const VERSES = [
    { text: "Tudo posso naquele que me fortalece", ref: "Filipenses 4:13" },
    { text: "Quem perseverar até o fim será salvo", ref: "Mateus 24:13" },
    { text: "Eu sou o caminho, a verdade e a vida", ref: "João 14:6" },
    { text: "Vinde a mim, todos os que estais cansados", ref: "Mateus 11:28" },
    { text: "O Senhor é meu pastor, nada me faltará", ref: "Salmo 23:1" }
];

// ===== ESTADO GLOBAL =====
let timerInterval = null;
let timerMinutes = 25;
let timerSeconds = 0;
let timerRunning = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeApp();
    } catch (error) {
        console.error('Erro ao inicializar aplicação:', error);
    }
});

function initializeApp() {
    updateCurrentDay();
    updateTodayDashboard();
    initTimer();
    initQuickChecklist();
    initMiniCalendar();
    initDailyNotes();
    initThemeToggle();
    initNotifications();
    initExportImport();
    initCollapseSections();
    initWeekViewToggle();
    initMonthlyCalendar();
    initActivityStats();
    initAchievements();
    initKeyboardShortcuts();
    initPrayerModal();
    updateSidebarInfo();

    // Funcionalidades originais
    initSmoothScroll();
    initNavHighlight();
    initObserver();
    initTrackerTable();
    initGoalsTracking();
    displayWeeklyProgress();
}

// ===== ATUALIZAÇÃO DO DIA ATUAL =====
function updateCurrentDay() {
    const now = new Date();
    const dayIndex = now.getDay();
    const dayName = WEEK_DAYS_FULL[dayIndex];

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fullDate = now.toLocaleDateString('pt-BR', options);

    const currentDayName = document.getElementById('current-day-name');
    const currentFullDate = document.getElementById('current-full-date');

    if (currentDayName) currentDayName.textContent = dayName;
    if (currentFullDate) currentFullDate.textContent = fullDate;

    // Atualizar streak
    updateStreak();
}

function updateTodayDashboard() {
    const now = new Date();
    const dayIndex = now.getDay();
    const dayKey = WEEK_DAYS[dayIndex];

    // Atualizar estudo de hoje
    const schedule = STUDY_SCHEDULE[dayKey];
    if (schedule) {
        const materialEl = document.getElementById('today-material');
        const actionEl = document.getElementById('today-action');
        const durationEl = document.getElementById('today-duration');

        if (materialEl) materialEl.textContent = schedule.material;
        if (actionEl) actionEl.textContent = schedule.action;
        if (durationEl) durationEl.textContent = schedule.duration;
    }

    // Atualizar terço de hoje
    const mystery = ROSARY_MYSTERIES[dayKey];
    if (mystery) {
        const emojiEl = document.getElementById('today-mystery-emoji');
        const nameEl = document.getElementById('today-mystery-name');

        if (emojiEl) emojiEl.textContent = mystery.emoji;
        if (nameEl) nameEl.textContent = mystery.name;
    }

    // Atualizar oração da semana
    const weekNumber = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / 604800000);
    const prayerIndex = weekNumber % PRAYER_PLAN.length;
    const weekPrayerEl = document.getElementById('week-prayer-name');
    if (weekPrayerEl) weekPrayerEl.textContent = PRAYER_PLAN[prayerIndex];

    // Atualizar progresso de hoje
    updateTodayProgress();
}

function updateTodayProgress() {
    const today = getTodayKey();
    const checklist = getChecklistData(today);

    const total = 5;
    const completed = Object.values(checklist).filter(v => v).length;
    const percent = Math.round((completed / total) * 100);

    const fillEl = document.getElementById('today-progress-fill');
    const percentEl = document.getElementById('today-progress-percent');

    if (fillEl) fillEl.style.width = `${percent}%`;
    if (percentEl) percentEl.textContent = percent;
}

// ===== TIMER POMODORO =====
function initTimer() {
    const startBtn = document.getElementById('timer-start');
    const pauseBtn = document.getElementById('timer-pause');
    const resetBtn = document.getElementById('timer-reset');
    const presetBtns = document.querySelectorAll('.preset-btn');

    if (startBtn) startBtn.addEventListener('click', startTimer);
    if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
    if (resetBtn) resetBtn.addEventListener('click', resetTimer);

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const minutes = parseInt(btn.dataset.minutes);
            setTimerPreset(minutes);

            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    document.getElementById('timer-start').disabled = true;
    document.getElementById('timer-pause').disabled = false;

    timerInterval = setInterval(() => {
        if (timerSeconds === 0) {
            if (timerMinutes === 0) {
                timerComplete();
                return;
            }
            timerMinutes--;
            timerSeconds = 59;
        } else {
            timerSeconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timer-start').disabled = false;
    document.getElementById('timer-pause').disabled = true;
}

function resetTimer() {
    pauseTimer();
    const activePreset = document.querySelector('.preset-btn.active');
    const minutes = activePreset ? parseInt(activePreset.dataset.minutes) : 25;
    timerMinutes = minutes;
    timerSeconds = 0;
    updateTimerDisplay();
}

function setTimerPreset(minutes) {
    timerMinutes = minutes;
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minsEl = document.getElementById('timer-minutes');
    const secsEl = document.getElementById('timer-seconds');

    if (minsEl) minsEl.textContent = String(timerMinutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(timerSeconds).padStart(2, '0');
}

function timerComplete() {
    pauseTimer();

    // Notificação
    if (Notification.permission === 'granted') {
        new Notification('⏰ Timer Completo!', {
            body: 'Seu tempo de estudo terminou. Bom trabalho! 🙏',
            icon: '/favicon.ico'
        });
    }

    // Alert
    alert('⏰ Timer completo! Bom trabalho! 🙏');
    resetTimer();
}

// ===== CHECKLIST RÁPIDO =====
function initQuickChecklist() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    const today = getTodayKey();
    const checklist = getChecklistData(today);

    checkboxes.forEach(cb => {
        const activity = cb.dataset.activity;
        cb.checked = checklist[activity] || false;

        cb.addEventListener('change', () => {
            checklist[activity] = cb.checked;
            saveChecklistData(today, checklist);
            updateTodayProgress();
            updateStreak();
            updateActivityStats();
        });
    });
}

function getChecklistData(date) {
    const data = localStorage.getItem(`checklist_${date}`);
    return data ? JSON.parse(data) : {
        missa: false,
        estudo: false,
        laudes: false,
        terco: false,
        noturna: false
    };
}

function saveChecklistData(date, data) {
    localStorage.setItem(`checklist_${date}`, JSON.stringify(data));
}

function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// ===== MINI CALENDÁRIO =====
function initMiniCalendar() {
    const grid = document.getElementById('mini-calendar-grid');
    if (!grid) return;

    const today = new Date();
    const dayOfWeek = today.getDay();

    // Pegar o domingo desta semana
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    grid.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const date = new Date(sunday);
        date.setDate(sunday.getDate() + i);

        const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const checklist = getChecklistData(dateKey);
        const completed = Object.values(checklist).filter(v => v).length;

        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = date.getDate();

        if (dateKey === getTodayKey()) {
            dayEl.classList.add('today');
        } else if (completed === 5) {
            dayEl.classList.add('completed');
        } else if (completed > 0) {
            dayEl.classList.add('partial');
        } else {
            dayEl.classList.add('empty');
        }

        grid.appendChild(dayEl);
    }
}

// ===== NOTAS DIÁRIAS =====
function initDailyNotes() {
    const notesArea = document.getElementById('daily-notes');
    const saveBtn = document.getElementById('save-notes');

    if (!notesArea || !saveBtn) return;

    const today = getTodayKey();
    const savedNotes = localStorage.getItem(`notes_${today}`) || '';
    notesArea.value = savedNotes;

    saveBtn.addEventListener('click', () => {
        localStorage.setItem(`notes_${today}`, notesArea.value);

        // Feedback visual
        saveBtn.textContent = 'Salvo! ✓';
        setTimeout(() => {
            saveBtn.textContent = 'Salvar';
        }, 2000);
    });

    // Auto-save a cada 30 segundos
    setInterval(() => {
        if (notesArea.value !== savedNotes) {
            localStorage.setItem(`notes_${today}`, notesArea.value);
        }
    }, 30000);
}

// ===== STREAK (DIAS CONSECUTIVOS) =====
function updateStreak() {
    const streakEl = document.getElementById('streak-count');
    if (!streakEl) return;

    const streak = calculateStreak();
    streakEl.textContent = streak;

    // Salvar melhor streak
    const bestStreak = parseInt(localStorage.getItem('bestStreak') || '0');
    if (streak > bestStreak) {
        localStorage.setItem('bestStreak', streak);
    }
}

function calculateStreak() {
    let streak = 0;
    let currentDate = new Date();

    // Verificar se hoje foi completo
    const todayKey = getTodayKey();
    const todayData = getChecklistData(todayKey);
    const todayComplete = Object.values(todayData).filter(v => v).length >= 4;

    if (!todayComplete) {
        // Se hoje não está completo, começar de ontem
        currentDate.setDate(currentDate.getDate() - 1);
    }

    // Contar dias consecutivos
    while (true) {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        const data = getChecklistData(dateKey);
        const completed = Object.values(data).filter(v => v).length;

        if (completed >= 4) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }

        // Limite de 365 dias
        if (streak >= 365) break;
    }

    return streak;
}

// ===== TEMA ESCURO =====
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.querySelector('.theme-icon').textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        themeBtn.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ===== NOTIFICAÇÕES =====
function initNotifications() {
    const notifBtn = document.getElementById('notifications-toggle');
    if (!notifBtn) return;

    notifBtn.addEventListener('click', () => {
        if (Notification.permission === 'granted') {
            alert('Notificações já estão ativadas! ✅');
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('✅ Notificações Ativadas!', {
                        body: 'Você receberá lembretes de estudo e oração.',
                        icon: '/favicon.ico'
                    });
                    scheduleNotifications();
                }
            });
        } else {
            alert('Notificações bloqueadas. Por favor, ative nas configurações do navegador.');
        }
    });

    // Agendar notificações se já tem permissão
    if (Notification.permission === 'granted') {
        scheduleNotifications();
    }
}

function scheduleNotifications() {
    // Notificação às 8:20 (horário de estudo)
    const now = new Date();
    const studyTime = new Date();
    studyTime.setHours(8, 20, 0, 0);

    if (studyTime > now) {
        const timeUntil = studyTime - now;
        setTimeout(() => {
            if (Notification.permission === 'granted') {
                new Notification('📚 Hora de Estudar!', {
                    body: 'Seu horário de estudos começou. Bom trabalho! 🙏',
                    icon: '/favicon.ico'
                });
            }
        }, timeUntil);
    }
}

// ===== EXPORT/IMPORT =====
function initExportImport() {
    const exportBtn = document.getElementById('export-data');
    const importBtn = document.getElementById('import-data');
    const fileInput = document.getElementById('import-file-input');

    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }

    if (importBtn && fileInput) {
        importBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', importData);
    }
}

function exportData() {
    const data = {};

    // Exportar todos os dados do localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rotina-estudos-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            if (confirm('Isso irá substituir todos os dados atuais. Deseja continuar?')) {
                // Limpar localStorage
                localStorage.clear();

                // Importar novos dados
                for (const [key, value] of Object.entries(data)) {
                    localStorage.setItem(key, value);
                }

                alert('Dados importados com sucesso! Atualizando página...');
                location.reload();
            }
        } catch (error) {
            alert('Erro ao importar dados. Arquivo inválido.');
        }
    };
    reader.readAsText(file);
}

// ===== SEÇÕES COLAPSÁVEIS =====
function initCollapseSections() {
    const collapseBtns = document.querySelectorAll('.collapse-btn');

    collapseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.closest('.section-collapsible');
            const content = section.querySelector('.section-content');

            if (content.classList.contains('collapsed')) {
                content.classList.remove('collapsed');
                content.style.maxHeight = content.scrollHeight + 'px';
                btn.textContent = '−';
            } else {
                content.style.maxHeight = '0';
                content.classList.add('collapsed');
                btn.textContent = '+';
            }
        });

        // Inicializar max-height
        const section = btn.closest('.section-collapsible');
        const content = section.querySelector('.section-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    });
}

// ===== MODO COMPACTO/EXPANDIDO =====
function initWeekViewToggle() {
    const toggleBtn = document.getElementById('toggle-week-view');
    const weekSchedule = document.getElementById('week-schedule');
    const viewText = document.getElementById('view-mode-text');

    if (!toggleBtn || !weekSchedule) return;

    toggleBtn.addEventListener('click', () => {
        weekSchedule.classList.toggle('compact');
        const isCompact = weekSchedule.classList.contains('compact');
        viewText.textContent = isCompact ? 'Modo Expandido' : 'Modo Compacto';
    });
}

// ===== CALENDÁRIO MENSAL =====
function initMonthlyCalendar() {
    const calendar = document.getElementById('monthly-calendar');
    if (!calendar) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();

    calendar.innerHTML = '';

    // Dias vazios no início
    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'month-day empty';
        calendar.appendChild(emptyDay);
    }

    // Dias do mês
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const checklist = getChecklistData(dateKey);
        const completed = Object.values(checklist).filter(v => v).length;

        const dayEl = document.createElement('div');
        dayEl.className = 'month-day';
        dayEl.textContent = day;

        if (dateKey === getTodayKey()) {
            dayEl.classList.add('today');
        }

        if (completed === 5) {
            dayEl.classList.add('completed');
        } else if (completed > 0) {
            dayEl.classList.add('partial');
        }

        calendar.appendChild(dayEl);
    }
}

// ===== ESTATÍSTICAS POR ATIVIDADE =====
function initActivityStats() {
    updateActivityStats();
}

function updateActivityStats() {
    const activities = ['missa', 'estudo', 'laudes', 'terco', 'noturna'];
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    activities.forEach(activity => {
        let total = 0;
        let completed = 0;

        for (let d = new Date(thirtyDaysAgo); d <= now; d.setDate(d.getDate() + 1)) {
            const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            const data = getChecklistData(dateKey);

            total++;
            if (data[activity]) completed++;
        }

        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        const barFill = document.querySelector(`.bar-fill[data-activity="${activity}"]`);
        const percentText = document.querySelector(`.activity-percent[data-activity="${activity}-percent"]`);

        if (barFill) barFill.style.width = `${percent}%`;
        if (percentText) percentText.textContent = `${percent}%`;
    });
}

// ===== CONQUISTAS =====
function initAchievements() {
    updateAchievements();
}

function updateAchievements() {
    const streak = calculateStreak();

    // Primeira semana
    if (streak >= 7) {
        unlockAchievement('week1');
    }

    // 7 dias seguidos
    if (streak >= 7) {
        unlockAchievement('streak7');
    }

    // 30 dias seguidos
    if (streak >= 30) {
        unlockAchievement('streak30');
    }

    // Todas as orações memorizadas
    const prayersMemorized = localStorage.getItem('prayersMemorized');
    if (prayersMemorized === 'true') {
        unlockAchievement('prayers');
    }
}

function unlockAchievement(achievementId) {
    const achievement = document.querySelector(`.achievement[data-achievement="${achievementId}"]`);
    if (achievement && achievement.classList.contains('locked')) {
        achievement.classList.remove('locked');
        achievement.classList.add('unlocked');

        const wasUnlocked = localStorage.getItem(`achievement_${achievementId}`);
        if (!wasUnlocked) {
            localStorage.setItem(`achievement_${achievementId}`, 'true');

            // Notificação
            if (Notification.permission === 'granted') {
                new Notification('🏆 Nova Conquista!', {
                    body: achievement.querySelector('.achievement-name').textContent,
                    icon: '/favicon.ico'
                });
            }
        }
    }
}

// ===== ATALHOS DE TECLADO =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + número para navegar
        if (e.altKey && e.key >= '1' && e.key <= '7') {
            e.preventDefault();
            const links = document.querySelectorAll('nav a');
            const index = parseInt(e.key) - 1;
            if (links[index]) {
                links[index].click();
            }
        }

        // Ctrl + S para salvar notas
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            const saveBtn = document.getElementById('save-notes');
            if (saveBtn) saveBtn.click();
        }
    });
}

// ===== MODAL DE ORAÇÕES =====
function initPrayerModal() {
    const modal = document.getElementById('prayer-modal');
    const closeBtn = modal?.querySelector('.modal-close');
    const prayerLinks = document.querySelectorAll('.prayer-link');

    prayerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const prayerKey = link.dataset.prayer;
            const prayer = PRAYERS_TEXT[prayerKey];

            if (prayer && modal) {
                document.getElementById('modal-prayer-title').textContent = prayer.title;
                document.getElementById('modal-prayer-text').innerHTML = prayer.text.replace(/\n/g, '<br>');
                modal.classList.add('active');
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// ===== ATUALIZAR INFO SIDEBAR DIREITA =====
function updateSidebarInfo() {
    // Terço do dia
    const now = new Date();
    const dayKey = WEEK_DAYS[now.getDay()];
    const mystery = ROSARY_MYSTERIES[dayKey];

    const sidebarRosary = document.getElementById('sidebar-rosary');
    if (sidebarRosary && mystery) {
        sidebarRosary.querySelector('.mystery-emoji-large').textContent = mystery.emoji;
        sidebarRosary.querySelector('.mystery-name-large').textContent = mystery.name;
    }

    // Versículo aleatório
    const verse = VERSES[Math.floor(Math.random() * VERSES.length)];
    const verseText = document.getElementById('verse-text');
    const verseRef = document.getElementById('verse-ref');

    if (verseText) verseText.textContent = `"${verse.text}"`;
    if (verseRef) verseRef.textContent = verse.ref;
}

// ===== FUNCIONALIDADES ORIGINAIS =====
function initSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initNavHighlight() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.day-card, .prayer-card, .stat-card, .material-category').forEach(el => {
        observer.observe(el);
    });
}

function initTrackerTable() {
    const trackerTable = document.querySelector('.tracker-table table');
    if (trackerTable) {
        trackerTable.addEventListener('click', (e) => {
            if (e.target.tagName === 'TD' && e.target.textContent.trim() === '⬜') {
                e.target.textContent = '✅';
                e.target.style.backgroundColor = 'rgba(39, 174, 96, 0.1)';
                saveTrackerState();
            } else if (e.target.tagName === 'TD' && e.target.textContent.trim() === '✅') {
                e.target.textContent = '⬜';
                e.target.style.backgroundColor = '';
                saveTrackerState();
            }
        });

        loadTrackerState();
    }
}

function saveTrackerState() {
    const cells = document.querySelectorAll('.tracker-table td');
    const state = Array.from(cells).map(cell => cell.textContent.trim());
    localStorage.setItem('trackerState', JSON.stringify(state));
}

function loadTrackerState() {
    const savedState = localStorage.getItem('trackerState');
    if (savedState) {
        const state = JSON.parse(savedState);
        const cells = document.querySelectorAll('.tracker-table td');
        cells.forEach((cell, index) => {
            if (state[index] === '✅') {
                cell.textContent = '✅';
                cell.style.backgroundColor = 'rgba(39, 174, 96, 0.1)';
            }
        });
    }
}

function initGoalsTracking() {
    document.querySelectorAll('.goal-category li').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            if (this.textContent.startsWith('☐')) {
                this.textContent = this.textContent.replace('☐', '✅');
                this.style.color = '#27AE60';
                this.style.fontWeight = '600';
                saveGoalsState();
            } else if (this.textContent.startsWith('✅')) {
                this.textContent = this.textContent.replace('✅', '☐');
                this.style.color = '';
                this.style.fontWeight = '';
                saveGoalsState();
            }
        });
    });

    loadGoalsState();
}

function saveGoalsState() {
    const goals = document.querySelectorAll('.goal-category li');
    const state = Array.from(goals).map(goal => ({
        text: goal.textContent,
        checked: goal.textContent.startsWith('✅')
    }));
    localStorage.setItem('goalsState', JSON.stringify(state));
}

function loadGoalsState() {
    const savedState = localStorage.getItem('goalsState');
    if (savedState) {
        const state = JSON.parse(savedState);
        const goals = document.querySelectorAll('.goal-category li');
        goals.forEach((goal, index) => {
            if (state[index] && state[index].checked) {
                goal.textContent = state[index].text;
                goal.style.color = '#27AE60';
                goal.style.fontWeight = '600';
            }
        });
    }
}

function displayWeeklyProgress() {
    const progress = calculateWeeklyProgress();
    const trackerIntro = document.querySelector('.tracker-intro');

    if (trackerIntro && !document.querySelector('.progress-display')) {
        const progressDiv = document.createElement('div');
        progressDiv.className = 'progress-display';
        progressDiv.style.marginTop = '1rem';
        progressDiv.style.padding = '1rem';
        progressDiv.style.backgroundColor = '#fff';
        progressDiv.style.borderRadius = '8px';
        progressDiv.style.textAlign = 'center';

        const progressBar = document.createElement('div');
        progressBar.style.width = '100%';
        progressBar.style.height = '30px';
        progressBar.style.backgroundColor = '#f0f0f0';
        progressBar.style.borderRadius = '15px';
        progressBar.style.overflow = 'hidden';
        progressBar.style.marginTop = '0.5rem';

        const progressFill = document.createElement('div');
        progressFill.style.width = `${progress}%`;
        progressFill.style.height = '100%';
        progressFill.style.backgroundColor = progress >= 70 ? '#27AE60' : progress >= 40 ? '#F39C12' : '#E74C3C';
        progressFill.style.transition = 'width 0.5s ease';
        progressFill.style.display = 'flex';
        progressFill.style.alignItems = 'center';
        progressFill.style.justifyContent = 'center';
        progressFill.style.color = 'white';
        progressFill.style.fontWeight = 'bold';
        progressFill.textContent = `${progress}%`;

        progressBar.appendChild(progressFill);

        const progressLabel = document.createElement('p');
        progressLabel.style.marginTop = '0.5rem';
        progressLabel.style.fontWeight = 'bold';
        progressLabel.style.color = '#8B4513';
        progressLabel.textContent = `Progresso da Semana: ${progress}%`;

        progressDiv.appendChild(progressLabel);
        progressDiv.appendChild(progressBar);
        trackerIntro.appendChild(progressDiv);
    }
}

function calculateWeeklyProgress() {
    const cells = document.querySelectorAll('.tracker-table tbody td');
    let total = 0;
    let completed = 0;

    cells.forEach(cell => {
        if (cell.textContent.trim() === '⬜' || cell.textContent.trim() === '✅') {
            total++;
            if (cell.textContent.trim() === '✅') {
                completed++;
            }
        }
    });

    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// ===== SERVICE WORKER (PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch((error) => {
                console.log('Falha ao registrar Service Worker:', error);
            });
    });
}

// Console Easter Egg
console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ✝️  Rotina de Estudos Católicos - Versão 2.0          ║
║                                                           ║
║   "Tudo posso naquele que me fortalece"                  ║
║   — Filipenses 4:13                                      ║
║                                                           ║
║   Que o Espírito Santo ilumine seus estudos!             ║
║                                                           ║
║   Atalhos:                                               ║
║   - Alt + 1-7: Navegar entre seções                     ║
║   - Ctrl + S: Salvar notas                              ║
║                                                           ║
║   PWA: Instalável e funciona offline! 📱                ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
