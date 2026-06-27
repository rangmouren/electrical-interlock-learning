/* ============================================================
   PAGES 2 — 互锁、复合连锁、应用、故障排查
   ============================================================ */

// ====== 7. 互锁理论 ======
function renderMutualLock(el) {
  el.innerHTML = `
    ${stepBar(7,15)}
    <div class="section-card animate-in">
      <h2>🚫 互锁电路 (Interlock)</h2>
      <div class="info-box concept"><strong>📖 互锁：</strong>两个电路之间的相互制约。一个回路得电时自动封锁另一个回路。<br>这是电气安全中<strong>最重要</strong>的设计原则之一。</div>
      <h3>经典应用：电机正反转</h3>
      <div class="circuit-canvas">${SVG.mutualLock()}</div>
      <h3>工作原理</h3>
      <div class="comparison-grid">
        <div class="comparison-card" style="border-color:var(--accent)">
          <h4>回路1 — KM₁ 正转</h4>
          <p>串联了 <strong>KM₂的常闭触点</strong></p>
          <ul><li>KM₂未得电 → KM₂常闭闭合 → KM₁可启动</li><li>KM₁得电后 → KM₂被封锁</li></ul>
        </div>
        <div class="comparison-card" style="border-color:var(--danger)">
          <h4>回路2 — KM₂ 反转</h4>
          <p>串联了 <strong>KM₁的常闭触点</strong></p>
          <ul><li>KM₁未得电 → KM₁常闭闭合 → KM₂可启动</li><li>KM₂得电后 → KM₁被封锁</li></ul>
        </div>
      </div>
      <h3>三种互锁方式</h3>
      <table class="styled-table">
        <tr><th>方式</th><th>实现</th><th>优点</th><th>缺点</th></tr>
        <tr><td>电气互锁</td><td>NC触点串联在对方回路</td><td>简单可靠、成本低</td><td>触点粘连时失效</td></tr>
        <tr><td>机械互锁</td><td>接触器间机械联动机构</td><td>触点粘连也物理阻挡</td><td>结构复杂、成本高</td></tr>
        <tr><td style="font-weight:700;color:var(--success)">双重互锁</td><td>电气 + 机械同时使用</td><td>安全性最高</td><td>成本最高</td></tr>
      </table>
      <div class="info-box danger"><strong>⚠️ 为什么互锁如此重要？</strong>正反转接触器同时闭合 → 导致<strong>L1-L2两相短路</strong> → 巨大短路电流 → 烧毁设备甚至引发火灾！</div>
      <div class="info-box success"><strong>✅ 自锁 + 互锁 = 完整控制</strong> — 自锁维持运行，互锁防止冲突，两者缺一不可。</div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('self-lock-quiz')">← 自锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate('mutual-lock-practice')">🧪 互锁实验 →</button></div>`;
}

// ====== 8. 互锁实验 ======
function renderMutualLockPractice(el) {
  const id = 'mlp';
  el.innerHTML = `
    ${stepBar(8,15)}
    <div class="section-card animate-in">
      <h2>🧪 互锁电路实验</h2>
      <p>点击下方的接触器按钮，观察互锁封锁效果：</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin:24px 0">
        <div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);min-width:180px;flex:1">
          <h3 style="margin-bottom:16px">KM₁ 正转</h3>
          <button class="btn btn-toggle" id="${id}-k1" onclick="MLP.toggle(1)" style="width:140px;height:60px;font-size:15px">⬜ KM₁ 断电</button>
        </div>
        <div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);min-width:180px;flex:1">
          <h3 style="margin-bottom:16px">KM₂ 反转</h3>
          <button class="btn btn-toggle" id="${id}-k2" onclick="MLP.toggle(2)" style="width:140px;height:60px;font-size:15px">⬜ KM₂ 断电</button>
        </div>
      </div>
      <div class="circuit-canvas">${SVG.mutualLock()}</div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin:16px 0">
        <div id="${id}-status" style="flex:1;text-align:center;font-size:18px;font-weight:600;padding:16px;background:var(--bg-primary);border-radius:var(--radius-sm)"><span style="color:var(--text-muted)">⏹ 停止</span></div>
      </div>
      <div id="${id}-note" style="text-align:center;font-size:14px;color:var(--text-secondary);margin-bottom:16px">点击 KM₁ 或 KM₂ 按钮开始实验</div>
      <div style="text-align:center;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-outline" onclick="MLP.reset()">⏹ 全部复位</button>
        <button class="btn btn-outline" onclick="MLP.force()" style="border-color:var(--danger);color:var(--danger)">💥 强制同时启动（危险！）</button>
      </div>
      <div class="info-box concept" style="margin-top:20px"><strong>🧪 实验步骤：</strong>
        <ol><li>点击 <strong>KM₁</strong> 启动正转 → 观察KM₂按钮变灰不可用</li><li>点击 <strong>复位</strong> → 点击 <strong>KM₂</strong> 启动反转 → 观察KM₁被封锁</li><li>点击 <strong>「强制同时启动」</strong> → 观察短路状态（现实中这会造成灾难！）</li></ol>
      </div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('mutual-lock')">← 互锁理论</button><button class="btn btn-primary btn-next" onclick="App.navigate('mutual-lock-quiz')">📝 小测验 →</button></div>`;

  window.MLP = {
    _k1: false, _k2: false,
    _upd() {
      const e1 = document.getElementById(`${id}-k1`), e2 = document.getElementById(`${id}-k2`);
      const st = document.getElementById(`${id}-status`), nt = document.getElementById(`${id}-note`);
      if (this._k1 && this._k2) {
        e1.className='btn btn-toggle on'; e1.textContent='💥 KM₁ 短路！';
        e2.className='btn btn-toggle on'; e2.textContent='💥 KM₂ 短路！';
        st.innerHTML = '<span style="color:var(--danger);font-weight:700">💥 短路！两接触器同时得电！</span>';
        nt.textContent = '⚠️ 这就是互锁要防止的情况！在真实电路中会造成相间短路！';
        return;
      }
      e1.className='btn btn-toggle'+(this._k1?' on':''); e1.textContent=this._k1?'✅ KM₁ 得电':'⬜ KM₁ 断电';
      e2.className='btn btn-toggle'+(this._k2?' on':''); e2.textContent=this._k2?'✅ KM₂ 得电':'⬜ KM₂ 断电';
      if (this._k1) { st.innerHTML='<span style="color:var(--success)">▶ 正转运行 (KM₂被封锁)</span>'; nt.textContent='🔒 KM₁已封锁KM₂。KM₂的NC触点被KM₁断开。'; }
      else if (this._k2) { st.innerHTML='<span style="color:var(--success)">◀ 反转运行 (KM₁被封锁)</span>'; nt.textContent='🔒 KM₂已封锁KM₁。KM₁的NC触点被KM₂断开。'; }
      else { st.innerHTML='<span style="color:var(--text-muted)">⏹ 停止</span>'; nt.textContent='等待操作...'; }
    },
    toggle(n) {
      if (n===1) { if (this._k2) return; this._k1=!this._k1; }
      else { if (this._k1) return; this._k2=!this._k2; }
      this._upd();
    },
    reset() { this._k1=false; this._k2=false; this._upd(); },
    force() { this._k1=true; this._k2=true; this._upd(); }
  };
}

// ====== 10. 复合连锁理论 ======
function renderComplexInterlock(el) {
  el.innerHTML = `
    ${stepBar(10,15)}
    <div class="section-card animate-in">
      <h2>🔄 复合连锁电路</h2>
      <div class="info-box concept"><strong>📖 复合连锁：</strong>在一个电路中<strong>同时运用多种连锁方式</strong>，包括自锁、互锁、过载保护、限位保护、时间连锁等，实现安全可靠的自动化控制。</div>
      <p>复合连锁不是新概念，而是多种连锁技术的综合运用。实际工程中<strong>几乎所有控制系统都是复合连锁</strong>。</p>
      <h3>典型电路：电机正反转带多重保护</h3>
      <div class="circuit-canvas">${SVG.complex()}</div>
    </div>
    <div class="section-card animate-in">
      <h2>各层保护机制</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px">
        <div class="interlock-card"><div class="il-icon">🔄</div><div class="il-title">自锁</div><div class="il-desc">KM自保触点</div><div class="il-effect">保持运行</div></div>
        <div class="interlock-card"><div class="il-icon">🚫</div><div class="il-title">互锁</div><div class="il-desc">NC触点串联</div><div class="il-effect">防同时启动</div></div>
        <div class="interlock-card"><div class="il-icon">🔥</div><div class="il-title">过载保护</div><div class="il-desc">FR热继电器</div><div class="il-effect">过载切断</div></div>
        <div class="interlock-card"><div class="il-icon">⏱️</div><div class="il-title">时间连锁</div><div class="il-desc">KT延时触点</div><div class="il-effect">防频繁换向</div></div>
        <div class="interlock-card"><div class="il-icon">🛡️</div><div class="il-title">欠压保护</div><div class="il-desc">电磁原理</div><div class="il-effect">断电自停</div></div>
        <div class="interlock-card"><div class="il-icon">💡</div><div class="il-title">状态指示</div><div class="il-desc">KM₁→HL₁</div><div class="il-effect">运行指示</div></div>
      </div>
    </div>
    <div class="section-card animate-in">
      <h2>常见复合连锁形式</h2>
      <table class="styled-table">
        <tr><th>形式</th><th>实现</th><th>示例</th></tr>
        <tr><td>⏱️ 时间连锁</td><td>KT延时触点</td><td>星三角启动（星形→延时→三角形）</td></tr>
        <tr><td>📍 行程连锁</td><td>SQ行程开关</td><td>门到极限位置自动停止</td></tr>
        <tr><td>🔐 安全连锁</td><td>安全继电器/光栅</td><td>防护门打开时断电</td></tr>
        <tr><td>🌡️ 温度连锁</td><td>温控器/传感器</td><td>温度超限停加热</td></tr>
      </table>
      <div class="info-box success"><strong>✅ 设计四原则：</strong>① 最小化触点数量  ② 分级保护  ③ 故障安全(Fail-safe)  ④ 保护机制独立</div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('mutual-lock-quiz')">← 互锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate('complex-practice')">🧪 复合连锁实验 →</button></div>`;
}

// ====== 11. 复合连锁实验 ======
function renderComplexPractice(el) {
  el.innerHTML = `
    ${stepBar(11,15)}
    <div class="section-card animate-in">
      <h2>🧪 复合连锁电路分析</h2>
      <p>观察电路，找出所有的保护机制：</p>
      <div class="circuit-canvas">${SVG.complex()}</div>
      <h3>🔍 分析挑战</h3>
      <p>选出以下选项中<strong>电路中实际包含</strong>的保护：</p>
      <div id="cp-items" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin:16px 0"></div>
      <button class="btn btn-primary" onclick="CP.check()">✅ 检查答案</button>
      <div id="cp-feedback" style="margin-top:16px"></div>
    </div>
    <div class="section-card animate-in">
      <h2>🧠 故障场景推演</h2>
      <p>点击场景卡片查看故障后果：</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:16px 0">
        <div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(0)"><h4>🔥 FR动作</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击查看 →</p></div>
        <div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(1)"><h4>⚡ KM₁触点粘连</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击查看 →</p></div>
        <div class="comparison-card" style="cursor:pointer" onclick="CP.scenario(2)"><h4>⏱️ KT故障</h4><p style="font-size:13px;color:var(--text-muted);margin:0">点击查看 →</p></div>
      </div>
      <div id="cp-scenario" style="margin-top:12px"></div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('complex-interlock')">← 复合连锁</button><button class="btn btn-primary btn-next" onclick="App.navigate('complex-quiz')">📝 小测验 →</button></div>`;

  // 分析挑战
  const items = [
    { id:'c1', label:'自锁 (KM自保触点)', correct:true },
    { id:'c2', label:'互锁 (KM₁↔KM₂ NC)', correct:true },
    { id:'c3', label:'过载保护 (FR)', correct:true },
    { id:'c4', label:'欠压保护 (电磁原理)', correct:true },
    { id:'c5', label:'时间连锁 (KT延时)', correct:true },
    { id:'c6', label:'状态指示 (HL₁)', correct:true },
    { id:'c7', label:'机械互锁 (联动机构)', correct:false },
    { id:'c8', label:'漏电保护 (RCD)', correct:false },
  ];
  const state = items.map(()=>false);
  const container = document.getElementById('cp-items');
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.gap = '8px';
    div.style.cursor = 'pointer';
    div.innerHTML = `<span style="font-size:18px;width:24px;text-align:center" id="cp-ck-${i}">⬜</span><span>${item.label}</span>`;
    div.onclick = () => { state[i] = !state[i]; document.getElementById(`cp-ck-${i}`).textContent = state[i]?'☑️':'⬜'; };
    container.appendChild(div);
  });

  window.CP = {
    check() {
      const fb = document.getElementById('cp-feedback');
      const correctAnswers = items.filter(i=>i.correct).map((_,idx)=>items.findIndex(it=>it.id===_.id));
      const checked = state.map((v,i)=>v?i:-1).filter(v=>v>=0);
      const allCorrect = correctAnswers.every(i=>checked.includes(i));
      const noWrong = checked.every(i=>correctAnswers.includes(i));
      if (allCorrect && noWrong) {
        fb.innerHTML = '<div class="info-box success"><strong>✅ 完全正确！</strong>该电路包含自锁、互锁、过载保护(FR)、欠压保护、时间连锁(KT)、状态指示(HL₁)。不包含机械互锁（需额外加装物理机构）和漏电保护（需专用保护器）。</div>';
      } else if (allCorrect && !noWrong) {
        fb.innerHTML = '<div class="info-box warning"><strong>⚠️ 选对了全部正确项，但多选了额外项。</strong>该电路不包含机械互锁和漏电保护。</div>';
      } else {
        fb.innerHTML = '<div class="info-box danger"><strong>❌ 有遗漏。</strong>正确选项是：自锁、互锁、FR过载保护、欠压保护、KT时间连锁、HL₁状态指示。</div>';
      }
    },
    scenario(idx) {
      const scenarios = [
        { t:'🔥 FR热继电器动作', d:'FR动作 → FR常闭触点断开 → KM₁回路切断 → KM₁线圈失电 → 自锁断开 → 电机停止 → 需要手动复位FR后才能重新启动。（过载保护生效 ✅）' },
        { t:'⚡ KM₁触点粘连', d:'KM₁主触点粘住无法断开 → 即使KM₁线圈断电，电机仍通电 → 互锁仍有效（KM₂无法启动）→ 需检修更换接触器。（功能受影响，但互锁仍保护安全）' },
        { t:'⏱️ KT时间继电器故障', d:'KT常闭触点始终断开 → KM₂回路被封锁 → 无法反转 → 正转正常工作。（影响功能，不影响安全）' },
      ];
      document.getElementById('cp-scenario').innerHTML = `<div class="info-box concept"><strong>${scenarios[idx].t}</strong><br>${scenarios[idx].d}</div>`;
    }
  };
}

// ====== 13. 工程应用 ======
function renderApplications(el) {
  el.innerHTML = `
    ${stepBar(13,15)}
    <div class="section-card animate-in"><h2>🏭 实际工程应用案例</h2><p>连锁控制在工业自动化中无处不在：</p></div>
    <div class="section-card animate-in">
      <h2 style="font-size:20px">📦 案例1：传送带系统</h2>
      <div class="info-box concept"><strong>场景：</strong>三条传送带依次输送物料，从最后一条向前反向停止。</div>
      <ul><li>每条传送带<strong>自锁</strong>维持运行</li><li><strong>顺序连锁</strong>：M3启动→M2才可→M1才可（前级KM触点串联在后级回路）</li><li><strong>保护连锁</strong>：任何一条过载，上游全部停止防堆积</li></ul>
    </div>
    <div class="section-card animate-in">
      <h2 style="font-size:20px">🏗️ 案例2：电梯控制</h2>
      <ul><li><strong>互锁</strong>：上行和下行接触器互锁</li><li><strong>行程连锁</strong>：楼层限位开关到站减速停止</li><li><strong>安全连锁</strong>：所有层门关闭→门锁闭合→电梯才能运行</li></ul>
    </div>
    <div class="section-card animate-in">
      <h2 style="font-size:20px">⚗️ 案例3：星三角启动</h2>
      <table class="styled-table">
        <tr><th>阶段</th><th>动作</th><th>连锁</th></tr>
        <tr><td>启动</td><td>KM主+KM星形闭合</td><td>星形连接降压启动</td></tr>
        <tr><td>延时</td><td>KT计时（3-10秒）</td><td>KT延时中</td></tr>
        <tr><td>切换</td><td>KM星断开→KM三角闭合</td><td><strong>先断星、后合三角（互锁防短路）</strong></td></tr>
      </table>
      <div class="info-box danger"><strong>⚠️ 星形和三角形接触器必须互锁！</strong>同时闭合会导致绕组短路。</div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('complex-quiz')">← 复合连锁测验</button><button class="btn btn-primary btn-next" onclick="App.navigate('troubleshooting')">🛡️ 故障排查 →</button></div>`;
}

// ====== 14. 故障排查 ======
function renderTroubleshooting(el) {
  el.innerHTML = `
    ${stepBar(14,15)}
    <div class="section-card animate-in"><h2>🛡️ 故障排查六步法</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin:16px 0">
        <div class="trouble-step"><div class="ts-num">1</div><div class="ts-title">问</div><div class="ts-desc">了解现象</div></div>
        <div class="trouble-step"><div class="ts-num">2</div><div class="ts-title">看</div><div class="ts-desc">观察设备</div></div>
        <div class="trouble-step"><div class="ts-num">3</div><div class="ts-title">测</div><div class="ts-desc">万用表测</div></div>
        <div class="trouble-step"><div class="ts-num">4</div><div class="ts-title">想</div><div class="ts-desc">分析原因</div></div>
        <div class="trouble-step"><div class="ts-num">5</div><div class="ts-title">查</div><div class="ts-desc">重点排查</div></div>
        <div class="trouble-step"><div class="ts-num">6</div><div class="ts-title">修</div><div class="ts-desc">修复验证</div></div>
      </div>
    </div>
    <div class="section-card animate-in"><h2>常见故障速查表</h2>
      <div style="overflow-x:auto">
      <table class="styled-table">
        <tr><th>故障现象</th><th>可能原因</th><th>排查方法</th></tr>
        <tr><td>按启动没反应</td><td>电源故障、保险丝熔断、FR动作、按钮损坏</td><td>测电源→控保险→测FR→测按钮</td></tr>
        <tr><td>不能自锁</td><td>自锁触点未闭合、接触不良、接线错</td><td>断电测自锁触点电阻</td></tr>
        <tr><td>不能互锁</td><td>互锁触点坏、接触器粘连、接线错</td><td>测NC触点通断、查对方主触点</td></tr>
        <tr><td>电机嗡嗡不转</td><td>缺相、电机故障</td><td>测三相电压、测接触器输出</td></tr>
        <tr><td>频繁跳闸</td><td>过载、堵转、整定值偏小</td><td>测电流、检查负载</td></tr>
        <tr><td>按停止不停止</td><td>按钮损坏、接触器粘连</td><td>急停→断总电源→检修</td></tr>
      </table>
      </div>
    </div>
    <div class="section-card animate-in"><h2>⛑️ 安全守则</h2>
      <div class="info-box danger"><strong>⚠️ 牢记：</strong><ol><li>检修前<strong>先断电</strong>，挂"禁止合闸"牌</li><li>断电后<strong>验电确认</strong></li><li>万用表<strong>先确认档位</strong></li><li><strong>单手操作</strong>，另一手放口袋</li><li>使用合格绝缘工具</li><li>维修后<strong>功能+安全检查</strong></li></ol></div>
    </div>
    <div class="btn-nav"><button class="btn btn-outline" onclick="App.navigate('applications')">← 工程应用</button><button class="btn btn-primary btn-next" onclick="App.navigate('final-quiz')">🏆 综合测验 →</button></div>`;
}

// ====== 工具函数 ======
function stepBar(current, total) {
  const dots = [];
  for (let i = 1; i <= total; i++) {
    if (i === current) dots.push('<span class="step-dot current"></span>');
    else if (App.completed.has(COURSE_DATA.pages[i-1]?.id) || i < current) dots.push('<span class="step-dot done"></span>');
    else dots.push('<span class="step-dot"></span>');
  }
  return `<div class="step-indicator">${dots.join('')}<span class="step-arrow">→</span><span>${COURSE_DATA.pages[current-1]?.icon||''} ${COURSE_DATA.pages[current-1]?.title||''}</span></div>`;
}
