/* ============================================================
   APP — 核心控制器：导航、进度、主题、快捷操作
   ============================================================ */

const App = {
  currentPage: 0,
  completed: new Set(),

  init() {
    try {
      const s = JSON.parse(localStorage.getItem('el_completed')||'[]');
      s.forEach(id => this.completed.add(id));
    } catch(e) {}
    try {
      if (localStorage.getItem('el_dark')==='1') document.body.classList.add('dark-mode');
    } catch(e) {}
    this._buildNav();
    this._bindUI();
    this.navigate('intro');
  },

  _buildNav() {
    const nav = document.getElementById('navList');
    const groups = [
      { label: '基础入门',  start: 0,  end: 2 },
      { label: '自锁电路',  start: 3,  end: 5 },
      { label: '互锁电路',  start: 6,  end: 8 },
      { label: '复合连锁',  start: 9,  end: 11 },
      { label: '工程实践',  start: 12, end: 14 }
    ];
    let html = '';
    groups.forEach(g => {
      html += `<div class="nav-label" style="margin-top:10px">${g.label}</div>`;
      for (let i = g.start; i <= g.end; i++) {
        const p = COURSE_DATA.pages[i];
        const done = this.completed.has(p.id);
        html += `<li class="nav-item${i===this.currentPage?' active':''}${done?' completed':''}" data-id="${p.id}" onclick="App.navigate('${p.id}')">
          <span class="nav-step">${done?'✓':(i+1)}</span><span>${p.icon} ${p.title}</span></li>`;
      }
    });
    nav.innerHTML = html;
    this._updateProgress();
  },

  _updateProgress() {
    const total = COURSE_DATA.pages.length;
    const done = this.completed.size;
    const pct = Math.round(done/total*100);
    const bar = document.getElementById('progressBar');
    const txt = document.getElementById('progressText');
    if (bar) bar.style.width = pct+'%';
    if (txt) txt.textContent = `${pct}% (${done}/${total})`;
  },

  _saveProgress() {
    try {
      localStorage.setItem('el_completed', JSON.stringify([...this.completed]));
    } catch(e) {}
  },

  _bindUI() {
    document.getElementById('menuToggle').addEventListener('click', (e) => {
      e.stopPropagation();
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('open');
      let ov = document.getElementById('sidebar-overlay');
      if (!ov) {
        ov = document.createElement('div');
        ov.id = 'sidebar-overlay';
        ov.className = 'sidebar-overlay';
        ov.onclick = () => { sidebar.classList.remove('open'); ov.classList.remove('show'); };
        document.body.appendChild(ov);
      }
      ov.classList.toggle('show', sidebar.classList.contains('open'));
    });
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowRight') {
        const next = document.querySelector('.btn-next');
        if (next) { e.preventDefault(); next.click(); }
      } else if (e.key === 'ArrowLeft') {
        const prev = document.querySelector('.btn-nav .btn-outline');
        if (prev) { e.preventDefault(); prev.click(); }
      } else if (e.key === 'd' && e.altKey) {
        e.preventDefault();
        this._toggleDark();
      } else if (e.key === 'h') {
        // 显示帮助提示
        if (!e.ctrlKey && !document.activeElement?.matches('input,textarea,button')) {
          this._showHelpToast();
        }
      }
    });
  },

  _toggleDark() {
    document.body.classList.toggle('dark-mode');
    try { localStorage.setItem('el_dark', document.body.classList.contains('dark-mode')?'1':'0'); } catch(e) {}
  },

  _showHelpToast() {
    const existing = document.getElementById('help-toast');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.id = 'help-toast';
    div.innerHTML = `<div style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;background:var(--bg-card);border:2px solid var(--accent);border-radius:12px;padding:16px 24px;box-shadow:var(--shadow-lg);font-size:14px;color:var(--text-primary);min-width:280px;text-align:center">
      <strong style="color:var(--accent)">⌨ 快捷键</strong><br>
      <span style="color:var(--text-secondary)">← 上一页  → 下一页  Alt+D 切换主题  H 显示帮助</span>
      <br><button onclick="this.parentElement.parentElement.remove()" style="margin-top:8px;padding:4px 16px;border:1px solid var(--border);border-radius:6px;background:transparent;cursor:pointer">关闭</button>
    </div>`;
    document.body.appendChild(div);
    setTimeout(() => div.querySelector('div').style.opacity='1', 10);
  },

  // ======== 导航 ========
  navigate(id, skipSave) {
    const idx = COURSE_DATA.pages.findIndex(p => p.id === id);
    if (idx < 0) return;
    this.currentPage = idx;
    if (!skipSave) {
      this.completed.add(id);
      this._saveProgress();
    }
    const page = COURSE_DATA.pages[idx];
    document.getElementById('pageTitle').textContent = page.icon+' '+page.title;
    const area = document.getElementById('contentArea');
    area.innerHTML = '';
    area.className = 'content-area';
    // 调用对应的渲染函数
    const fn = `render${id.charAt(0).toUpperCase()+id.slice(1).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())}`;
    if (typeof window[fn] === 'function') window[fn](area);
    else if (typeof window['renderGeneric'] === 'function') window['renderGeneric'](area, page);
    // 更新导航高亮
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.id === id);
      n.classList.toggle('completed', this.completed.has(n.dataset.id));
    });
    this._updateProgress();
    window.scrollTo(0,0);
    // 关闭移动端侧栏
    const s = document.getElementById('sidebar');
    const o = document.getElementById('sidebar-overlay');
    if (s) s.classList.remove('open');
    if (o) { o.classList.remove('show'); }
  },

  resetProgress() {
    if (confirm('确定重置所有学习进度？此操作不可恢复。')) {
      this.completed.clear();
      this._saveProgress();
      this.navigate('intro');
    }
  }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => App.init());
