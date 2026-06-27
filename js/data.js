/* ============================================================
   CONFIGURATION & DATA — 课程数据、SVG电路、测验题库
   ============================================================ */

const COURSE_DATA = {
  pages: [
    { id: 'intro',               title: '绪论：什么是连锁控制',       icon: '📘' },
    { id: 'basics',              title: '基础元件与符号',             icon: '🔧' },
    { id: 'circuit-basics',      title: '基本电路原理',              icon: '⚡' },
    { id: 'self-lock',           title: '自锁电路 (Self-Lock)',      icon: '🔒' },
    { id: 'self-lock-practice',  title: '自锁电路实验',              icon: '🧪' },
    { id: 'self-lock-quiz',      title: '自锁 - 小测验',             icon: '📝' },
    { id: 'mutual-lock',         title: '互锁电路 (Interlock)',      icon: '🚫' },
    { id: 'mutual-lock-practice',title: '互锁电路实验',              icon: '🧪' },
    { id: 'mutual-lock-quiz',    title: '互锁 - 小测验',             icon: '📝' },
    { id: 'complex-interlock',   title: '复合连锁电路',              icon: '🔄' },
    { id: 'complex-practice',    title: '复合连锁实验',              icon: '🧪' },
    { id: 'complex-quiz',        title: '复合连锁 - 小测验',         icon: '📝' },
    { id: 'applications',        title: '实际工程应用',              icon: '🏭' },
    { id: 'troubleshooting',     title: '故障排查与安全',            icon: '🛡️' },
    { id: 'final-quiz',          title: '🏆 综合测验',               icon: '🏆' },
  ]
};

// ==================== SVG 电路生成器 ====================

const SVG = {
  selfLockDiagram() {
    return `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#38a169"/></marker>
    <marker id="arrow-gray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#a0aec0"/></marker>
  </defs>
  <style>.sw{stroke:#4a5568;stroke-width:2;fill:none}.sl{font-size:13px;fill:#4a5568;font-family:monospace}.sc{fill:none;stroke:#3182ce;stroke-width:2}.so{stroke:#e53e3e;stroke-width:2;fill:none}</style>
  <line x1="80" y1="30" x2="80" y2="270" class="so"/><line x1="520" y1="30" x2="520" y2="270" class="sw"/>
  <line x1="520" y1="30" x2="80" y2="30" class="so"/>
  <line x1="80" y1="60" x2="160" y2="60" class="sw"/>
  <circle cx="190" cy="60" r="14" class="sc"/><text x="190" y="65" class="sl" text-anchor="middle" font-weight="bold">SB1</text>
  <line x1="198" y1="46" x2="212" y2="60" class="sw"/><line x1="198" y1="74" x2="212" y2="60" class="sw"/>
  <line x1="212" y1="60" x2="260" y2="60" class="sw"/>
  <line x1="260" y1="60" x2="280" y2="60" class="sw"/>
  <line x1="280" y1="48" x2="300" y2="60" class="sw"/><line x1="280" y1="72" x2="300" y2="60" class="sw"/>
  <line x1="300" y1="60" x2="340" y2="60" class="sw"/>
  <line x1="190" y1="60" x2="190" y2="100" class="sw"/><line x1="190" y1="100" x2="280" y2="100" class="sw"/>
  <line x1="280" y1="100" x2="280" y2="72" class="sw"/>
  <text x="285" y="42" class="sl" font-size="11">KM</text>
  <line x1="340" y1="60" x2="360" y2="60" class="sw"/>
  <ellipse cx="380" cy="60" rx="16" ry="12" class="sc"/><text x="380" y="65" class="sl" text-anchor="middle" font-weight="bold">KM</text>
  <line x1="396" y1="60" x2="520" y2="60" class="sw"/>
  <text x="140" y="96" class="sl" font-size="10" fill="#718096">自锁触点</text>
  <line x1="260" y1="55" x2="260" y2="72" class="sw" stroke-dasharray="3,3"/>
  <text x="320" y="80" class="sl" font-size="10" fill="#718096">线圈</text>
  <text x="50" y="40" class="sl" font-size="14" font-weight="bold" fill="#e53e3e">L</text>
  <text x="528" y="40" class="sl" font-size="14" font-weight="bold" fill="#3182ce">N</text>
</svg>`;
  },

  selfLockNO() {
    return `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <style>.sw{stroke:#a0aec0;stroke-width:2;fill:none}.sl{font-size:13px;fill:#a0aec0;font-family:monospace}.sp{stroke:#a0aec0;stroke-width:2;fill:none;stroke-dasharray:4,4}</style>
  <line x1="80" y1="30" x2="80" y2="270" stroke="#a0aec0" stroke-width="2"/>
  <line x1="520" y1="30" x2="520" y2="270" class="sw"/><line x1="520" y1="30" x2="80" y2="30" stroke="#a0aec0" stroke-width="2"/>
  <line x1="80" y1="60" x2="160" y2="60" class="sw"/>
  <circle cx="190" cy="60" r="14" class="sw"/><text x="190" y="65" class="sl" text-anchor="middle" font-weight="bold">SB1</text>
  <line x1="198" y1="46" x2="212" y2="60" class="sw"/><line x1="198" y1="74" x2="212" y2="60" class="sw"/>
  <line x1="212" y1="60" x2="520" y2="60" class="sp"/>
  <ellipse cx="380" cy="60" rx="16" ry="12" class="sw"/><text x="380" y="65" class="sl" text-anchor="middle">KM</text>
  <text x="300" y="140" class="sl" text-anchor="middle" font-size="14">⬜ SB1 未按下</text>
  <text x="300" y="165" class="sl" text-anchor="middle" font-size="14">⬜ KM 线圈不得电</text>
  <text x="300" y="190" class="sl" text-anchor="middle" font-size="14">⬜ 电路断开</text>
</svg>`;
  },

  selfLockON() {
    return `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ag" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#38a169"/></marker>
  </defs>
  <style>.sw{stroke:#4a5568;stroke-width:2;fill:none}.sl{font-size:13px;fill:#4a5568;font-family:monospace}.ta{stroke:#38a169;stroke-width:3;fill:none}</style>
  <line x1="80" y1="30" x2="80" y2="270" stroke="#38a169" stroke-width="3" marker-end="url(#ag)"/>
  <line x1="520" y1="30" x2="520" y2="270" class="sw"/><line x1="520" y1="30" x2="80" y2="30" stroke="#38a169" stroke-width="3"/>
  <line x1="80" y1="60" x2="160" y2="60" class="sw"/>
  <circle cx="190" cy="60" r="14" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="190" y="65" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="198" y1="46" x2="212" y2="60" stroke="#38a169" stroke-width="2"/>
  <line x1="198" y1="74" x2="212" y2="60" stroke="#38a169" stroke-width="2"/>
  <line x1="260" y1="60" x2="280" y2="60" class="ta"/>
  <line x1="280" y1="48" x2="300" y2="60" class="ta"/><line x1="280" y1="72" x2="300" y2="60" class="ta"/>
  <line x1="300" y1="60" x2="340" y2="60" class="ta"/>
  <line x1="190" y1="60" x2="190" y2="100" stroke="#38a169" stroke-width="2"/>
  <line x1="190" y1="100" x2="280" y2="100" stroke="#38a169" stroke-width="2"/>
  <line x1="280" y1="100" x2="280" y2="72" class="ta"/>
  <line x1="340" y1="60" x2="360" y2="60" class="ta"/>
  <ellipse cx="380" cy="60" rx="16" ry="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="380" y="65" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">KM</text>
  <line x1="396" y1="60" x2="520" y2="60" class="sw"/>
  <text x="300" y="140" class="sl" text-anchor="middle" font-size="14" fill="#38a169">⬇️ 电流路径：</text>
  <text x="300" y="165" class="sl" text-anchor="middle" font-size="14" fill="#38a169">SB1(按下) → KM自锁触点(闭合) → KM线圈</text>
  <text x="300" y="190" class="sl" text-anchor="middle" font-size="14" fill="#38a169">✅ KM 线圈得电并自锁保持</text>
</svg>`;
  },

  mutualLock() {
    return `<svg viewBox="0 0 650 420" xmlns="http://www.w3.org/2000/svg">
  <style>.sw{stroke:#4a5568;stroke-width:2;fill:none}.sl{font-size:12px;fill:#4a5568;font-family:monospace}.ta{stroke:#38a169;stroke-width:2;fill:none}</style>
  <line x1="60" y1="30" x2="60" y2="380" stroke="#38a169" stroke-width="3"/>
  <line x1="580" y1="30" x2="580" y2="380" class="sw"/><line x1="580" y1="30" x2="60" y2="30" stroke="#38a169" stroke-width="3"/>
  <text x="70" y="80" class="sl" font-weight="bold" fill="#38a169">1</text>
  <circle cx="100" cy="80" r="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="100" y="85" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="112" y1="68" x2="124" y2="80" stroke="#38a169"/><line x1="112" y1="92" x2="124" y2="80" stroke="#38a169"/>
  <line x1="124" y1="80" x2="160" y2="80" class="sw"/><line x1="160" y1="72" x2="180" y2="80" class="sw"/><line x1="160" y1="88" x2="180" y2="80" class="sw"/>
  <text x="170" y="68" class="sl" fill="#a0aec0">KM2</text>
  <line x1="180" y1="80" x2="220" y2="80" class="sw"/><line x1="220" y1="72" x2="240" y2="80" stroke="#38a169"/><line x1="220" y1="88" x2="240" y2="80" stroke="#38a169"/>
  <text x="230" y="68" class="sl" fill="#38a169">KM1</text>
  <line x1="240" y1="80" x2="280" y2="80" class="sw"/>
  <ellipse cx="310" cy="80" rx="14" ry="10" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="310" y="85" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">KM1</text>
  <line x1="324" y1="80" x2="580" y2="80" class="sw"/>
  <line x1="100" y1="80" x2="100" y2="115" stroke="#38a169"/><line x1="100" y1="115" x2="220" y2="115" stroke="#38a169"/><line x1="220" y1="115" x2="220" y2="88" class="sw"/>
  <text x="70" y="160" class="sl" font-weight="bold">2</text>
  <circle cx="100" cy="160" r="12" class="sw"/><text x="100" y="165" class="sl" text-anchor="middle" font-weight="bold">SB2</text>
  <line x1="112" y1="148" x2="124" y2="160" class="sw"/><line x1="112" y1="172" x2="124" y2="160" class="sw"/>
  <line x1="124" y1="160" x2="160" y2="160" class="sw"/><line x1="160" y1="152" x2="180" y2="160" class="sw"/><line x1="160" y1="168" x2="180" y2="160" class="sw"/>
  <text x="170" y="148" class="sl" fill="#a0aec0">KM1</text>
  <line x1="180" y1="160" x2="220" y2="160" class="sw"/><line x1="220" y1="152" x2="240" y2="160" class="sw"/><line x1="220" y1="168" x2="240" y2="160" class="sw"/>
  <text x="230" y="148" class="sl">KM2</text>
  <line x1="240" y1="160" x2="280" y2="160" class="sw"/>
  <ellipse cx="310" cy="160" rx="14" ry="10" class="sw"/><text x="310" y="165" class="sl" text-anchor="middle" font-weight="bold">KM2</text>
  <line x1="324" y1="160" x2="580" y2="160" class="sw"/>
  <line x1="100" y1="160" x2="100" y2="195" class="sw"/><line x1="100" y1="195" x2="220" y2="195" class="sw"/><line x1="220" y1="195" x2="220" y2="168" class="sw"/>
  <rect x="420" y="130" width="130" height="90" rx="6" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="1"/>
  <text x="485" y="150" class="sl" text-anchor="middle" font-size="11" font-weight="bold" fill="#d69e2e">⚠ 互锁区域</text>
  <text x="485" y="168" class="sl" text-anchor="middle" font-size="10" fill="#718096">KM₁ 回路中串联了</text>
  <text x="485" y="183" class="sl" text-anchor="middle" font-size="10" fill="#718096">KM₂ 的常闭触点</text>
  <text x="485" y="198" class="sl" text-anchor="middle" font-size="10" fill="#718096">反之亦然</text>
  <text x="300" y="260" class="sl" text-anchor="middle" font-size="13" font-weight="bold" fill="#e53e3e">关键互锁原理</text>
  <text x="300" y="285" class="sl" text-anchor="middle" font-size="12">KM₁ 得电 → KM₁的常闭触点断开 → KM₂ 回路被切断</text>
  <text x="300" y="305" class="sl" text-anchor="middle" font-size="12">KM₂ 得电 → KM₂的常闭触点断开 → KM₁ 回路被切断</text>
  <text x="300" y="330" class="sl" text-anchor="middle" font-size="12" fill="#38a169">✅ 电气互锁防止两个接触器同时闭合导致短路</text>
  <text x="40" y="40" class="sl" font-size="14" font-weight="bold" fill="#38a169">L</text><text x="590" y="40" class="sl" font-size="14" font-weight="bold">N</text>
</svg>`;
  },

  complex() {
    return `<svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
  <style>.sw{stroke:#4a5568;stroke-width:2;fill:none}.sl{font-size:12px;fill:#4a5568;font-family:monospace}.ta{stroke:#38a169;stroke-width:2;fill:none}</style>
  <line x1="50" y1="30" x2="50" y2="480" stroke="#38a169" stroke-width="3"/>
  <line x1="630" y1="30" x2="630" y2="480" class="sw"/><line x1="630" y1="30" x2="50" y2="30" stroke="#38a169" stroke-width="3"/>
  <text x="60" y="80" class="sl" font-weight="bold" fill="#38a169">1</text>
  <circle cx="90" cy="80" r="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="90" y="85" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="102" y1="68" x2="114" y2="80" stroke="#38a169"/><line x1="102" y1="92" x2="114" y2="80" stroke="#38a169"/>
  <line x1="114" y1="80" x2="150" y2="80" class="sw"/><line x1="150" y1="72" x2="170" y2="80" class="sw"/><line x1="150" y1="88" x2="170" y2="80" class="sw"/>
  <text x="160" y="68" class="sl" fill="#a0aec0">KM2</text>
  <line x1="170" y1="80" x2="210" y2="80" class="sw"/>
  <rect x="210" y="70" width="20" height="20" rx="3" class="sw"/><text x="220" y="85" class="sl" text-anchor="middle" font-size="11">FR</text>
  <line x1="230" y1="80" x2="260" y2="80" class="sw"/><line x1="260" y1="72" x2="280" y2="80" stroke="#38a169"/><line x1="260" y1="88" x2="280" y2="80" stroke="#38a169"/>
  <text x="270" y="68" class="sl" fill="#38a169">KM1</text>
  <line x1="280" y1="80" x2="320" y2="80" class="sw"/>
  <rect x="320" y="68" width="30" height="24" rx="4" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="335" y="83" class="sl" text-anchor="middle" font-size="11" font-weight="bold" fill="#38a169">KT</text>
  <line x1="350" y1="80" x2="380" y2="80" class="sw"/>
  <ellipse cx="400" cy="80" rx="14" ry="10" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="400" y="85" class="sl" text-anchor="middle" font-weight="bold" fill="#38a169">KM1</text>
  <line x1="414" y1="80" x2="630" y2="80" class="sw"/>
  <line x1="90" y1="80" x2="90" y2="115" stroke="#38a169"/><line x1="90" y1="115" x2="260" y2="115" stroke="#38a169"/><line x1="260" y1="115" x2="260" y2="88" stroke="#38a169"/>
  <text x="60" y="170" class="sl" font-weight="bold">2</text>
  <circle cx="90" cy="170" r="12" stroke="#a0aec0" stroke-width="2"/><text x="90" y="175" class="sl" text-anchor="middle" font-weight="bold" fill="#a0aec0">SB2</text>
  <line x1="102" y1="158" x2="114" y2="170" stroke="#a0aec0"/><line x1="102" y1="182" x2="114" y2="170" stroke="#a0aec0"/>
  <line x1="114" y1="170" x2="150" y2="170" class="sw"/><line x1="150" y1="162" x2="170" y2="170" class="sw"/><line x1="150" y1="178" x2="170" y2="170" class="sw"/>
  <text x="160" y="158" class="sl" fill="#a0aec0">KM1</text>
  <rect x="210" y="160" width="20" height="20" rx="3" stroke="#a0aec0" stroke-width="2"/><text x="220" y="175" class="sl" text-anchor="middle" font-size="11" fill="#a0aec0">FR</text>
  <line x1="230" y1="170" x2="260" y2="170" class="sw"/><line x1="260" y1="162" x2="280" y2="170" class="sw"/><line x1="260" y1="178" x2="280" y2="170" class="sw"/>
  <text x="270" y="158" class="sl" fill="#a0aec0">KT</text>
  <line x1="280" y1="170" x2="320" y2="170" class="sw"/>
  <line x1="320" y1="170" x2="350" y2="170" class="sw"/><line x1="350" y1="162" x2="370" y2="170" class="sw"/><line x1="350" y1="178" x2="370" y2="170" class="sw"/>
  <text x="360" y="158" class="sl">KM2</text>
  <line x1="370" y1="170" x2="400" y2="170" class="sw"/>
  <ellipse cx="420" cy="170" rx="14" ry="10" stroke="#a0aec0" stroke-width="2"/><text x="420" y="175" class="sl" text-anchor="middle" font-weight="bold" fill="#a0aec0">KM2</text>
  <line x1="434" y1="170" x2="630" y2="170" class="sw"/>
  <line x1="90" y1="170" x2="90" y2="205" stroke="#a0aec0"/><line x1="90" y1="205" x2="350" y2="205" stroke="#a0aec0"/><line x1="350" y1="205" x2="350" y2="178" stroke="#a0aec0"/>
  <!-- 图例 -->
  <rect x="60" y="360" width="570" height="110" rx="6" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>
  <text x="350" y="382" class="sl" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--text-primary)">本电路包含的保护层：</text>
  <text x="90" y="405" class="sl" font-size="12" fill="#38a169">✅ 自锁 — 每个回路的自保触点</text>
  <text x="350" y="405" class="sl" font-size="12" fill="#e53e3e">✅ 互锁 — KM₁↔KM₂ 常闭触点互锁</text>
  <text x="90" y="425" class="sl" font-size="12" fill="#d69e2e">✅ 过载保护 — FR热继电器</text>
  <text x="350" y="425" class="sl" font-size="12" fill="#3182ce">✅ 换向延时 — KT延时触点（防频繁切换）</text>
  <text x="90" y="445" class="sl" font-size="12" fill="#718096">✅ 欠压保护 — 线圈失电自动断开</text>
  <text x="350" y="445" class="sl" font-size="12" fill="#805ad5">✅ 状态指示 — KM₁→HL₁ 运行指示</text>
</svg>`;
  }
};

// ==================== 测验题库 ====================

const QUIZZES = {
  'self-lock-quiz': [
    { q: '自锁电路中，自锁触点与启动按钮的连接方式是？', o: ['串联','并联','混联','不连接'], a: 1, e: '自锁触点（KM的辅助常开触点）与启动按钮（SB1）并联。KM得电后自锁触点闭合，取代按钮维持回路。' },
    { q: '以下哪个不是自锁电路的作用？', o: ['保持状态','防止两台设备同时运行','欠压保护','简化操作'], a: 1, e: '"防止两台设备同时运行"是互锁的功能。自锁的作用是保持状态、欠压保护和简化操作。' },
    { q: '自锁电路中停止按钮应该用什么类型的触点？', o: ['常开 (NO)','常闭 (NC)','都可以','不需要'], a: 1, e: '停止按钮必须用常闭（NC）触点。不按时触点闭合（回路可通），按下时触点断开（切断回路）。如果错用常开（NO）按钮，则按下时回路才通，松手就断，无法正常停止。' },
    { q: '欠压保护的含义是什么？', o: ['电压过高断开','断电恢复后不会自启动','防止触电','保护过载'], a: 1, e: '断电时KM失电、自锁断开。电源恢复后不会自行吸合，需重新按启动按钮。' },
  ],
  'mutual-lock-quiz': [
    { q: '互锁触点应串联在什么位置？', o: ['启动按钮前','对方线圈回路中','主电路中','自己线圈回路中'], a: 1, e: '互锁常闭触点串联在对方的线圈回路中，本方得电后NC触点断开，切断对方回路。' },
    { q: '互锁使用什么类型的触点？', o: ['常开 (NO)','常闭 (NC)','主触点','线圈'], a: 1, e: '互锁使用常闭（NC）触点，无动作时闭合，得电后断开来封锁对方。' },
    { q: '没有互锁的正反转电路会怎样？', o: ['电机不转','同时接通→短路','速度变慢','没影响'], a: 1, e: '两个接触器同时闭合会导致电源两相短路，烧毁设备！' },
    { q: '双重互锁是指？', o: ['电气+软件互锁','电气互锁+机械互锁','三个接触器','两个PLC程序'], a: 1, e: '双重互锁 = 电气互锁（触点互锁）+ 机械互锁（接触器间加装机械联动机构），两者同时使用可达到最高安全等级。' },
  ],
  'complex-quiz': [
    { q: '复合连锁的核心特征？', o: ['只用一种连锁','同时运用多种连锁和保护','不需要自锁','只用时间继电器'], a: 1, e: '复合连锁是自锁、互锁、过载保护、限位保护等多种机制的综合运用。' },
    { q: '热继电器(FR)的作用是？', o: ['控制转速','过载保护-电流过大时切断','自锁','控制启动时间'], a: 1, e: '热继电器利用双金属片热变形原理，过载时弯曲推动触点切断控制回路。' },
    { q: 'Fail-safe 原则要求？', o: ['故障继续运行','故障时回到安全状态','发出声音','手动操作'], a: 1, e: '故障安全原则：任何故障（断电、断线、元件损坏）应使系统自动回到安全状态。' },
    { q: '正反转中KT延时触点的作用是？', o: ['延长启动','防止频繁切换方向','控制速度','保护电源'], a: 1, e: 'KT的NC触点延时闭合，确保切换方向时有安全间隔，防止机械冲击。' },
  ],
  'final-quiz': [
    { q: '自锁电路的核心连接方式是？', o: ['NC触点串联','NO触点并联在启动按钮上','FR与线圈串联','KT与线圈并联'], a: 1, e: '核心是KM的常开辅助触点与启动按钮并联，得电后维持回路导通。' },
    { q: '正反转中最基本的保护是？', o: ['过压保护','互锁保护','欠流保护','温度保护'], a: 1, e: '最基本的是互锁保护，防止两个接触器同时导通导致相间短路。' },
    { q: '热继电器的动作原理？', o: ['电磁感应','双金属片热变形','电子电路','液压'], a: 1, e: '两种不同膨胀系数的金属贴合，受热弯曲推动触点动作。' },
    { q: '以下哪项不是连锁控制的目的？', o: ['保证安全','防止冲突','提高转速','顺序控制'], a: 2, e: '连锁控制不直接提高转速。转速由电机和变频器等决定。' },
    { q: '星三角启动中两个接触器必须？', o: ['并联','互锁','串联','不连接'], a: 1, e: '星形和三角形接触器必须互锁！同时闭合会导致绕组短路。' },
    { q: 'Fail-safe 的核心是？', o: ['保持当前状态','故障时自动回到安全状态','发出报警','人工复位'], a: 1, e: '系统在故障时自动回到最安全的状态，如线圈断电→触点断开→电机停止。' },
    { q: '哪个元件用于过载保护？', o: ['熔断器(FU)','热继电器(FR)','时间继电器(KT)','中间继电器(KA)'], a: 1, e: 'FR专门用于过载保护，FU用于短路保护，KT用于延时控制。' },
  ]
};
