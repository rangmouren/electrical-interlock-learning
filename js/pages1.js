/* ============================================================
   PAGES 1 — 绪论、基础、自锁理论/实验/测验
   ============================================================ */

function renderIntro(el) {
  el.innerHTML =
    '<div class="hero animate-in">' +
      '<h2>⚡ 电气控制连锁技术</h2>' +
      '<p>从零开始，系统学习自锁、互锁和复合连锁电路。<br>' +
      '每一步都配有电路图、交互实验和测验，让你真正理解电气控制的核心原理。</p>' +
      '<div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
        '<span class="badge badge-blue">📘 15节系统课程</span>' +
        '<span class="badge badge-green">🧪 3个交互实验</span>' +
        '<span class="badge badge-yellow">📝 4套测验</span>' +
        '<span class="badge badge-purple">🌓 深色模式</span>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🔍 什么是连锁控制？</h2>' +
      '<p><strong>连锁（Interlock）</strong>是电气控制系统中最基础也最重要的概念之一。它通过电气触点之间的相互制约关系，实现设备的安全、有序运行。</p>' +
      '<p>简单说就是"<strong>你不可以，我也不可以</strong>"——两个或多个电路之间建立相互约束，防止同时出现冲突状态。</p>' +
      '<div class="info-box concept"><strong>💡 核心思想：</strong>连锁控制解决了三个核心问题——<strong>保持状态</strong>（自锁）、<strong>防止冲突</strong>（互锁）、<strong>多级保护</strong>（复合连锁）。</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🔗 三种连锁形式对比</h2>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><span class="tag tag-self">🔒 自锁</span><h4>Self-Lock</h4><p>自身辅助触点维持线圈通电。按下后松手也不停。</p><div class="card-code">NO触点∥按钮</div></div>' +
        '<div class="comparison-card"><span class="tag tag-mutual">🚫 互锁</span><h4>Interlock</h4><p>两个回路互相封锁对方。一个得电，另一个自动被切断。</p><div class="card-code">NC触点↔串联</div></div>' +
        '<div class="comparison-card"><span class="tag tag-complex">🔄 复合连锁</span><h4>Composite</h4><p>自锁+互锁+保护连锁（热继、时间、行程）协同工作。</p><div class="card-code">多层保护联动</div></div>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🎯 学习目标</h2>' +
      '<div class="goal-grid">' +
        '<div class="goal-item">✅ 理解自锁电路原理并能自行设计</div>' +
        '<div class="goal-item">✅ 掌握互锁电路的两种实现方式</div>' +
        '<div class="goal-item">✅ 分析复合连锁中的多重保护机制</div>' +
        '<div class="goal-item">✅ 阅读和绘制基本梯形图</div>' +
        '<div class="goal-item">✅ 具备故障排查的基本能力</div>' +
        '<div class="goal-item">✅ 了解工程应用的典型案例</div>' +
      '</div>' +
      '<div style="text-align:center;margin-top:24px"><button class="btn btn-primary" onclick="App.navigate(\'basics\')">开始学习 →</button></div>' +
    '</div>';
}

function renderBasics(el) {
  el.innerHTML =
    stepBar(2,15) +
    '<div class="section-card animate-in">' +
      '<h2>🔧 基础电气元件</h2>' +
      '<h3>1. 按钮开关 (Push Button)</h3>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><h4>常开 (NO)</h4><div class="symbol-demo">—⏜—</div><p>平时断开，按下接通，松手断开</p><p style="color:var(--accent)">用于：启动、触发</p></div>' +
        '<div class="comparison-card"><h4>常闭 (NC)</h4><div class="symbol-demo">—⏝—</div><p>平时接通，按下断开，松手恢复</p><p style="color:var(--danger)">用于：停止、急停</p></div>' +
      '</div>' +
      '<h3>2. 接触器 (KM) — 核心执行元件</h3>' +
      '<p>接触器由电磁线圈和触点组成。线圈通电产生电磁力，吸合主触点和辅助触点。</p>' +
      '<table class="styled-table">' +
        '<tr><th>部件</th><th>符号</th><th>功能</th></tr>' +
        '<tr><td>线圈</td><td>—( )—</td><td>通电产生电磁力</td></tr>' +
        '<tr><td>主触点 (NO)</td><td>—] [—</td><td>控制主电路（电机等）通断</td></tr>' +
        '<tr><td>辅助常开 (NO)</td><td>—] [—</td><td>自锁/信号传递</td></tr>' +
        '<tr><td>辅助常闭 (NC)</td><td>—] /[—</td><td>互锁/信号传递</td></tr>' +
      '</table>' +
      '<h3>3. 其它重要元件</h3>' +
      '<ul>' +
        '<li><strong>热继电器 (FR)</strong> — 过载保护，双金属片热变形原理</li>' +
        '<li><strong>时间继电器 (KT)</strong> — 延时动作，用于定时控制</li>' +
        '<li><strong>中间继电器 (KA)</strong> — 信号放大和转换</li>' +
        '<li><strong>行程开关 (SQ)</strong> — 限位检测，机械触发</li>' +
      '</ul>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🧠 关键理解：NO vs NC</h2>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card" style="border-color:var(--accent)">' +
          '<h4 style="color:var(--accent)">NO — 常开</h4>' +
          '<div style="font-size:40px;text-align:center;margin:8px 0">⬜ → 🟢</div>' +
          '<p>无动作时断开<br>得电/按下后闭合</p>' +
        '</div>' +
        '<div class="comparison-card" style="border-color:var(--danger)">' +
          '<h4 style="color:var(--danger)">NC — 常闭</h4>' +
          '<div style="font-size:40px;text-align:center;margin:8px 0">🟢 → ⬜</div>' +
          '<p>无动作时闭合<br>得电/按下后断开</p>' +
        '</div>' +
      '</div>' +
      '<div class="info-box warning"><strong>⚠️ 初学者最容易混淆的地方：</strong>常闭不是"经常关闭"的意思，而是"<strong>常态下是闭合的</strong>"。区分NO和NC时，问自己：<strong>"不动作时这个触点是通的还是断的？"</strong></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'intro\')">← 绪论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'circuit-basics\')">电路原理 →</button></div>';
}

function renderCircuitBasics(el) {
  el.innerHTML =
    stepBar(3,15) +
    '<div class="section-card animate-in">' +
      '<h2>⚡ 基本电路原理</h2>' +
      '<h3>1. 串联与并联</h3>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><h4>串联 = 与 (AND)</h4><div class="card-code">A —B—</div><p>所有触点<strong>都</strong>闭合才导通</p></div>' +
        '<div class="comparison-card"><h4>并联 = 或 (OR)</h4><div class="card-code">A —┤├—<br>B —┤├—</div><p>任一触点闭合即导通</p></div>' +
      '</div>' +
      '<h3>2. 梯形图阅读规则</h3>' +
      '<div class="info-box concept"><strong>📖 梯形图规则：</strong><ol>' +
        '<li>两条竖线 = 电源母线（L和N）</li>' +
        '<li>水平线 = "梯级"（Rung），每条梯级一个回路</li>' +
        '<li><strong>触点（输入）在左，线圈（输出）在右</strong></li>' +
        '<li>串联 = AND，并联 = OR</li>' +
        '<li>线圈得电后，其对应的触点改变状态</li>' +
      '</ol></div>' +
      '<h3>3. 四种逻辑关系</h3>' +
      '<table class="styled-table">' +
        '<tr><th>逻辑</th><th>电路结构</th><th>示例</th></tr>' +
        '<tr><td>与 (AND)</td><td>触点串联</td><td>A AND B 都闭 → 线圈得电</td></tr>' +
        '<tr><td>或 (OR)</td><td>触点并联</td><td>A OR B 任一闭 → 线圈得电</td></tr>' +
        '<tr><td>非 (NOT)</td><td>常闭触点</td><td>NC 断开 → 线圈失电</td></tr>' +
        '<tr><td>记忆 (LATCH)</td><td>自锁电路</td><td>自锁触点维持状态</td></tr>' +
      '</table>' +
      '<div class="info-box success"><strong>💡 掌握这四个逻辑关系，你就理解了70%的电气控制！</strong></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'basics\')">← 基础元件</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock\')">开始学自锁 →</button></div>';
}

function renderSelfLock(el) {
  el.innerHTML =
    stepBar(4,15) +
    '<div class="section-card animate-in">' +
      '<h2>🔒 自锁电路 (Self-Lock)</h2>' +
      '<div class="info-box concept"><strong>📖 自锁：</strong>利用接触器自身的辅助常开触点来维持线圈持续通电。<br><strong>按下→动了→锁住自己→松手也不停</strong></div>' +
      '<h3>梯形图</h3>' +
      '<div class="circuit-canvas">' + SVG.selfLockDiagram() + '<div class="circuit-controls"><span class="legend-item"><span class="legend-icon">🔘</span> SB1启动(NO)</span><span class="legend-item"><span class="legend-icon">🔄</span> KM自锁触点(并联)</span><span class="legend-item"><span class="legend-icon">⭕</span> KM线圈</span></div></div>' +
      '<h3>工作原理（三步曲）</h3>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><h4>① 初始</h4><p>KM无电→触点全断→电路不导通</p></div>' +
        '<div class="comparison-card" style="border-color:var(--accent)"><h4>② 按下SB1</h4><p>SB1通→KM得电→自锁触点闭合</p></div>' +
        '<div class="comparison-card" style="border-color:var(--success)"><h4>③ 松手保持</h4><p>SB1断→自锁触点仍闭合→继续运行</p></div>' +
      '</div>' +
      '<div class="info-box warning"><strong>⚠️ 如何停止？</strong>串联一个<strong>停止按钮的常闭触点</strong>（NC）。按下停止时NC断开，切断回路。如果不加停止按钮，一旦启动就无法停止！</div>' +
      '<h3>工程意义</h3><ul>' +
        '<li><strong>🔐 保持状态</strong> — 点按即可持续运行，无需一直按住</li>' +
        '<li><strong>🛡️ 欠压保护</strong> — 断电后不会自启动，防止意外</li>' +
        '<li><strong>⚡ 简化操作</strong> — 操作员只需点按</li>' +
      '</ul>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'circuit-basics\')">← 电路基础</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock-practice\')">🧪 自锁实验 →</button></div>';
}

function renderSelfLockPractice(el) {
  el.innerHTML =
    stepBar(5,15) +
    '<div class="section-card animate-in">' +
      '<h2>🧪 自锁电路交互实验</h2>' +
      '<p>点击按钮，观察自锁电路的工作过程：</p>' +
      '<div class="circuit-canvas">' +
        '<div id="slp-preview">' + SVG.selfLockNO() + '</div>' +
        '<div class="circuit-controls">' +
          '<button class="btn btn-primary" id="slp-sb1" onclick="SLP.press()">🔘 按下 SB1</button>' +
          '<button class="btn btn-outline" onclick="SLP.release()">✋ 松开 SB1</button>' +
          '<button class="btn btn-outline" onclick="SLP.stop()" style="border-color:var(--danger);color:var(--danger)">⏹ 停止</button>' +
        '</div>' +
      '</div>' +
      '<div style="margin:20px 0"><table class="styled-table">' +
        '<tr><th style="width:200px">元件</th><th>状态</th></tr>' +
        '<tr><td>KM 线圈</td><td id="slp-km">⬜ 断电</td></tr>' +
        '<tr><td>电路</td><td id="slp-circuit">断开（等待启动）</td></tr>' +
      '</table></div>' +
      '<div class="info-box concept"><strong>🧪 实验步骤：</strong><ol>' +
        '<li>点击 <strong>「按下 SB1」</strong> → 观察电路导通，KM线圈变绿</li>' +
        '<li>点击 <strong>「松开 SB1」</strong> → 注意！虽然SB1复位，但KM<strong>仍然得电</strong>（这就是自锁！）</li>' +
        '<li>点击 <strong>「停止」</strong> → 切断电源，KM失电复位</li>' +
      '</ol></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'self-lock\')">← 自锁理论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock-quiz\')">📝 小测验 →</button></div>';

  window.SLP = {
    _kmOn: false, _sb1On: false,
    _update: function() {
      document.getElementById('slp-preview').innerHTML = this._kmOn ? SVG.selfLockON() : SVG.selfLockNO();
      var btn = document.getElementById('slp-sb1');
      btn.className = 'btn btn-primary';
      btn.textContent = this._sb1On ? '🔘 SB1 已按下' : '🔘 按下 SB1';
      document.getElementById('slp-km').innerHTML = this._kmOn ? '<span style="color:var(--success);font-weight:600">✅ 得电（自锁保持中）</span>' : '<span style="color:var(--text-muted)">⬜ 断电</span>';
      document.getElementById('slp-circuit').innerHTML = this._kmOn ? '<span style="color:var(--success)">🟢 通电（自锁触点闭合）</span>' : '<span style="color:var(--text-muted)">⬜ 断开</span>';
    },
    press: function() { this._sb1On = true; this._kmOn = true; this._update(); },
    release: function() { this._sb1On = false; this._update(); },
    stop: function() { this._sb1On = false; this._kmOn = false; this._update(); }
  };
}

function renderSelfLockQuiz(el) { renderQuiz(el, 'self-lock-quiz', 'mutual-lock', '互锁 →'); }
function renderMutualLockQuiz(el) { renderQuiz(el, 'mutual-lock-quiz', 'complex-interlock', '复合连锁 →'); }
function renderComplexQuiz(el) { renderQuiz(el, 'complex-quiz', 'applications', '工程应用 →'); }
function renderFinalQuiz(el) { renderQuiz(el, 'final-quiz', null, null, true); }

function renderQuiz(el, quizId, nextId, nextLabel, isFinal) {
  var questions = QUIZZES[quizId];
  if (!questions) { el.innerHTML = '<div class="section-card">测验数据未找到</div>'; return; }

  var current = 0;
  var answers = [];
  var submitted = [];
  var score = 0;
  for (var i = 0; i < questions.length; i++) { answers.push(-1); submitted.push(false); }

  function renderQ() {
    var q = questions[current];
    var done = 0;
    for (var i = 0; i < submitted.length; i++) { if (submitted[i]) done++; }
    var html = '<div class="quiz-container">';
    html += '<div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:14px;color:var(--text-muted)"><span>问题 ' + (current+1) + '/' + questions.length + '</span><span>得分: ' + score + '/' + done + '</span></div>';
    html += '<div style="height:6px;background:var(--border);border-radius:3px;margin-bottom:16px;overflow:hidden"><div style="height:100%;width:' + (done/questions.length*100) + '%;background:var(--success);border-radius:3px;transition:width 0.3s"></div></div>';
    html += '<div class="quiz-question">' + q.q + '</div><div class="quiz-options">';
    for (var i = 0; i < q.o.length; i++) {
      var cls = 'quiz-option';
      if (submitted[current]) {
        if (i === q.a) cls += ' correct';
        else if (i === answers[current]) cls += ' wrong';
      } else if (i === answers[current]) {
        cls += ' selected';
      }
      html += '<div class="' + cls + '" onclick="' + (submitted[current] ? '' : 'window._qa(' + i + ')') + '">' + q.o[i] + '</div>';
    }
    html += '</div>';
    if (submitted[current]) {
      var ok = answers[current] === q.a;
      html += '<div class="quiz-feedback show ' + (ok ? 'correct' : 'wrong') + '"><strong>' + (ok ? '✅ 正确！' : '❌ 错误') + '</strong><br>' + q.e + '</div>';
    }
    html += '<div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap">';
    if (!submitted[current] && answers[current] >= 0) html += '<button class="btn btn-primary" onclick="window._qs()">📤 提交</button>';
    if (current > 0) html += '<button class="btn btn-outline" onclick="window._qp()">← 上一题</button>';
    if (submitted[current] && current < questions.length - 1) html += '<button class="btn btn-primary" onclick="window._qn()">下一题 →</button>';

    if (submitted[current] && current === questions.length - 1) {
      var pct = Math.round(score / questions.length * 100);
      var pctStr;
      if (pct === 100) pctStr = '🎉 满分通关！太棒了！';
      else if (pct >= 70) pctStr = '👍 不错！继续复习薄弱环节';
      else pctStr = '📖 建议复习相关章节';
      html += '</div></div><div class="info-box success"><strong>🏆 ' + (isFinal ? '综合测验完成！' : '章节测验完成！') + '</strong><br>最终得分：' + score + '/' + questions.length + ' (' + pct + '%)<br>' + pctStr + '</div>';
      if (isFinal) {
        html += '<div style="text-align:center;margin-top:16px"><div class="info-box concept"><strong>🎊 恭喜完成全部课程！</strong><br>你已经系统学习了连锁控制技术。接下来建议：<ul style="margin-top:8px"><li>🔧 在实验板上动手搭建电路</li><li>📚 学习PLC编程中的连锁逻辑</li><li>🏭 结合实际设备理解应用</li></ul></div></div>';
      } else if (nextId) {
        html += '<div style="text-align:center;margin-top:16px"><button class="btn btn-primary" onclick="App.navigate(\'' + nextId + '\')">' + nextLabel + '</button></div>';
      }
    }
    html += '</div></div>';
    document.getElementById(quizId + '-content').innerHTML = html;
  }

  window._qa = function(i) { if (!submitted[current]) { answers[current] = i; renderQ(); }};
  window._qs = function() {
    if (answers[current] >= 0 && !submitted[current]) {
      if (answers[current] === questions[current].a) score++;
      submitted[current] = true;
      renderQ();
    }
  };
  window._qn = function() { if (current < questions.length - 1) { current++; renderQ(); }};
  window._qp = function() { if (current > 0) { current--; renderQ(); }};

  var stepNum = isFinal ? 15 : (quizId.indexOf('self') >= 0 ? 6 : quizId.indexOf('mutual') >= 0 ? 9 : 12);
  el.innerHTML =
    stepBar(stepNum, 15) +
    '<div class="section-card animate-in"><h2>' + (isFinal ? '🏆 综合测验' : '📝 章节测验') + '</h2>' +
    '<p>' + (isFinal ? '全面检验你对连锁控制技术的掌握。每题都有详细解析。' : '检验本章节内容的掌握程度。') + '</p>' +
    '<div id="' + quizId + '-content"></div></div>' +
    (isFinal ? '' : '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'' + quizId.replace('-quiz', '-practice') + '\')">← 实验</button></div>');
  renderQ();
}
