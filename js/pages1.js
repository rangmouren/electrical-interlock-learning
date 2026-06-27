/* ============================================================
   PAGES 1 — 用生活类比讲电气控制
   给零基础的小白：每个概念都有"人话"版解释
   ============================================================ */

function renderIntro(el) {
  el.innerHTML =
    '<div class="hero animate-in">' +
      '<h2>⚡ 电气控制连锁技术</h2>' +
      '<p style="font-size:18px">完全零基础入门 · 用生活例子讲电气知识</p>' +
      '<p>你不用懂任何电路知识。每一步我都会用<strong>你生活中的事</strong>来打比方，</br>' +
      '让你先听懂"它到底在干嘛"，再看电路图。</p>' +
      '<div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
        '<span class="badge badge-blue">📘 15节从零开始</span>' +
        '<span class="badge badge-green">🧪 能动手的交互实验</span>' +
        '<span class="badge badge-yellow">📝 每章有测验</span>' +
        '<span class="badge badge-purple">💡 全是生活类比</span>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🤔 连锁控制是啥？先别管电路</h2>' +
      '<div class="info-box concept">' +
        '<strong>🧍 举个生活例子：</strong>' +
        '你坐在一把<strong>折叠椅</strong>上。椅子为什么不会突然合上？因为它有个<strong>锁扣</strong>卡住了。这个锁扣就是"<strong>自锁</strong>"——自己锁住自己。<br><br>' +
        '再看你家<strong>洗衣机</strong>：门没关好它不转，转的时候你打不开门。这就是"<strong>互锁</strong>"——门和转筒互相管着对方。<br><br>' +
        '<strong>连锁控制 = 给机器装上"规则"</strong>，让它们按规矩办事，不乱来。' +
      '</div>' +
      '<p>简单说：<strong>连锁控制就是给电气设备定规矩</strong>——什么条件下才能动，什么情况下必须停。</p>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🔗 三种"规矩"的对比</h2>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><span class="tag tag-self">🔒 自锁</span><h4>"自己锁住自己"</h4><p>像<strong>马桶冲水按钮</strong>——按一下水就冲，松手了水还在流（浮球阀保持住）。</p><p style="color:var(--accent);font-size:13px">按一下→动了→自己保持→不用一直按着</p></div>' +
        '<div class="comparison-card"><span class="tag tag-mutual">🚫 互锁</span><h4>"你干我就不干"</h4><p>像<strong>一扇门的锁和把手</strong>——锁上了就不能转把手，转把手就锁不上。</p><p style="color:var(--danger);font-size:13px">两个动作互相排斥，不能同时发生</p></div>' +
        '<div class="comparison-card"><span class="tag tag-complex">🔄 复合连锁</span><h4>"多重保险"</h4><p>像<strong>微波炉</strong>——门没关好不启动、超时自动停、过热也自动停。</p><p style="color:var(--success);font-size:13px">好几道规矩同时管着，出啥事都有保障</p></div>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🎯 学完你能干啥</h2>' +
      '<div class="goal-grid">' +
        '<div class="goal-item">✅ 看懂最简单的电路图（梯形图）</div>' +
        '<div class="goal-item">✅ 理解"按一下就一直转"是怎么实现的</div>' +
        '<div class="goal-item">✅ 知道为啥正反转不能同时按</div>' +
        '<div class="goal-item">✅ 明白多级保护是怎么一层层保安全的</div>' +
        '<div class="goal-item">✅ 出小毛病知道怎么查</div>' +
        '<div class="goal-item">✅ 能看懂工厂里设备的控制逻辑</div>' +
      '</div>' +
      '<div style="text-align:center;margin-top:24px"><button class="btn btn-primary" onclick="App.navigate(\'basics\')">开始学→先认元件</button></div>' +
    '</div>';
}

function renderBasics(el) {
  el.innerHTML =
    stepBar(2,15) +
    '<div class="section-card animate-in">' +
      '<h2>🔧 先认人：电路里的"演员"们</h2>' +
      '<p>学电路就像认识一群朋友。你不需要记住技术细节，先知道<strong>每个元件是干嘛的</strong>就行。</p>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>1️⃣ 按钮开关 — 你下达命令用的</h2>' +
      '<p style="margin-bottom:16px">就像你家电灯开关。但电气控制里的按钮<strong>按下去接通，松手就断开</strong>（不像家里开关能卡住）。</p>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><h4>常开（NO）</h4><div class="symbol-demo">—⏜—</div><p><strong>常态下是断开的</strong>，按下去才通。</p><p>就像<strong>门铃按钮</strong>——不按不响，按了才响，松手就停。</p><p style="color:var(--accent)">用于：启动、按一下触发</p></div>' +
        '<div class="comparison-card"><h4>常闭（NC）</h4><div class="symbol-demo">—⏝—</div><p><strong>常态下是通的</strong>，按下去才断。</p><p>就像<strong>报警器的防拆开关</strong>——平时通着，一按就断开报警。</p><p style="color:var(--danger)">用于：停止、急停</p></div>' +
      '</div>' +
      '<div class="info-box concept"><strong>💡 记住"常"字：</strong>"常"就是<strong>"平时"</strong>的意思。常开=平时断开，常闭=平时闭合。问自己：<strong>"这个元件不动它的时候，电过得去吗？"</strong></div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>2️⃣ 接触器（KM）— 执行命令的大力士</h2>' +
      '<p><strong>接触器是电路中最重要的角色</strong>。它像什么呢？</p>' +
      '<div class="info-box concept"><strong>🧍 打个比方：</strong>接触器就像一个<strong>保安</strong>。保安收到指令（线圈通电）→ 打开大门（主触点闭合，电机转）→ 同时按一下小开关（辅助触点动作，告诉别的电路"我开工了"）。</div>' +
      '<p><strong>它有三个关键部分：</strong></p>' +
      '<table class="styled-table">' +
        '<tr><th>部件</th><th>图形符号</th><th>用"人话"说</th><th>类比</th></tr>' +
        '<tr><td><strong>线圈</strong></td><td>—( )—</td><td>接收电信号，通电产生磁力</td><td>保安的"对讲机"——收到指令才有动作</td></tr>' +
        '<tr><td><strong>主触点（NO）</strong></td><td>—] [—</td><td>控制大电流通断（电机）</td><td>保安打开的大门——让大车通过</td></tr>' +
        '<tr><td><strong>辅助触点</strong></td><td>NO/NC两种</td><td>小电流信号，用于自锁/互锁</td><td>保安按的小按钮——告诉别人"我开工了"</td></tr>' +
      '</table>' +
      '<div class="info-box success"><strong>🎯 你现在只需要知道：</strong>线圈通电→触点就动（常开变通，常闭变断）。线圈断电→触点恢复原样。就这么简单。</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>3️⃣ 其他配角</h2>' +
      '<ul>' +
        '<li><strong>🔥 热继电器（FR）</strong> — 像<strong>保险丝的温度计版</strong>。电流太大→发热→自动断开→保护电机不被烧坏。</li>' +
        '<li><strong>⏱️ 时间继电器（KT）</strong> — 像<strong>微波炉定时器</strong>。到时间了自动切换。比如先启动5秒后再换另一种方式。</li>' +
        '<li><strong>📢 中间继电器（KA）</strong> — 像<strong>传话筒</strong>。一个信号太弱了，用它转达一下。</li>' +
        '<li><strong>📍 行程开关（SQ）</strong> — 像<strong>电梯门触到障碍物就弹开</strong>的传感器。碰到位了，就发信号。</li>' +
      '</ul>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'intro\')">← 绪论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'circuit-basics\')">电路原理 →</button></div>';
}

function renderCircuitBasics(el) {
  el.innerHTML =
    stepBar(3,15) +
    '<div class="section-card animate-in">' +
      '<h2>⚡ 电路就像"水管"</h2>' +
      '<div class="info-box concept"><strong>💡 最好的类比：</strong>电路就像<strong>水管系统</strong>。电压=水压，电流=水流，开关=阀门。阀门开了（触点闭合），水就流过；阀门关了（触点断开），水就停。</div>' +
      '<h3>两种基本连接方式</h3>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card"><h4>串联 = 两个阀门串一起</h4><div class="card-code">🚰—阀门A—阀门B—🚰</div><p><strong>两个都打开</strong>，水才流得过去。一个关就全停。</p><p style="color:var(--text-muted)">就像：两个门禁都要刷——先刷一个，再刷一个，都过了才能进</p></div>' +
        '<div class="comparison-card"><h4>并联 = 两个阀门并一起</h4><div class="card-code">🚰—阀门A—🚰<br>🚰—阀门B—🚰</div><p><strong>任意一个打开</strong>，水就能流过去。</p><p style="color:var(--text-muted)">就像：家里好几个水龙头——随便开一个就有水</p></div>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>📖 梯形图——电路界的"乐高图纸"</h2>' +
      '<p>电气工程师画电路用一种叫<strong>梯形图</strong>的画法。它的样子像梯子：</p>' +
      '<div class="ladder-container">' +
        '<pre style="font-family:monospace;font-size:15px;line-height:1.8">' +
        '        ┌─ L（火线）───────── N（零线）─┐' +
        '        │                              │' +
        '        │   ┌─[ ]─┬─[ ]─┬─( )─┐       │' +
        '        │   │ 触点 │ 触点 │ 线圈 │       │' +
        '        │   └─────┴─────┴────┘       │' +
        '        │  ← 输入（条件） 输出（结果）→│' +
        '        └──────────────────────────────┘' +
        '</pre>' +
      '</div>' +
      '<p><strong>阅读规则极其简单：</strong></p>' +
      '<ol>' +
        '<li>左边竖线 = <strong>正极（L）</strong>，右边竖线 = <strong>负极（N）</strong></li>' +
        '<li>中间横线 = 一条"电路"，叫<strong>梯级（Rung）</strong></li>' +
        '<li><strong>左边放条件（触点/按钮）</strong>，<strong>右边放结果（线圈/灯泡）</strong></li>' +
        '<li>左边的条件都满足了（所有触点闭合），右边的结果就发生（线圈得电）</li>' +
      '</ol>' +
      '<div class="info-box success"><strong>🎯 一句话记梯形图：</strong>左条件，右结果。条件全满足，结果就发生。</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🧩 四种基本"逻辑"</h2>' +
      '<p>电路本质上就是逻辑判断。你已经知道串联并联了，那看看这四种逻辑：</p>' +
      '<table class="styled-table">' +
        '<tr><th>逻辑</th><th>生活例子</th><th>电路结构</th></tr>' +
        '<tr><td><strong>与</strong></td><td>门禁要<strong>同时</strong>刷卡+输密码 → 才进门</td><td>触点串联（两个都闭合才行）</td></tr>' +
        '<tr><td><strong>或</strong></td><td>两个开关<strong>随便按哪个</strong>灯都亮</td><td>触点并联（一个闭合就行）</td></tr>' +
        '<tr><td><strong>非</strong></td><td>按急停→机器停（不按是通的）</td><td>常闭触点（常态通、动作断）</td></tr>' +
        '<tr><td><strong>记忆</strong></td><td>按一下→一直转→直到按停止</td><td>自锁电路（下节课讲）</td></tr>' +
      '</table>' +
      '<div class="info-box success"><strong>💡 理解了这四个逻辑，你就懂了70%的电气控制！</strong></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'basics\')">← 认元件</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock\')">学自锁 →</button></div>';
}

function renderSelfLock(el) {
  el.innerHTML =
    stepBar(4,15) +
    '<div class="section-card animate-in">' +
      '<h2>🔒 自锁——"按一下就不用一直按着"</h2>' +
      '<div class="info-box concept">' +
        '<strong>🧍 先讲生活例子：</strong><br><br>' +
        '你家<strong>马桶的冲水按钮</strong>：按一下→水冲→松手→水还继续流。为什么？因为有个<strong>浮球阀</strong>在冲水过程中自己保持住了。<br><br>' +
        '还有<strong>电风扇的按钮</strong>：按一下"开"→风扇转了→松手→它还在转。它"记住了"自己应该保持转动。<br><br>' +
        '<strong>自锁 = 电路"记住"自己要继续工作</strong>，不依赖你一直按着按钮。' +
      '</div>' +
      '<h3>电路是怎么做到的？</h3>' +
      '<div class="circuit-canvas">' + SVG.selfLockDiagram() + '<div class="circuit-controls">' +
        '<span class="legend-item"><span class="legend-icon">🔘</span> SB1 = 启动按钮（按才通）</span>' +
        '<span class="legend-item"><span class="legend-icon">🔄</span> KM自锁触点 = "小钩子"（自己钩住自己）</span>' +
        '<span class="legend-item"><span class="legend-icon">⭕</span> KM线圈 = "保安"（收到电就干活）</span>' +
      '</div></div>' +
      '<h3>🔑 看懂上面那张图</h3>' +
      '<p>图中最关键的部位是<strong>KM自锁触点</strong>——它和启动按钮<strong>并联</strong>（并排走）。这意味着：</p>' +
      '<ol>' +
        '<li>按下SB1 → 电从SB1这条路流到KM线圈 → KM得电 → 机器转</li>' +
        '<li>KM得电的同时，KM自锁触点<strong>也闭合了</strong>（因为它们是联动的）</li>' +
        '<li>现在有<strong>两条路</strong>都可以让电到KM线圈：通过SB1，<strong>或者</strong>通过KM自锁触点</li>' +
        '<li>你松手 → SB1断开 → 但KM自锁触点<strong>还闭合着</strong> → 电从KM自锁触点这条路继续流 → KM继续工作</li>' +
      '</ol>' +
      '<div class="info-box success"><strong>🎯 核心一句话：</strong>自锁就是把自己的辅助触点并联在启动按钮上。自己得电后，这个触点闭合"顶替"按钮的作用。</div>' +
      '<h3>怎么让它停下来？</h3>' +
      '<p>加了自锁就不能停了？当然不是。需要在电路里<strong>串联一个停止按钮</strong>（常闭的）。</p>' +
      '<div class="ladder-container"><pre style="font-family:monospace;font-size:14px;line-height:1.6">' +
      '  停止          启动        自锁触点       线圈' +
      '\n ─┤[/]────┤[ ]──────┤[ ]────────( )──' +
      '\n          │                      │' +
      '\n          └─────── KM自锁 ────────┘' +
      '</pre></div>' +
      '<p>按停止→停止按钮断开（常闭按了就断）→整条路被切断→KM失电→自锁触点也弹开→彻底停了。</p>' +
      '<div class="info-box warning"><strong>⚠️ 重要：</strong>如果<strong>没有停止按钮</strong>，按启动后电路就永远停不下来（除非拉总闸）。所以实际中<strong>启动+停止是一对</strong>，缺一不可。</div>' +
      '<h3>自锁还有个好处：安全</h3>' +
      '<p><strong>欠压保护</strong>——这是个啥？比方说：工厂突然停电了，机器停了。电来了之后，它会自己启动吗？</p>' +
      '<p><strong>不会！</strong>因为停电导致KM线圈失电→自锁触点断开了→电来了也不会自己通→必须重新按启动按钮。</p>' +
      '<p>这很重要——要是停电后来电机器自己转，正在检修的工人会被伤到！</p>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'circuit-basics\')">← 电路基础</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock-practice\')">🧪 动手试试 →</button></div>';
}

function renderSelfLockPractice(el) {
  el.innerHTML =
    stepBar(5,15) +
    '<div class="section-card animate-in">' +
      '<h2>🧪 亲手验证"自锁"效果</h2>' +
      '<p>现在你亲自操作：按下启动→松手→观察有没有"锁住"。</p>' +
      '<div class="circuit-canvas">' +
        '<div id="slp-preview">' + SVG.selfLockNO() + '</div>' +
        '<div class="circuit-controls">' +
          '<button class="btn btn-primary" id="slp-sb1" onclick="SLP.press()">🔘 按下 SB1（启动）</button>' +
          '<button class="btn btn-outline" onclick="SLP.release()">✋ 松开 SB1</button>' +
          '<button class="btn btn-outline" onclick="SLP.stop()" style="border-color:var(--danger);color:var(--danger)">⏹ 按停止（切断电源）</button>' +
        '</div>' +
      '</div>' +
      '<div style="margin:20px 0"><table class="styled-table">' +
        '<tr><th style="width:200px">看这里</th><th>状态</th></tr>' +
        '<tr><td>KM 线圈（电路核心）</td><td id="slp-km">⬜ 断电（还没启动）</td></tr>' +
        '<tr><td>整条电路</td><td id="slp-circuit">⬜ 断开</td></tr>' +
      '</table></div>' +
      '<div class="info-box concept"><strong>🧪 跟我做：</strong>' +
        '<ol>' +
          '<li>点击 <strong>「按下 SB1」</strong> → 注意电路变成绿色，KM线圈亮了（得电了）</li>' +
          '<li>点击 <strong>「松开 SB1」</strong> → ⚠️ <strong>注意！</strong>虽然按钮松开了，但电路<strong>还是绿色的！</strong>KM线圈依然得电！</li>' +
          '<li><strong>这就是自锁的效果！</strong>按一下→动了→自己锁住了→松手不停。</li>' +
          '<li>点击 <strong>「停止」</strong> → 电源切断，KM失电，恢复原状。</li>' +
        '</ol>' +
      '</div>' +
      '<div class="info-box success"><strong>✅ 自锁的精髓：</strong>KM用自己的触点"钩住"了自己。按下SB1→KM得电→KM自锁触点闭合（和SB1并排的那条路）→即使SB1松了，电流从自锁触点那路继续走→KM一直保持得电。</div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'self-lock\')">← 重新看理论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'self-lock-quiz\')">📝 做个小测验 →</button></div>';

  window.SLP = {
    _kmOn: false, _sb1On: false,
    _update: function() {
      document.getElementById('slp-preview').innerHTML = this._kmOn ? SVG.selfLockON() : SVG.selfLockNO();
      var btn = document.getElementById('slp-sb1');
      btn.className = 'btn btn-primary';
      btn.textContent = this._sb1On ? '🔘 SB1 已按下' : '🔘 按下 SB1（启动）';
      document.getElementById('slp-km').innerHTML = this._kmOn ? '<span style="color:var(--success);font-weight:600">✅ 得电（自锁保持中！松手也不会掉）</span>' : '<span style="color:var(--text-muted)">⬜ 断电（还没启动）</span>';
      document.getElementById('slp-circuit').innerHTML = this._kmOn ? '<span style="color:var(--success)">🟢 通电（自锁触点闭合，电流持续流过）</span>' : '<span style="color:var(--text-muted)">⬜ 断开（等待启动）</span>';
    },
    press: function() { this._sb1On = true; this._kmOn = true; this._update(); },
    release: function() { this._sb1On = false; this._update(); },
    stop: function() { this._sb1On = false; this._kmOn = false; this._update(); }
  };
}

// ============== 测验（保持原有功能，内容已经在data.js里优化了） ==============
function renderSelfLockQuiz(el) { renderQuiz(el, 'self-lock-quiz', 'mutual-lock', '学互锁 →'); }
function renderMutualLockQuiz(el) { renderQuiz(el, 'mutual-lock-quiz', 'complex-interlock', '学复合连锁 →'); }
function renderComplexQuiz(el) { renderQuiz(el, 'complex-quiz', 'applications', '看工程应用 →'); }
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
    html += '<div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:14px;color:var(--text-muted)"><span>问题 ' + (current+1) + '/' + questions.length + '</span><span>正确: ' + score + '/' + done + '</span></div>';
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
      html += '<div class="quiz-feedback show ' + (ok ? 'correct' : 'wrong') + '"><strong>' + (ok ? '✅ 正确！' : '❌ 不对哦') + '</strong><br>' + q.e + '</div>';
    }
    html += '<div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap">';
    if (!submitted[current] && answers[current] >= 0) html += '<button class="btn btn-primary" onclick="window._qs()">📤 提交答案</button>';
    if (current > 0) html += '<button class="btn btn-outline" onclick="window._qp()">← 上一题</button>';
    if (submitted[current] && current < questions.length - 1) html += '<button class="btn btn-primary" onclick="window._qn()">下一题 →</button>';

    if (submitted[current] && current === questions.length - 1) {
      var pct = Math.round(score / questions.length * 100);
      var pctStr;
      if (pct === 100) pctStr = '🎉 满分通关！太棒了！';
      else if (pct >= 70) pctStr = '👍 不错！看看解析复习一下？';
      else pctStr = '📖 建议回看前面的章节再试试';
      html += '</div></div><div class="info-box success"><strong>🏆 ' + (isFinal ? '综合测验完成！' : '章节测验完成！') + '</strong><br>得分：' + score + '/' + questions.length + ' (' + pct + '%)<br>' + pctStr + '</div>';
      if (isFinal) {
        html += '<div style="text-align:center;margin-top:16px"><div class="info-box concept"><strong>🎊 全部学完了！</strong><br>你已经了解了自锁、互锁和复合连锁的基本原理。如果你想继续深入：<ul style="margin-top:8px;text-align:left"><li>🔧 买个实验板实际搭电路试试</li><li>📚 看看PLC（可编程控制器）怎么编程实现这些逻辑</li><li>🏭 观察身边设备的控制箱，认一认里面的接触器和按钮</li></ul></div></div>';
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
    '<p>' + (isFinal ? '检验一下你对连锁控制的掌握程度。每题都有解析。' : '做几道题看看记住了没。错了没关系，解析会告诉你为什么。') + '</p>' +
    '<div id="' + quizId + '-content"></div></div>' +
    (isFinal ? '' : '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'' + quizId.replace('-quiz', '-practice') + '\')">← 回看实验</button></div>');
  renderQ();
}
