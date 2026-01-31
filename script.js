// ===============================================
// ROTINA DE ESTUDOS CATÓLICOS - SCRIPTS
// ===============================================

// Smooth scrolling para links de navegação
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

// Highlight do menu de navegação baseado na seção visível
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

// Adicionar classe para animação ao scroll
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

// Observar todos os cards e seções
document.querySelectorAll('.day-card, .prayer-card, .stat-card, .material-category').forEach(el => {
    observer.observe(el);
});

// Funcionalidade de tracker interativo (checkboxes)
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
    
    // Carregar estado salvo do tracker
    loadTrackerState();
}

// Salvar estado do tracker no localStorage
function saveTrackerState() {
    const cells = document.querySelectorAll('.tracker-table td');
    const state = Array.from(cells).map(cell => cell.textContent.trim());
    localStorage.setItem('trackerState', JSON.stringify(state));
}

// Carregar estado do tracker do localStorage
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

// Funcionalidade para marcar metas como completas
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

// Salvar estado das metas
function saveGoalsState() {
    const goals = document.querySelectorAll('.goal-category li');
    const state = Array.from(goals).map(goal => ({
        text: goal.textContent,
        checked: goal.textContent.startsWith('✅')
    }));
    localStorage.setItem('goalsState', JSON.stringify(state));
}

// Carregar estado das metas
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

// Carregar metas ao iniciar
loadGoalsState();

// Botão para resetar tracker semanal (adicionar no HTML se necessário)
function resetWeeklyTracker() {
    if (confirm('Tem certeza que deseja resetar o tracker semanal?')) {
        const cells = document.querySelectorAll('.tracker-table td');
        cells.forEach(cell => {
            if (cell.textContent.trim() === '✅') {
                cell.textContent = '⬜';
                cell.style.backgroundColor = '';
            }
        });
        localStorage.removeItem('trackerState');
    }
}

// Adicionar data atual ao título
window.addEventListener('load', () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('pt-BR', options);
    
    // Criar elemento de data se não existir
    const header = document.querySelector('header .container');
    if (header && !document.querySelector('.current-date')) {
        const dateElement = document.createElement('p');
        dateElement.className = 'current-date';
        dateElement.style.marginTop = '1rem';
        dateElement.style.fontSize = '0.9rem';
        dateElement.style.opacity = '0.9';
        dateElement.textContent = dateString;
        header.appendChild(dateElement);
    }
});

// Função para calcular progresso semanal
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

// Mostrar progresso semanal
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

// Atualizar progresso quando o tracker mudar
const trackerObserver = new MutationObserver(() => {
    const progressDisplay = document.querySelector('.progress-display');
    if (progressDisplay) {
        progressDisplay.remove();
    }
    displayWeeklyProgress();
});

if (trackerTable) {
    trackerObserver.observe(trackerTable, {
        childList: true,
        subtree: true,
        characterData: true
    });
}

// Exibir progresso ao carregar
displayWeeklyProgress();

// Adicionar efeito de fade-in aos elementos
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    nav a.active {
        background-color: var(--primary-color);
        color: var(--bg-white);
    }
`;
document.head.appendChild(style);

// Console Easter Egg
console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ✝️  Rotina de Estudos Católicos                        ║
║                                                           ║
║   "Tudo posso naquele que me fortalece"                  ║
║   — Filipenses 4:13                                      ║
║                                                           ║
║   Que o Espírito Santo ilumine seus estudos!             ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);