/**
 * MNC Code Hub — SPA Application Logic
 * Supports:
 * 1. MNC Coding Rounds (Accenture, Capgemini, Cognizant, Tech Mahindra, TCS, HCL)
 * 2. Python OOP & Top 30 Interview Questions
 * 3. SQL Tutorials & Top 50 Interview Queries
 * 4. Verbal Ability & English Preparation (Grammar Rules, Para Jumbles, Fill Blanks, Vocab)
 * 5. General Placement Hub (Subject-Wise Theory & FAQs: OS, DBMS, CN, DSA, OOP, Aptitude, HR)
 */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const backBtn = document.getElementById('back-btn');
  const brandLink = document.getElementById('brand-link');
  const breadcrumb = document.getElementById('breadcrumb');
  const searchInput = document.getElementById('search-input');
  const themeToggle = document.getElementById('theme-toggle');
  const secBtnImportant = document.getElementById('sec-btn-important');
  const secBtnMethods = document.getElementById('sec-btn-methods');
  const secBtnMnc = document.getElementById('sec-btn-mnc');
  const secBtnPython = document.getElementById('sec-btn-python');
  const secBtnSql = document.getElementById('sec-btn-sql');
  const secBtnVerbal = document.getElementById('sec-btn-verbal');
  const secBtnDsa1 = document.getElementById('sec-btn-dsa1');
  const secBtnDsa2 = document.getElementById('sec-btn-dsa2');
  const secBtnGeneral = document.getElementById('sec-btn-general');

  let currentSection = 'important'; // 'important' | 'methods' | 'mnc' | 'python-oop' | 'sql' | 'verbal' | 'dsa1' | 'dsa2' | 'general'
  let currentView = 'important-home'; // 'important-home' | 'methods-home' | 'home' | 'company' | 'question' | 'py-home' | 'py-concept' | 'sql-home' | 'verbal-home' | 'dsa1-home' | 'dsa2-home' | 'general-home'
  let currentCompany = null;
  let currentQuestion = null;
  let currentConceptId = null;
  let pyFilter = 'all';
  let sqlFilter = 'all';
  let verbalTab = 'rules'; // 'rules' | 'jumbles' | 'blanks' | 'completion' | 'vocab'
  let generalSubject = 'os'; // 'os' | 'dbms' | 'cn' | 'dsa' | 'oop' | 'aptitude' | 'hr'
  let generalFilter = 'all'; // 'all' | 'theory' | 'faqs' | 'worksheets' | 'dsa1' | 'dsa2'
  let searchTerm = '';

  // ── Most Important Code State ──
  let importantTopic = 'all';
  let importantDifficulty = 'all'; // 'all' | 'easy' | 'medium' | 'hard'
  let importantSort = 'default'; // 'default' | 'easy-first' | 'hard-first' | 'title' | 'topic'
  let importantCardLangs = {}; // { [cardId]: 'python' | 'java' | 'cpp' }
  let importantSolvedSet = new Set();
  try {
    const saved = localStorage.getItem('imp_code_solved');
    if (saved) importantSolvedSet = new Set(JSON.parse(saved));
  } catch (e) {}

  // ── Methods & Practices State ──
  let methodsCategory = 'all'; // 'all' | 'Arrays' | 'String' | 'StringBuilder' | 'Collections' | 'HashMap' | 'HashSet' | 'Math'

  // ── DSA 1: Patterns State ──
  let dsa1Filter = 'all'; // 'all' | pattern number

  // ── DSA 2: 90-Day Roadmap State ──
  let dsa2TopicFilter = 'all';
  let dsa2DiffFilter = 'all'; // 'all' | 'Easy' | 'Medium' | 'Hard' | 'Review'
  let dsa2SolvedSet = new Set();
  try {
    const savedDsa2 = localStorage.getItem('dsa2_solved');
    if (savedDsa2) dsa2SolvedSet = new Set(JSON.parse(savedDsa2));
  } catch (e) {}

  // ── Theme Toggle ──
  themeToggle.addEventListener('click', () => {
    const t = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', t === 'light' ? 'light' : '');
    if (t === 'dark') document.body.removeAttribute('data-theme');
  });

  // ── Section Switching ──
  if (secBtnImportant) secBtnImportant.addEventListener('click', () => switchSection('important'));
  if (secBtnMethods) secBtnMethods.addEventListener('click', () => switchSection('methods'));
  if (secBtnMnc) secBtnMnc.addEventListener('click', () => switchSection('mnc'));
  if (secBtnPython) secBtnPython.addEventListener('click', () => switchSection('python-oop'));
  if (secBtnSql) secBtnSql.addEventListener('click', () => switchSection('sql'));
  if (secBtnVerbal) secBtnVerbal.addEventListener('click', () => switchSection('verbal'));
  if (secBtnDsa1) secBtnDsa1.addEventListener('click', () => switchSection('dsa1'));
  if (secBtnDsa2) secBtnDsa2.addEventListener('click', () => switchSection('dsa2'));
  if (secBtnGeneral) secBtnGeneral.addEventListener('click', () => switchSection('general'));

  function switchSection(sec) {
    currentSection = sec;
    updateSectionButtons();
    searchTerm = '';
    searchInput.value = '';
    if (sec === 'important') navigate('important-home');
    else if (sec === 'methods') navigate('methods-home');
    else if (sec === 'mnc') navigate('home');
    else if (sec === 'python-oop') navigate('py-home');
    else if (sec === 'sql') navigate('sql-home');
    else if (sec === 'verbal') navigate('verbal-home');
    else if (sec === 'dsa1') navigate('dsa1-home');
    else if (sec === 'dsa2') navigate('dsa2-home');
    else if (sec === 'general') navigate('general-home');
  }

  function updateSectionButtons() {
    if (secBtnImportant) secBtnImportant.classList.toggle('active', currentSection === 'important');
    if (secBtnMethods) secBtnMethods.classList.toggle('active', currentSection === 'methods');
    if (secBtnMnc) secBtnMnc.classList.toggle('active', currentSection === 'mnc');
    if (secBtnPython) secBtnPython.classList.toggle('active', currentSection === 'python-oop');
    if (secBtnSql) secBtnSql.classList.toggle('active', currentSection === 'sql');
    if (secBtnVerbal) secBtnVerbal.classList.toggle('active', currentSection === 'verbal');
    if (secBtnDsa1) secBtnDsa1.classList.toggle('active', currentSection === 'dsa1');
    if (secBtnDsa2) secBtnDsa2.classList.toggle('active', currentSection === 'dsa2');
    if (secBtnGeneral) secBtnGeneral.classList.toggle('active', currentSection === 'general');
  }

  // ── Navigation ──
  brandLink.addEventListener('click', () => {
    if (currentSection === 'important') navigate('important-home');
    else if (currentSection === 'methods') navigate('methods-home');
    else if (currentSection === 'mnc') navigate('home');
    else if (currentSection === 'python-oop') navigate('py-home');
    else if (currentSection === 'sql') navigate('sql-home');
    else if (currentSection === 'verbal') navigate('verbal-home');
    else if (currentSection === 'dsa1') navigate('dsa1-home');
    else if (currentSection === 'dsa2') navigate('dsa2-home');
    else navigate('general-home');
  });
  backBtn.addEventListener('click', goBack);

  function navigate(view, p1, p2) {
    currentView = view;
    if (view === 'important-home') {
      currentSection = 'important';
    } else if (view === 'methods-home') {
      currentSection = 'methods';
    } else if (view === 'home') {
      currentSection = 'mnc';
      currentCompany = null;
      currentQuestion = null;
    } else if (view === 'company') {
      currentSection = 'mnc';
      currentCompany = p1;
      currentQuestion = null;
    } else if (view === 'question') {
      currentSection = 'mnc';
      currentCompany = p1;
      currentQuestion = p2;
    } else if (view === 'py-home') {
      currentSection = 'python-oop';
      currentConceptId = null;
    } else if (view === 'py-concept') {
      currentSection = 'python-oop';
      currentConceptId = p1;
    } else if (view === 'sql-home') {
      currentSection = 'sql';
    } else if (view === 'verbal-home') {
      currentSection = 'verbal';
    } else if (view === 'dsa1-home') {
      currentSection = 'dsa1';
    } else if (view === 'dsa2-home') {
      currentSection = 'dsa2';
    } else if (view === 'general-home') {
      currentSection = 'general';
    }

    updateSectionButtons();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    if (currentView === 'question') navigate('company', currentCompany);
    else if (currentView === 'company') navigate('home');
    else if (currentView === 'py-concept') navigate('py-home');
    else if (currentView === 'home' || currentView === 'methods-home' || currentView === 'py-home' || currentView === 'sql-home' || currentView === 'verbal-home' || currentView === 'dsa1-home' || currentView === 'dsa2-home' || currentView === 'general-home') switchSection('important');
  }

  // ── Search ──
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    render();
  });

  // ── Render Dispatcher ──
  function render() {
    backBtn.classList.toggle('hidden', currentView === 'important-home' || currentView === 'methods-home' || currentView === 'home' || currentView === 'py-home' || currentView === 'sql-home' || currentView === 'verbal-home' || currentView === 'dsa1-home' || currentView === 'dsa2-home' || currentView === 'general-home');
    updateBreadcrumb();

    if (currentView === 'important-home') renderImportantHome();
    else if (currentView === 'methods-home') renderMethodsHome();
    else if (currentView === 'home') renderHome();
    else if (currentView === 'company') renderCompany();
    else if (currentView === 'question') renderQuestion();
    else if (currentView === 'py-home') renderPythonHome();
    else if (currentView === 'py-concept') renderPythonConceptDetail();
    else if (currentView === 'sql-home') renderSqlHome();
    else if (currentView === 'verbal-home') renderVerbalHome();
    else if (currentView === 'dsa1-home') renderDsa1Home();
    else if (currentView === 'dsa2-home') renderDsa2Home();
    else if (currentView === 'general-home') renderGeneralHome();
  }

  function updateBreadcrumb() {
    if (currentView === 'important-home') {
      breadcrumb.innerHTML = '';
      return;
    }
    let html = '<span class="crumb" id="crumb-root">Home</span>';

    if (currentSection === 'important') {
      html += '<span class="sep"> / </span><span class="crumb active">Most Important Code</span>';
    } else if (currentSection === 'methods') {
      html += '<span class="sep"> / </span><span class="crumb active">Built-in Methods & Practices</span>';
    } else if (currentSection === 'mnc') {
      if (currentCompany) {
        const co = getCompany(currentCompany);
        html += '<span class="sep"> / </span>';
        if (currentView === 'question') {
          html += `<span class="crumb" data-co="${currentCompany}">${co.name}</span>`;
        } else {
          html += `<span class="crumb active">${co.name}</span>`;
        }
      }
      if (currentQuestion !== null) {
        html += `<span class="sep"> / </span><span class="crumb active">Q${currentQuestion + 1}</span>`;
      }
    } else if (currentSection === 'python-oop') {
      html += '<span class="sep"> / </span>';
      if (currentView === 'py-concept') {
        const concept = PYTHON_OOP_DATA.concepts.find(c => c.id === currentConceptId);
        html += `<span class="crumb" id="crumb-py-home">Python OOP</span>`;
        html += `<span class="sep"> / </span><span class="crumb active">${escapeHtml(concept ? concept.title : 'Concept')}</span>`;
      } else {
        html += '<span class="crumb active">Python OOP & Top 30</span>';
      }
    } else if (currentSection === 'sql') {
      html += '<span class="sep"> / </span><span class="crumb active">SQL Tutorials & Queries</span>';
    } else if (currentSection === 'verbal') {
      html += '<span class="sep"> / </span><span class="crumb active">Verbal Ability & English</span>';
    } else if (currentSection === 'dsa1') {
      html += '<span class="sep"> / </span><span class="crumb active">DSA 1: 18 Patterns</span>';
    } else if (currentSection === 'dsa2') {
      html += '<span class="sep"> / </span><span class="crumb active">DSA 2: 90-Day Roadmap (150 Qs)</span>';
    } else if (currentSection === 'general') {
      html += '<span class="sep"> / </span><span class="crumb active">General Placement Hub</span>';
    }

    breadcrumb.innerHTML = html;

    const crumbRoot = document.getElementById('crumb-root');
    if (crumbRoot) crumbRoot.addEventListener('click', () => switchSection('important'));

    const crumbPyHome = document.getElementById('crumb-py-home');
    if (crumbPyHome) crumbPyHome.addEventListener('click', () => navigate('py-home'));

    const coCrumb = breadcrumb.querySelector('[data-co]');
    if (coCrumb) coCrumb.addEventListener('click', () => navigate('company', currentCompany));
  }

  // ── Helpers ──
  function getCompany(id) { return QUESTIONS_DATA.find(c => c.id === id); }
  function getQuestion(compId, qIdx) { return getCompany(compId).questions[qIdx]; }
  function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function totalMncQuestions() { return QUESTIONS_DATA.reduce((s,c) => s + c.questions.length, 0); }

  // ============================================================
  // ── 0. MOST IMPORTANT CODE SECTION RENDERER ──
  // ============================================================
  function renderImportantHome() {
    if (typeof IMPORTANT_CODE_DATA === 'undefined' || !IMPORTANT_CODE_DATA.length) {
      app.innerHTML = '<div class="no-results"><i class="ri-fire-line"></i><p>No questions found in dataset.</p></div>';
      return;
    }

    // Preserve focus if typing into search
    const hadFocus = document.activeElement && document.activeElement.id === 'imp-search-input';
    const selStart = hadFocus ? document.activeElement.selectionStart : null;
    const selEnd = hadFocus ? document.activeElement.selectionEnd : null;

    // Dynamic unique topics from dataset
    const uniqueTopics = ['all', ...Array.from(new Set(IMPORTANT_CODE_DATA.map(q => q.topic)))];

    // Filter
    let filtered = IMPORTANT_CODE_DATA.filter(q => {
      if (importantTopic !== 'all' && q.topic !== importantTopic) return false;
      if (importantDifficulty !== 'all' && q.difficulty.toLowerCase() !== importantDifficulty.toLowerCase()) return false;
      if (searchTerm) {
        const titleMatch = q.title.toLowerCase().includes(searchTerm);
        const topicMatch = q.topic.toLowerCase().includes(searchTerm);
        const diffMatch = q.difficulty.toLowerCase().includes(searchTerm);
        const stmtMatch = q.statement.toLowerCase().includes(searchTerm);
        const coMatch = q.companies && q.companies.some(c => c.toLowerCase().includes(searchTerm));
        const tagMatch = q.tags && q.tags.some(t => t.toLowerCase().includes(searchTerm));
        if (!titleMatch && !topicMatch && !diffMatch && !stmtMatch && !coMatch && !tagMatch) {
          return false;
        }
      }
      return true;
    });

    // Sort
    const diffWeights = { 'easy': 1, 'medium': 2, 'hard': 3 };
    if (importantSort === 'easy-first') {
      filtered.sort((a, b) => (diffWeights[a.difficulty.toLowerCase()] || 0) - (diffWeights[b.difficulty.toLowerCase()] || 0));
    } else if (importantSort === 'hard-first') {
      filtered.sort((a, b) => (diffWeights[b.difficulty.toLowerCase()] || 0) - (diffWeights[a.difficulty.toLowerCase()] || 0));
    } else if (importantSort === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (importantSort === 'topic') {
      filtered.sort((a, b) => a.topic.localeCompare(b.topic));
    }

    // Counts
    const totalCount = IMPORTANT_CODE_DATA.length;
    const easyCount = IMPORTANT_CODE_DATA.filter(q => q.difficulty.toLowerCase() === 'easy').length;
    const medCount = IMPORTANT_CODE_DATA.filter(q => q.difficulty.toLowerCase() === 'medium').length;
    const hardCount = IMPORTANT_CODE_DATA.filter(q => q.difficulty.toLowerCase() === 'hard').length;
    const solvedCount = IMPORTANT_CODE_DATA.filter(q => importantSolvedSet.has(q.id)).length;

    // Check if any filter is active
    const hasFilter = importantTopic !== 'all' || importantDifficulty !== 'all' || searchTerm !== '' || importantSort !== 'default';

    let html = `
      <div class="imp-hero animate-in">
        <div class="imp-hero-badge"><i class="ri-fire-fill"></i> Primary Round Essentials</div>
        <h1>Most Important <span class="gradient-fire">Interview Code</span></h1>
        <p>Curated high-frequency DSA & coding questions asked by top MNCs (Amazon, Microsoft, Google, TCS, Accenture) organized topic-wise with multi-language code solutions (Python, Java, C++).</p>
        
        <div class="imp-stats-grid">
          <div class="imp-stat-card total">
            <div class="icon-box"><i class="ri-code-s-slash-line"></i></div>
            <div>
              <div class="val">${totalCount}</div>
              <div class="lbl">Total Questions</div>
            </div>
          </div>
          <div class="imp-stat-card easy">
            <div class="icon-box"><i class="ri-check-line"></i></div>
            <div>
              <div class="val">${easyCount}</div>
              <div class="lbl">Easy</div>
            </div>
          </div>
          <div class="imp-stat-card medium">
            <div class="icon-box"><i class="ri-scales-3-line"></i></div>
            <div>
              <div class="val">${medCount}</div>
              <div class="lbl">Medium</div>
            </div>
          </div>
          <div class="imp-stat-card hard">
            <div class="icon-box"><i class="ri-flashlight-line"></i></div>
            <div>
              <div class="val">${hardCount}</div>
              <div class="lbl">Difficult / Hard</div>
            </div>
          </div>
          <div class="imp-stat-card solved">
            <div class="icon-box"><i class="ri-task-line"></i></div>
            <div>
              <div class="val">${solvedCount} / ${totalCount}</div>
              <div class="lbl">Completed</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls Panel -->
      <div class="imp-controls-panel animate-in delay-1">
        <!-- Search & Sort Row -->
        <div class="imp-search-sort-row">
          <div class="imp-search-box">
            <i class="ri-search-line"></i>
            <input type="text" id="imp-search-input" placeholder="Search by problem name, company, topic or concept..." value="${escapeHtml(searchTerm)}">
            <button class="clear-btn ${searchTerm ? 'visible' : ''}" id="imp-clear-search" title="Clear Search"><i class="ri-close-line"></i></button>
          </div>

          <div class="imp-sort-box">
            <label for="imp-sort-select"><i class="ri-sort-desc"></i> Sort By:</label>
            <select id="imp-sort-select" class="imp-sort-select">
              <option value="default" ${importantSort === 'default' ? 'selected' : ''}>🔥 Curated (Most Asked)</option>
              <option value="easy-first" ${importantSort === 'easy-first' ? 'selected' : ''}>🟢 Easy → Medium → Difficult</option>
              <option value="hard-first" ${importantSort === 'hard-first' ? 'selected' : ''}>🔴 Difficult → Medium → Easy</option>
              <option value="title" ${importantSort === 'title' ? 'selected' : ''}>🔤 Title (A to Z)</option>
              <option value="topic" ${importantSort === 'topic' ? 'selected' : ''}>📂 Topic (A to Z)</option>
            </select>
          </div>
        </div>

        <!-- Difficulty Filter Row -->
        <div class="imp-diff-filter-row">
          <span class="imp-filter-label"><i class="ri-filter-3-line"></i> Difficulty:</span>
          <button class="imp-diff-btn ${importantDifficulty === 'all' ? 'active' : ''}" data-diff="all">
            All <span class="pill-count">${totalCount}</span>
          </button>
          <button class="imp-diff-btn ${importantDifficulty === 'easy' ? 'active' : ''}" data-diff="easy">
            <i class="ri-checkbox-blank-circle-fill" style="color: #22c55e; font-size: 0.65rem;"></i> Easy <span class="pill-count">${easyCount}</span>
          </button>
          <button class="imp-diff-btn ${importantDifficulty === 'medium' ? 'active' : ''}" data-diff="medium">
            <i class="ri-checkbox-blank-circle-fill" style="color: #eab308; font-size: 0.65rem;"></i> Medium <span class="pill-count">${medCount}</span>
          </button>
          <button class="imp-diff-btn ${importantDifficulty === 'hard' ? 'active' : ''}" data-diff="hard">
            <i class="ri-checkbox-blank-circle-fill" style="color: #ef4444; font-size: 0.65rem;"></i> Difficult <span class="pill-count">${hardCount}</span>
          </button>
        </div>

        <!-- Topic Chips Row -->
        <div class="imp-topics-container">
          ${uniqueTopics.map(t => {
            const count = t === 'all' ? totalCount : IMPORTANT_CODE_DATA.filter(q => q.topic === t).length;
            const label = t === 'all' ? '🌐 All Topics' : t;
            return `
              <button class="imp-topic-chip ${importantTopic === t ? 'active' : ''}" data-topic="${t}">
                <span>${label}</span>
                <span class="count-badge">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Active Filter Summary -->
        <div class="imp-active-filter-bar">
          <div>
            Showing <strong>${filtered.length}</strong> of <strong>${totalCount}</strong> code problems
            ${importantTopic !== 'all' ? ` • Topic: <strong>${escapeHtml(importantTopic)}</strong>` : ''}
            ${importantDifficulty !== 'all' ? ` • Difficulty: <strong>${escapeHtml(importantDifficulty.toUpperCase())}</strong>` : ''}
            ${searchTerm ? ` • Keyword: "<em>${escapeHtml(searchTerm)}</em>"` : ''}
          </div>
          ${hasFilter ? `
            <button class="imp-reset-all-btn" id="imp-reset-filters">
              <i class="ri-refresh-line"></i> Reset Filters
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Question Cards List -->
      <div class="imp-cards-stream">
    `;

    if (filtered.length === 0) {
      html += `
        <div class="no-results animate-in">
          <i class="ri-search-eye-line"></i>
          <p>No questions matched your filter or search query.</p>
          <button class="imp-reset-all-btn" style="margin-top: 1rem;" id="imp-no-results-reset">
            <i class="ri-refresh-line"></i> Clear all filters
          </button>
        </div>
      `;
    } else {
      filtered.forEach((q, idx) => {
        const isSolved = importantSolvedSet.has(q.id);
        const curLang = importantCardLangs[q.id] || 'python';
        const diffLower = q.difficulty.toLowerCase();
        const codeSnippet = (q.code && q.code[curLang]) ? q.code[curLang] : (q.code ? (q.code.python || q.code.java || q.code.cpp || '') : '');

        html += `
          <div class="imp-question-card ${isSolved ? 'solved-card' : ''} animate-in" id="card-${q.id}" data-id="${q.id}">
            <!-- Card Header -->
            <div class="imp-card-top-row">
              <div class="imp-badges-cluster">
                <span class="imp-topic-pill"><i class="ri-folder-3-line"></i> ${escapeHtml(q.topic)}</span>
                <span class="diff-pill ${diffLower}">${escapeHtml(q.difficulty)}</span>
                ${q.importance ? `<span class="imp-importance-pill"><i class="ri-fire-line"></i> ${escapeHtml(q.importance)}</span>` : ''}
              </div>
              <div class="imp-action-btn-group">
                <button class="imp-solved-btn ${isSolved ? 'is-solved' : ''}" data-sol-id="${q.id}">
                  <i class="${isSolved ? 'ri-checkbox-circle-fill' : 'ri-checkbox-blank-circle-line'}"></i>
                  <span>${isSolved ? 'Solved' : 'Mark Solved'}</span>
                </button>
              </div>
            </div>

            <!-- Title & Statement -->
            <h2 class="imp-card-title">${idx + 1}. ${escapeHtml(q.title)}</h2>
            <div class="imp-card-statement">${q.statement}</div>

            <!-- Companies -->
            ${q.companies && q.companies.length ? `
              <div class="imp-companies-row">
                <span class="imp-comp-lbl"><i class="ri-building-line"></i> Asked in:</span>
                ${q.companies.map(c => `<span class="imp-co-chip">${escapeHtml(c)}</span>`).join('')}
              </div>
            ` : ''}

            <!-- Approach & Intuition -->
            <div class="imp-approach-box">
              <strong><i class="ri-lightbulb-flash-line"></i> Optimal Approach:</strong>
              ${q.approach}
            </div>

            <!-- Complexity & Tags -->
            <div class="imp-complexity-row">
              <div class="imp-metric-pill"><i class="ri-timer-line"></i> Time: <span class="bold-metric">${escapeHtml(q.complexity.time)}</span></div>
              <div class="imp-metric-pill"><i class="ri-database-line"></i> Space: <span class="bold-metric">${escapeHtml(q.complexity.space)}</span></div>
              ${q.tags ? q.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('') : ''}
            </div>

            <!-- Examples -->
            ${q.examples && q.examples.length ? `
              <div class="imp-examples-box">
                <div class="imp-ex-title"><i class="ri-test-tube-line"></i> Example Testcase:</div>
                ${q.examples.map((ex, ei) => `
                  <div class="imp-ex-row"><strong>Input:</strong> <code>${escapeHtml(ex.input)}</code> &nbsp;|&nbsp; <strong>Output:</strong> <code>${escapeHtml(ex.output)}</code></div>
                  ${ex.explanation ? `<div class="imp-ex-row" style="font-size: 0.83rem; font-style: italic;">Explanation: ${escapeHtml(ex.explanation)}</div>` : ''}
                `).join('')}
              </div>
            ` : ''}

            <!-- Code Solutions Box -->
            <div class="imp-code-container" style="margin-top: 1.25rem;">
              <div class="imp-code-header">
                <div class="imp-lang-tabs">
                  <button class="imp-lang-tab-btn ${curLang === 'python' ? 'active' : ''}" data-card-id="${q.id}" data-lang="python">
                    <i class="ri-terminal-box-line"></i> Python
                  </button>
                  <button class="imp-lang-tab-btn ${curLang === 'java' ? 'active' : ''}" data-card-id="${q.id}" data-lang="java">
                    <i class="ri-cup-line"></i> Java
                  </button>
                  <button class="imp-lang-tab-btn ${curLang === 'cpp' ? 'active' : ''}" data-card-id="${q.id}" data-lang="cpp">
                    <i class="ri-code-box-line"></i> C++
                  </button>
                </div>
                <button class="imp-copy-code-btn" data-copy-target="${q.id}">
                  <i class="ri-file-copy-line"></i> Copy Code
                </button>
              </div>
              <pre class="imp-code-pre" id="code-pre-${q.id}"><code>${escapeHtml(codeSnippet)}</code></pre>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    app.innerHTML = html;

    // Attach Event Handlers:
    // 1. In-panel search input
    const impSearchInput = document.getElementById('imp-search-input');
    const impClearBtn = document.getElementById('imp-clear-search');
    if (impSearchInput) {
      impSearchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase().trim();
        searchInput.value = e.target.value;
        renderImportantHome();
      });
    }
    if (impClearBtn) {
      impClearBtn.addEventListener('click', () => {
        searchTerm = '';
        searchInput.value = '';
        renderImportantHome();
      });
    }

    // 2. Sort Dropdown
    const sortSelect = document.getElementById('imp-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        importantSort = e.target.value;
        renderImportantHome();
      });
    }

    // 3. Difficulty Buttons
    app.querySelectorAll('.imp-diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        importantDifficulty = btn.dataset.diff;
        renderImportantHome();
      });
    });

    // 4. Topic Chips
    app.querySelectorAll('.imp-topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        importantTopic = chip.dataset.topic;
        renderImportantHome();
      });
    });

    // 5. Reset All Filters
    const resetBtn = document.getElementById('imp-reset-filters');
    const noResultsReset = document.getElementById('imp-no-results-reset');
    [resetBtn, noResultsReset].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          importantTopic = 'all';
          importantDifficulty = 'all';
          importantSort = 'default';
          searchTerm = '';
          searchInput.value = '';
          renderImportantHome();
        });
      }
    });

    // 6. Solved Toggle
    app.querySelectorAll('.imp-solved-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qId = btn.dataset.solId;
        if (importantSolvedSet.has(qId)) {
          importantSolvedSet.delete(qId);
        } else {
          importantSolvedSet.add(qId);
        }
        try {
          localStorage.setItem('imp_code_solved', JSON.stringify(Array.from(importantSolvedSet)));
        } catch (err) {}
        renderImportantHome();
      });
    });

    // 7. Language Tabs per card (switches without re-rendering whole list)
    app.querySelectorAll('.imp-lang-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.dataset.cardId;
        const lang = btn.dataset.lang;
        importantCardLangs[cardId] = lang;

        const card = document.getElementById(`card-${cardId}`);
        if (!card) return;

        // Update tabs active state
        card.querySelectorAll('.imp-lang-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

        // Update code pre
        const qItem = IMPORTANT_CODE_DATA.find(q => q.id === cardId);
        if (qItem && qItem.code) {
          const pre = document.getElementById(`code-pre-${cardId}`);
          if (pre) {
            pre.innerHTML = `<code>${escapeHtml(qItem.code[lang] || qItem.code.python || '')}</code>`;
          }
        }
      });
    });

    // 8. Copy Code
    app.querySelectorAll('.imp-copy-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.dataset.copyTarget;
        const pre = document.getElementById(`code-pre-${cardId}`);
        if (!pre) return;
        const codeText = pre.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = '<i class="ri-file-copy-line"></i> Copy Code';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });

    if (hadFocus) {
      const newInp = document.getElementById('imp-search-input');
      if (newInp) {
        newInp.focus();
        if (selStart !== null && selEnd !== null) newInp.setSelectionRange(selStart, selEnd);
      }
    }
  }

  // ============================================================
  // ── 0.5 BUILT-IN METHODS & PRACTICES SECTION RENDERER ──
  // ============================================================
  function renderMethodsHome() {
    if (typeof METHODS_DATA === 'undefined' || !METHODS_DATA.length) {
      app.innerHTML = '<div class="no-results"><i class="ri-function-line"></i><p>No methods found in dataset.</p></div>';
      return;
    }

    const categories = ['all', ...Array.from(new Set(METHODS_DATA.map(m => m.category)))];

    let filtered = METHODS_DATA.filter(m => {
      if (methodsCategory !== 'all' && m.category !== methodsCategory) return false;
      if (searchTerm) {
        const nameMatch = m.name.toLowerCase().includes(searchTerm);
        const useMatch = m.use.toLowerCase().includes(searchTerm) || (m.useEn && m.useEn.toLowerCase().includes(searchTerm));
        const catMatch = m.category.toLowerCase().includes(searchTerm);
        const codeMatch = m.code.toLowerCase().includes(searchTerm);
        const outMatch = m.output.toLowerCase().includes(searchTerm);
        if (!nameMatch && !useMatch && !catMatch && !codeMatch && !outMatch) return false;
      }
      return true;
    });

    const hadFocus = document.activeElement && document.activeElement.id === 'methods-search-input';
    const selStart = hadFocus ? document.activeElement.selectionStart : null;
    const selEnd = hadFocus ? document.activeElement.selectionEnd : null;

    let html = `
      <div class="imp-hero animate-in">
        <div class="imp-hero-badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border-color: rgba(56, 189, 248, 0.3);">
          <i class="ri-function-line"></i> Java & DSA Built-in Reference
        </div>
        <h1>Built-in <span class="gradient-fire" style="background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Methods & Practices</span></h1>
        <p>Essential Java built-in utility methods (Arrays, String, StringBuilder, Collections, Maps, Math) with clear Use explanations, copyable runnable code, and exact outputs.</p>

        <div class="imp-stats-grid">
          <div class="imp-stat-card total">
            <div class="icon-box" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;"><i class="ri-code-box-line"></i></div>
            <div>
              <div class="val">${METHODS_DATA.length}</div>
              <div class="lbl">Total Practices</div>
            </div>
          </div>
          <div class="imp-stat-card easy">
            <div class="icon-box"><i class="ri-folder-3-line"></i></div>
            <div>
              <div class="val">${categories.length - 1}</div>
              <div class="lbl">Categories</div>
            </div>
          </div>
          <div class="imp-stat-card medium">
            <div class="icon-box"><i class="ri-terminal-line"></i></div>
            <div>
              <div class="val">100%</div>
              <div class="lbl">Runnable Code</div>
            </div>
          </div>
          <div class="imp-stat-card hard">
            <div class="icon-box"><i class="ri-flashlight-line"></i></div>
            <div>
              <div class="val">O(1) / O(n)</div>
              <div class="lbl">Time Complexities</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls Panel -->
      <div class="imp-controls-panel animate-in delay-1">
        <div class="imp-search-sort-row">
          <div class="imp-search-box">
            <i class="ri-search-line"></i>
            <input type="text" id="methods-search-input" placeholder="Search methods (e.g., Arrays.toString, sort, split, getOrDefault)..." value="${escapeHtml(searchTerm)}">
            <button class="clear-btn ${searchTerm ? 'visible' : ''}" id="methods-clear-search" title="Clear Search"><i class="ri-close-line"></i></button>
          </div>
        </div>

        <!-- Category Filter Chips -->
        <div class="imp-topics-container">
          ${categories.map(c => {
            const count = c === 'all' ? METHODS_DATA.length : METHODS_DATA.filter(m => m.category === c).length;
            const label = c === 'all' ? '🌐 All Methods' : c;
            return `
              <button class="imp-topic-chip ${methodsCategory === c ? 'active' : ''}" data-cat="${c}">
                <span>${label}</span>
                <span class="count-badge">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="imp-active-filter-bar">
          <div>
            Showing <strong>${filtered.length}</strong> of <strong>${METHODS_DATA.length}</strong> practice methods
            ${methodsCategory !== 'all' ? ` • Category: <strong>${escapeHtml(methodsCategory)}</strong>` : ''}
            ${searchTerm ? ` • Keyword: "<em>${escapeHtml(searchTerm)}</em>"` : ''}
          </div>
          ${(methodsCategory !== 'all' || searchTerm) ? `
            <button class="imp-reset-all-btn" id="methods-reset-filters">
              <i class="ri-refresh-line"></i> Reset Filters
            </button>
          ` : ''}
        </div>

        <!-- Collapsible Array Class Quick Reference Table -->
        <details class="array-table-details" open style="margin-top: 1.25rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem 1.15rem; background: var(--bg-surface);">
          <summary style="font-weight: 700; cursor: pointer; color: var(--accent-blue); display: flex; align-items: center; justify-content: space-between; user-select: none;">
            <span><i class="ri-table-line"></i> Methods of Array Class (All 23 Methods Quick Reference Table)</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">Toggle Table <i class="ri-arrow-down-s-line"></i></span>
          </summary>
          <div style="overflow-x: auto; margin-top: 1rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.86rem; line-height: 1.5;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: rgba(255, 255, 255, 0.02);">
                  <th style="padding: 0.65rem 0.85rem; color: var(--text-primary); font-weight: 700;">Method</th>
                  <th style="padding: 0.65rem 0.85rem; color: var(--text-primary); font-weight: 700;">Action Performed</th>
                  <th style="padding: 0.65rem 0.85rem; color: var(--text-primary); font-weight: 700; text-align: right;">Jump to Code</th>
                </tr>
              </thead>
              <tbody>
                ${METHODS_DATA.filter(m => m.category === 'Arrays').map((m, mi) => `
                  <tr style="border-bottom: 1px solid var(--border-color); ${mi % 2 === 1 ? 'background: rgba(255, 255, 255, 0.015);' : ''}">
                    <td style="padding: 0.65rem 0.85rem; font-family: var(--font-code); color: #38bdf8; font-weight: 600; white-space: nowrap;">
                      ${escapeHtml(m.name)}
                    </td>
                    <td style="padding: 0.65rem 0.85rem; color: var(--text-secondary);">
                      <strong>${escapeHtml(m.use)}</strong><br>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(m.useEn)}</span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; text-align: right; white-space: nowrap;">
                      <a href="#mcard-${m.id}" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; font-weight: 600; color: #a855f7; text-decoration: none; padding: 0.25rem 0.55rem; background: rgba(168, 85, 247, 0.1); border-radius: 6px; border: 1px solid rgba(168, 85, 247, 0.25);">
                        View Code <i class="ri-arrow-right-s-line"></i>
                      </a>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </details>
      </div>

      <!-- Methods Stream -->
      <div class="imp-cards-stream">
    `;

    if (filtered.length === 0) {
      html += `
        <div class="no-results animate-in">
          <i class="ri-search-eye-line"></i>
          <p>No methods found matching your search.</p>
        </div>
      `;
    } else {
      filtered.forEach((m) => {
        html += `
          <div class="method-card animate-in" id="mcard-${m.id}">
            <div class="imp-card-top-row">
              <div class="imp-badges-cluster">
                <span class="method-practice-pill"><i class="ri-hashtag"></i> Practice ${m.practiceNo}</span>
                <span class="imp-topic-pill"><i class="ri-code-s-slash-line"></i> ${escapeHtml(m.category)}</span>
                <span class="method-syntax-tag">${escapeHtml(m.syntax)}</span>
                ${m.timeComplexity ? `<span class="diff-pill easy">${escapeHtml(m.timeComplexity)}</span>` : ''}
              </div>
            </div>

            <h2 class="method-name-heading">${escapeHtml(m.name)}</h2>

            <!-- Use Banner -->
            <div class="method-use-card">
              <div class="method-use-label"><i class="ri-lightbulb-line"></i> Use / Kahan use karein:</div>
              <div class="method-use-text">${escapeHtml(m.use)}</div>
              ${m.useEn ? `<div class="method-use-en">${escapeHtml(m.useEn)}</div>` : ''}
            </div>

            <!-- Code & Output Grid -->
            <div class="method-code-output-grid">
              <div class="imp-code-container">
                <div class="imp-code-header">
                  <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 0.35rem;">
                    <i class="ri-cup-line"></i> Java Code
                  </span>
                  <button class="imp-copy-code-btn" data-copy-target="${m.id}">
                    <i class="ri-file-copy-line"></i> Copy Code
                  </button>
                </div>
                <pre class="imp-code-pre" id="mcode-${m.id}"><code>${escapeHtml(m.code)}</code></pre>
              </div>

              <!-- Output Box -->
              <div class="method-output-box">
                <div class="method-output-header">
                  <i class="ri-terminal-window-line"></i> Output
                </div>
                <pre class="method-output-pre"><code>${escapeHtml(m.output)}</code></pre>
              </div>
            </div>

            ${m.explanation ? `
              <div class="method-tip-box">
                <strong><i class="ri-information-line"></i> Interview Note:</strong> ${escapeHtml(m.explanation)}
              </div>
            ` : ''}
          </div>
        `;
      });
    }

    html += `</div>`;
    app.innerHTML = html;

    // Attach Event Handlers:
    const mSearch = document.getElementById('methods-search-input');
    const mClear = document.getElementById('methods-clear-search');
    if (mSearch) {
      mSearch.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase().trim();
        searchInput.value = e.target.value;
        renderMethodsHome();
      });
    }
    if (mClear) {
      mClear.addEventListener('click', () => {
        searchTerm = '';
        searchInput.value = '';
        renderMethodsHome();
      });
    }

    app.querySelectorAll('.imp-topic-chip[data-cat]').forEach(chip => {
      chip.addEventListener('click', () => {
        methodsCategory = chip.dataset.cat;
        renderMethodsHome();
      });
    });

    const mReset = document.getElementById('methods-reset-filters');
    if (mReset) {
      mReset.addEventListener('click', () => {
        methodsCategory = 'all';
        searchTerm = '';
        searchInput.value = '';
        renderMethodsHome();
      });
    }

    app.querySelectorAll('.imp-copy-code-btn[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.copyTarget;
        const pre = document.getElementById(`mcode-${id}`);
        if (!pre) return;
        navigator.clipboard.writeText(pre.textContent).then(() => {
          btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = '<i class="ri-file-copy-line"></i> Copy Code';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });

    if (hadFocus) {
      const newInp = document.getElementById('methods-search-input');
      if (newInp) {
        newInp.focus();
        if (selStart !== null && selEnd !== null) newInp.setSelectionRange(selStart, selEnd);
      }
    }
  }

  // ============================================================
  // ── 1. MNC SECTION RENDERERS ──
  // ============================================================
  function renderHome() {
    const total = totalMncQuestions();
    const companies = QUESTIONS_DATA.length;
    let filtered = QUESTIONS_DATA;
    if (searchTerm) {
      filtered = QUESTIONS_DATA.filter(c => {
        return c.name.toLowerCase().includes(searchTerm) ||
          c.questions.some(q => q.title.toLowerCase().includes(searchTerm) || q.problem.toLowerCase().includes(searchTerm));
      });
    }
    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>ALL MNC <span class="gradient">Coding Questions</span></h1>
        <p>Comprehensive collection of interview coding questions from top MNC companies with solutions in C++, Java & Python.</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-building-line"></i> <span class="num">${companies}</span> Companies</div>
          <div class="stat-pill"><i class="ri-code-s-slash-line"></i> <span class="num">${total}+</span> Questions</div>
          <div class="stat-pill"><i class="ri-terminal-box-line"></i> <span class="num">3</span> Languages</div>
        </div>
      </div>
      <div class="company-grid">
        ${filtered.map((c, i) => `
          <div class="company-card animate-in delay-${Math.min(i + 1, 5)}" style="--card-accent: ${c.color};" data-company="${c.id}">
            <div class="company-card-header">
              <div class="company-logo" style="background: ${c.color};">${c.icon}</div>
              <div>
                <h2>${c.name}</h2>
                <span class="q-count">${c.questions.length} Questions</span>
              </div>
            </div>
            <p>${c.description}</p>
            <div class="company-tags">
              ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      ${filtered.length === 0 ? '<div class="no-results"><i class="ri-search-line"></i><p>No matching MNC companies or questions found.</p></div>' : ''}
    `;

    app.querySelectorAll('.company-card').forEach(card => {
      card.addEventListener('click', () => navigate('company', card.dataset.company));
    });
  }

  function renderCompany() {
    const co = getCompany(currentCompany);
    let questions = co.questions.map((q, i) => ({ ...q, idx: i }));
    if (searchTerm) {
      questions = questions.filter(q =>
        q.title.toLowerCase().includes(searchTerm) ||
        q.problem.toLowerCase().includes(searchTerm)
      );
    }
    app.innerHTML = `
      <div class="company-page-header animate-in">
        <div class="company-page-logo" style="background: ${co.color};">${co.icon}</div>
        <div class="company-page-info">
          <h1>${co.name}</h1>
          <p>${co.questions.length} Coding Questions — C++, Java, Python Solutions</p>
        </div>
      </div>
      <div class="question-grid">
        ${questions.map((q, i) => `
          <div class="question-card animate-in delay-${Math.min(i % 5 + 1, 5)}" data-idx="${q.idx}">
            <div class="q-number">Question ${q.idx + 1}</div>
            <h3>${escapeHtml(q.title)}</h3>
            <div class="q-preview">${escapeHtml(q.problem.substring(0, 150))}...</div>
            <div class="q-meta">
              <span class="q-lang-tag cpp">C++</span>
              <span class="q-lang-tag java">Java</span>
              <span class="q-lang-tag python">Python</span>
            </div>
          </div>
        `).join('')}
      </div>
      ${questions.length === 0 ? '<div class="no-results"><i class="ri-search-line"></i><p>No matching questions found.</p></div>' : ''}
    `;
    app.querySelectorAll('.question-card').forEach(card => {
      card.addEventListener('click', () => navigate('question', currentCompany, parseInt(card.dataset.idx)));
    });
  }

  function renderQuestion() {
    const co = getCompany(currentCompany);
    const q = co.questions[currentQuestion];
    const prevIdx = currentQuestion > 0 ? currentQuestion - 1 : null;
    const nextIdx = currentQuestion < co.questions.length - 1 ? currentQuestion + 1 : null;

    app.innerHTML = `
      <div class="question-detail animate-in">
        <div class="question-detail-header">
          <div class="q-label">${co.name} — Question ${currentQuestion + 1} of ${co.questions.length}</div>
          <h1>${escapeHtml(q.title)}</h1>
          <div class="q-tags">
            <span class="q-lang-tag cpp">C++</span>
            <span class="q-lang-tag java">Java</span>
            <span class="q-lang-tag python">Python</span>
          </div>
        </div>

        <div class="section-block">
          <h2><i class="ri-file-text-line"></i> Problem Statement</h2>
          <div class="problem-text">${escapeHtml(q.problem)}</div>
        </div>

        ${q.examples && q.examples.length > 0 ? `
        <div class="section-block">
          <h2><i class="ri-test-tube-line"></i> Examples</h2>
          ${q.examples.map((ex, ei) => `
            <div class="example-box">
              <div class="ex-label">Example ${ei + 1}</div>
              ${ex.input ? `<div class="ex-row"><span class="ex-key">Input:</span><span class="ex-val">${escapeHtml(ex.input)}</span></div>` : ''}
              ${ex.output ? `<div class="ex-row"><span class="ex-key">Output:</span><span class="ex-val">${escapeHtml(ex.output)}</span></div>` : ''}
              ${ex.explanation ? `<div class="explanation"><strong>Explanation:</strong> ${escapeHtml(ex.explanation)}</div>` : ''}
            </div>
          `).join('')}
        </div>` : ''}

        <div class="section-block">
          <h2><i class="ri-code-s-slash-line"></i> Solutions</h2>
          <div class="tabs-container">
            <div class="tab-buttons">
              <button class="tab-btn active" data-tab="cpp">C++</button>
              <button class="tab-btn" data-tab="java">Java</button>
              <button class="tab-btn" data-tab="python">Python</button>
            </div>
            <div class="tab-content">
              <button class="copy-btn" onclick="copyCode(this)"><i class="ri-file-copy-line"></i> Copy</button>
              <div class="tab-panel active" data-panel="cpp"><pre>${escapeHtml(q.solutions.cpp)}</pre></div>
              <div class="tab-panel" data-panel="java"><pre>${escapeHtml(q.solutions.java)}</pre></div>
              <div class="tab-panel" data-panel="python"><pre>${escapeHtml(q.solutions.python)}</pre></div>
            </div>
          </div>
        </div>

        <div class="question-nav-bottom">
          <button class="q-nav-btn" id="prev-q" ${prevIdx === null ? 'disabled' : ''}>
            <i class="ri-arrow-left-s-line"></i> Previous
          </button>
          <button class="q-nav-btn" id="next-q" ${nextIdx === null ? 'disabled' : ''}>
            Next <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    `;

    app.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        app.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        app.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        app.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
        const copyBtn = app.querySelector('.copy-btn');
        copyBtn.innerHTML = '<i class="ri-file-copy-line"></i> Copy';
        copyBtn.classList.remove('copied');
      });
    });

    const prevBtn = document.getElementById('prev-q');
    const nextBtn = document.getElementById('next-q');
    if (prevIdx !== null) prevBtn.addEventListener('click', () => navigate('question', currentCompany, prevIdx));
    if (nextIdx !== null) nextBtn.addEventListener('click', () => navigate('question', currentCompany, nextIdx));
  }

  // ============================================================
  // ── 2. PYTHON OOP SECTION RENDERERS ──
  // ============================================================
  function renderPythonHome() {
    let filteredConcepts = PYTHON_OOP_DATA.concepts;
    let filteredQuestions = PYTHON_OOP_DATA.top30Questions;

    if (searchTerm) {
      filteredConcepts = PYTHON_OOP_DATA.concepts.filter(c =>
        c.title.toLowerCase().includes(searchTerm) ||
        c.summary.toLowerCase().includes(searchTerm) ||
        c.sections.some(s => s.heading.toLowerCase().includes(searchTerm) || (s.content && s.content.toLowerCase().includes(searchTerm)))
      );
      filteredQuestions = PYTHON_OOP_DATA.top30Questions.filter(q =>
        q.question.toLowerCase().includes(searchTerm) ||
        q.answer.toLowerCase().includes(searchTerm) ||
        q.code.toLowerCase().includes(searchTerm) ||
        q.category.toLowerCase().includes(searchTerm)
      );
    }

    if (pyFilter === 'concepts') {
      filteredQuestions = [];
    } else if (pyFilter === 'top30') {
      filteredConcepts = [];
    } else if (pyFilter !== 'all') {
      filteredConcepts = [];
      filteredQuestions = filteredQuestions.filter(q => q.category.toLowerCase() === pyFilter.toLowerCase());
    }

    const categories = Array.from(new Set(PYTHON_OOP_DATA.top30Questions.map(q => q.category)));

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>Python OOP & <span class="gradient">Top 30 Interview Qs</span></h1>
        <p>Master Object-Oriented Programming principles, syntax patterns, deep-dives, and 30 essential MNC interview questions with runnable code.</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-shapes-line"></i> <span class="num">4</span> OOP Core Modules</div>
          <div class="stat-pill"><i class="ri-questionnaire-line"></i> <span class="num">30</span> Top Interview Qs</div>
          <div class="stat-pill"><i class="ri-code-box-line"></i> <span class="num">100%</span> Executable Code</div>
        </div>
      </div>

      <div class="py-nav-filter animate-in delay-1">
        <button class="filter-chip ${pyFilter === 'all' ? 'active' : ''}" data-filter="all">All Content</button>
        <button class="filter-chip ${pyFilter === 'concepts' ? 'active' : ''}" data-filter="concepts">Core Concepts (4)</button>
        <button class="filter-chip ${pyFilter === 'top30' ? 'active' : ''}" data-filter="top30">Top 30 Qs</button>
        ${categories.map(cat => `
          <button class="filter-chip ${pyFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('')}
      </div>

      ${filteredConcepts.length > 0 ? `
        <div class="section-title-bar animate-in delay-2">
          <h2><i class="ri-book-open-line"></i> Core OOP Pillars & Concepts</h2>
          <span class="subtitle">4 Deep-Dive Modules</span>
        </div>
        <div class="concept-grid">
          ${filteredConcepts.map((c, i) => `
            <div class="concept-card animate-in delay-${Math.min(i + 1, 5)}" style="--concept-accent: ${c.color};" data-concept="${c.id}">
              <div class="concept-card-icon" style="background: ${c.color};"><i class="${c.icon}"></i></div>
              <h3>${escapeHtml(c.title)}</h3>
              <p>${escapeHtml(c.summary)}</p>
              <span class="explore-link">Explore Deep Dive <i class="ri-arrow-right-s-line"></i></span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${filteredQuestions.length > 0 ? `
        <div class="section-title-bar animate-in delay-3">
          <h2><i class="ri-question-answer-line"></i> Python Top 30 OOP Interview Questions</h2>
          <span class="subtitle">${filteredQuestions.length} Questions</span>
        </div>
        <div class="top30-list">
          ${filteredQuestions.map((q, i) => `
            <div class="q-card-accordion animate-in delay-${Math.min(i % 5 + 1, 5)}" id="q-acc-${q.id}">
              <div class="q-acc-header" onclick="toggleAccordion('q-acc-${q.id}')">
                <div class="q-acc-left">
                  <span class="q-badge-num">Q${q.id < 10 ? '0' + q.id : q.id}</span>
                  <span class="q-acc-title">${escapeHtml(q.question)}</span>
                </div>
                <div class="q-acc-meta">
                  <span class="q-acc-cat">${escapeHtml(q.category)}</span>
                  <i class="ri-arrow-down-s-line q-acc-chevron"></i>
                </div>
              </div>
              <div class="q-acc-body">
                <div class="q-acc-answer">
                  <strong>Answer:</strong> ${escapeHtml(q.answer)}
                </div>
                <div class="py-code-block">
                  <div class="py-code-header">
                    <span><i class="ri-terminal-line"></i> python</span>
                    <button class="copy-btn" onclick="copyCodeSnippet(this)"><i class="ri-file-copy-line"></i> Copy</button>
                  </div>
                  <pre>${escapeHtml(q.code)}</pre>
                </div>
                ${q.output ? `
                  <div class="py-output-block">
                    <div class="py-output-label"><i class="ri-check-line"></i> Output</div>
                    <pre>${escapeHtml(q.output)}</pre>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${filteredConcepts.length === 0 && filteredQuestions.length === 0 ? `
        <div class="no-results"><i class="ri-search-line"></i><p>No matching Python OOP concepts or questions found.</p></div>
      ` : ''}
    `;

    app.querySelectorAll('.concept-card').forEach(card => {
      card.addEventListener('click', () => navigate('py-concept', card.dataset.concept));
    });

    app.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        pyFilter = chip.dataset.filter;
        renderPythonHome();
      });
    });
  }

  function renderPythonConceptDetail() {
    const concept = PYTHON_OOP_DATA.concepts.find(c => c.id === currentConceptId);
    if (!concept) {
      renderPythonHome();
      return;
    }

    app.innerHTML = `
      <div class="concept-detail animate-in">
        <div class="concept-detail-header" style="--concept-accent: ${concept.color};">
          <div class="concept-card-icon" style="background: ${concept.color}; margin-bottom: 0.75rem;">
            <i class="${concept.icon}"></i>
          </div>
          <h1>${escapeHtml(concept.title)}</h1>
          <p>${escapeHtml(concept.summary)}</p>
        </div>

        ${concept.sections.map((sec, si) => `
          <div class="concept-content-block animate-in delay-${Math.min(si + 1, 5)}">
            <h3>${escapeHtml(sec.heading)}</h3>
            ${sec.content ? `<p>${escapeHtml(sec.content)}</p>` : ''}
            ${sec.bullets ? `
              <ul class="concept-bullets">
                ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            ` : ''}
            ${sec.table ? `
              <div class="concept-table-wrap">
                <table class="concept-table">
                  <thead>
                    <tr>${sec.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
                    ${sec.table.rows.map(r => `
                      <tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}
            ${sec.code ? `
              <div class="py-code-block">
                <div class="py-code-header">
                  <span><i class="ri-terminal-line"></i> python</span>
                  <button class="copy-btn" onclick="copyCodeSnippet(this)"><i class="ri-file-copy-line"></i> Copy</button>
                </div>
                <pre>${escapeHtml(sec.code)}</pre>
              </div>
            ` : ''}
            ${sec.output ? `
              <div class="py-output-block">
                <div class="py-output-label"><i class="ri-check-line"></i> Output</div>
                <pre>${escapeHtml(sec.output)}</pre>
              </div>
            ` : ''}
          </div>
        `).join('')}

        <div class="question-nav-bottom">
          <button class="q-nav-btn" onclick="document.getElementById('back-btn').click()">
            <i class="ri-arrow-left-s-line"></i> Back to Python OOP
          </button>
        </div>
      </div>
    `;
  }

  // ============================================================
  // ── 3. SQL TUTORIALS & QUERIES SECTION RENDERERS ──
  // ============================================================
  function renderSqlHome() {
    let filteredQueries = SQL_DATA.queries;

    if (searchTerm) {
      filteredQueries = SQL_DATA.queries.filter(q =>
        q.question.toLowerCase().includes(searchTerm) ||
        q.sql.toLowerCase().includes(searchTerm) ||
        q.category.toLowerCase().includes(searchTerm) ||
        q.explanation.toLowerCase().includes(searchTerm)
      );
    }

    if (sqlFilter !== 'all') {
      filteredQueries = filteredQueries.filter(q => q.category.toLowerCase() === sqlFilter.toLowerCase());
    }

    const categories = Array.from(new Set(SQL_DATA.queries.map(q => q.category)));

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>SQL Tutorials & <span class="gradient">Top 50 Queries</span></h1>
        <p>Master real-world SQL interview queries based on EmployeeDetails & EmployeeSalary relational schemas.</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-table-line"></i> <span class="num">${SQL_DATA.tables.length}</span> Schema Tables</div>
          <div class="stat-pill"><i class="ri-database-2-line"></i> <span class="num">${SQL_DATA.queries.length}</span> Interview Queries</div>
          <div class="stat-pill"><i class="ri-terminal-window-line"></i> <span class="num">ANSI</span> SQL Standard</div>
        </div>
      </div>

      <div class="section-title-bar animate-in delay-1">
        <h2><i class="ri-layout-masonry-line"></i> Database Schema Explorer</h2>
        <span class="subtitle">Reference tables used across all queries</span>
      </div>

      <div class="schema-grid animate-in delay-2">
        ${SQL_DATA.tables.map(tbl => `
          <div class="schema-card">
            <div class="schema-header">
              <h3><i class="ri-table-2"></i> ${escapeHtml(tbl.name)}</h3>
              <span class="table-tag">TABLE</span>
            </div>
            <div class="schema-desc">${escapeHtml(tbl.description)}</div>
            <div class="schema-table-wrap">
              <table class="schema-table">
                <thead>
                  <tr>
                    <th>Column</th>
                    <th>Type</th>
                    ${Object.keys(tbl.sampleRows[0] || {}).map(k => `<th>${escapeHtml(k)} (Sample)</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${tbl.columns.map((col, idx) => `
                    <tr>
                      <td>
                        <strong>${escapeHtml(col.name)}</strong>
                        ${col.isKey ? '<span class="pk-badge">PK</span>' : ''}
                      </td>
                      <td><span class="sql-type">${escapeHtml(col.type)}</span></td>
                      ${tbl.sampleRows.map(row => `<td>${escapeHtml(String(row[col.name] ?? ''))}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-title-bar animate-in delay-3">
        <h2><i class="ri-code-box-line"></i> Top 50 SQL Interview Queries</h2>
        <span class="subtitle">${filteredQueries.length} Queries</span>
      </div>

      <div class="py-nav-filter animate-in delay-3">
        <button class="filter-chip ${sqlFilter === 'all' ? 'active' : ''}" data-sql-filter="all">All Queries (${SQL_DATA.queries.length})</button>
        ${categories.map(cat => {
          const count = SQL_DATA.queries.filter(q => q.category === cat).length;
          return `<button class="filter-chip ${sqlFilter === cat ? 'active' : ''}" data-sql-filter="${cat}">${cat} (${count})</button>`;
        }).join('')}
      </div>

      <div class="top30-list animate-in delay-4">
        ${filteredQueries.map((q, i) => `
          <div class="q-card-accordion animate-in delay-${Math.min(i % 5 + 1, 5)}" id="sql-acc-${q.id}">
            <div class="q-acc-header" onclick="toggleAccordion('sql-acc-${q.id}')">
              <div class="q-acc-left">
                <span class="q-badge-num">Q${q.id < 10 ? '0' + q.id : q.id}</span>
                <span class="q-acc-title">${escapeHtml(q.question)}</span>
              </div>
              <div class="q-acc-meta">
                <span class="q-acc-cat">${escapeHtml(q.category)}</span>
                <i class="ri-arrow-down-s-line q-acc-chevron"></i>
              </div>
            </div>
            <div class="q-acc-body">
              <div class="py-code-block" style="margin-top: 1rem;">
                <div class="py-code-header">
                  <span><i class="ri-database-2-line"></i> SQL Query</span>
                  <button class="copy-btn" onclick="copyCodeSnippet(this)"><i class="ri-file-copy-line"></i> Copy</button>
                </div>
                <pre>${escapeHtml(q.sql)}</pre>
              </div>
              <div class="q-acc-answer" style="padding-top: 0.5rem;">
                <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      ${filteredQueries.length === 0 ? `
        <div class="no-results"><i class="ri-search-line"></i><p>No matching SQL queries found.</p></div>
      ` : ''}
    `;

    app.querySelectorAll('[data-sql-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        sqlFilter = chip.dataset.sqlFilter;
        renderSqlHome();
      });
    });
  }

  // ============================================================
  // ── 4. VERBAL ABILITY & ENGLISH SECTION RENDERERS ──
  // ============================================================
  function renderVerbalHome() {
    let rules = VERBAL_DATA.errorCorrectionRules;
    let jumbles = VERBAL_DATA.paraJumblesQuestions;
    let blanks = VERBAL_DATA.fillInTheBlanksQuestions;
    let completions = VERBAL_DATA.sentenceCompletionQuestions;
    let vocabs = VERBAL_DATA.vocabulary;

    if (searchTerm) {
      rules = rules.filter(r => r.rule.toLowerCase().includes(searchTerm) || r.description.toLowerCase().includes(searchTerm) || r.correct.toLowerCase().includes(searchTerm));
      jumbles = jumbles.filter(j => j.title.toLowerCase().includes(searchTerm) || j.sentences.some(s => s.text.toLowerCase().includes(searchTerm)));
      blanks = blanks.filter(b => b.question.toLowerCase().includes(searchTerm) || b.explanation.toLowerCase().includes(searchTerm));
      completions = completions.filter(c => c.prompt.toLowerCase().includes(searchTerm) || c.explanation.toLowerCase().includes(searchTerm));
      vocabs = vocabs.map(cat => ({
        ...cat,
        words: cat.words.filter(w => w.word.toLowerCase().includes(searchTerm) || w.synonym.toLowerCase().includes(searchTerm) || w.antonym.toLowerCase().includes(searchTerm))
      })).filter(cat => cat.words.length > 0);
    }

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>Verbal Ability & <span class="gradient">English Prep</span></h1>
        <p>Master Grammar Rules, Para Jumbles, Sentence Completion, and MNC Vocabulary with step-by-step logic.</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-ruler-2-line"></i> <span class="num">${VERBAL_DATA.errorCorrectionRules.length}</span> Grammar Rules</div>
          <div class="stat-pill"><i class="ri-puzzle-line"></i> <span class="num">${VERBAL_DATA.paraJumblesQuestions.length}</span> Para Jumbles</div>
          <div class="stat-pill"><i class="ri-edit-line"></i> <span class="num">${VERBAL_DATA.fillInTheBlanksQuestions.length + VERBAL_DATA.sentenceCompletionQuestions.length}</span> Practice MCQs</div>
          <div class="stat-pill"><i class="ri-translate-2"></i> <span class="num">60+</span> Synonyms & Antonyms</div>
        </div>
      </div>

      <div class="syllabus-banner animate-in delay-1">
        <div class="syllabus-left">
          <div class="syllabus-icon"><i class="ri-file-list-3-line"></i></div>
          <div class="syllabus-info">
            <h3>MNC Verbal Assessment Pattern</h3>
            <p>${VERBAL_DATA.syllabus.totalQuestions} Questions • ${VERBAL_DATA.syllabus.expectedTime} Duration</p>
          </div>
        </div>
        <div class="syllabus-tags">
          ${VERBAL_DATA.syllabus.topics.map(t => `<span class="syl-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div class="py-nav-filter animate-in delay-2">
        <button class="filter-chip ${verbalTab === 'rules' ? 'active' : ''}" data-verbal-tab="rules">
          <i class="ri-ruler-line"></i> Error Correction (${rules.length})
        </button>
        <button class="filter-chip ${verbalTab === 'jumbles' ? 'active' : ''}" data-verbal-tab="jumbles">
          <i class="ri-puzzle-2-line"></i> Para Jumbles (${jumbles.length})
        </button>
        <button class="filter-chip ${verbalTab === 'blanks' ? 'active' : ''}" data-verbal-tab="blanks">
          <i class="ri-ball-pen-line"></i> Fill in the Blanks (${blanks.length})
        </button>
        <button class="filter-chip ${verbalTab === 'completion' ? 'active' : ''}" data-verbal-tab="completion">
          <i class="ri-text-wrap"></i> Sentence Completion (${completions.length})
        </button>
        <button class="filter-chip ${verbalTab === 'vocab' ? 'active' : ''}" data-verbal-tab="vocab">
          <i class="ri-book-open-line"></i> Vocabulary (Syn/Ant)
        </button>
      </div>

      <div class="verbal-tab-content animate-in delay-3">
        ${renderActiveVerbalTab(rules, jumbles, blanks, completions, vocabs)}
      </div>
    `;

    app.querySelectorAll('[data-verbal-tab]').forEach(chip => {
      chip.addEventListener('click', () => {
        verbalTab = chip.dataset.verbalTab;
        renderVerbalHome();
      });
    });
  }

  function renderActiveVerbalTab(rules, jumbles, blanks, completions, vocabs) {
    if (verbalTab === 'rules') {
      return `
        <div class="section-title-bar">
          <h2><i class="ri-checkbox-circle-line"></i> 35 Core Error Correction & Grammar Rules</h2>
          <span class="subtitle">Correct vs Incorrect Examples with Placement Tips</span>
        </div>
        ${rules.map(r => `
          <div class="rule-card">
            <div class="rule-card-header">
              <span class="rule-num">Rule ${r.id}</span>
              <h3 class="rule-title">${escapeHtml(r.rule)}</h3>
            </div>
            <p class="rule-desc">${escapeHtml(r.description)}</p>
            <div class="example-pair">
              <div class="correct-box">
                <i class="ri-check-line" style="font-size: 1.1rem; color: #10b981;"></i>
                <div><strong>Correct:</strong> ${escapeHtml(r.correct)}</div>
              </div>
              <div class="incorrect-box">
                <i class="ri-close-line" style="font-size: 1.1rem; color: #ef4444;"></i>
                <div><strong>Incorrect:</strong> ${escapeHtml(r.incorrect)}</div>
              </div>
            </div>
            ${r.tip ? `<div class="rule-tip"><i class="ri-lightbulb-line"></i> <strong>Rule Tip:</strong> ${escapeHtml(r.tip)}</div>` : ''}
          </div>
        `).join('')}
      `;
    } else if (verbalTab === 'jumbles') {
      return `
        <div class="section-title-bar">
          <h2><i class="ri-puzzle-line"></i> Sentence Ordering (Para Jumbles) with Rules Applied</h2>
          <span class="subtitle">Step-by-step logical arrangements</span>
        </div>
        ${jumbles.map(j => `
          <div class="jumble-card">
            <div class="rule-card-header">
              <span class="rule-num">Case ${j.id}</span>
              <h3 class="rule-title">${escapeHtml(j.title)}</h3>
            </div>
            <div class="jumble-sentences">
              ${j.sentences.map(s => `
                <div class="jumble-item">
                  <span class="jumble-label">${s.label}</span>
                  <span>${escapeHtml(s.text)}</span>
                </div>
              `).join('')}
            </div>
            <div class="order-badge-box">
              <span>Correct Order:</span>
              <span class="order-tag">${j.correctOrder}</span>
            </div>
            <div class="mcq-expl" style="margin-top: 0.75rem;">
              <strong>Rule Logic:</strong> ${escapeHtml(j.explanation)}
            </div>
          </div>
        `).join('')}
      `;
    } else if (verbalTab === 'blanks') {
      return `
        <div class="section-title-bar">
          <h2><i class="ri-edit-2-line"></i> Fill in the Blanks Practice (Prepositions, Collocations, Tenses, Idioms)</h2>
          <span class="subtitle">Click an option to test your answer</span>
        </div>
        ${blanks.map(b => `
          <div class="mcq-card" id="mcq-blank-${b.id}">
            <div class="q-acc-meta" style="margin-bottom: 0.5rem;">
              <span class="q-acc-cat">${escapeHtml(b.category)}</span>
            </div>
            <div class="mcq-prompt">Q${b.id}. ${escapeHtml(b.question)}</div>
            <div class="mcq-options-grid">
              ${b.options.map(opt => `
                <button class="mcq-opt-btn" onclick="checkMcqAnswer(this, '${escapeHtml(b.answer)}', 'expl-b-${b.id}')">
                  ${escapeHtml(opt)}
                </button>
              `).join('')}
            </div>
            <div class="mcq-expl" id="expl-b-${b.id}" style="display: none;">
              <strong>Correct Answer:</strong> (${escapeHtml(b.answer)}) — ${escapeHtml(b.explanation)}
            </div>
          </div>
        `).join('')}
      `;
    } else if (verbalTab === 'completion') {
      return `
        <div class="section-title-bar">
          <h2><i class="ri-text-spacing"></i> Sentence Completion Exercises</h2>
          <span class="subtitle">Test context clues, transition words, and logical sequence</span>
        </div>
        ${completions.map(c => `
          <div class="mcq-card" id="mcq-comp-${c.id}">
            <div class="mcq-prompt">Q${c.id}. ${escapeHtml(c.prompt)}</div>
            <div class="mcq-options-grid">
              ${c.options.map(opt => `
                <button class="mcq-opt-btn" onclick="checkMcqAnswer(this, '${escapeHtml(c.answer)}', 'expl-c-${c.id}')">
                  ${escapeHtml(opt)}
                </button>
              `).join('')}
            </div>
            <div class="mcq-expl" id="expl-c-${c.id}" style="display: none;">
              <strong>Correct Answer:</strong> ${escapeHtml(c.answer)} — ${escapeHtml(c.explanation)}
            </div>
          </div>
        `).join('')}
      `;
    } else if (verbalTab === 'vocab') {
      return `
        <div class="section-title-bar">
          <h2><i class="ri-book-2-line"></i> High-Frequency MNC Synonyms & Antonyms</h2>
          <span class="subtitle">Classified by lexical category for quick revision</span>
        </div>
        <div class="vocab-grid">
          ${vocabs.map(cat => `
            <div class="vocab-card">
              <div class="vocab-card-header">
                <i class="${cat.icon}" style="color: var(--accent-purple); font-size: 1.2rem;"></i>
                <h3>${escapeHtml(cat.category)}</h3>
              </div>
              <table class="vocab-table">
                <thead>
                  <tr>
                    <th>Word</th>
                    <th>Synonyms</th>
                    <th>Antonyms</th>
                  </tr>
                </thead>
                <tbody>
                  ${cat.words.map(w => `
                    <tr>
                      <td class="word-strong">${escapeHtml(w.word)}</td>
                      <td class="synonym-text">${escapeHtml(w.synonym)}</td>
                      <td class="antonym-text">${escapeHtml(w.antonym)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `).join('')}
        </div>
      `;
    }
    return '';
  }

  // ============================================================
  // ── 4A. DSA 1: PATTERN-WISE INTERVIEW REFERENCE (18 PATTERNS) ──
  // ============================================================
  function renderDsa1Home() {
    if (typeof DSA1_PATTERNS_DATA === 'undefined') {
      app.innerHTML = '<div class="no-results"><p>DSA 1 Patterns dataset not loaded.</p></div>';
      return;
    }

    const patterns = DSA1_PATTERNS_DATA;
    const scanList = typeof LAST_MINUTE_PATTERN_SCAN !== 'undefined' ? LAST_MINUTE_PATTERN_SCAN : [];

    let filtered = patterns;
    if (dsa1Filter !== 'all') {
      filtered = filtered.filter(p => p.num === parseInt(dsa1Filter, 10));
    }
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.whenToUse.toLowerCase().includes(searchTerm) ||
        p.recognitionClues.some(c => c.toLowerCase().includes(searchTerm)) ||
        p.memoryTrick.toLowerCase().includes(searchTerm) ||
        p.interviewDrill.toLowerCase().includes(searchTerm) ||
        (p.problems && p.problems.some(pr => pr.title.toLowerCase().includes(searchTerm)))
      );
    }

    const totalProblems = patterns.reduce((sum, p) => sum + (p.problems ? p.problems.length : 0), 0);

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>DSA 1: Pattern-Wise <span class="gradient">Interview Reference</span></h1>
        <p>18 Core Algorithmic Patterns • When to Use • Recognition Clues • Memory Tricks • Interview Drills • LeetCode Practice & Solutions</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-node-tree"></i> <span class="num">${patterns.length}</span> Master Patterns</div>
          <div class="stat-pill"><i class="ri-code-box-line"></i> <span class="num">${totalProblems}+</span> LeetCode Problems</div>
          <div class="stat-pill"><i class="ri-flashlight-line"></i> <span class="num">${scanList.length}</span> Fast Scanners</div>
          <div class="stat-pill"><i class="ri-mic-line"></i> <span class="num">18</span> Interview Drills</div>
        </div>
      </div>

      <!-- Quick Scan Matrix Card -->
      <div class="last-minute-scan-card animate-in delay-1">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i class="ri-speed-line" style="font-size: 1.3rem; color: #facc15;"></i>
            <h3 style="margin: 0; font-size: 1.15rem; color: #fff;">Last-Minute DSA Pattern Scan Matrix</h3>
          </div>
          <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 500;">Match problem cues in under 5 seconds</span>
        </div>
        <div style="overflow-x: auto; margin-top: 0.85rem;">
          <table class="scan-table">
            <thead>
              <tr>
                <th style="width: 50%;">Problem Signal / Keyword</th>
                <th style="width: 50%;">Immediate Pattern Trigger</th>
              </tr>
            </thead>
            <tbody>
              ${scanList.map(s => `
                <tr>
                  <td class="scan-signal-tag"><i class="ri-arrow-right-s-fill" style="color: #a855f7;"></i> ${escapeHtml(s.signal)}</td>
                  <td>
                    <span class="scan-pattern-pill" onclick="searchPatternByName('${escapeHtml(s.pattern.split('/')[0].trim())}')">
                      <i class="ri-magic-line"></i> ${escapeHtml(s.pattern)}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Pattern Filter Chips -->
      <div class="section-title-bar" style="margin-top: 2rem;">
        <h2><i class="ri-list-check-2"></i> 18 Core Algorithmic Patterns</h2>
        <span class="subtitle">Select a specific pattern or browse all</span>
      </div>

      <div class="py-nav-filter animate-in delay-2" style="flex-wrap: wrap; margin-bottom: 1.5rem;">
        <button class="filter-chip ${dsa1Filter === 'all' ? 'active' : ''}" onclick="setDsa1Filter('all')">
          All Patterns (${patterns.length})
        </button>
        ${patterns.map(p => `
          <button class="filter-chip ${dsa1Filter === String(p.num) ? 'active' : ''}" onclick="setDsa1Filter('${p.num}')">
            #${p.num} ${escapeHtml(p.name)}
          </button>
        `).join('')}
      </div>

      <!-- Patterns Card List -->
      <div class="dsa-patterns-grid">
        ${filtered.map(p => `
          <div class="pattern-card animate-in" id="pattern-card-${p.num}">
            <div class="pattern-header">
              <div class="pattern-title-group">
                <span class="pattern-num-badge">Pattern ${p.num} of 18</span>
                <h2>${escapeHtml(p.name)}</h2>
              </div>
              <span class="stat-pill" style="font-size: 0.8rem; padding: 0.2rem 0.6rem;"><i class="ri-bookmark-3-line"></i> ${p.problems ? p.problems.length : 0} LeetCode Problems</span>
            </div>

            <!-- When to use -->
            <div class="pattern-when-box">
              <strong>When to Use:</strong>
              ${escapeHtml(p.whenToUse)}
            </div>

            <!-- Recognition Clues -->
            <div class="clues-section">
              <div class="clues-label"><i class="ri-search-eye-line"></i> Recognition Clues:</div>
              <div class="clues-chips-wrap">
                ${p.recognitionClues.map(clue => `
                  <span class="clue-chip"><i class="ri-price-tag-3-line"></i> ${escapeHtml(clue)}</span>
                `).join('')}
              </div>
            </div>

            <!-- Memory Trick -->
            <div class="memory-trick-box">
              <div class="trick-title"><i class="ri-lightbulb-flash-fill"></i> Memory Trick:</div>
              <div>${escapeHtml(p.memoryTrick)}</div>
            </div>

            <!-- Interview Drill -->
            <div class="drill-box">
              <strong><i class="ri-mic-line"></i> Interview Drill:</strong> ${escapeHtml(p.interviewDrill)}
            </div>

            <!-- Practice Problems -->
            <div style="font-size: 0.85rem; font-weight: 700; color: #cbd5e1; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.4rem;">
              <i class="ri-code-s-slash-line" style="color: #a855f7;"></i> LeetCode Practice — Click to Open:
            </div>
            <div class="pattern-problems-list">
              ${(p.problems || []).map((prob, prIdx) => `
                <div class="pattern-prob-item">
                  <div class="prob-meta-left">
                    <span class="prob-num-tag">#${prob.no}</span>
                    <span class="prob-title-text">${escapeHtml(prob.title)}</span>
                    <span class="diff-badge-${(prob.difficulty || 'medium').toLowerCase()}">${escapeHtml(prob.difficulty)}</span>
                  </div>
                  <div class="prob-actions-right">
                    ${prob.python || prob.java ? `
                      <button class="view-code-btn" onclick="toggleAccordion('prob-sol-${p.num}-${prIdx}')">
                        <i class="ri-code-box-line"></i> Solution Code
                      </button>
                    ` : ''}
                    <a href="${escapeHtml(prob.url)}" target="_blank" rel="noopener noreferrer" class="lc-open-btn">
                      <i class="ri-external-link-line"></i> LeetCode
                    </a>
                  </div>
                </div>
                ${prob.python || prob.java ? `
                  <div class="q-acc-body" id="prob-sol-${p.num}-${prIdx}" style="display: none; background: #0b0f19; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; margin-top: 0.35rem;">
                    ${prob.python ? `
                      <div class="py-code-block" style="margin-bottom: 0.75rem;">
                        <div class="py-code-header">
                          <span><i class="ri-terminal-box-line"></i> Python 3 Optimal Solution</span>
                          <button class="copy-btn" onclick="copyCodeSnippet(this)"><i class="ri-file-copy-line"></i> Copy</button>
                        </div>
                        <pre style="margin: 0; font-family: var(--font-code); font-size: 0.85rem; color: #4ade80; overflow-x: auto; padding: 0.85rem; background: #050811; border-radius: 6px;">${escapeHtml(prob.python)}</pre>
                      </div>
                    ` : ''}
                    ${prob.java ? `
                      <div class="py-code-block" style="margin-bottom: 0;">
                        <div class="py-code-header">
                          <span><i class="ri-terminal-box-line"></i> Java Solution</span>
                          <button class="copy-btn" onclick="copyCodeSnippet(this)"><i class="ri-file-copy-line"></i> Copy</button>
                        </div>
                        <pre style="margin: 0; font-family: var(--font-code); font-size: 0.85rem; color: #38bdf8; overflow-x: auto; padding: 0.85rem; background: #050811; border-radius: 6px;">${escapeHtml(prob.java)}</pre>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      ${filtered.length === 0 ? `
        <div class="no-results"><i class="ri-search-line"></i><p>No patterns found matching "${escapeHtml(searchTerm)}".</p></div>
      ` : ''}
    `;
  }

  // ============================================================
  // ── 4B. DSA 2: 90-DAY / 150 LEETCODE ROADMAP ──
  // ============================================================
  function renderDsa2Home() {
    if (typeof DSA2_ROADMAP_DATA === 'undefined') {
      app.innerHTML = '<div class="no-results"><p>DSA 2 Roadmap dataset not loaded.</p></div>';
      return;
    }

    const allItems = DSA2_ROADMAP_DATA;
    const coreProblems = allItems.filter(item => !item.isReview);
    const totalCore = coreProblems.length; // 150
    const solvedCount = coreProblems.filter(item => dsa2SolvedSet.has(item.id)).length;
    const pct = totalCore > 0 ? Math.round((solvedCount / totalCore) * 100) : 0;

    const easyTotal = coreProblems.filter(p => p.difficulty === 'Easy').length;
    const easySolved = coreProblems.filter(p => p.difficulty === 'Easy' && dsa2SolvedSet.has(p.id)).length;

    const medTotal = coreProblems.filter(p => p.difficulty === 'Medium').length;
    const medSolved = coreProblems.filter(p => p.difficulty === 'Medium' && dsa2SolvedSet.has(p.id)).length;

    const hardTotal = coreProblems.filter(p => p.difficulty === 'Hard').length;
    const hardSolved = coreProblems.filter(p => p.difficulty === 'Hard' && dsa2SolvedSet.has(p.id)).length;

    // Filter items
    let filtered = allItems;
    if (dsa2TopicFilter !== 'all') {
      if (dsa2TopicFilter === 'Review') {
        filtered = filtered.filter(item => item.isReview);
      } else {
        filtered = filtered.filter(item => item.topic === dsa2TopicFilter);
      }
    }
    if (dsa2DiffFilter !== 'all') {
      filtered = filtered.filter(item => item.difficulty === dsa2DiffFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.topic.toLowerCase().includes(searchTerm) ||
        (item.pattern && item.pattern.toLowerCase().includes(searchTerm)) ||
        (item.note && item.note.toLowerCase().includes(searchTerm)) ||
        String(item.day).includes(searchTerm) ||
        String(item.id).includes(searchTerm)
      );
    }

    const topicsList = typeof DSA2_TOPIC_LIST !== 'undefined' ? DSA2_TOPIC_LIST : [];

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>DSA 2: 90-Day <span class="gradient">LeetCode Roadmap</span></h1>
        <p>150-Problem Blind 75 & NeetCode 150 Master Curriculum • Day 1 to 90 Structured Flow • Progress Tracking with Saved State</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-calendar-event-line"></i> <span class="num">90</span> Days Plan</div>
          <div class="stat-pill"><i class="ri-code-box-line"></i> <span class="num">150</span> Core Problems</div>
          <div class="stat-pill"><i class="ri-checkbox-circle-line"></i> <span class="num" id="dsa2-stat-solved">${solvedCount} / ${totalCore}</span> Solved (${pct}%)</div>
          <div class="stat-pill"><i class="ri-repeat-line"></i> <span class="num">14</span> Review Days</div>
        </div>
      </div>

      <!-- Dynamic Progress Card -->
      <div class="roadmap-progress-card animate-in delay-1">
        <div class="progress-header-flex">
          <div>
            <h3 style="margin: 0; font-size: 1.25rem; color: #fff; display: flex; align-items: center; gap: 0.5rem;">
              <i class="ri-trophy-line" style="color: #ec4899;"></i> 90-Day Challenge Progress Tracker
            </h3>
            <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary);">
              Check problems as you solve them on LeetCode. Your progress is saved automatically.
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button class="filter-chip" onclick="resetDsa2Progress()" style="border: 1px solid rgba(248, 113, 113, 0.4); background: rgba(248, 113, 113, 0.1); color: #f87171;">
              <i class="ri-restart-line"></i> Reset Progress
            </button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-track-outer">
          <div class="progress-track-inner" id="dsa2-progress-fill" style="width: ${pct}%;"></div>
        </div>

        <div class="roadmap-stat-pills">
          <span class="stat-chip easy">
            <i class="ri-checkbox-blank-circle-fill" style="color: #4ade80; font-size: 0.65rem;"></i>
            Easy: <strong id="dsa2-stat-easy">${easySolved} / ${easyTotal}</strong>
          </span>
          <span class="stat-chip med">
            <i class="ri-checkbox-blank-circle-fill" style="color: #facc15; font-size: 0.65rem;"></i>
            Medium: <strong id="dsa2-stat-med">${medSolved} / ${medTotal}</strong>
          </span>
          <span class="stat-chip hard">
            <i class="ri-checkbox-blank-circle-fill" style="color: #f87171; font-size: 0.65rem;"></i>
            Hard: <strong id="dsa2-stat-hard">${hardSolved} / ${hardTotal}</strong>
          </span>
          <span class="stat-chip">
            <i class="ri-pie-chart-line" style="color: #ec4899;"></i>
            Completion: <strong id="dsa2-stat-pct">${pct}%</strong>
          </span>
        </div>
      </div>

      <!-- Difficulty Filter Chips -->
      <div class="section-title-bar" style="margin-top: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h2><i class="ri-filter-3-line"></i> Filter by Topic & Difficulty</h2>
            <span class="subtitle">Focus on specific areas or review checkpoints</span>
          </div>
          <span class="q-acc-cat" style="background: rgba(236, 72, 153, 0.15); color: #f472b6; font-size: 0.85rem; font-weight: 600; padding: 0.35rem 0.75rem;">
            Showing ${filtered.length} of ${allItems.length} Entries
          </span>
        </div>
      </div>

      <div class="py-nav-filter animate-in delay-2" style="margin-bottom: 0.75rem;">
        <button class="filter-chip ${dsa2DiffFilter === 'all' ? 'active' : ''}" onclick="setDsa2DiffFilter('all')">
          All Difficulties (${allItems.length})
        </button>
        <button class="filter-chip ${dsa2DiffFilter === 'Easy' ? 'active' : ''}" onclick="setDsa2DiffFilter('Easy')" style="color: #4ade80;">
          Easy (${coreProblems.filter(p => p.difficulty === 'Easy').length})
        </button>
        <button class="filter-chip ${dsa2DiffFilter === 'Medium' ? 'active' : ''}" onclick="setDsa2DiffFilter('Medium')" style="color: #facc15;">
          Medium (${coreProblems.filter(p => p.difficulty === 'Medium').length})
        </button>
        <button class="filter-chip ${dsa2DiffFilter === 'Hard' ? 'active' : ''}" onclick="setDsa2DiffFilter('Hard')" style="color: #f87171;">
          Hard (${coreProblems.filter(p => p.difficulty === 'Hard').length})
        </button>
        <button class="filter-chip ${dsa2DiffFilter === 'Review' ? 'active' : ''}" onclick="setDsa2DiffFilter('Review')" style="color: #c084fc;">
          Review Days (${allItems.filter(p => p.isReview).length})
        </button>
      </div>

      <!-- Topic Filter Chips -->
      <div class="py-nav-filter animate-in delay-2" style="flex-wrap: wrap; margin-bottom: 1.5rem;">
        <button class="filter-chip ${dsa2TopicFilter === 'all' ? 'active' : ''}" onclick="setDsa2TopicFilter('all')">
          All Topics
        </button>
        ${topicsList.map(t => {
          const count = coreProblems.filter(p => p.topic === t).length;
          return `
            <button class="filter-chip ${dsa2TopicFilter === t ? 'active' : ''}" onclick="setDsa2TopicFilter('${escapeHtml(t)}')">
              ${escapeHtml(t)} (${count})
            </button>
          `;
        }).join('')}
        <button class="filter-chip ${dsa2TopicFilter === 'Review' ? 'active' : ''}" onclick="setDsa2TopicFilter('Review')">
          <i class="ri-repeat-line"></i> Review Days (${allItems.filter(p => p.isReview).length})
        </button>
      </div>

      <!-- Roadmap Table -->
      <div class="roadmap-table-wrap animate-in delay-3">
        <div class="roadmap-row roadmap-header-row">
          <div style="text-align: center;">Done</div>
          <div>Day</div>
          <div>Problem Title</div>
          <div>Topic</div>
          <div>Pattern / Technique</div>
          <div>Difficulty</div>
          <div style="text-align: right;">Action</div>
        </div>

        ${filtered.map(item => {
          if (item.isReview) {
            const isSolved = dsa2SolvedSet.has(item.id);
            return `
              <div class="roadmap-review-row ${isSolved ? 'solved' : ''}" id="dsa2-row-${item.id}">
                <div class="dsa-checkbox-wrap">
                  <input type="checkbox" class="dsa-checkbox" ${isSolved ? 'checked' : ''} onchange="toggleDsa2Solved('${item.id}')" title="Mark review completed" />
                </div>
                <div><span class="day-badge" style="background: rgba(168, 85, 247, 0.2); color: #d8b4fe; border-color: rgba(168, 85, 247, 0.4);">Day ${item.day}</span></div>
                <div>
                  <div class="review-row-text"><i class="ri-repeat-fill"></i> ${escapeHtml(item.title)}</div>
                  ${item.note ? `<div class="review-row-note">${escapeHtml(item.note)}</div>` : ''}
                </div>
                <div style="text-align: right;">
                  <span class="diff-badge-review">Review</span>
                </div>
              </div>
            `;
          }

          const isSolved = dsa2SolvedSet.has(item.id);
          return `
            <div class="roadmap-row ${isSolved ? 'solved' : ''}" id="dsa2-row-${item.id}">
              <div class="dsa-checkbox-wrap">
                <input type="checkbox" class="dsa-checkbox" ${isSolved ? 'checked' : ''} onchange="toggleDsa2Solved(${item.id})" title="Mark solved" />
              </div>
              <div><span class="day-badge">Day ${item.day}</span></div>
              <div class="roadmap-prob-title">
                <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 700;">#${item.id}</span>
                <span>${escapeHtml(item.title)}</span>
              </div>
              <div><span class="roadmap-topic-tag">${escapeHtml(item.topic)}</span></div>
              <div><span class="roadmap-pattern-tag">${escapeHtml(item.pattern || 'Core')}</span></div>
              <div><span class="diff-badge-${(item.difficulty || 'medium').toLowerCase()}">${escapeHtml(item.difficulty)}</span></div>
              <div style="text-align: right;">
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="lc-open-btn">
                  <i class="ri-external-link-line"></i> Solve
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${filtered.length === 0 ? `
        <div class="no-results"><i class="ri-search-line"></i><p>No roadmap items found matching current filters.</p></div>
      ` : ''}
    `;
  }

  // ── DSA 1 & DSA 2 Interactive Global Handlers ──
  window.setDsa1Filter = function(filter) {
    dsa1Filter = filter;
    renderDsa1Home();
  };

  window.searchPatternByName = function(patternKeyword) {
    dsa1Filter = 'all';
    searchTerm = patternKeyword.toLowerCase();
    searchInput.value = patternKeyword;
    renderDsa1Home();
  };

  window.setDsa2TopicFilter = function(topic) {
    dsa2TopicFilter = topic;
    renderDsa2Home();
  };

  window.setDsa2DiffFilter = function(diff) {
    dsa2DiffFilter = diff;
    renderDsa2Home();
  };

  window.toggleDsa2Solved = function(id) {
    const key = typeof id === 'number' ? id : (String(id).startsWith('rev-') ? id : parseInt(id, 10));
    if (dsa2SolvedSet.has(key)) {
      dsa2SolvedSet.delete(key);
    } else {
      dsa2SolvedSet.add(key);
    }
    try {
      localStorage.setItem('dsa2_solved', JSON.stringify([...dsa2SolvedSet]));
    } catch(e) {}

    // Update row state in place
    const row = document.getElementById('dsa2-row-' + key);
    if (row) {
      row.classList.toggle('solved', dsa2SolvedSet.has(key));
    }

    // Refresh progress statistics
    if (typeof DSA2_ROADMAP_DATA !== 'undefined') {
      const coreProblems = DSA2_ROADMAP_DATA.filter(item => !item.isReview);
      const totalCore = coreProblems.length;
      const solvedCount = coreProblems.filter(item => dsa2SolvedSet.has(item.id)).length;
      const pct = totalCore > 0 ? Math.round((solvedCount / totalCore) * 100) : 0;

      const easyTotal = coreProblems.filter(p => p.difficulty === 'Easy').length;
      const easySolved = coreProblems.filter(p => p.difficulty === 'Easy' && dsa2SolvedSet.has(p.id)).length;

      const medTotal = coreProblems.filter(p => p.difficulty === 'Medium').length;
      const medSolved = coreProblems.filter(p => p.difficulty === 'Medium' && dsa2SolvedSet.has(p.id)).length;

      const hardTotal = coreProblems.filter(p => p.difficulty === 'Hard').length;
      const hardSolved = coreProblems.filter(p => p.difficulty === 'Hard' && dsa2SolvedSet.has(p.id)).length;

      const fill = document.getElementById('dsa2-progress-fill');
      if (fill) fill.style.width = pct + '%';
      const statSolved = document.getElementById('dsa2-stat-solved');
      if (statSolved) statSolved.textContent = `${solvedCount} / ${totalCore}`;
      const statPct = document.getElementById('dsa2-stat-pct');
      if (statPct) statPct.textContent = pct + '%';
      const statEasy = document.getElementById('dsa2-stat-easy');
      if (statEasy) statEasy.textContent = `${easySolved} / ${easyTotal}`;
      const statMed = document.getElementById('dsa2-stat-med');
      if (statMed) statMed.textContent = `${medSolved} / ${medTotal}`;
      const statHard = document.getElementById('dsa2-stat-hard');
      if (statHard) statHard.textContent = `${hardSolved} / ${hardTotal}`;
    }
  };

  window.resetDsa2Progress = function() {
    if (confirm("Are you sure you want to reset your solved progress for the 90-Day Roadmap?")) {
      dsa2SolvedSet.clear();
      try {
        localStorage.removeItem('dsa2_solved');
      } catch(e) {}
      renderDsa2Home();
    }
  };

  // ============================================================
  // ── 5. GENERAL PLACEMENT HUB (SUBJECT-WISE THEORY & FAQS) ──
  // ============================================================
  function renderGeneralHome() {
    const subjects = GENERAL_DATA.subjects || [];
    const aptList = GENERAL_DATA.aptitude || [];
    const hrList = GENERAL_DATA.hrQuestions || [];
    const coList = GENERAL_DATA.companyProfiles || [];
    const strList = GENERAL_DATA.interviewStrategies || [];
    const appAlgoList = GENERAL_DATA.appendixAlgorithms || [];
    const mrList = GENERAL_DATA.managerialRound || [];
    const totalFaqs = subjects.reduce((sum, s) => sum + (s.faqs ? s.faqs.length : 0), 0);
    const totalSheets = subjects.reduce((sum, s) => sum + (s.cheatSheet ? s.cheatSheet.length : 0), 0);
    const totalWorksheets = subjects.reduce((sum, s) => sum + (s.worksheets ? s.worksheets.length : 0), 0);

    app.innerHTML = `
      <div class="home-hero animate-in">
        <h1>General <span class="gradient">Placement Hub</span></h1>
        <p>Subject-Wise Theory Cheat Sheets, Core CS Fundamentals & Frequently Asked Interview Questions with Clear Answers.</p>
        <div class="stats-row">
          <div class="stat-pill"><i class="ri-book-open-line"></i> <span class="num">${subjects.length}</span> Core Subjects</div>
          <div class="stat-pill"><i class="ri-questionnaire-line"></i> <span class="num">${totalFaqs}</span> CS FAQs</div>
          <div class="stat-pill"><i class="ri-article-line"></i> <span class="num">${totalSheets}</span> Cheat Sheets</div>
          <div class="stat-pill"><i class="ri-file-list-3-line"></i> <span class="num">${totalWorksheets}</span> Worksheets</div>
          <div class="stat-pill"><i class="ri-user-star-line"></i> <span class="num">${hrList.length}</span> HR FAQs</div>
          <div class="stat-pill"><i class="ri-user-settings-line"></i> <span class="num">${mrList.length}</span> Managerial Qs</div>
          <div class="stat-pill"><i class="ri-terminal-box-line"></i> <span class="num">${appAlgoList.length}</span> Appendix Algos</div>
        </div>
      </div>

      <!-- Subject Switcher Bar -->
      <div class="py-nav-filter animate-in delay-1" style="justify-content: center; flex-wrap: wrap;">
        ${subjects.map(s => `
          <button class="filter-chip ${generalSubject === s.id ? 'active' : ''}" data-gen-subj="${s.id}">
            <i class="${s.icon}"></i> ${escapeHtml(s.name)}
          </button>
        `).join('')}
        <button class="filter-chip ${generalSubject === 'aptitude' ? 'active' : ''}" data-gen-subj="aptitude">
          <i class="ri-calculator-line"></i> Quantitative Aptitude
        </button>
        <button class="filter-chip ${generalSubject === 'hr' ? 'active' : ''}" data-gen-subj="hr">
          <i class="ri-user-star-line"></i> Interview Prep & HR FAQs (${hrList.length})
        </button>
        <button class="filter-chip ${generalSubject === 'managerial' ? 'active' : ''}" data-gen-subj="managerial">
          <i class="ri-user-settings-line"></i> Managerial Round (${mrList.length})
        </button>
        <button class="filter-chip ${generalSubject === 'algorithms-appendix' ? 'active' : ''}" data-gen-subj="algorithms-appendix">
          <i class="ri-terminal-box-line"></i> Appendix A: Algorithms (${appAlgoList.length})
        </button>
        <button class="filter-chip ${generalSubject === 'companies' ? 'active' : ''}" data-gen-subj="companies">
          <i class="ri-building-line"></i> MNC Hiring Patterns
        </button>
      </div>

      <!-- Main Subject Content Container -->
      <div class="general-subject-container animate-in delay-2">
        ${renderActiveGeneralSubject(subjects, aptList, hrList, coList, strList, appAlgoList, mrList)}
      </div>
    `;

    // Bind Subject Switcher Clicks
    app.querySelectorAll('[data-gen-subj]').forEach(chip => {
      chip.addEventListener('click', () => {
        generalSubject = chip.dataset.genSubj;
        generalFilter = 'all';
        renderGeneralHome();
      });
    });

    // Bind Theory/FAQ Sub-filter Clicks
    app.querySelectorAll('[data-subj-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        generalFilter = chip.dataset.subjFilter;
        renderGeneralHome();
      });
    });
  }

  function renderActiveGeneralSubject(subjects, aptList, hrList, coList, strList, appAlgoList, mrList) {
    if (generalSubject === 'aptitude') {
      let list = aptList;
      if (searchTerm) {
        list = list.filter(a => a.topic.toLowerCase().includes(searchTerm) || a.formulas.some(f => f.toLowerCase().includes(searchTerm)));
      }
      return `
        <div class="section-title-bar">
          <h2><i class="ri-calculator-line"></i> Quantitative Aptitude Formulas & Shortcuts</h2>
          <span class="subtitle">Quick revision for online cognitive assessments</span>
        </div>
        ${list.map(a => `
          <div class="apt-card" style="--apt-accent: ${a.color};">
            <div class="apt-header">
              <div class="apt-icon" style="background: ${a.color};"><i class="${a.icon}"></i></div>
              <h3>${escapeHtml(a.topic)}</h3>
            </div>
            <ul class="apt-formula-list">
              ${a.formulas.map(f => `<li>${f}</li>`).join('')}
            </ul>
            ${a.solvedExamples.map(ex => `
              <div class="apt-example-box">
                <div class="apt-example-q"><i class="ri-question-line"></i> ${escapeHtml(ex.q)}</div>
                <div class="apt-example-sol"><strong>Solution:</strong> ${escapeHtml(ex.solution)}</div>
                <span class="apt-ans-badge">Ans: ${escapeHtml(ex.ans)}</span>
              </div>
            `).join('')}
          </div>
        `).join('')}
      `;
    }

    if (generalSubject === 'hr') {
      let list = hrList;
      if (searchTerm) {
        list = list.filter(h => h.q.toLowerCase().includes(searchTerm) || h.tips.toLowerCase().includes(searchTerm) || h.sampleAns.toLowerCase().includes(searchTerm) || (h.category && h.category.toLowerCase().includes(searchTerm)));
      }
      return `
        <!-- Chapter 7: Interview Preparation Strategies -->
        <div class="section-title-bar">
          <h2><i class="ri-compass-3-line"></i> Chapter 7: Interview Preparation Strategies</h2>
          <span class="subtitle">10 Core Strategic Pillars for Technical & HR Placement Rounds</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
          ${(strList || []).map(st => `
            <div class="concept-content-block" style="border-left: 4px solid ${st.color}; margin-bottom: 0; padding: 1.25rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.6rem;">
                <div style="width: 34px; height: 34px; border-radius: 8px; background: ${st.color}22; color: ${st.color}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                  <i class="${st.icon}"></i>
                </div>
                <h3 style="font-size: 1.05rem; font-weight: 700; margin: 0; color: var(--text-primary);">${escapeHtml(st.title)}</h3>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 0.75rem;">${escapeHtml(st.desc)}</p>
              <div style="background: rgba(255,255,255,0.02); border-radius: 6px; padding: 0.6rem 0.8rem; font-size: 0.82rem; border: 1px solid var(--border-color);">
                <div style="font-weight: 600; color: ${st.color}; margin-bottom: 0.35rem;"><i class="ri-checkbox-circle-line"></i> Actionable Checklist:</div>
                <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-secondary); line-height: 1.45;">
                  ${st.checklist.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Chapter 8: Frequently Asked Questions (All 50) -->
        <div class="section-title-bar" style="margin-top: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <div>
              <h2><i class="ri-user-star-line"></i> Chapter 8: Frequently Asked HR & Behavioral Questions</h2>
              <span class="subtitle">50 Model Interview Answers with Frameworks (STAR, Present-Past-Future, CAR)</span>
            </div>
            <span class="q-acc-cat" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-weight: 600; font-size: 0.88rem; padding: 0.4rem 0.85rem;">Showing ${list.length} of ${hrList.length} Questions</span>
          </div>
        </div>

        ${list.map(h => `
          <div class="hr-card" id="hr-card-${h.id}">
            <div class="hr-header">
              <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
                <span class="q-badge-num" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa; font-weight: 700; font-size: 0.85rem; padding: 0.15rem 0.5rem; border-radius: 4px;">Q${h.id}</span>
                <h3 style="margin: 0;">${escapeHtml(h.q)}</h3>
              </div>
              <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
                ${h.category ? `<span class="q-acc-cat" style="font-size: 0.75rem;">${escapeHtml(h.category)}</span>` : ''}
                <span class="hr-framework-badge">${escapeHtml(h.framework)}</span>
              </div>
            </div>
            <div class="hr-tips"><i class="ri-lightbulb-line"></i> <strong>Strategy Tip:</strong> ${escapeHtml(h.tips)}</div>
            <div class="hr-model-ans">
              <span class="hr-ans-label" style="display: block; font-weight: 600; color: #10b981; margin-bottom: 0.35rem;"><i class="ri-check-double-line"></i> Recommended Model Response:</span>
              ${escapeHtml(h.sampleAns)}
            </div>
          </div>
        `).join('')}
      `;
    }

    if (generalSubject === 'algorithms-appendix') {
      let list = appAlgoList || [];
      if (searchTerm) {
        list = list.filter(a => a.name.toLowerCase().includes(searchTerm) || a.number.toLowerCase().includes(searchTerm) || a.category.toLowerCase().includes(searchTerm) || a.pseudocode.toLowerCase().includes(searchTerm));
      }
      return `
        <div class="section-title-bar">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <div>
              <h2><i class="ri-terminal-box-line"></i> Appendix A: Important Algorithms Master Pseudocode Library</h2>
              <span class="subtitle">Complete line-numbered pseudocodes, loop invariants, and asymptotic bounds (Algorithms 9 to 33)</span>
            </div>
            <span class="q-acc-cat" style="background: rgba(16, 185, 129, 0.15); color: #34d399; font-weight: 600; font-size: 0.88rem; padding: 0.4rem 0.85rem;">${list.length} Algorithms</span>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
          ${list.map(alg => `
            <div class="concept-content-block" style="margin-bottom: 0;">
              <div class="rule-card-header" style="justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span class="q-badge-num" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; font-weight: 700;">${escapeHtml(alg.number)}</span>
                  <h3 class="rule-title" style="margin: 0; font-size: 1.15rem;">${escapeHtml(alg.name)}</h3>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                  <span class="q-acc-cat" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">${escapeHtml(alg.category)}</span>
                  ${alg.type ? `<span class="q-acc-cat" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa;">${escapeHtml(alg.type)}</span>` : ''}
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
                <span class="stat-pill" style="font-size: 0.8rem; padding: 0.25rem 0.6rem;"><i class="ri-speed-line"></i> ${escapeHtml(alg.complexity)}</span>
              </div>
              <div style="background: #0f172a; border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 0.85rem; overflow-x: auto;">
                <div style="font-size: 0.78rem; font-weight: 600; color: #94a3b8; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.05em;"><i class="ri-code-box-line"></i> Pseudocode Specification</div>
                <pre style="margin: 0; font-family: 'Fira Code', Consolas, monospace; font-size: 0.88rem; line-height: 1.55; color: #e2e8f0; white-space: pre;">${escapeHtml(alg.pseudocode)}</pre>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin: 0;">
                <strong style="color: var(--text-primary);"><i class="ri-information-line"></i> Operational Logic & Invariant:</strong> ${escapeHtml(alg.explanation)}
              </p>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (generalSubject === 'managerial') {
      let list = mrList || [];
      if (searchTerm) {
        list = list.filter(m => m.q.toLowerCase().includes(searchTerm) || m.ans.toLowerCase().includes(searchTerm) || m.category.toLowerCase().includes(searchTerm) || (m.tips && m.tips.toLowerCase().includes(searchTerm)) || (m.title && m.title.toLowerCase().includes(searchTerm)));
      }
      return `
        <div class="section-title-bar">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <div>
              <h2><i class="ri-user-settings-line"></i> Managerial Round (MR) Interview Preparation</h2>
              <span class="subtitle">Comprehensive 100-Question Master Guide with Structured Answers & Delivery Frameworks</span>
            </div>
            <span class="q-acc-cat" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa; font-weight: 600; font-size: 0.88rem; padding: 0.4rem 0.85rem;">Showing ${list.length} of ${mrList.length} Questions</span>
          </div>
        </div>

        <!-- 10 Domain Strategic Summary Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #3b82f6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #60a5fa; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-user-line"></i> A. Personal & Career
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q1–Q10: Intro, resume walkthrough, motivation, 5-yr roadmap & differentiators.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #10b981;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #34d399; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-flag-line"></i> B. Leadership
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q11–Q20: Collaborative leadership, motivating teams, delegation & trust.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #8b5cf6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #a78bfa; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-team-line"></i> C. Teamwork
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q21–Q30: Handling disagreements, non-contributing peers, diversity & feedback.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #f59e0b;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #fbbf24; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-scales-3-line"></i> D. Decision-Making
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q31–Q40: Decisions under pressure, speed vs accuracy & 8-factor evaluation.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #ec4899;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #f472b6; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-lightbulb-line"></i> E. Problem Solving
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q41–Q50: Complex debugging, root cause (5 Whys), risks & process improvement.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #ef4444;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #f87171; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-shield-cross-line"></i> F. Conflict Management
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q51–Q60: Senior disagreements, mediation, unfair criticism & difficult talks.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #06b6d4;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #22d3ee; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-checkbox-circle-line"></i> G. Performance & Accountability
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q61–Q70: Measuring success, missed deadlines, quality under pressure & ownership.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #14b8a6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #2dd4bf; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-refresh-line"></i> H. Change & Adaptability
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q71–Q80: Tech pivots, handling ambiguity, rapid skill learning & changing specs.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #a855f7;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #c084fc; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-customer-service-2-line"></i> I. Client & Stakeholder
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q81–Q90: Unhappy clients, scope negotiation, delivering bad news & trust.</div>
          </div>
          <div class="concept-content-block" style="margin-bottom: 0; padding: 1rem; border-top: 3px solid #f97316;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #fb923c; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <i class="ri-compass-3-line"></i> J. Situational & Behavioral
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">Q91–Q100: Manager pushback, missed targets, ethics, credit theft & lessons.</div>
          </div>
        </div>

        <!-- 100 Managerial Question Cards -->
        <div class="mr-questions-container" style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${list.map(m => `
            <div class="hr-card" id="mr-card-${m.id}" style="margin-bottom: 0;">
              <div class="hr-header">
                <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="q-badge-num" style="background: rgba(139, 92, 246, 0.2); color: #a78bfa; font-weight: 700; font-size: 0.85rem; padding: 0.15rem 0.55rem; border-radius: 4px;">Q${m.id}</span>
                  <h3 style="margin: 0; font-size: 1.12rem;">${escapeHtml(m.q)}</h3>
                </div>
                <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
                  <span class="q-acc-cat" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-size: 0.75rem;">${escapeHtml(m.category)}</span>
                  ${m.format ? `<span class="hr-framework-badge">${escapeHtml(m.format)}</span>` : ''}
                </div>
              </div>
              ${m.title ? `<div style="font-size: 0.85rem; font-weight: 600; color: var(--accent-purple); margin-bottom: 0.5rem;"><i class="ri-bookmark-3-line"></i> ${escapeHtml(m.title)}</div>` : ''}
              ${m.tips ? `<div class="hr-tips" style="margin-bottom: 0.85rem;"><i class="ri-lightbulb-line"></i> ${escapeHtml(m.tips)}</div>` : ''}
              <div class="hr-model-ans" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: 8px; padding: 1.1rem 1.25rem;">
                <span class="hr-ans-label" style="display: block; font-weight: 600; color: #34d399; margin-bottom: 0.5rem;"><i class="ri-chat-quote-line"></i> Recommended Model Answer:</span>
                <div style="white-space: pre-line; line-height: 1.7; color: var(--text-primary); font-size: 0.92rem;">${escapeHtml(m.ans)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (generalSubject === 'companies') {
      let list = coList;
      if (searchTerm) {
        list = list.filter(c => c.name.toLowerCase().includes(searchTerm) || c.hiringRole.toLowerCase().includes(searchTerm) || c.rounds.toLowerCase().includes(searchTerm));
      }
      return `
        <div class="section-title-bar">
          <h2><i class="ri-building-line"></i> Top MNC Hiring Rounds & Packages</h2>
          <span class="subtitle">Selection stages and salary brackets</span>
        </div>
        <div class="profile-grid">
          ${list.map(co => `
            <div class="profile-card">
              <div class="profile-header">
                <h3>${escapeHtml(co.name)}</h3>
                <span class="package-pill">${escapeHtml(co.package)}</span>
              </div>
              <div class="profile-role"><i class="ri-briefcase-line"></i> Role: ${escapeHtml(co.hiringRole)}</div>
              <div class="profile-rounds"><strong>Hiring Flow:</strong> ${escapeHtml(co.rounds)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Core CS Subjects: OS, DBMS, CN, DSA, OOP
    const currentSubj = subjects.find(s => s.id === generalSubject) || subjects[0];
    let cheatSheet = currentSubj.cheatSheet || [];
    let faqs = currentSubj.faqs || [];
    let worksheets = currentSubj.worksheets || [];

    if (searchTerm) {
      cheatSheet = cheatSheet.filter(c => c.title.toLowerCase().includes(searchTerm) || (c.points && c.points.some(p => p.toLowerCase().includes(searchTerm))));
      faqs = faqs.filter(f => f.q.toLowerCase().includes(searchTerm) || f.ans.toLowerCase().includes(searchTerm) || f.category.toLowerCase().includes(searchTerm));
      worksheets = worksheets.filter(w => 
        w.title.toLowerCase().includes(searchTerm) || 
        (w.summary && w.summary.toLowerCase().includes(searchTerm)) ||
        (w.mcqs && w.mcqs.some(q => q.question.toLowerCase().includes(searchTerm) || q.explanation.toLowerCase().includes(searchTerm))) ||
        (w.subjective && w.subjective.some(s => s.q.toLowerCase().includes(searchTerm) || s.ans.toLowerCase().includes(searchTerm))) ||
        (w.questions && w.questions.some(q => q.question.toLowerCase().includes(searchTerm) || q.explanation.toLowerCase().includes(searchTerm))) || 
        (w.problem && w.problem.toLowerCase().includes(searchTerm))
      );
    }

    if (generalFilter === 'theory') { faqs = []; worksheets = []; }
    else if (generalFilter === 'faqs') { cheatSheet = []; worksheets = []; }
    else if (generalFilter === 'worksheets') { cheatSheet = []; faqs = []; }

    return `
      <!-- Subject Header Card -->
      <div class="concept-detail-header" style="border-bottom: none; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="concept-card-icon" style="background: ${currentSubj.color}; margin-bottom: 0;">
            <i class="${currentSubj.icon}"></i>
          </div>
          <div>
            <h1 style="font-size: 1.8rem; margin: 0;">${escapeHtml(currentSubj.name)}</h1>
            <p style="font-size: 0.95rem; margin: 0.25rem 0 0;">${escapeHtml(currentSubj.summary)}</p>
          </div>
        </div>
      </div>

      <!-- Subject Sub-Filter Pills -->
      <div class="py-nav-filter" style="margin-top: 0.5rem; flex-wrap: wrap;">
        ${generalSubject === 'dsa' ? `
          <button class="filter-chip" onclick="switchSection('dsa1')" style="border: 1px solid rgba(168, 85, 247, 0.4); background: rgba(168, 85, 247, 0.15); color: #d8b4fe; font-weight: 700;">
            <i class="ri-node-tree"></i> DSA 1: 18 Patterns Reference
          </button>
          <button class="filter-chip" onclick="switchSection('dsa2')" style="border: 1px solid rgba(236, 72, 153, 0.4); background: rgba(236, 72, 153, 0.15); color: #f472b6; font-weight: 700;">
            <i class="ri-road-map-line"></i> DSA 2: 90-Day Roadmap (150 Qs)
          </button>
        ` : ''}
        <button class="filter-chip ${generalFilter === 'all' ? 'active' : ''}" data-subj-filter="all">
          All Content (${currentSubj.cheatSheet.length + currentSubj.faqs.length + (currentSubj.worksheets ? currentSubj.worksheets.length : 0)})
        </button>
        <button class="filter-chip ${generalFilter === 'theory' ? 'active' : ''}" data-subj-filter="theory">
          <i class="ri-book-read-line"></i> Core Theory & Cheat Sheet (${currentSubj.cheatSheet.length})
        </button>
        <button class="filter-chip ${generalFilter === 'faqs' ? 'active' : ''}" data-subj-filter="faqs">
          <i class="ri-question-answer-line"></i> Frequently Asked Questions (${currentSubj.faqs.length})
        </button>
        ${currentSubj.worksheets && currentSubj.worksheets.length > 0 ? `
          <button class="filter-chip ${generalFilter === 'worksheets' ? 'active' : ''}" data-subj-filter="worksheets">
            <i class="ri-file-list-3-line"></i> Practice Worksheets (${currentSubj.worksheets.length})
          </button>
        ` : ''}
      </div>

      ${generalSubject === 'dsa' && generalFilter === 'all' ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-top: 1.25rem; margin-bottom: 1.5rem;">
          <div class="concept-content-block" style="border-left: 4px solid #a855f7; margin-bottom: 0; padding: 1.25rem; background: linear-gradient(135deg, rgba(22, 27, 34, 0.8), rgba(30, 27, 75, 0.4));">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span class="q-acc-cat" style="background: rgba(168, 85, 247, 0.15); color: #d8b4fe; font-weight: 700;">18 Core Patterns</span>
              <span style="font-size: 0.8rem; color: #a855f7;"><i class="ri-flashlight-line"></i> Fast Clues</span>
            </div>
            <h3 style="margin: 0 0 0.4rem; font-size: 1.15rem; color: #fff;">DSA 1: Pattern-Wise Interview Reference</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
              Master Sliding Window, Two Pointers, Monotonic Stack, DP, and 14 other patterns with When to Use, Memory Tricks, Interview Drills, and LeetCode practice problems.
            </p>
            <button class="filter-chip" onclick="switchSection('dsa1')" style="background: #a855f7; color: #fff; font-weight: 700; width: 100%; justify-content: center;">
              <i class="ri-arrow-right-line"></i> Explore 18 Patterns
            </button>
          </div>

          <div class="concept-content-block" style="border-left: 4px solid #ec4899; margin-bottom: 0; padding: 1.25rem; background: linear-gradient(135deg, rgba(22, 27, 34, 0.8), rgba(60, 20, 50, 0.4));">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span class="q-acc-cat" style="background: rgba(236, 72, 153, 0.15); color: #f472b6; font-weight: 700;">90 Days • 150 Qs</span>
              <span style="font-size: 0.8rem; color: #ec4899;"><i class="ri-trophy-line"></i> Blind 75 / NeetCode 150</span>
            </div>
            <h3 style="margin: 0 0 0.4rem; font-size: 1.15rem; color: #fff;">DSA 2: 90-Day LeetCode Roadmap</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
              Comprehensive curriculum across 18 topics from Day 1 to 90 with review checkpoints, difficulty tags, live progress checkbox tracker, and direct LeetCode links.
            </p>
            <button class="filter-chip" onclick="switchSection('dsa2')" style="background: #ec4899; color: #fff; font-weight: 700; width: 100%; justify-content: center;">
              <i class="ri-arrow-right-line"></i> Open 90-Day Roadmap
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Theory Cheat Sheet Section -->
      ${cheatSheet.length > 0 ? `
        <div class="section-title-bar">
          <h2><i class="ri-article-line"></i> Core Theory & High-Yield Cheat Sheets</h2>
          <span class="subtitle">Quick revision notes & formulas</span>
        </div>
        ${cheatSheet.map((sheet, idx) => `
          <div class="concept-content-block animate-in delay-${Math.min(idx + 1, 4)}">
            <h3>${escapeHtml(sheet.title)}</h3>
            ${sheet.points ? `
              <ul class="concept-bullets">
                ${sheet.points.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
            ` : ''}
            ${sheet.table ? `
              <div class="concept-table-wrap">
                <table class="concept-table">
                  <thead>
                    <tr>${sheet.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
                    ${sheet.table.rows.map(r => `
                      <tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}
          </div>
        `).join('')}
      ` : ''}

      <!-- FAQs Section -->
      ${faqs.length > 0 ? `
        <div class="section-title-bar">
          <h2><i class="ri-question-answer-line"></i> Frequently Asked Interview Questions with Answers</h2>
          <span class="subtitle">${faqs.length} Questions</span>
        </div>
        <div class="top30-list">
          ${faqs.map((f, i) => `
            <div class="q-card-accordion animate-in delay-${Math.min(i % 5 + 1, 5)}" id="faq-acc-${generalSubject}-${i}">
              <div class="q-acc-header" onclick="toggleAccordion('faq-acc-${generalSubject}-${i}')">
                <div class="q-acc-left">
                  <span class="q-badge-num">Q${i + 1}</span>
                  <span class="q-acc-title">${escapeHtml(f.q)}</span>
                </div>
                <div class="q-acc-meta">
                  <span class="q-acc-cat">${escapeHtml(f.category)}</span>
                  <i class="ri-arrow-down-s-line q-acc-chevron"></i>
                </div>
              </div>
              <div class="q-acc-body">
                <div class="q-acc-answer" style="padding-top: 0.75rem;">
                  ${f.ans}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Worksheets & Solved Numericals Section -->
      ${worksheets.length > 0 ? `
        <div class="section-title-bar">
          <h2><i class="ri-file-list-3-line"></i> Placement Worksheets & Solved Numericals</h2>
          <span class="subtitle">Interactive MCQs & Comprehensive Subjective Question Analyses</span>
        </div>
        ${worksheets.map((w, wIdx) => `
          <div class="concept-content-block animate-in delay-${Math.min(wIdx + 1, 4)}" style="margin-bottom: 2rem;">
            <div class="rule-card-header" style="margin-bottom: 0.5rem; justify-content: space-between; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span class="rule-num">Worksheet ${wIdx + 1}</span>
                <h3 class="rule-title" style="font-size: 1.18rem; margin: 0;">${escapeHtml(w.title)}</h3>
              </div>
              ${w.badge ? `<span class="q-acc-cat" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-weight: 600;">${escapeHtml(w.badge)}</span>` : ''}
            </div>
            ${w.summary ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${escapeHtml(w.summary)}</p>` : ''}

            <!-- Part A: Multiple Choice Questions -->
            ${(w.mcqs || (w.type === 'mcq' && w.questions)) ? `
              <div class="worksheet-mcq-section" style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem; padding-bottom: 0.4rem; border-bottom: 1px dashed var(--border-color);">
                  <i class="ri-checkbox-circle-line" style="color: #10b981; font-size: 1.2rem;"></i>
                  <h4 style="font-size: 1.05rem; color: var(--text-primary); margin: 0;">Part A: Multiple Choice Questions (${(w.mcqs || w.questions).length})</h4>
                </div>
                <div class="worksheet-mcq-list">
                  ${(w.mcqs || w.questions).map((q) => `
                    <div class="mcq-card" id="mcq-ws-${generalSubject}-${wIdx}-${q.id}">
                      <div class="mcq-prompt"><strong>Q${q.id}.</strong> ${escapeHtml(q.question)}</div>
                      <div class="mcq-options-grid">
                        ${q.options.map(opt => `
                          <button class="mcq-opt-btn" onclick="checkMcqAnswer(this, '${escapeHtml(q.answer)}', 'expl-ws-${generalSubject}-${wIdx}-${q.id}')">
                            ${escapeHtml(opt)}
                          </button>
                        `).join('')}
                      </div>
                      <div class="mcq-expl" id="expl-ws-${generalSubject}-${wIdx}-${q.id}" style="display: none;">
                        <strong>Correct Answer:</strong> ${escapeHtml(q.answer)}<br>
                        <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Part B: Subjective & Numerical Questions -->
            ${w.subjective && w.subjective.length > 0 ? `
              <div class="worksheet-subjective-section">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem; padding-bottom: 0.4rem; border-bottom: 1px dashed var(--border-color);">
                  <i class="ri-edit-2-line" style="color: #3b82f6; font-size: 1.2rem;"></i>
                  <h4 style="font-size: 1.05rem; color: var(--text-primary); margin: 0;">Part B: Subjective Questions & Solved Numericals (${w.subjective.length})</h4>
                </div>
                <div class="top30-list">
                  ${w.subjective.map((sub, sIdx) => `
                    <div class="q-card-accordion" id="ws-sub-acc-${generalSubject}-${wIdx}-${sub.id}">
                      <div class="q-acc-header" onclick="toggleAccordion('ws-sub-acc-${generalSubject}-${wIdx}-${sub.id}')">
                        <div class="q-acc-left">
                          <span class="q-badge-num" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa;">Q${sub.id}</span>
                          <span class="q-acc-title" style="font-size: 0.98rem;">${escapeHtml(sub.q.split('\n')[0])}</span>
                        </div>
                        <div class="q-acc-meta">
                          <span class="q-acc-cat">${escapeHtml(sub.category || 'Subjective')}</span>
                          <i class="ri-arrow-down-s-line q-acc-chevron"></i>
                        </div>
                      </div>
                      <div class="q-acc-body">
                        ${sub.q.includes('\n') ? `
                          <div style="background: rgba(255, 255, 255, 0.03); padding: 0.85rem 1rem; border-radius: 6px; margin: 0.85rem 0; font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary); border-left: 3px solid #3b82f6;">
                            <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${escapeHtml(sub.q)}</pre>
                          </div>
                        ` : ''}
                        <div class="q-acc-answer" style="padding-top: 0.5rem;">
                          ${sub.ans}
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Legacy Solved Problem Handler (if any) -->
            ${w.type === 'solved_problem' ? `
              <div class="solved-problem-card">
                <div class="problem-statement" style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border-left: 4px solid ${currentSubj.color}; margin-bottom: 1rem;">
                  <div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);"><i class="ri-file-text-line"></i> Problem Statement:</div>
                  <pre style="white-space: pre-wrap; font-family: inherit; font-size: 0.95rem; margin: 0; color: var(--text-secondary);">${escapeHtml(w.problem)}</pre>
                </div>
                <div class="problem-solution" style="background: rgba(16, 185, 129, 0.05); padding: 1.25rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.2);">
                  <div style="font-weight: 600; color: #10b981; margin-bottom: 0.5rem;"><i class="ri-checkbox-circle-line"></i> Step-by-Step Solution:</div>
                  <div style="font-size: 0.95rem; line-height: 1.6;">${w.solution}</div>
                  ${w.safeSequence ? `
                    <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: var(--bg-card); border-radius: 6px; font-weight: 600;">
                      <span style="color: var(--accent-color);">Conclusion / Result:</span> ${escapeHtml(w.safeSequence)}
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      ` : ''}

      ${cheatSheet.length === 0 && faqs.length === 0 && worksheets.length === 0 ? `
        <div class="no-results"><i class="ri-search-line"></i><p>No matching theory, FAQs, or worksheets found in this subject.</p></div>
      ` : ''}
    `;
  }

  // ── Interactive MCQ Checker ──
  window.checkMcqAnswer = function (btn, correctVal, explId) {
    const parent = btn.closest('.mcq-card');
    const allBtns = parent.querySelectorAll('.mcq-opt-btn');
    const selectedText = btn.textContent.trim();
    const cleanCorrect = correctVal.trim().toLowerCase();

    allBtns.forEach(b => {
      b.disabled = true;
      if (b.textContent.trim().toLowerCase() === cleanCorrect) {
        b.classList.add('correct');
      }
    });

    if (selectedText.toLowerCase() !== cleanCorrect) {
      btn.classList.add('wrong');
    }

    const expl = document.getElementById(explId);
    if (expl) expl.style.display = 'block';
  };

  // ── Global Accordion Toggle ──
  window.toggleAccordion = function (elemId) {
    const card = document.getElementById(elemId);
    if (!card) return;
    card.classList.toggle('open');
  };

  // ── Code Snippet Copy ──
  window.copyCodeSnippet = function (btn) {
    const pre = btn.closest('.py-code-block').querySelector('pre');
    navigator.clipboard.writeText(pre.textContent).then(() => {
      btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = '<i class="ri-file-copy-line"></i> Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  };

  // ── Copy Code in MNC Solutions ──
  window.copyCode = function(btn) {
    const activePanel = btn.closest('.tab-content').querySelector('.tab-panel.active pre');
    navigator.clipboard.writeText(activePanel.textContent).then(() => {
      btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = '<i class="ri-file-copy-line"></i> Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  };

  // ── Keyboard Navigation ──
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === searchInput) return;
    if (e.key === 'Escape') {
      if (searchTerm) { searchInput.value = ''; searchTerm = ''; render(); }
      else goBack();
    }
    if (currentView === 'question') {
      const co = getCompany(currentCompany);
      if (e.key === 'ArrowLeft' && currentQuestion > 0) navigate('question', currentCompany, currentQuestion - 1);
      if (e.key === 'ArrowRight' && currentQuestion < co.questions.length - 1) navigate('question', currentCompany, currentQuestion + 1);
    }
  });

  // ── Initial Render ──
  render();
})();
