/* ============================================================
   PAGES 2 — 互锁、复合连锁、应用、故障排查
   给零基础：每个概念都有生活类比
   ============================================================ */

function renderMutualLock(el) {
  el.innerHTML =
    stepBar(7,15) +
    '<div class="section-card animate-in">' +
      '<h2>🚫 互锁——"你动我就不动"</h2>' +
      '<div class="info-box concept">' +
        '<strong>🧍 先讲生活例子：</strong><br><br>' +
        '你见过<strong>老式双口煤气灶</strong>的旋钮吗？一个旋钮管左边，一个管右边。你不可能同时往"开"的方向拧两个旋钮——因为设计上它们互相"别着"（互锁了）。<br><br>' +
        '还有<strong>更衣室的锁</strong>：你在里面锁上门，外面的人就打不开；外面锁了，你在里面也打不开。两个人<strong>不能同时"占有"这把锁</strong>。<br><br>' +
        '互锁就是<strong>两个电路互相看着对方——"你干了，我就不能干"</strong>。' +
      '</div>' +
      '<h3>最经典的例子：电机正反转</h3>' +
      '<p>很多机器需要电机<strong>正转</strong>（比如吊扇顺时针转）和<strong>反转</strong>（逆时针）。但<strong>绝对不能两个方向同时给电</strong>——那会短路爆炸。</p>' +
      '<p>所以电路设计成：正转工作时，反转按钮<strong>按了也没用</strong>；反转工作时，正转按了也没用。</p>' +
      '<div class="circuit-canvas">' + SVG.mutualLock() + '</div>' +
      '<h3>🔑 看懂互锁电路图</h3>' +
      '<p>看上面图中被黄色框框标出来的<strong>"互锁区域"</strong>：</p>' +
      '<div class="comparison-grid">' +
        '<div class="comparison-card" style="border-color:var(--accent)">' +
          '<h4>回路1 正转（KM₁）</h4>' +
          '<p>这条路上串了一个<strong>KM₂的常闭触点</strong>。</p>' +
          '<p>→ KM₂没工作 → KM₂的常闭触点还闭合着 → 这条路是通的 → 可以按SB1启动正转</p>' +
          '<p>→ KM₁工作后 → KM₁把自己的常闭触点断开了 → KM₂的回路被切断 → 反转按了也没用</p>' +
        '</div>' +
        '<div class="comparison-card" style="border-color:var(--danger)">' +
          '<h4>回路2 反转（KM₂）</h4>' +
          '<p>这条路上串了一个<strong>KM₁的常闭触点</strong>。</p>' +
          '<p>→ 跟上面正好反过来</p>' +
          '<p>→ KM₂工作后 → KM₂断开KM₁的回路 → 正转按了也没用</p>' +
        '</div>' +
      '</div>' +
      '<div class="info-box warning"><strong>⚠️ 重要：</strong>正反转同时通电 = <strong>L1和L2两根电线短路</strong> = 火花四溅、跳闸、甚至火灾。互锁不是"锦上添花"，是<strong>保命的设计</strong>。</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>三种互锁方式——安♂全等级不同</h2>' +
      '<p>就像门锁有普通锁、防盗锁、双重锁：</p>' +
      '<table class="styled-table">' +
        '<tr><th>方式</th><th>咋实现的</th><th>像什么</th><th>安全性</th></tr>' +
        '<tr><td>电气互锁</td><td>用NC触点串在对方回路里</td><td>普通门锁</td><td>⭐ 够用，但触点可能粘住失效</td></tr>' +
        '<tr><td>机械互锁</td><td>接触器之间加个物理挡板</td><td>防盗锁——物理阻挡</td><td>⭐⭐ 触点粘了也推不动</td></tr>' +
        '<tr><td style="font-weight:700;color:var(--success)">双重互锁</td><td>电气+机械一起用</td><td>防盗门+链条锁</td><td>⭐⭐⭐ 最安全</td></tr>' +
      '</table>' +
      '<div class="info-box success"><strong>✅ 记住：</strong>自锁和互锁经常一起出现。自锁=保持运行，互锁=防止冲突。一个管"不停"，一个管"不乱来"。</div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'self-lock-quiz\')">← 自锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'mutual-lock-practice\')">🧪 动手试试互锁 →</button></div>';
}

function renderMutualLockPractice(el) {
  el.innerHTML =
    stepBar(8,15) +
    '<div class="section-card animate-in">' +
      '<h2>🧪 亲手试试互锁"锁"的效果</h2>' +
      '<p>下面两个按钮，一个管"正转"一个管"反转"。你试试能不能两个同时点亮。</p>' +
      '<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin:24px 0">' +
        '<div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);min-width:180px;flex:1">' +
          '<h3 style="margin-bottom:16px">KM₁ 正转</h3>' +
          '<button class="btn btn-toggle" id="mlp-k1" onclick="MLP.toggle(1)" style="width:140px;height:60px;font-size:15px">⬜ KM₁ 断电</button>' +
          '<p style="margin-top:8px;font-size:12px;color:var(--text-muted)">点击启动正转</p>' +
        '</div>' +
        '<div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);min-width:180px;flex:1">' +
          '<h3 style="margin-bottom:16px">KM₂ 反转</h3>' +
          '<button class="btn btn-toggle" id="mlp-k2" onclick="MLP.toggle(2)" style="width:140px;height:60px;font-size:15px">⬜ KM₂ 断电</button>' +
          '<p style="margin-top:8px;font-size:12px;color:var(--text-muted)">点击启动反转</p>' +
        '</div>' +
      '</div>' +
      '<div class="circuit-canvas">' + SVG.mutualLock() + '</div>' +
      '<div id="mlp-status" style="text-align:center;font-size:18px;font-weight:600;padding:16px;background:var(--bg-primary);border-radius:var(--radius-sm);margin:16px 0"><span style="color:var(--text-muted)">⏹ 停止，啥也没动</span></div>' +
      '<div id="mlp-note" style="text-align:center;font-size:14px;color:var(--text-secondary);margin-bottom:16px">点击 KM₁ 或 KM₂ 试试</div>' +
      '<div style="text-align:center;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn btn-outline" onclick="MLP.reset()">⏹ 全部复位</button>' +
        '<button class="btn btn-outline" onclick="MLP.force()" style="border-color:var(--danger);color:var(--danger)">💥 模拟互锁失效（短路！）</button>' +
      '</div>' +
      '<div class="info-box concept" style="margin-top:20px"><strong>🧪 跟我做：</strong>' +
        '<ol>' +
          '<li>点击 <strong>KM₁</strong> → 按钮变绿（正转启动了）→ 再点KM₂看看？<strong>点不动吧？</strong>这就是互锁在起作用！</li>' +
          '<li>点 <strong>复位</strong> → 再点 <strong>KM₂</strong> → 变绿了 → 试试KM₁，点不动了。</li>' +
          '<li>点 <strong>「模拟互锁失效」</strong> → 💥 两个都红了！这就是互锁坏掉时的后果——短路！</li>' +
        '</ol>' +
      '</div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'mutual-lock\')">← 重新看互锁理论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'mutual-lock-quiz\')">📝 做小测验 →</button></div>';

  window.MLP = {
    _k1: false, _k2: false,
    _upd: function() {
      var e1 = document.getElementById('mlp-k1'), e2 = document.getElementById('mlp-k2');
      var st = document.getElementById('mlp-status'), nt = document.getElementById('mlp-note');
      if (this._k1 && this._k2) {
        e1.className='btn btn-toggle on'; e1.textContent='💥 KM₁ 短路！';
        e2.className='btn btn-toggle on'; e2.textContent='💥 KM₂ 短路！';
        st.innerHTML = '<span style="color:var(--danger);font-weight:700">💥 短路！两个同时得电——互锁要防的就是这个！</span>';
        nt.textContent = '⚠️ 现实中这种情况会发生相间短路，火花四溅、跳闸断电！';
        return;
      }
      e1.className='btn btn-toggle'+(this._k1?' on':''); e1.textContent=this._k1?'✅ KM₁ 工作中':'⬜ KM₁ 断电';
      e2.className='btn btn-toggle'+(this._k2?' on':''); e2.textContent=this._k2?'✅ KM₂ 工作中':'⬜ KM₂ 断电';
      if (this._k1) { st.innerHTML='<span style="color:var(--success)">▶ 正转中——KM₂被互锁封锁，按了无效</span>'; nt.textContent='🔒 KM₁的常闭触点断开了KM₂的回路，这就是互锁！'; }
      else if (this._k2) { st.innerHTML='<span style="color:var(--success)">◀ 反转中——KM₁被互锁封锁，按了无效</span>'; nt.textContent='🔒 KM₂的常闭触点断开了KM₁的回路。'; }
      else { st.innerHTML='<span style="color:var(--text-muted)">⏹ 停止</span>'; nt.textContent='点击 KM₁ 或 KM₂ 启动试试'; }
    },
    toggle: function(n) {
      if (n===1) { if (this._k2) return; this._k1=!this._k1; }
      else { if (this._k1) return; this._k2=!this._k2; }
      this._upd();
    },
    reset: function() { this._k1=false; this._k2=false; this._upd(); },
    force: function() { this._k1=true; this._k2=true; this._upd(); }
  };
}

function renderComplexInterlock(el) {
  el.innerHTML =
    stepBar(10,15) +
    '<div class="section-card animate-in">' +
      '<h2>🔄 复合连锁——"好几道保险"</h2>' +
      '<div class="info-box concept">' +
        '<strong>🧍 生活例子：</strong><br><br>' +
        '你坐<strong>飞机</strong>起飞前——<br>' +
        '① 舱门关好（自锁？不，这是<strong>安全连锁</strong>）<br>' +
        '② 飞行员启动发动机（<strong>自锁</strong>——按一下就一直转）<br>' +
        '③ 两个发动机不能一个正推一个反推（<strong>互锁</strong>）<br>' +
        '④ 超温报警自动减推力（<strong>保护连锁</strong>）<br><br>' +
        '这就是复合连锁——<strong>好几层规矩同时管着，各管各的，一起保安全</strong>。' +
      '</div>' +
      '<p>复合连锁不是什么新东西，它就是<strong>自锁+互锁+各种保护</strong>一起用。实际工程里<strong>所有电路都是复合连锁</strong>。</p>' +
      '<h3>一个典型例子：正反转+多重保护</h3>' +
      '<div class="circuit-canvas">' + SVG.complex() + '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🧐 逐层看懂上面的电路</h2>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px">' +
        '<div class="interlock-card"><div class="il-icon">🔄</div><div class="il-title">自锁</div><div class="il-desc">KM自保触点</div><div class="il-effect">按一下就一直转</div></div>' +
        '<div class="interlock-card"><div class="il-icon">🚫</div><div class="il-title">互锁</div><div class="il-desc">NC触点串联</div><div class="il-effect">不能正反转同时</div></div>' +
        '<div class="interlock-card"><div class="il-icon">🔥</div><div class="il-title">过载保护</div><div class="il-desc">FR热继电器</div><div class="il-effect">电流太大就跳</div></div>' +
        '<div class="interlock-card"><div class="il-icon">⏱️</div><div class="il-title">换向延时</div><div class="il-desc">KT延时触点</div><div class="il-effect">防止立即换向</div></div>' +
        '<div class="interlock-card"><div class="il-icon">🛡️</div><div class="il-title">欠压保护</div><div class="il-desc">电磁原理</div><div class="il-effect">停电后不自启</div></div>' +
        '<div class="interlock-card"><div class="il-icon">💡</div><div class="il-title">状态指示</div><div class="il-desc">KM₁→HL₁</div><div class="il-effect">告诉你正在转</div></div>' +
      '</div>' +
      '<p style="margin-top:16px"><strong>它们各司其职</strong>——少了哪个都不安全或不方便。就像汽车：刹车、气囊、安全带、ABS……每个都有用。</p>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>其他复合连锁的例子</h2>' +
      '<table class="styled-table">' +
        '<tr><th>类型</th><th>怎么实现的</th><th>生活类比</th></tr>' +
        '<tr><td>⏱️ 时间连锁</td><td>时间继电器到时间自动切换</td><td>洗衣机——先洗5分钟→排水→再甩干，一步步来</td></tr>' +
        '<tr><td>📍 行程连锁</td><td>碰到限位开关就停</td><td>电梯到站自动停、车库门到头自动停</td></tr>' +
        '<tr><td>🔐 安全连锁</td><td>门没关就没法启动</td><td>微波炉——门开着就不转</td></tr>' +
        '<tr><td>🌡️ 温度连锁</td><td>温度过高就断电</td><td>电水壶——水开了自动跳</td></tr>' +
      '</table>' +
      '<div class="info-box success"><strong>✅ 设计原则（记住四个词就行）：</strong><br>① <strong>够用就好</strong>——别加不必要的触点<br>② <strong>分级保护</strong>——主保护坏了还有后备<br>③ <strong>断了就停</strong>——故障时自动回到安全状态<br>④ <strong>各自独立</strong>——别一个坏了全瘫</div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'mutual-lock-quiz\')">← 互锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'complex-practice\')">🧪 动脑分析 →</button></div>';
}

function renderComplexPractice(el) {
  el.innerHTML =
    stepBar(11,15) +
    '<div class="section-card animate-in">' +
      '<h2>🧪 找找这个电路有多少层保护</h2>' +
      '<div class="circuit-canvas">' + SVG.complex() + '</div>' +
      '<h3>🔍 挑战：下面哪些是这个电路里有的保护？</h3>' +
      '<div id="cp-items" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin:16px 0"></div>' +
      '<button class="btn btn-primary" onclick="CP.check()">✅ 检查答案</button>' +
      '<div id="cp-feedback" style="margin-top:16px"></div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>🧠 想想看：如果坏了会发生什么？</h2>' +
      '<p>点击下面的故障场景，看看后果：</p>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:16px 0">' +
        '<div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(0)"><h4>🔥 FR热继电器动作</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击看后果 →</p></div>' +
        '<div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(1)"><h4>⚡ KM₁触点粘住了</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击看后果 →</p></div>' +
        '<div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(2)"><h4>⏱️ 时间继电器坏了</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击看后果 →</p></div>' +
      '</div>' +
      '<div id="cp-scenario" style="margin-top:12px"></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'complex-interlock\')">← 复合连锁理论</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'complex-quiz\')">📝 小测验 →</button></div>';

  var items = [
    { id:'c1', label:'自锁（KM自保触点——按一下持续运行）', correct:true },
    { id:'c2', label:'互锁（正反转不能同时）', correct:true },
    { id:'c3', label:'过载保护（FR热继电器——电流太大就跳）', correct:true },
    { id:'c4', label:'欠压保护（停电后来电不自启）', correct:true },
    { id:'c5', label:'换向延时（KT——不能立即反转）', correct:true },
    { id:'c6', label:'状态指示（HL指示灯告诉你正转中）', correct:true },
    { id:'c7', label:'机械互锁（接触器间物理挡板）', correct:false },
    { id:'c8', label:'漏电保护（漏电保护开关）', correct:false },
  ];
  var state = items.map(function(){return false;});
  var container = document.getElementById('cp-items');
  items.forEach(function(item, i) {
    var div = document.createElement('div');
    div.className = 'quiz-option';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.gap = '8px';
    div.style.cursor = 'pointer';
    div.innerHTML = '<span style="font-size:18px;width:24px;text-align:center" id="cp-ck-' + i + '">⬜</span><span>' + item.label + '</span>';
    div.onclick = function() { state[i] = !state[i]; document.getElementById('cp-ck-' + i).textContent = state[i]?'☑️':'⬜'; };
    container.appendChild(div);
  });

  window.CP = {
    check: function() {
      var fb = document.getElementById('cp-feedback');
      var correctAnswers = [];
      for (var i = 0; i < items.length; i++) { if (items[i].correct) correctAnswers.push(i); }
      var checked = [];
      for (var i = 0; i < state.length; i++) { if (state[i]) checked.push(i); }
      var allCorrect = correctAnswers.every(function(v){return checked.indexOf(v)>=0;});
      var noWrong = checked.every(function(v){return correctAnswers.indexOf(v)>=0;});
      if (allCorrect && noWrong) {
        fb.innerHTML = '<div class="info-box success"><strong>✅ 全对！</strong><br>这个电路有：自锁、互锁、过载保护(FR)、欠压保护、换向延时(KT)、状态指示(HL₁)。<br>没有机械互锁（需要额外加装）和漏电保护（需要专用保护器）。</div>';
      } else if (allCorrect && !noWrong) {
        fb.innerHTML = '<div class="info-box warning"><strong>⚠️ 正确项都选了，但多选了</strong><br>这个电路没有机械互锁和漏电保护哦。</div>';
      } else {
        fb.innerHTML = '<div class="info-box danger"><strong>❌ 漏了或选错了</strong><br>正确答案：自锁、互锁、过载保护、欠压保护、换向延时、状态指示。一共6层保护。</div>';
      }
    },
    scenario: function(idx) {
      var scenarios = [
        { t:'🔥 FR热继电器动作（过载保护生效）', d:'电机电流太大了 → FR发热弯曲 → 常闭触点断开 → 控制回路被切断 → KM₁线圈失电 → 自锁触点弹开 → 电机停止 → 必须手动把FR按回去才能重新启动。<br><br>这就像电吹风过热自动断电——保护电机不被烧坏。✅ 过载保护在工作！' },
        { t:'⚡ KM₁主触点粘住了（机械故障）', d:'KM₁该断开的时候断不开了 → 电机还在转（停不下来）→ 互锁还在起效 → KM₂仍然被封锁 → 反转启动不了。<br><br>🚨 必须断总电源后更换接触器。互锁在这里保护了"不会短路"，但"停不下来"本身也是危险的！' },
        { t:'⏱️ KT时间继电器坏了（延时失灵）', d:'KT的NC触点该闭合时没闭合 → KM₂的回路被一直封锁 → 反转按了没反应。<br><br>😅 好消息：正转还能正常工作。坏消息：没法切反转了。这个故障影响的只是<strong>功能</strong>，不影响<strong>安全</strong>。需要换KT。' },
      ];
      document.getElementById('cp-scenario').innerHTML = '<div class="info-box concept"><strong>' + scenarios[idx].t + '</strong><br>' + scenarios[idx].d + '</div>';
    }
  };
}

function renderApplications(el) {
  el.innerHTML =
    stepBar(13,15) +
    '<div class="section-card animate-in"><h2>🏭 实际工程中这些知识是怎么用的</h2><p>下面三个例子，看完你就知道为什么学这些了。</p></div>' +
    '<div class="section-card animate-in">' +
      '<h2 style="font-size:20px">📦 案例1：工厂传送带</h2>' +
      '<div class="info-box concept"><strong>🏭 场景：</strong>三条传送带依次送煤。如果最前面的堵了，后面的还在送，煤就堆起来了。</div>' +
      '<p><strong>解决方案：</strong></p>' +
      '<ul>' +
        '<li>先启动<strong>最下游</strong>（出料口）的M3 → 再启动M2 → 最后启动M1。这叫<strong>逆序启动</strong>。</li>' +
        '<li>每台电机<strong>自锁</strong>——按一下就一直转。</li>' +
        '<li>M3启动了→M2才能启动（M3的触点串在M2回路里）；M2启动了→M1才能启动。这叫<strong>顺序连锁</strong>。</li>' +
        '<li>任何一台过载→<strong>上游全停</strong>，防止物料堆积。</li>' +
      '</ul>' +
      '<p style="color:var(--text-muted);font-size:13px">💡 你就想象：先开排水管（下游），再开水龙头（上游）——这样才能流走。</p>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2 style="font-size:20px">🏗️ 案例2：电梯</h2>' +
      '<p>电梯是<strong>连锁控制最经典的应用</strong>：</p>' +
      '<ul>' +
        '<li><strong>互锁</strong>——上行和下行接触器互锁，不能同时往上又往下</li>' +
        '<li><strong>行程连锁</strong>——到站了碰到限位开关，自动减速停止</li>' +
        '<li><strong>安全连锁</strong>——所有层门<strong>全部关闭</strong>，电梯才能运行。任何一个门开着，门锁开关断开→电梯不动</li>' +
        '<li><strong>顺序控制</strong>——关门→确认门关好→启动→运行→到站→减速→停→开门</li>' +
      '</ul>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2 style="font-size:20px">⚗️ 案例3：星三角降压启动</h2>' +
      '<p>大电机直接启动电流很大（会"嗡"的一下），所以先降压再全压：</p>' +
      '<table class="styled-table">' +
        '<tr><th>步骤</th><th>干什么</th><th>连锁逻辑</th></tr>' +
        '<tr><td>① 启动</td><td>KM主+KM星形闭合<br>电机用星形接法启动</td><td>星形接法电流小，启动平缓</td></tr>' +
        '<tr><td>② 等几秒</td><td>KT开始计时（3-10秒）</td><td>速度上来了，可以换接法了</td></tr>' +
        '<tr><td>③ 切换</td><td>先断星形→后接三角形<br>电机全压运行</td><td><strong>星形和三角形必须互锁！</strong><br>同时闭合=绕组短路</td></tr>' +
      '</table>' +
      '<div class="info-box danger"><strong>⚠️ 星形和三角形接触器互锁——这是给大电机"温柔地启动"的方法。如果没有互锁，两个同时接通，电机绕组直接短路，冒烟！</strong></div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'complex-quiz\')">← 复合连锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'troubleshooting\')">🛡️ 学学怎么修 →</button></div>';
}

function renderTroubleshooting(el) {
  el.innerHTML =
    stepBar(14,15) +
    '<div class="section-card animate-in">' +
      '<h2>🛡️ 电气出问题了怎么查？</h2>' +
      '<p>你不是专业电工，但知道<strong>排查思路</strong>能帮你判断问题出在哪。</p>' +
      '<h3>六步排查法（像医生看病）</h3>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin:16px 0">' +
        '<div class="trouble-step"><div class="ts-num">1</div><div class="ts-title">问</div><div class="ts-desc">"啥时候坏的？"</div></div>' +
        '<div class="trouble-step"><div class="ts-num">2</div><div class="ts-title">看</div><div class="ts-desc">有没有冒烟、异响</div></div>' +
        '<div class="trouble-step"><div class="ts-num">3</div><div class="ts-title">测</div><div class="ts-desc">万用表测电压</div></div>' +
        '<div class="trouble-step"><div class="ts-num">4</div><div class="ts-title">想</div><div class="ts-desc">根据现象推测原因</div></div>' +
        '<div class="trouble-step"><div class="ts-num">5</div><div class="ts-title">查</div><div class="ts-desc">重点部位拆开看</div></div>' +
        '<div class="trouble-step"><div class="ts-num">6</div><div class="ts-title">修</div><div class="ts-desc">修好再试一遍</div></div>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>常见故障速查表</h2>' +
      '<div style="overflow-x:auto">' +
      '<table class="styled-table">' +
        '<tr><th>现象</th><th>可能的原因（按从常见到少见排）</th><th>怎么查</th></tr>' +
        '<tr><td>按启动没反应</td><td>① 没电（跳闸了）② 保险丝烧了<br>③ 热继电器跳了（过载）④ 按钮坏了</td><td>先看总闸→测保险→看FR有没有跳→测按钮通不通</td></tr>' +
        '<tr><td>松手就停（不能自锁）</td><td>① 自锁触点没接好 ② 触点接触不良 ③ 接线错了</td><td>断电后测自锁触点两端通不通</td></tr>' +
        '<tr><td>能正转不能反转</td><td>① 互锁触点没复位 ② 反转按钮坏了<br>③ 接触器坏了</td><td>测互锁NC触点通断、测按钮</td></tr>' +
        '<tr><td>电机嗡嗡响不转</td><td>① 缺了一相电 ② 电机烧了</td><td>测三相电压——可能某根线松了</td></tr>' +
        '<tr><td>频繁跳闸</td><td>① 过载（电机带不动）② FR整定值太小<br>③ 有短路</td><td>测电流有没有超过额定值</td></tr>' +
        '<tr><td>按停止停不了</td><td>① 停止按钮坏了 ② 接触器粘住了</td><td>立即拉总闸！再检修接触器</td></tr>' +
      '</table>' +
      '</div>' +
    '</div>' +
    '<div class="section-card animate-in">' +
      '<h2>⛑️ 安全第一（认真看！）</h2>' +
      '<div class="info-box danger"><strong>⚠️ 检修电气设备，这几条能保命：</strong>' +
        '<ol>' +
          '<li>检修前<strong>必须先断电！</strong>挂上牌子"正在检修，别合闸"</li>' +
          '<li>断了电还要<strong>用电笔测一下</strong>确认没电（防止别人误合闸）</li>' +
          '<li>万用表用之前<strong>看看档位对不对</strong>——测电压用电压档！</li>' +
          '<li><strong>单手操作</strong>，另一只手放口袋里——防止电流从一只手流到另一只手经过心脏</li>' +
          '<li>工具要<strong>有绝缘手柄</strong>，脚下踩干燥木板或穿绝缘鞋</li>' +
          '<li>修好了<strong>先空载试一遍</strong>，没问题再接负载</li>' +
        '</ol>' +
      '</div>' +
    '</div>' +
    '<div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate(\'applications\')">← 工程应用</button><button class="btn btn-primary btn-next" onclick="App.navigate(\'final-quiz\')">🏆 做综合测验 →</button></div>';
}

function stepBar(current, total) {
  var dots = [];
  for (var i = 1; i <= total; i++) {
    if (i === current) dots.push('<span class="step-dot current"></span>');
    else if (App.completed.has(COURSE_DATA.pages[i-1] && COURSE_DATA.pages[i-1].id) || i < current) dots.push('<span class="step-dot done"></span>');
    else dots.push('<span class="step-dot"></span>');
  }
  return '<div class="step-indicator" style="margin-bottom:16px">' + dots.join('') + '<span class="step-arrow">→</span><span>' + (COURSE_DATA.pages[current-1] ? COURSE_DATA.pages[current-1].icon + ' ' + COURSE_DATA.pages[current-1].title : '') + '</span></div>';
}
