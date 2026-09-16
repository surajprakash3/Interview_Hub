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
  const secBtnMnc = document.getElementById('sec-btn-mnc');
  const secBtnPython = document.getElementById('sec-btn-python');
  const secBtnSql = document.getElementById('sec-btn-sql');
  const secBtnVerbal = document.getElementById('sec-btn-verbal');
  const secBtnGeneral = document.getElementById('sec-btn-general');

  let currentSection = 'mnc'; // 'mnc' | 'python-oop' | 'sql' | 'verbal' | 'general'
  let currentView = 'home'; // 'home' | 'company' | 'question' | 'py-home' | 'py-concept' | 'sql-home' | 'verbal-home' | 'general-home'
  let currentCompany = null;
  let currentQuestion = null;
  let currentConceptId = null;
  let pyFilter = 'all';
  let sqlFilter = 'all';
  let verbalTab = 'rules'; // 'rules' | 'jumbles' | 'blanks' | 'completion' | 'vocab'
  let generalSubject = 'os'; // 'os' | 'dbms' | 'cn' | 'dsa' | 'oop' | 'aptitude' | 'hr'
  let generalFilter = 'all'; // 'all' | 'theory' | 'faqs'
  let searchTerm = '';

  // ── Theme Toggle ──
  themeToggle.addEventListener('click', () => {
    const t = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', t === 'light' ? 'light' : '');
    if (t === 'dark') document.body.removeAttribute('data-theme');
  });

  // ── Section Switching ──
  if (secBtnMnc) secBtnMnc.addEventListener('click', () => switchSection('mnc'));
  if (secBtnPython) secBtnPython.addEventListener('click', () => switchSection('python-oop'));
  if (secBtnSql) secBtnSql.addEventListener('click', () => switchSection('sql'));
  if (secBtnVerbal) secBtnVerbal.addEventListener('click', () => switchSection('verbal'));
  if (secBtnGeneral) secBtnGeneral.addEventListener('click', () => switchSection('general'));

  function switchSection(sec) {
    currentSection = sec;
    updateSectionButtons();
    searchTerm = '';
    searchInput.value = '';
    if (sec === 'mnc') navigate('home');
    else if (sec === 'python-oop') navigate('py-home');
    else if (sec === 'sql') navigate('sql-home');
    else if (sec === 'verbal') navigate('verbal-home');
    else if (sec === 'general') navigate('general-home');
  }

  function updateSectionButtons() {
    if (secBtnMnc) secBtnMnc.classList.toggle('active', currentSection === 'mnc');
    if (secBtnPython) secBtnPython.classList.toggle('active', currentSection === 'python-oop');
    if (secBtnSql) secBtnSql.classList.toggle('active', currentSection === 'sql');
    if (secBtnVerbal) secBtnVerbal.classList.toggle('active', currentSection === 'verbal');
    if (secBtnGeneral) secBtnGeneral.classList.toggle('active', currentSection === 'general');
  }

  // ── Navigation ──
  brandLink.addEventListener('click', () => {
    if (currentSection === 'mnc') navigate('home');
    else if (currentSection === 'python-oop') navigate('py-home');
    else if (currentSection === 'sql') navigate('sql-home');
    else if (currentSection === 'verbal') navigate('verbal-home');
    else navigate('general-home');
  });
  backBtn.addEventListener('click', goBack);

  function navigate(view, p1, p2) {
    currentView = view;
    if (view === 'home') {
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
    else if (currentView === 'py-home' || currentView === 'sql-home' || currentView === 'verbal-home' || currentView === 'general-home') switchSection('mnc');
  }

  // ── Search ──
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    render();
  });

  // ── Render Dispatcher ──
  function render() {
    backBtn.classList.toggle('hidden', currentView === 'home' || currentView === 'py-home' || currentView === 'sql-home' || currentView === 'verbal-home' || currentView === 'general-home');
    updateBreadcrumb();

    if (currentView === 'home') renderHome();
    else if (currentView === 'company') renderCompany();
    else if (currentView === 'question') renderQuestion();
    else if (currentView === 'py-home') renderPythonHome();
    else if (currentView === 'py-concept') renderPythonConceptDetail();
    else if (currentView === 'sql-home') renderSqlHome();
    else if (currentView === 'verbal-home') renderVerbalHome();
    else if (currentView === 'general-home') renderGeneralHome();
  }

  function updateBreadcrumb() {
    if (currentView === 'home') {
      breadcrumb.innerHTML = '';
      return;
    }
    let html = '<span class="crumb" id="crumb-root">Home</span>';

    if (currentSection === 'mnc') {
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
    } else if (currentSection === 'general') {
      html += '<span class="sep"> / </span><span class="crumb active">General Placement Hub</span>';
    }

    breadcrumb.innerHTML = html;

    const crumbRoot = document.getElementById('crumb-root');
    if (crumbRoot) crumbRoot.addEventListener('click', () => navigate('home'));

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
      <div class="py-nav-filter" style="margin-top: 0.5rem;">
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
