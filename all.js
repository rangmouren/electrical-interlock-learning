// --- 电气控制连锁技术 - 课程数据 ---

const COURSE_DATA = {
  pages: [
    // ======== 1. 绪论与基础 ========
    {
      id: 'intro',
      title: '绪论：什么是连锁控制',
      icon: '📘',
      render: function(el) { renderIntro(el); }
    },
    {
      id: 'basics',
      title: '基础元件与符号',
      icon: '🔧',
      render: function(el) { renderBasics(el); }
    },
    {
      id: 'circuit-basics',
      title: '基本电路原理',
      icon: '⚡',
      render: function(el) { renderCircuitBasics(el); }
    },
    // ======== 2. 自锁 ========
    {
      id: 'self-lock',
      title: '自锁电路 (Self-Lock)',
      icon: '🔒',
      render: function(el) { renderSelfLock(el); }
    },
    {
      id: 'self-lock-practice',
      title: '自锁电路实验',
      icon: '🧪',
      render: function(el) { renderSelfLockPractice(el); }
    },
    {
      id: 'self-lock-quiz',
      title: '自锁 - 小测验',
      icon: '📝',
      render: function(el) { renderSelfLockQuiz(el); }
    },
    // ======== 3. 互锁 ========
    {
      id: 'mutual-lock',
      title: '互锁电路 (Interlock)',
      icon: '🚫',
      render: function(el) { renderMutualLock(el); }
    },
    {
      id: 'mutual-lock-practice',
      title: '互锁电路实验',
      icon: '🧪',
      render: function(el) { renderMutualLockPractice(el); }
    },
    {
      id: 'mutual-lock-quiz',
      title: '互锁 - 小测验',
      icon: '📝',
      render: function(el) { renderMutualLockQuiz(el); }
    },
    // ======== 4. 复合连锁 ========
    {
      id: 'complex-interlock',
      title: '复合连锁电路',
      icon: '🔄',
      render: function(el) { renderComplexInterlock(el); }
    },
    {
      id: 'complex-interlock-practice',
      title: '复合连锁实验',
      icon: '🧪',
      render: function(el) { renderComplexPractice(el); }
    },
    {
      id: 'complex-interlock-quiz',
      title: '复合连锁 - 小测验',
      icon: '📝',
      render: function(el) { renderComplexQuiz(el); }
    },
    // ======== 5. 实际应用 ========
    {
      id: 'applications',
      title: '实际工程应用',
      icon: '🏭',
      render: function(el) { renderApplications(el); }
    },
    {
      id: 'troubleshooting',
      title: '故障排查与安全',
      icon: '🛡️',
      render: function(el) { renderTroubleshooting(el); }
    },
    {
      id: 'final-quiz',
      title: '综合测验',
      icon: '🏆',
      render: function(el) { renderFinalQuiz(el); }
    }
  ]
};

// --- SVG Circuit Diagram Generators ---

function circuitSelfLock(svgId) {
  return `
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <style>.tw{stroke:#4a5568;stroke-width:2;fill:none}.tl{font-size:13px;fill:#4a5568;font-family:monospace}.tc{fill:none;stroke:#3182ce;stroke-width:2}.ts{stroke:#e53e3e;stroke-width:2;fill:none}</style>
  <!-- Power rail L1 -->
  <line x1="80" y1="30" x2="80" y2="270" class="ts"/>
  <line x1="520" y1="30" x2="520" y2="270" class="tw"/>
  <!-- N -->
  <line x1="520" y1="30" x2="80" y2="30" class="ts"/>
  <!-- Rung 1: Start Button -->
  <line x1="80" y1="60" x2="160" y2="60" class="tw"/>
  <!-- Start PB (NO) -->
  <circle cx="190" cy="60" r="14" class="tc"/>
  <text x="190" y="65" class="tl" text-anchor="middle" font-weight="bold">SB1</text>
  <!-- NO contact symbol -->
  <line x1="198" y1="46" x2="212" y2="60" class="tw"/>
  <line x1="198" y1="74" x2="212" y2="60" class="tw"/>
  <!-- Wire to parallel -->
  <line x1="212" y1="60" x2="260" y2="60" class="tw"/>
  <!-- KM self-lock contact (NO) -->
  <line x1="260" y1="60" x2="280" y2="60" class="tw"/>
  <line x1="280" y1="48" x2="300" y2="60" class="tw"/>
  <line x1="280" y1="72" x2="300" y2="60" class="tw"/>
  <line x1="300" y1="60" x2="340" y2="60" class="tw"/>
  <!-- Branch for parallel contact -->
  <line x1="190" y1="60" x2="190" y2="100" class="tw"/>
  <line x1="190" y1="100" x2="280" y2="100" class="tw"/>
  <line x1="280" y1="100" x2="280" y2="72" class="tw"/>
  <!-- Label: KM auxiliary contact -->
  <text x="285" y="42" class="tl" font-size="11">KM</text>
  <!-- KM Coil -->
  <line x1="340" y1="60" x2="360" y2="60" class="tw"/>
  <ellipse cx="380" cy="60" rx="16" ry="12" class="tc"/>
  <text x="380" y="65" class="tl" text-anchor="middle" font-weight="bold">KM</text>
  <line x1="396" y1="60" x2="520" y2="60" class="tw"/>
  <!-- Labels -->
  <text x="140" y="96" class="tl" font-size="10" fill="#718096">自锁触点</text>
  <line x1="260" y1="55" x2="260" y2="72" class="tw" stroke-dasharray="3,3"/>
  <text x="320" y="80" class="tl" font-size="10" fill="#718096">线圈</text>
  <!-- Power label -->
  <text x="50" y="40" class="tl" font-size="14" font-weight="bold" fill="#e53e3e">L</text>
  <text x="528" y="40" class="tl" font-size="14" font-weight="bold">N</text>
</svg>`;
}

function circuitSelfLockNO() {
  return `
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <style>.tw{stroke:#4a5568;stroke-width:2;fill:none}.tl{font-size:13px;fill:#4a5568;font-family:monospace}.tc{fill:none;stroke:#a0aec0;stroke-width:2}.tp{stroke:#a0aec0;stroke-width:2;fill:none;stroke-dasharray:4,4}</style>
  <line x1="80" y1="30" x2="80" y2="270" stroke="#a0aec0" stroke-width="2"/>
  <line x1="520" y1="30" x2="520" y2="270" class="tw"/>
  <line x1="520" y1="30" x2="80" y2="30" stroke="#a0aec0" stroke-width="2"/>
  <!-- Start Button (NOT pressed) -->
  <line x1="80" y1="60" x2="160" y2="60" class="tw"/>
  <circle cx="190" cy="60" r="14" class="tc"/>
  <text x="190" y="65" class="tl" text-anchor="middle" font-weight="bold" fill="#a0aec0">SB1</text>
  <line x1="198" y1="46" x2="212" y2="60" class="tw" stroke="#a0aec0"/>
  <line x1="198" y1="74" x2="212" y2="60" class="tw" stroke="#a0aec0"/>
  <line x1="212" y1="60" x2="520" y2="60" class="tp"/>
  <!-- KM coil - not active -->
  <ellipse cx="380" cy="60" rx="16" ry="12" class="tc"/>
  <text x="380" y="65" class="tl" text-anchor="middle" fill="#a0aec0">KM</text>
  <!-- Status text -->
  <text x="300" y="140" class="tl" text-anchor="middle" font-size="14" fill="#a0aec0">⬜ SB1 未按下</text>
  <text x="300" y="165" class="tl" text-anchor="middle" font-size="14" fill="#a0aec0">⬜ KM 线圈不得电</text>
  <text x="300" y="190" class="tl" text-anchor="middle" font-size="14" fill="#a0aec0">⬜ 电路断开</text>
</svg>`;
}

function circuitSelfLockON() {
  return `
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <style>.tw{stroke:#4a5568;stroke-width:2;fill:none}.tl{font-size:13px;fill:#4a5568;font-family:monospace}.tc{fill:none;stroke:#e53e3e;stroke-width:2}.ta{stroke:#38a169;stroke-width:3;fill:none}</style>
  <line x1="80" y1="30" x2="80" y2="270" stroke="#38a169" stroke-width="3"/>
  <line x1="520" y1="30" x2="520" y2="270" class="tw"/>
  <line x1="520" y1="30" x2="80" y2="30" stroke="#38a169" stroke-width="3"/>
  <!-- SB1 - momentarily pressed -->
  <line x1="80" y1="60" x2="160" y2="60" class="tw"/>
  <circle cx="190" cy="60" r="14" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="190" y="65" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="198" y1="46" x2="212" y2="60" class="tw" stroke="#38a169"/>
  <line x1="198" y1="74" x2="212" y2="60" class="tw" stroke="#38a169"/>
  <!-- Self-lock contact (closed) -->
  <line x1="260" y1="60" x2="280" y2="60" class="ta"/>
  <line x1="280" y1="48" x2="300" y2="60" class="ta"/>
  <line x1="280" y1="72" x2="300" y2="60" class="ta"/>
  <line x1="300" y1="60" x2="340" y2="60" class="ta"/>
  <!-- Branch parallel contact -->
  <line x1="190" y1="60" x2="190" y2="100" stroke="#38a169" stroke-width="2"/>
  <line x1="190" y1="100" x2="280" y2="100" stroke="#38a169" stroke-width="2"/>
  <line x1="280" y1="100" x2="280" y2="72" class="ta"/>
  <!-- KM Coil - energized -->
  <line x1="340" y1="60" x2="360" y2="60" class="ta"/>
  <ellipse cx="380" cy="60" rx="16" ry="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="380" y="65" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">KM</text>
  <line x1="396" y1="60" x2="520" y2="60" class="tw"/>
  <!-- Current flow -->
  <text x="300" y="140" class="tl" text-anchor="middle" font-size="14" fill="#38a169">⬇️ 电流路径：</text>
  <text x="300" y="165" class="tl" text-anchor="middle" font-size="14" fill="#38a169">SB1(按下) → KM自锁触点(闭合) → KM线圈</text>
  <text x="300" y="190" class="tl" text-anchor="middle" font-size="14" fill="#38a169">✅ KM 线圈得电并自锁保持</text>
</svg>`;
}

function circuitMutualLockSVG() {
  return `
<svg viewBox="0 0 650 400" xmlns="http://www.w3.org/2000/svg">
  <style>.tw{stroke:#4a5568;stroke-width:2;fill:none}.tl{font-size:12px;fill:#4a5568;font-family:monospace}.tc{fill:none;stroke:#3182ce;stroke-width:2}.ts{stroke:#e53e3e;stroke-width:2;fill:none}.ta{stroke:#38a169;stroke-width:2;fill:none}</style>
  <!-- Power rails -->
  <line x1="60" y1="30" x2="60" y2="380" stroke="#38a169" stroke-width="3"/>
  <line x1="580" y1="30" x2="580" y2="380" class="tw"/>
  <line x1="580" y1="30" x2="60" y2="30" stroke="#38a169" stroke-width="3"/>
  <!-- L"> KM Forward (Rung 1) -->
  <text x="70" y="80" class="tl" font-weight="bold" fill="#38a169">1</text>
  <circle cx="100" cy="80" r="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="100" y="85" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="112" y1="68" x2="124" y2="80" stroke="#38a169" stroke-width="2"/>
  <line x1="112" y1="92" x2="124" y2="80" stroke="#38a169" stroke-width="2"/>
  <!-- NC contact KM2 (interlock) -->
  <line x1="124" y1="80" x2="160" y2="80" class="tw"/>
  <line x1="160" y1="72" x2="180" y2="80" class="tw"/>
  <line x1="160" y1="88" x2="180" y2="80" class="tw"/>
  <text x="170" y="68" class="tl" fill="#a0aec0">KM2</text>
  <!-- KM1 self-lock contact -->
  <line x1="180" y1="80" x2="220" y2="80" class="tw"/>
  <line x1="220" y1="72" x2="240" y2="80" stroke="#38a169" stroke-width="2"/>
  <line x1="220" y1="88" x2="240" y2="80" stroke="#38a169" stroke-width="2"/>
  <text x="230" y="68" class="tl" fill="#38a169">KM1</text>
  <line x1="240" y1="80" x2="280" y2="80" class="tw"/>
  <!-- KM1 Coil -->
  <ellipse cx="310" cy="80" rx="14" ry="10" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="310" y="85" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">KM1</text>
  <line x1="324" y1="80" x2="580" y2="80" class="tw"/>
  <!-- Parallel branch for self-lock -->
  <line x1="100" y1="80" x2="100" y2="115" stroke="#38a169" stroke-width="2"/>
  <line x1="100" y1="115" x2="220" y2="115" stroke="#38a169" stroke-width="2"/>
  <line x1="220" y1="115" x2="220" y2="88" class="ta"/>
  <!-- Rung 2: KM2 Reverse -->
  <text x="70" y="160" class="tl" font-weight="bold">2</text>
  <circle cx="100" cy="160" r="12" class="tc"/>
  <text x="100" y="165" class="tl" text-anchor="middle" font-weight="bold">SB2</text>
  <line x1="112" y1="148" x2="124" y2="160" class="tw"/>
  <line x1="112" y1="172" x2="124" y2="160" class="tw"/>
  <!-- NC contact KM1 (interlock) -->
  <line x1="124" y1="160" x2="160" y2="160" class="tw"/>
  <line x1="160" y1="152" x2="180" y2="160" class="tw"/>
  <line x1="160" y1="168" x2="180" y2="160" class="tw"/>
  <text x="170" y="148" class="tl" fill="#a0aec0">KM1</text>
  <!-- KM2 self-lock -->
  <line x1="180" y1="160" x2="220" y2="160" class="tw"/>
  <line x1="220" y1="152" x2="240" y2="160" class="tw"/>
  <line x1="220" y1="168" x2="240" y2="160" class="tw"/>
  <text x="230" y="148" class="tl">KM2</text>
  <line x1="240" y1="160" x2="280" y2="160" class="tw"/>
  <!-- KM2 Coil -->
  <ellipse cx="310" cy="160" rx="14" ry="10" class="tc"/>
  <text x="310" y="165" class="tl" text-anchor="middle" font-weight="bold">KM2</text>
  <line x1="324" y1="160" x2="580" y2="160" class="tw"/>
  <!-- Parallel self-lock -->
  <line x1="100" y1="160" x2="100" y2="195" class="tw"/>
  <line x1="100" y1="195" x2="220" y2="195" class="tw"/>
  <line x1="220" y1="195" x2="220" y2="168" class="tw"/>
  <!-- Labels -->
  <text x="300" y="250" class="tl" text-anchor="middle" font-size="13" font-weight="bold" fill="#e53e3e">关键：互锁触点</text>
  <text x="300" y="275" class="tl" text-anchor="middle" font-size="12">KM₁ 回路串联 KM2 的常闭触点</text>
  <text x="300" y="295" class="tl" text-anchor="middle" font-size="12">KM₂ 回路串联 KM1 的常闭触点</text>
  <text x="300" y="315" class="tl" text-anchor="middle" font-size="12" fill="#38a169">KM₁ 得电 → KM₁常闭断开 → KM₂ 不能得电</text>
  <!-- Power -->
  <text x="40" y="40" class="tl" font-size="14" font-weight="bold" fill="#38a169">L</text>
  <text x="590" y="40" class="tl" font-size="14" font-weight="bold">N</text>
</svg>`;
}

function circuitComplexSVG() {
  return `
<svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
  <style>.tw{stroke:#4a5568;stroke-width:2;fill:none}.tl{font-size:12px;fill:#4a5568;font-family:monospace}.tc{fill:none;stroke:#3182ce;stroke-width:2}.ta{stroke:#38a169;stroke-width:2;fill:none}</style>
  <!-- Power -->
  <line x1="50" y1="30" x2="50" y2="480" stroke="#38a169" stroke-width="3"/>
  <line x1="630" y1="30" x2="630" y2="480" class="tw"/>
  <line x1="630" y1="30" x2="50" y2="30" stroke="#38a169" stroke-width="3"/>
  <!-- Rung 1: KM1 (Motor Start Forward) -->
  <text x="60" y="80" class="tl" font-weight="bold" fill="#38a169">1</text>
  <circle cx="90" cy="80" r="12" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="90" y="85" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">SB1</text>
  <line x1="102" y1="68" x2="114" y2="80" stroke="#38a169"/>
  <line x1="102" y1="92" x2="114" y2="80" stroke="#38a169"/>
  <!-- KM2 NC interlock -->
  <line x1="114" y1="80" x2="150" y2="80" class="tw"/>
  <line x1="150" y1="72" x2="170" y2="80" class="tw"/>
  <line x1="150" y1="88" x2="170" y2="80" class="tw"/>
  <text x="160" y="68" class="tl" fill="#a0aec0">KM2</text>
  <!-- FR thermal -->
  <line x1="170" y1="80" x2="210" y2="80" class="tw"/>
  <rect x="210" y="70" width="20" height="20" rx="3" class="tc"/>
  <text x="220" y="85" class="tl" text-anchor="middle" font-size="11">FR</text>
  <!-- KM1 self-lock -->
  <line x1="230" y1="80" x2="260" y2="80" class="tw"/>
  <line x1="260" y1="72" x2="280" y2="80" stroke="#38a169"/>
  <line x1="260" y1="88" x2="280" y2="80" stroke="#38a169"/>
  <text x="270" y="68" class="tl" fill="#38a169">KM1</text>
  <line x1="280" y1="80" x2="320" y2="80" class="tw"/>
  <!-- Timer T1 -->
  <rect x="320" y="68" width="30" height="24" rx="4" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="335" y="83" class="tl" text-anchor="middle" font-size="11" font-weight="bold" fill="#38a169">KT</text>
  <line x1="350" y1="80" x2="380" y2="80" class="tw"/>
  <!-- KM1 coil -->
  <ellipse cx="400" cy="80" rx="14" ry="10" stroke="#38a169" stroke-width="2" fill="#f0fff4"/>
  <text x="400" y="85" class="tl" text-anchor="middle" font-weight="bold" fill="#38a169">KM1</text>
  <line x1="414" y1="80" x2="630" y2="80" class="tw"/>
  <!-- Parallel self-lock branch -->
  <line x1="90" y1="80" x2="90" y2="115" stroke="#38a169"/>
  <line x1="90" y1="115" x2="260" y2="115" stroke="#38a169"/>
  <line x1="260" y1="115" x2="260" y2="88" stroke="#38a169"/>

  <!-- Rung 2: KM2 (Reverse) -->
  <text x="60" y="170" class="tl" font-weight="bold">2</text>
  <circle cx="90" cy="170" r="12" class="tc"/>
  <text x="90" y="175" class="tl" text-anchor="middle" font-weight="bold">SB2</text>
  <line x1="102" y1="158" x2="114" y2="170" class="tw"/>
  <line x1="102" y1="182" x2="114" y2="170" class="tw"/>
  <!-- KM1 NC interlock -->
  <line x1="114" y1="170" x2="150" y2="170" class="tw"/>
  <line x1="150" y1="162" x2="170" y2="170" class="tw"/>
  <line x1="150" y1="178" x2="170" y2="170" class="tw"/>
  <text x="160" y="158" class="tl" fill="#a0aec0">KM1</text>
  <!-- FR -->
  <rect x="210" y="160" width="20" height="20" rx="3" class="tc"/>
  <text x="220" y="175" class="tl" text-anchor="middle" font-size="11">FR</text>
  <!-- Timer NC contact -->
  <line x1="230" y1="170" x2="260" y2="170" class="tw"/>
  <line x1="260" y1="162" x2="280" y2="170" class="tw"/>
  <line x1="260" y1="178" x2="280" y2="170" class="tw"/>
  <text x="270" y="158" class="tl" fill="#a0aec0">KT</text>
  <line x1="280" y1="170" x2="320" y2="170" class="tw"/>
  <!-- KM2 self-lock -->
  <line x1="320" y1="170" x2="350" y2="170" class="tw"/>
  <line x1="350" y1="162" x2="370" y2="170" class="tw"/>
  <line x1="350" y1="178" x2="370" y2="170" class="tw"/>
  <text x="360" y="158" class="tl">KM2</text>
  <line x1="370" y1="170" x2="400" y2="170" class="tw"/>
  <!-- KM2 coil -->
  <ellipse cx="420" cy="170" rx="14" ry="10" class="tc"/>
  <text x="420" y="175" class="tl" text-anchor="middle" font-weight="bold">KM2</text>
  <line x1="434" y1="170" x2="630" y2="170" class="tw"/>
  <!-- Parallel -->
  <line x1="90" y1="170" x2="90" y2="205" class="tw"/>
  <line x1="90" y1="205" x2="350" y2="205" class="tw"/>
  <line x1="350" y1="205" x2="350" y2="178" class="tw"/>

  <!-- Rung 3: Indicator -->
  <text x="60" y="260" class="tl" font-weight="bold">3</text>
  <!-- KM1 NO -> HL1 -->
  <line x1="50" y1="260" x2="150" y2="260" class="tw"/>
  <line x1="150" y1="252" x2="170" y2="260" class="tw"/>
  <line x1="150" y1="268" x2="170" y2="260" class="tw"/>
  <text x="160" y="248" class="tl" fill="#38a169">KM1</text>
  <line x1="170" y1="260" x2="230" y2="260" class="tw"/>
  <circle cx="250" cy="260" r="16" fill="#fefcbf" stroke="#d69e2e" stroke-width="2"/>
  <text x="250" y="265" class="tl" text-anchor="middle" font-size="14">💡</text>
  <line x1="266" y1="260" x2="630" y2="260" class="tw"/>
  <text x="300" y="252" class="tl" fill="#d69e2e">正转指示</text>

  <!-- Labels -->
  <text x="350" y="340" class="tl" text-anchor="middle" font-size="14" font-weight="bold" fill="#e53e3e">本电路包含：</text>
  <text x="350" y="365" class="tl" text-anchor="middle" font-size="13">✅ 自锁 — 每个回路的自保触点</text>
  <text x="350" y="385" class="tl" text-anchor="middle" font-size="13">✅ 互锁 — KM1↔KM2 常闭触点互锁</text>
  <text x="350" y="405" class="tl" text-anchor="middle" font-size="13">✅ 保护连锁 — FR热继电器 + KT时间继电器延时触点</text>
  <text x="350" y="425" class="tl" text-anchor="middle" font-size="13">✅ 联锁 — 状态指示 (KM1→HL1)</text>
</svg>`;
}
// ============== RENDER FUNCTIONS ==============

function renderIntro(el) {
  el.innerHTML = `
    <div class="hero animate-in">
      <h2>⚡ 电气控制连锁技术</h2>
      <p>从零开始，系统学习自锁、互锁和复合连锁电路。<br>
      每一步都配有电路图、交互实验和测验，让你真正理解电气控制的核心原理。</p>
      <div class="hero-roadmap">
        <div class="step-badge"><span class="step-num">1</span> 基础概念</div>
        <div class="step-badge"><span class="step-num">2</span> 自锁</div>
        <div class="step-badge"><span class="step-num">3</span> 互锁</div>
        <div class="step-badge"><span class="step-num">4</span> 复合连锁</div>
        <div class="step-badge"><span class="step-num">5</span> 工程应用</div>
      </div>
    </div>

    <div class="section-card animate-in">
      <h2>🔍 什么是连锁控制？</h2>
      <p><strong>连锁（Interlock）</strong>是电气控制系统中最基础也最重要的概念之一。它通过电气触点之间的相互制约关系，实现设备的安全、有序运行。</p>
      <p>简单来说，连锁就是"<strong>你不可以，我也不可以</strong>"——两个或多个电路之间建立相互约束，防止同时出现冲突状态。</p>
    </div>

    <div class="section-card animate-in">
      <h2>🔗 三种连锁形式</h2>
      <div class="comparison-grid">
        <div class="comparison-card">
          <span class="tag tag-self">🔒 自锁</span>
          <h4>Self-Locking</h4>
          <p>利用自身的辅助触点来维持线圈通电状态。按下启动按钮后，即使松开按钮，电路也能保持通电。</p>
          <p><small>📌 关键：常开触点并联在启动按钮上</small></p>
        </div>
        <div class="comparison-card">
          <span class="tag tag-mutual">🚫 互锁</span>
          <h4>Interlocking</h4>
          <p>两个电路互相封锁对方的启动回路。一个回路得电时，另一个回路自动被切断，防止同时运行。</p>
          <p><small>📌 关键：常闭触点串联在对方回路中</small></p>
        </div>
        <div class="comparison-card">
          <span class="tag tag-complex">🔄 复合连锁</span>
          <h4>Composite Interlock</h4>
          <p>同时运用自锁、互锁以及其它保护连锁（热继电器、行程开关、时间继电器等）的复杂控制电路。</p>
          <p><small>📌 关键：多种保护机制协同工作</small></p>
        </div>
      </div>
    </div>

    <div class="section-card animate-in">
      <h2>🎯 学习目标</h2>
      <p>完成本课程后，你将能够：</p>
      <ul>
        <li>✅ 理解自锁电路的工作原理并能自行设计</li>
        <li>✅ 掌握互锁电路的两种实现方式（电气互锁、机械互锁）</li>
        <li>✅ 分析复合连锁电路中的多重保护机制</li>
        <li>✅ 阅读和绘制基本的梯形图（Ladder Diagram）</li>
        <li>✅ 具备电气控制故障排查的基本能力</li>
      </ul>
    </div>

    <div class="section-card animate-in">
      <h2>💡 实际应用场景</h2>
      <div class="info-box concept">
        <strong>🏭 电机正反转控制</strong>
        这是自锁+互锁最经典的应用。电机正转时，反转按钮无效；反转时，正转按钮无效。
      </div>
      <div class="info-box concept">
        <strong>🔧 星三角降压启动</strong>
        星形和三角形两种连接方式必须互锁，防止同时接通导致短路。
      </div>
      <div class="info-box concept">
        <strong>🛗 电梯系统</strong>
        电梯的上下行方向必须互锁；同时各层门锁与电梯运行之间是连锁关系。
      </div>
      <div style="text-align:center;margin-top:24px">
        <button class="btn btn-primary" onclick="navigateTo('basics')">开始学习 →</button>
      </div>
    </div>
  `;
}

function renderBasics(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot current"></span><span class="step-arrow">→</span>
      <span>Step 1 of 15</span>
      <span class="step-arrow">→</span>
      <span>基础元件</span>
    </div>
    <div class="section-card animate-in">
      <h2>🔧 基础电气元件</h2>
      <p>在学习连锁控制之前，必须先认识这些基本元件：</p>
      
      <h3>1. 按钮开关 (Push Button)</h3>
      <table class="styled-table">
        <tr><th>类型</th><th>符号</th><th>说明</th><th>图形符号</th></tr>
        <tr>
          <td>常开按钮 (NO)</td>
          <td><code>SB ─/ ─</code></td>
          <td>平时断开，按下接通，松手断开</td>
          <td style="font-size:18px">—⏜—</td>
        </tr>
        <tr>
          <td>常闭按钮 (NC)</td>
          <td><code>SB ─\─</code></td>
          <td>平时接通，按下断开，松手恢复</td>
          <td style="font-size:18px">—⏝—</td>
        </tr>
      </table>

      <h3>2. 接触器 (Contactor) — KM</h3>
      <p>接触器是电气控制的核心执行元件。它由电磁线圈和触点组成：</p>
      <table class="styled-table">
        <tr><th>部件</th><th>符号</th><th>功能</th></tr>
        <tr><td>线圈</td><td><code>KM ─○─</code></td><td>通电产生电磁力</td></tr>
        <tr><td>主触点（常开）</td><td><code>KM ─/─</code></td><td>控制主电路（电机）通断</td></tr>
        <tr><td>辅助常开触点</td><td><code>KM ─/─</code></td><td>用于自锁或信号传递</td></tr>
        <tr><td>辅助常闭触点</td><td><code>KM ─\─</code></td><td>用于互锁或信号传递</td></tr>
      </table>

      <h3>3. 继电器 (Relay) — KA / KT</h3>
      <p>继电器与接触器原理相似，但用于小功率控制信号：</p>
      <ul>
        <li><strong>中间继电器 (KA)</strong>：用于信号放大和转换</li>
        <li><strong>时间继电器 (KT)</strong>：延时动作，用于定时控制</li>
        <li><strong>热继电器 (FR)</strong>：过载保护，利用双金属片热变形原理</li>
      </ul>

      <h3>4. 符号速查表</h3>
      <table class="styled-table">
        <tr><th>元件</th><th>文字符号</th><th>图形符号 (梯形图)</th></tr>
        <tr><td>常开触点</td><td><code>--] [--</code></td><td>—[ ]—</td></tr>
        <tr><td>常闭触点</td><td><code>--] [-- 带斜杠</code></td><td>—[/]—</td></tr>
        <tr><td>线圈</td><td><code>--( )--</code></td><td>—( )—</td></tr>
        <tr><td>按钮 (NO)</td><td><code>SB</code></td><td>—⏜—</td></tr>
        <tr><td>按钮 (NC)</td><td><code>SB</code></td><td>—⏝—</td></tr>
      </table>
    </div>

    <div class="section-card animate-in">
      <h2>🧠 常开 vs 常闭 — 关键理解</h2>
      <p>这是初学者最容易混淆的概念：</p>
      <div class="comparison-grid">
        <div class="comparison-card">
          <h4 style="color:var(--accent)">常开 (NO — Normally Open)</h4>
          <p><strong>无动作时 = 断开</strong></p>
          <p>线圈不通电 → 触点断开</p>
          <p>线圈通电后 → 触点闭合</p>
          <p style="margin-top:12px">📌 用于：启动、自锁、指示信号</p>
        </div>
        <div class="comparison-card">
          <h4 style="color:var(--danger)">常闭 (NC — Normally Closed)</h4>
          <p><strong>无动作时 = 接通</strong></p>
          <p>线圈不通电 → 触点闭合</p>
          <p>线圈通电后 → 触点断开</p>
          <p style="margin-top:12px">📌 用于：停止、互锁、保护</p>
        </div>
      </div>
    </div>

    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('intro')">← 上一页</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('circuit-basics')">基本电路原理 →</button>
    </div>
  `;
}

function renderCircuitBasics(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>基本电路原理</span>
    </div>
    <div class="section-card animate-in">
      <h2>⚡ 基本电路原理</h2>
      
      <h3>1. 启动/停止电路</h3>
      <p>最简单的控制电路：</p>
      <div class="ladder-container">
        <pre style="font-family:monospace;font-size:14px;line-height:1.6">
        ┌─ L1 ──────────────────────────── N ─┐
        │                                       │
        │   SB启动         KM线圈               │
        ──┤[ ]──────────────( )────────────    │
        │   ↑                                 │
        │   KM自锁触点（并联）                  │
        └──────────────────────────────────────┘
        </pre>
      </div>

      <h3>2. 电流路径分析</h3>
      <p>理解电路中电流的流向是分析一切电路的基础：</p>
      <ul>
        <li><strong>L1（火线）→ N（零线）</strong>：构成完整的电源回路</li>
        <li>串联的元件必须<strong>全部闭合</strong>，电路才能导通</li>
        <li>并联的元件中<strong>只要有一个闭合</strong>，电路就能导通</li>
      </ul>

      <h3>3. 梯形图阅读规则</h3>
      <div class="info-box concept">
        <strong>📖 梯形图规则：</strong>
        <ol>
          <li>两条竖线代表电源母线（L1 和 N）</li>
          <li>水平线称为"梯级"（Rung），每个梯级构成一条电路</li>
          <li>触点（输入）在左，线圈（输出）在右</li>
          <li>所有触点串联形成"与"逻辑，并联形成"或"逻辑</li>
          <li>线圈得电后，其对应的触点会改变状态</li>
        </ol>
      </div>

      <h3>4. 关键逻辑关系</h3>
      <table class="styled-table">
        <tr><th>逻辑</th><th>电路结构</th><th>示例</th></tr>
        <tr><td>与 (AND)</td><td>触点串联</td><td>SB1 AND SB2 都闭合 → 线圈得电</td></tr>
        <tr><td>或 (OR)</td><td>触点并联</td><td>SB1 OR SB2 任一闭合 → 线圈得电</td></tr>
        <tr><td>非 (NOT)</td><td>常闭触点</td><td>常闭触点断开 → 线圈失电</td></tr>
        <tr><td>记忆 (Latch)</td><td>自锁电路</td><td>自锁触点维持线圈状态（见下一章）</td></tr>
      </table>

      <div class="info-box success">
        <strong>💡 提示：</strong>
        掌握这四种逻辑关系，你就已经理解了70%的电气控制电路！
      </div>
    </div>

    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('basics')">← 基础元件</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('self-lock')">开始学习自锁 →</button>
    </div>
  `;
}
// ============== SELF-LOCK RENDERS ==============

function renderSelfLock(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>自锁电路</span>
    </div>
    <div class="section-card animate-in">
      <h2>🔒 自锁电路 (Self-Locking Circuit)</h2>
      
      <div class="info-box concept">
        <strong>📖 什么是自锁？</strong>
        自锁是利用接触器自身的辅助常开触点来维持线圈持续通电的控制方式。<br>
        简单说：<strong>按下按钮 → 动了 → 自己锁住自己 → 松手也不停</strong>
      </div>

      <p>自锁电路是电气控制中最基础、使用最广泛的控制形式。它在电机启动、信号保持等场景中无处不在。</p>

      <h3>自锁电路结构 (梯形图)</h3>
      <div class="circuit-canvas">
        ${circuitSelfLock('self')}
        <div class="circuit-controls">
          <span style="font-size:13px;color:var(--text-muted)">电路中包含：</span>
          <span class="legend-item"><span class="legend-icon">🔘</span> SB1 启动按钮 (NO)</span>
          <span class="legend-item"><span class="legend-icon">🔄</span> KM 自锁触点 (NO, 与SB1并联)</span>
          <span class="legend-item"><span class="legend-icon">⭕</span> KM 线圈</span>
        </div>
      </div>

      <h3>工作原理 (三步曲)</h3>
      <div class="comparison-grid">
        <div class="comparison-card">
          <h4>① 初始状态</h4>
          <p>KM线圈无电 → 所有KM触点断开 → 电路不导通</p>
          <p style="color:var(--text-muted)">等待启动...</p>
        </div>
        <div class="comparison-card">
          <h4>② 按下SB1</h4>
          <p>SB1接通 → KM线圈得电 → KM主触点闭合(电机启动) → KM辅助常开触点闭合(自锁)</p>
          <p style="color:var(--success)">✔ 电机运行</p>
        </div>
        <div class="comparison-card">
          <h4>③ 松开SB1</h4>
          <p>SB1断开 → KM自锁触点仍然闭合 → 线圈维持得电</p>
          <p style="color:var(--success)">✔ 电机继续运行</p>
        </div>
      </div>

      <h3>如何停止？</h3>
      <p>自锁电路需要额外串联一个<strong>停止按钮的常闭触点</strong>（NC）：</p>
      <div class="ladder-container">
        <pre style="font-family:monospace;font-size:14px;line-height:1.6">
         SB停止   SB启动    KM自锁触点    KM线圈
        ─┤[/]────┤[ ]────────┤[ ]───────( )──
                │                           │
                └──────┤[ ]← KM自锁─────────┘
        </pre>
      </div>
      <div class="info-box warning">
        <strong>⚠️ 关键理解：</strong>
        停止按钮必须用<strong>常闭</strong>触点。按下停止时，常闭触点断开会切断整个回路。如果不加停止按钮，自锁电路一旦启动就无法停止！
      </div>

      <h3>自锁的工程意义</h3>
      <ul>
        <li><strong>🔐 保持状态</strong>：即使控制信号消失，电路仍保持当前状态</li>
        <li><strong>🛡️ 防误操作</strong>：防止意外断电后的自启动（欠压保护）</li>
        <li><strong>⚡ 简化操作</strong>：操作员只需点按，无需持续按住按钮</li>
      </ul>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('circuit-basics')">← 电路基础</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('self-lock-practice')">自锁实验 →</button>
    </div>
  `;
}

function renderSelfLockPractice(el) {
  let state = { sb1Pressed: false, kmOn: false };
  function renderCircuit() {
    const svg = state.kmOn ? circuitSelfLockON() : circuitSelfLockNO();
    document.getElementById('selflock-preview').innerHTML = svg;
    document.getElementById('sb1-btn').className = 'btn btn-toggle' + (state.sb1Pressed ? ' on' : '');
    document.getElementById('km-status').textContent = state.kmOn ? '✅ 得电 (自锁保持中)' : '⬜ 断电';
    document.getElementById('km-status').style.color = state.kmOn ? 'var(--success)' : 'var(--text-muted)';
    document.getElementById('circuit-status').textContent = state.kmOn ? '通电 (KM自锁闭合)' : '断开 (等待启动)';
  }
  window.pressSB1 = function() {
    state.sb1Pressed = true;
    state.kmOn = true;
    renderCircuit();
  };
  window.releaseSB1 = function() {
    state.sb1Pressed = false;
    // Self-lock maintains KM ON even after SB1 released
    renderCircuit();
  };
  window.stopCircuit = function() {
    state.sb1Pressed = false;
    state.kmOn = false;
    renderCircuit();
  };
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot current"></span>
      <span class="step-arrow">→</span>
      <span>自锁实验</span>
    </div>
    <div class="section-card animate-in">
      <h2>🧪 自锁电路交互实验</h2>
      <p>点击按钮，观察自锁电路的工作过程：</p>
      
      <div class="circuit-canvas">
        <div id="selflock-preview">${circuitSelfLockNO()}</div>
        <div class="circuit-controls">
          <button class="btn btn-primary" id="sb1-btn" onclick="pressSB1()">🔘 按下 SB1</button>
          <button class="btn btn-outline" onclick="releaseSB1()">✋ 松开 SB1</button>
          <button class="btn btn-outline" onclick="stopCircuit()" style="border-color:var(--danger);color:var(--danger)">⏹ 停止</button>
        </div>
      </div>

      <div style="margin:20px 0">
        <table class="styled-table">
          <tr><th>元件</th><th>状态</th></tr>
          <tr><td>KM 线圈</td><td id="km-status" style="color:var(--text-muted)">⬜ 断电</td></tr>
          <tr><td>电路</td><td id="circuit-status" style="color:var(--text-muted)">断开 (等待启动)</td></tr>
        </table>
      </div>

      <div class="info-box concept">
        <strong>🧪 实验操作指南：</strong>
        <ol>
          <li>点击 <strong>「按下 SB1」</strong> → 观察电路导通，KM线圈得电（变绿）</li>
          <li>点击 <strong>「松开 SB1」</strong> → 注意！虽然SB1复位，但KM仍然得电（<strong>自锁效果</strong>）</li>
          <li>点击 <strong>「停止」</strong> → 切断电源，KM失电复位</li>
          <li>试试第二步：松开SB1后电路是否仍然保持？这就是自锁的核心！</li>
        </ol>
      </div>

      <div class="info-box success">
        <strong>✅ 实验要点：</strong>
        自锁电路的核心在于KM的辅助常开触点与SB1<strong>并联</strong>。当KM得电后，这个并联触点闭合，取代SB1的功能，即使SB1复位也能维持电路导通。
      </div>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('self-lock')">← 自锁理论</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('self-lock-quiz')">小测验 →</button>
    </div>
  `;
  state.sb1Pressed = false;
  state.kmOn = false;
  // Re-render circuit
  setTimeout(() => {
    const s = { sb1Pressed: false, kmOn: false };
    document.getElementById('selflock-preview').innerHTML = circuitSelfLockNO();
    document.getElementById('km-status').textContent = '⬜ 断电';
    document.getElementById('circuit-status').textContent = '断开 (等待启动)';
  }, 50);
  window.__selflockState = state;
}

function renderSelfLockQuiz(el) {
  const quiz = [
    {
      q: '自锁电路中，自锁触点与启动按钮是什么连接方式？',
      opts: ['串联', '并联', '混联', '不连接'],
      ans: 1,
      exp: '自锁触点（KM的辅助常开触点）与启动按钮（SB1）并联。这样当KM得电后，自锁触点闭合，取代按钮维持回路导通。'
    },
    {
      q: '以下哪个不是自锁电路的作用？',
      opts: ['保持状态', '防止两台设备同时运行', '欠压保护', '简化操作'],
      ans: 1,
      exp: '"防止两台设备同时运行"是互锁的功能。自锁的作用是保持状态、欠压保护和简化操作。'
    },
    {
      q: '自锁电路中，停止按钮应该用什么类型的触点？',
      opts: ['常开 (NO)', '常闭 (NC)', '都可以', '不需要停止按钮'],
      ans: 1,
      exp: '停止按钮必须用常闭（NC）触点。按下停止按钮时，常闭触点断开，切断整个回路，KM失电。'
    },
    {
      q: '自锁电路中的"欠压保护"是什么意思？',
      opts: ['电压过高时自动断开', '电源电压降低或断电后，恢复供电时电路不会自动启动', '防止触电', '保护电机免受过载'],
      ans: 1,
      exp: '当电源断电时，KM失电、自锁触点断开。电源恢复时，KM不会自行吸合，需要重新按下启动按钮。这就是欠压（失压）保护。'
    }
  ];
  renderQuiz(el, 'self-lock-quiz', quiz, 'mutual-lock', '互锁电路 →');
}
// ============== MUTUAL-LOCK RENDERS ==============

function renderMutualLock(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>互锁电路</span>
    </div>
    <div class="section-card animate-in">
      <h2>🚫 互锁电路 (Interlocking Circuit)</h2>
      
      <div class="info-box concept">
        <strong>📖 什么是互锁？</strong>
        互锁是两个或多个电路之间的相互制约机制。当一个回路得电时，<strong>自动封锁</strong>其他回路，防止它们同时得电。<br>
        这是电气安全中最重要的设计原则之一。
      </div>

      <h3>经典应用：电机正反转控制</h3>
      <div class="circuit-canvas">
        ${circuitMutualLockSVG()}
      </div>

      <h3>互锁的工作原理</h3>
      <div class="comparison-grid">
        <div class="comparison-card">
          <h4>回路1 (KM₁ — 正转)</h4>
          <p>串联了 <strong>KM₂的常闭触点</strong></p>
          <p>→ KM₂未得电 → KM₂常闭闭合 → KM₁可以启动</p>
          <p>→ KM₁得电后 → KM₂的互锁条件断开，KM₂无法启动</p>
        </div>
        <div class="comparison-card">
          <h4>回路2 (KM₂ — 反转)</h4>
          <p>串联了 <strong>KM₁的常闭触点</strong></p>
          <p>→ KM₁未得电 → KM₁常闭闭合 → KM₂可以启动</p>
          <p>→ KM₂得电后 → KM₁的互锁条件断开，KM₁无法启动</p>
        </div>
      </div>

      <h3>互锁的两种实现方式</h3>
      <table class="styled-table">
        <tr><th>方式</th><th>实现</th><th>优点</th><th>缺点</th></tr>
        <tr>
          <td>电气互锁</td>
          <td>在对方回路中串联NC触点</td>
          <td>简单可靠，成本低</td>
          <td>触点粘连时失效</td>
        </tr>
        <tr>
          <td>机械互锁</td>
          <td>接触器之间加装机械联动机构</td>
          <td>即使触点粘连也物理阻挡</td>
          <td>结构复杂，成本高</td>
        </tr>
        <tr>
          <td style="color:var(--success);font-weight:600">双重互锁</td>
          <td>电气互锁 + 机械互锁同时使用</td>
          <td>安全性最高</td>
          <td>成本最高</td>
        </tr>
      </table>

      <div class="info-box warning">
        <strong>⚠️ 为什么互锁如此重要？</strong>
        在电机正反转电路中，如果正转和反转的接触器同时闭合，将导致<strong>L1-L2-L3两相短路</strong>，产生巨大的短路电流，瞬间烧毁设备甚至引发火灾！
      </div>

      <h3>自锁 + 互锁 = 完整控制</h3>
      <p>注意检查前面的电路图：每个回路不仅包含互锁（对方NC触点），还包含自锁（自身NO触点）。<strong>自锁维持运行，互锁防止冲突</strong>，两者缺一不可。</p>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('self-lock-quiz')">← 自锁测验</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('mutual-lock-practice')">互锁实验 →</button>
    </div>
  `;
}

function renderMutualLockPractice(el) {
  // Interactive simulation: two buttons, two circuits, see interlock in action
  const simState = { km1on: false, km2on: false };
  function updateDisplay() {
    const e1 = document.getElementById('ml-km1');
    const e2 = document.getElementById('ml-km2');
    const status = document.getElementById('ml-status');
    const note = document.getElementById('ml-note');
    if (e1) {
      e1.className = 'btn btn-toggle' + (simState.km1on ? ' on' : '');
      e1.textContent = simState.km1on ? '✅ KM₁ 得电' : '⬜ KM₁ 断电';
    }
    if (e2) {
      e2.className = 'btn btn-toggle' + (simState.km2on ? ' on' : '');
      e2.textContent = simState.km2on ? '✅ KM₂ 得电' : '⬜ KM₂ 断电';
    }
    if (status) {
      if (simState.km1on && simState.km2on) status.innerHTML = '<span style="color:var(--danger);font-weight:700">💥 短路！KM₁和KM₂同时得电！</span>';
      else if (simState.km1on) status.innerHTML = '<span style="color:var(--success)">▶ 正转运行中 (KM₁得电，KM₂被封锁)</span>';
      else if (simState.km2on) status.innerHTML = '<span style="color:var(--success)">◀ 反转运行中 (KM₂得电，KM₁被封锁)</span>';
      else status.innerHTML = '<span style="color:var(--text-muted)">⏹ 停止</span>';
    }
    if (note) {
      let txt = '';
      if (simState.km1on && simState.km2on) txt = '⚠️ 危险！这是互锁要防止的情况！在真实电路中，KM₂的NC触点会断开KM₁的回路，反之亦然。';
      else if (simState.km1on) txt = '🔒 KM₁已封锁KM₂。由于KM₂的NC触点被KM₁断开，KM₂无法启动。';
      else if (simState.km2on) txt = '🔒 KM₂已封锁KM₁。由于KM₁的NC触点被KM₂断开，KM₁无法启动。';
      else txt = '🔄 等待操作...';
      note.textContent = txt;
    }
  }
  window.toggleKM1 = function() {
    if (simState.km2on) return; // interlock blocks
    simState.km1on = !simState.km1on;
    updateDisplay();
  };
  window.toggleKM2 = function() {
    if (simState.km1on) return; // interlock blocks
    simState.km2on = !simState.km2on;
    updateDisplay();
  };
  window.forceBoth = function() {
    simState.km1on = true;
    simState.km2on = true;
    updateDisplay();
  };
  window.resetML = function() {
    simState.km1on = false;
    simState.km2on = false;
    updateDisplay();
  };
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot current"></span>
      <span class="step-arrow">→</span>
      <span>互锁实验</span>
    </div>
    <div class="section-card animate-in">
      <h2>🧪 互锁电路交互实验</h2>
      <p>模拟电机正反转互锁控制：</p>

      <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin:24px 0">
        <div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);flex:1;min-width:180px">
          <h3 style="margin-bottom:16px">KM₁ 正转</h3>
          <button class="btn btn-toggle" id="ml-km1" onclick="toggleKM1()" style="width:140px;height:60px;font-size:15px">⬜ KM₁ 断电</button>
          <p style="margin-top:12px;font-size:13px;color:var(--text-muted)">点击启动正转</p>
        </div>
        <div style="text-align:center;padding:24px;border:2px solid var(--border);border-radius:var(--radius);flex:1;min-width:180px">
          <h3 style="margin-bottom:16px">KM₂ 反转</h3>
          <button class="btn btn-toggle" id="ml-km2" onclick="toggleKM2()" style="width:140px;height:60px;font-size:15px">⬜ KM₂ 断电</button>
          <p style="margin-top:12px;font-size:13px;color:var(--text-muted)">点击启动反转</p>
        </div>
      </div>

      <div class="circuit-canvas">
        ${circuitMutualLockSVG()}
      </div>

      <div id="ml-status" style="text-align:center;font-size:18px;font-weight:600;margin:16px 0;padding:12px;background:var(--bg-primary);border-radius:var(--radius-sm)">
        <span style="color:var(--text-muted)">⏹ 停止</span>
      </div>
      <div id="ml-note" style="text-align:center;font-size:14px;color:var(--text-secondary);margin-bottom:16px">
        🟢 等待操作...
      </div>

      <div style="text-align:center;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-outline" onclick="resetML()">⏹ 全部复位</button>
        <button class="btn btn-outline" onclick="forceBoth()" style="border-color:var(--danger);color:var(--danger)">💥 强制同时启动</button>
      </div>

      <div class="info-box concept" style="margin-top:20px">
        <strong>🧪 实验步骤：</strong>
        <ol>
          <li>点击 <strong>KM₁</strong> 启动正转 → 观察KM₂按钮变灰不可用</li>
          <li>点击 <strong>复位</strong> → 再点击 <strong>KM₂</strong> 启动反转 → 观察KM₁被封锁</li>
          <li>点击 <strong>「强制同时启动」</strong> → 观察💥短路状态（现实中这是灾难性的！）</li>
        </ol>
      </div>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('mutual-lock')">← 互锁理论</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('mutual-lock-quiz')">小测验 →</button>
    </div>
  `;
  setTimeout(updateDisplay, 50);
}

function renderMutualLockQuiz(el) {
  const quiz = [
    {
      q: '互锁电路中，互锁触点应串联在对方的什么位置？',
      opts: ['对方的启动按钮之前', '对方的线圈回路中', '对方的主电路中', '自己的线圈回路中'],
      ans: 1,
      exp: '互锁触点（常闭NC触点）串联在对方的线圈回路中。这样当本方得电时，其NC触点断开，切断对方的回路。'
    },
    {
      q: '互锁使用的是接触器的什么类型的触点？',
      opts: ['常开触点 (NO)', '常闭触点 (NC)', '主触点', '线圈'],
      ans: 1,
      exp: '互锁使用的是常闭（NC）触点。NC触点在无动作时是闭合的，一旦接触器得电就断开，从而封锁对方回路。'
    },
    {
      q: '电机正反转电路中，如果没有互锁会怎么样？',
      opts: ['电机不转', '正反转同时接通→短路', '速度变慢', '没影响'],
      ans: 1,
      exp: '没有互锁时，正转和反转接触器可能同时闭合，导致电源两相短路，产生巨大短路电流，烧毁设备和线路！'
    },
    {
      q: '双重互锁是指什么？',
      opts: ['电气互锁+软件互锁', '电气互锁+机械互锁', '三个接触器', '两个PLC程序'],
      ans: 1,
      exp: '双重互锁是电气互锁（NC触点串联）和机械互锁（接触器间的机械联动）同时使用，提供最高等级的安全性。'
    }
  ];
  renderQuiz(el, 'mutual-lock-quiz', quiz, 'complex-interlock', '复合连锁 →');
}
// ============== COMPLEX INTERLOCK RENDERS ==============

function renderComplexInterlock(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>复合连锁</span>
    </div>
    <div class="section-card animate-in">
      <h2>🔄 复合连锁电路</h2>
      
      <div class="info-box concept">
        <strong>📖 什么是复合连锁？</strong>
        复合连锁（Composite Interlock）是指在一个电路中<strong>同时运用多种连锁方式</strong>，包括自锁、互锁、保护连锁、限位连锁、时间连锁等，以实现安全、可靠、自动化的控制。
      </div>

      <p>复合连锁不是一个新的概念，而是对多种连锁技术的综合运用。在实际工程中，几乎所有的控制系统都是复合连锁电路。</p>

      <h3>复合连锁电路示例：电机正反转带延时保护</h3>
      <div class="circuit-canvas">
        ${circuitComplexSVG()}
      </div>

      <h3>复合连锁中的各层保护</h3>
      <table class="styled-table">
        <tr><th>保护层</th><th>实现方式</th><th>作用</th></tr>
        <tr>
          <td>🔄 自锁</td>
          <td>KM₁/KM₂ 自锁触点</td>
          <td>保持运行状态，实现点动→持续运行</td>
        </tr>
        <tr>
          <td>🚫 互锁</td>
          <td>KM₁/KM₂ 常闭触点</td>
          <td>防止正反转同时启动</td>
        </tr>
        <tr>
          <td>🔥 过载保护</td>
          <td>FR 热继电器</td>
          <td>电机过载时切断控制回路</td>
        </tr>
        <tr>
          <td>⏱️ 延时保护</td>
          <td>KT 时间继电器</td>
          <td>防止频繁启停/换向</td>
        </tr>
        <tr>
          <td>💡 状态指示</td>
          <td>KM₁→HL₁ 指示灯</td>
          <td>显示当前运行状态</td>
        </tr>
      </table>

      <h3>常见复合连锁形式</h3>
      <div class="comparison-grid">
        <div class="comparison-card">
          <h4>⏱️ 时间连锁</h4>
          <p>利用时间继电器的延时触点</p>
          <p><strong>示例</strong>：星三角启动中，星形运行5秒后自动切换为三角形</p>
          <p class="tag tag-self">KT 延时</p>
        </div>
        <div class="comparison-card">
          <h4>📍 行程连锁</h4>
          <p>利用行程开关（限位开关）</p>
          <p><strong>示例</strong>：自动门开关到极限位置时自动停止</p>
          <p class="tag tag-mutual">SQ 限位</p>
        </div>
        <div class="comparison-card">
          <h4>🔐 安全连锁</h4>
          <p>利用安全继电器、光栅等</p>
          <p><strong>示例</strong>：防护门打开时，机器自动断电</p>
          <p class="tag tag-complex">安全回路</p>
        </div>
        <div class="comparison-card">
          <h4>🌡️ 温度连锁</h4>
          <p>利用温度传感器/温控器</p>
          <p><strong>示例</strong>：温度超限时自动停止加热</p>
          <p class="tag tag-self">T > 限值</p>
        </div>
      </div>

      <h3>复合连锁的设计原则</h3>
      <div class="info-box success">
        <strong>✅ 设计原则：</strong>
        <ol>
          <li><strong>最小化原则</strong>：在满足功能和安全的前提下，触点数量越少越好</li>
          <li><strong>分级保护</strong>：主保护 → 后备保护 → 报警，逐级失效</li>
          <li><strong>故障安全 (Fail-safe)</strong>：故障时电路应自动回到安全状态</li>
          <li><strong>独立性</strong>：各保护机制应尽可能独立，避免共因失效</li>
        </ol>
      </div>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('mutual-lock-quiz')">← 互锁测验</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('complex-interlock-practice')">复合连锁实验 →</button>
    </div>
  `;
}

function renderComplexPractice(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot current"></span>
      <span class="step-arrow">→</span>
      <span>复合连锁实验</span>
    </div>
    <div class="section-card animate-in">
      <h2>🧪 复合连锁电路分析</h2>
      <p>仔细观察并分析下面的复合连锁电路，找出所有的保护机制：</p>

      <div class="circuit-canvas">
        ${circuitComplexSVG()}
      </div>

      <h3>🔍 分析挑战：找出电路中的所有保护</h3>
      <p>下面列出了一些保护机制，选出你认为电路中包含的所有保护：</p>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px">（点击选项切换选中状态）</p>

      <div id="complex-checkboxes" style="margin:16px 0">
      </div>

      <button class="btn btn-primary" onclick="checkComplexAnswers()">✅ 检查答案</button>
      <div id="complex-feedback" style="margin-top:16px"></div>
    </div>

    <div class="section-card animate-in">
      <h2>🧠 思考题：故障场景分析</h2>
      <p style="margin-bottom:16px">假设发生以下故障，电路会如何反应？</p>
      
      <div class="comparison-grid">
        <div class="comparison-card" style="cursor:pointer" onclick="showComplexScenario(0)">
          <h4>🔥 FR 热继电器动作</h4>
          <p>点击查看后果 →</p>
        </div>
        <div class="comparison-card" style="cursor:pointer" onclick="showComplexScenario(1)">
          <h4>⚡ KM1触点粘连</h4>
          <p>点击查看后果 →</p>
        </div>
        <div class="comparison-card" style="cursor:pointer" onclick="showComplexScenario(2)">
          <h4>⏱️ KT时间继电器故障</h4>
          <p>点击查看后果 →</p>
        </div>
      </div>
      <div id="scenario-result" style="margin-top:16px"></div>
    </div>
    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('complex-interlock')">← 复合连锁</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('complex-interlock-quiz')">小测验 →</button>
    </div>
  `;
  setTimeout(() => {
    const items = [
      { id:'c1', label:'自锁 (KM₁/KM₂自保触点)', checked:true },
      { id:'c2', label:'互锁 (KM₁↔KM₂常闭触点互锁)', checked:true },
      { id:'c3', label:'过载保护 (FR热继电器)', checked:true },
      { id:'c4', label:'欠压保护 (线圈失电自动断开)', checked:true },
      { id:'c5', label:'延时保护 (KT时间继电器延时触点)', checked:true },
      { id:'c6', label:'状态指示 (KM₁→HL₁指示灯)', checked:true },
      { id:'c7', label:'机械互锁 (接触器联动机构)', checked:false },
      { id:'c8', label:'漏电保护 (漏电保护器)', checked:false },
    ];
    let html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px">';
    items.forEach(item => {
      html += '<label style="display:flex;align-items:center;gap:8px;padding:10px 14px;border:2px solid ' + (item.checked ? 'var(--accent)' : 'var(--border)') + ';border-radius:var(--radius-sm);cursor:pointer;background:' + (item.checked ? 'var(--accent-light)' : 'transparent') + '" id="lbl-'+item.id+'" onclick="toggleComplexItem(\''+item.id+'\')">';
      html += '<input type="checkbox" ' + (item.checked ? 'checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)">';
      html += '<span style="font-size:14px">' + item.label + '</span></label>';
    });
    html += '</div>';
    document.getElementById('complex-checkboxes').innerHTML = html;
    window.__complexItems = items;
  }, 50);
}

window.toggleComplexItem = function(id) {
  const items = window.__complexItems || [];
  const item = items.find(i => i.id === id);
  if (!item) return;
  item.checked = !item.checked;
  const label = document.getElementById('lbl-' + id);
  if (label) {
    label.style.borderColor = item.checked ? 'var(--accent)' : 'var(--border)';
    label.style.background = item.checked ? 'var(--accent-light)' : 'transparent';
    label.querySelector('input').checked = item.checked;
  }
};

window.checkComplexAnswers = function() {
  const items = window.__complexItems || [];
  const correctAnswers = ['c1','c2','c3','c4','c5','c6'];
  const checked = items.filter(i => i.checked).map(i => i.id);
  const hasAllCorrect = correctAnswers.every(id => checked.includes(id));
  const hasNoWrong = checked.every(id => correctAnswers.includes(id));
  const fb = document.getElementById('complex-feedback');
  if (hasAllCorrect && hasNoWrong) {
    fb.innerHTML = '<div class="info-box success"><strong>✅ 完全正确！</strong><br>该电路包含：自锁、互锁、过载保护(FR)、欠压保护(电磁原理)、延时保护(KT)、状态指示(HL₁)。<br>不包含机械互锁（需要额外加装物理机构）和漏电保护（漏电保护是单独的保护器）。</div>';
  } else if (hasAllCorrect && !hasNoWrong) {
    fb.innerHTML = '<div class="info-box warning"><strong>⚠️ 接近了！</strong><br>你选对了所有正确选项，但多选了额外的项。该电路不包含机械互锁和漏电保护。</div>';
  } else {
    fb.innerHTML = '<div class="info-box danger"><strong>❌ 有遗漏</strong><br>正确选项是：自锁、互锁、过载保护(FR)、欠压保护、延时保护(KT)、状态指示(HL)。<br>注意：机械互锁需要额外加装物理联动机构；漏电保护需要专门的漏电保护器。</div>';
  }
};

window.showComplexScenario = function(idx) {
  const scenarios = [
    { title: '🔥 FR热继电器动作', desc: 'FR动作 → FR常闭触点断开 → 切断KM₁回路 → KM₁线圈失电 → 自锁触点断开 → 电机停止 → 需要手动复位FR后才能重新启动。（过热保护生效 ✅）' },
    { title: '⚡ KM₁触点粘连', desc: 'KM₁主触点粘住无法断开 → 即使KM₁线圈断电，电机仍通电 → 对方KM₂回路仍被KM₁的NC触点封锁 → 反转无法启动 → 需要检修更换接触器。（互锁仍有效，但无法切换方向）' },
    { title: '⏱️ KT时间继电器故障', desc: 'KT常闭触点始终断开 → KM₂回路被封锁 → 反转无法启动 → 但正转仍然正常工作。（影响功能，但不影响安全）' }
  ];
  document.getElementById('scenario-result').innerHTML = '<div class="info-box concept"><strong>' + scenarios[idx].title + '</strong><br>' + scenarios[idx].desc + '</div>';
};

function renderComplexQuiz(el) {
  const quiz = [
    {
      q: '复合连锁电路的核心特征是什么？',
      opts: ['只使用一种连锁方式', '同时运用多种连锁和保护机制', '不需要自锁', '只用时间继电器'],
      ans: 1,
      exp: '复合连锁的核心特征是同时运用自锁、互锁、过载保护、限位保护等多种连锁和保护机制，实现安全可靠的控制。'
    },
    {
      q: '热继电器 (FR) 在复合连锁中的作用是什么？',
      opts: ['控制电机转速', '提供过载保护，电流过大时切断电路', '实现自锁功能', '控制启动时间'],
      ans: 1,
      exp: '热继电器利用双金属片的热变形原理，当电机过载电流持续超过设定值时，双金属片弯曲推动触点动作，切断控制回路。'
    },
    {
      q: '故障安全 (Fail-safe) 原则要求：',
      opts: ['故障时电路继续运行', '故障时电路自动回到安全状态', '故障时发出声音', '故障时可以手动操作'],
      ans: 1,
      exp: 'Fail-safe 原则要求任何故障（断电、断线、元件损坏）应使系统自动回到安全状态，不会造成危险。例如，控制回路断电时接触器自动断开，电机停止。'
    },
    {
      q: '在正反转带延时保护的复合连锁电路中，时间继电器 KT 的作用是？',
      opts: ['延长启动时间', '防止频繁切换方向（延时后才能反向）', '控制运行速度', '保护电源'],
      ans: 1,
      exp: 'KT的NC触点延时闭合，确保从正转切换到反转时有一个安全间隔，防止电机在高速运转时突然反向，造成机械冲击或电流冲击。'
    }
  ];
  renderQuiz(el, 'complex-interlock-quiz', quiz, 'applications', '工程应用 →');
}
// ============== APPLICATION & FINAL PAGES ==============

function renderApplications(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span>
      <span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>实际应用</span>
    </div>
    <div class="section-card animate-in">
      <h2>🏭 实际工程应用案例</h2>
      <p>连锁控制在工业自动化中无处不在。以下是一些经典的实际应用案例：</p>
    </div>

    <!-- Case 1 -->
    <div class="section-card animate-in">
      <h2 style="font-size:20px">📦 案例1：传送带系统控制</h2>
      <div class="info-box concept">
        <strong>场景：</strong> 三条传送带依次输送物料。必须从最后一条向前启动，反向停止。
      </div>
      <table class="styled-table">
        <tr><th>连锁类型</th><th>实现</th></tr>
        <tr><td>自锁</td><td>每条传送带的接触器自锁，维持运行</td></tr>
        <tr><td>顺序连锁</td><td>M3启动 → M2才可启动 → M1才可启动（前级KM触点串联在后级回路中）</td></tr>
        <tr><td>互锁</td><td>停止时必须先停M1，再M2，最后M3</td></tr>
        <tr><td>保护连锁</td><td>任何一条过载，上游全部停止，防止物料堆积</td></tr>
      </table>
      <div class="info-box success">
        <strong>💡 设计要点：</strong>
        前级传送带的接触器常开触点串联在后级启动回路中。只有前级已启动，后级才能启动。
      </div>
    </div>

    <!-- Case 2 -->
    <div class="section-card animate-in">
      <h2 style="font-size:20px">🏗️ 案例2：电梯控制系统</h2>
      <div class="info-box concept">
        <strong>场景：</strong> 电梯需要精确定位、安全门锁、方向互锁。
      </div>
      <ul>
        <li><strong>互锁</strong>：上行和下行接触器互锁，防止同时运行</li>
        <li><strong>行程连锁</strong>：楼层限位开关，到站自动减速停止</li>
        <li><strong>安全连锁</strong>：所有层门关闭 → 门锁开关闭合 → 电梯才能运行</li>
        <li><strong>顺序连锁</strong>：关门信号 → 启动信号 → 运行（每一步必须满足前一步条件）</li>
      </ul>
    </div>

    <!-- Case 3 -->
    <div class="section-card animate-in">
      <h2 style="font-size:20px">⚗️ 案例3：星三角降压启动</h2>
      <div class="info-box concept">
        <strong>场景：</strong> 大功率电机直接启动电流大，需要用星形启动→延时→三角形运行来降低启动电流。
      </div>
      <table class="styled-table">
        <tr><th>阶段</th><th>动作</th><th>连锁</th></tr>
        <tr><td>1. 启动</td><td>KM主 + KM星形 闭合</td><td>电机星形连接启动</td></tr>
        <tr><td>2. 延时</td><td>KT开始计时（通常3-10秒）</td><td>KT延时中</td></tr>
        <tr><td>3. 星→三角切换</td><td>KM星形断开 → KM三角形闭合</td><td><strong>关键：必须先断星，再合三角</strong>（互锁防短路）</td></tr>
      </table>
      <div class="info-box warning">
        <strong>⚠️ 重要：</strong>
        星形和三角形的接触器之间必须互锁！如果两者同时闭合，会导致绕组短路，瞬间烧毁电机。
      </div>
    </div>

    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('complex-interlock-quiz')">← 复合连锁测验</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('troubleshooting')">故障排查 →</button>
    </div>
  `;
}

function renderTroubleshooting(el) {
  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-dot done"></span><span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot done"></span>
      <span class="step-dot done"></span>
      <span class="step-dot done"></span><span class="step-dot current"></span><span class="step-dot"></span>
      <span class="step-arrow">→</span>
      <span>故障排查</span>
    </div>
    <div class="section-card animate-in">
      <h2>🛡️ 常见故障与排查方法</h2>
      <p>掌握故障排查方法是电气工程师的核心技能：</p>

      <h3>🔍 故障排查六步法</h3>
      <ol>
        <li><strong>问</strong> — 了解故障现象：发生什么了？什么时候？多久了？</li>
        <li><strong>看</strong> — 观察设备状态：指示灯？异响？异味？</li>
        <li><strong>测</strong> — 使用万用表测量：电压？电阻？通断？</li>
        <li><strong>想</strong> — 分析电路：根据现象推理可能的故障点</li>
        <li><strong>查</strong> — 重点检查：从电源→控制回路→主回路</li>
        <li><strong>修</strong> — 修复后测试验证</li>
      </ol>
    </div>

    <div class="section-card animate-in">
      <h3>常见故障表</h3>
      <table class="styled-table">
        <tr><th>故障现象</th><th>可能原因</th><th>排查方法</th></tr>
        <tr>
          <td>按启动按钮没反应</td>
          <td>电源故障、保险丝熔断、FR动作、按钮损坏</td>
          <td>万用表测电源电压→控保险→测FR→测按钮</td>
        </tr>
        <tr>
          <td>不能自锁</td>
          <td>自锁触点未闭合、触点接触不良、接线错误</td>
          <td>断电测自锁触点电阻、检查并联接线</td>
        </tr>
        <tr>
          <td>不能互锁</td>
          <td>互锁触点坏的、对方接触器粘连、接线错误</td>
          <td>测NC触点通断、检查对方主触点是否粘住</td>
        </tr>
        <tr>
          <td>电机嗡嗡响不转</td>
          <td>缺相（某相接触不良）、电机故障</td>
          <td>测三相电压、测接触器输出端</td>
        </tr>
        <tr>
          <td>频繁跳闸/FR动作</td>
          <td>电机过载、堵转、整定值偏小、散热不良</td>
          <td>测电流是否超额定、检查负载</td>
        </tr>
        <tr>
          <td>按停止不停止</td>
          <td>停止按钮损坏、接触器粘连</td>
          <td>急停→断开总电源→检修接触器</td>
        </tr>
      </table>
    </div>

    <div class="section-card animate-in">
      <h3>🛠️ 电气安全守则</h3>
      <div class="info-box danger">
        <strong>⚠️ 牢记这些安全规则：</strong>
        <ol>
          <li>检修前<strong>必须先断电</strong>，悬挂"有人工作，禁止合闸"警示牌</li>
          <li>断电后<strong>验电确认</strong>无电再操作</li>
          <li>万用表测量前<strong>先确认档位正确</strong>（测电压用电压档！）</li>
          <li>检修时<strong>单手操作</strong>，另一只手放口袋，避免电流经过心脏</li>
          <li>使用合格的绝缘工具，穿绝缘鞋</li>
          <li>维修后必须<strong>功能测试 + 安全检查</strong>才能交付</li>
        </ol>
      </div>
    </div>

    <div class="btn-nav">
      <button class="btn btn-outline" onclick="navigateTo('applications')">← 工程应用</button>
      <button class="btn btn-primary btn-next" onclick="navigateTo('final-quiz')">综合测验 →</button>
    </div>
  `;
}

function renderFinalQuiz(el) {
  const quiz = [
    {
      q: '在电气控制中，自锁电路的核心元件连接方式是：',
      opts: ['接触器常闭触点串联在按钮上', '接触器常开触点并联在启动按钮上', '热继电器与线圈串联', '时间继电器与线圈并联'],
      ans: 1,
      exp: '自锁的核心是接触器的常开辅助触点与启动按钮并联。当接触器得电后，该触点闭合，替代按钮维持回路导通。'
    },
    {
      q: '电机正反转控制电路中最基本的保护是？',
      opts: ['过压保护', '互锁保护（防同时导通短路）', '欠流保护', '温度保护'],
      ans: 1,
      exp: '正反转控制电路中最基本也是最重要的保护就是互锁，防止两个接触器同时导通导致L1-L2相间短路。'
    },
    {
      q: '热继电器 (FR) 的动作原理基于：',
      opts: ['电磁感应', '双金属片热变形', '电子电路', '液压原理'],
      ans: 1,
      exp: '热继电器利用双金属片热变形原理。两种不同膨胀系数的金属贴合在一起，受热弯曲推动触点动作。'
    },
    {
      q: '以下哪项不是连锁控制的目的？',
      opts: ['保证操作安全', '防止设备冲突运行', '提高电机转速', '实现自动化顺序控制'],
      ans: 2,
      exp: '连锁控制的目的包括安全保护、防止冲突和顺序控制，但不直接提高电机转速。转速由电机本身和变频器等决定。'
    },
    {
      q: '星三角启动中，星形和三角形接触器之间必须：',
      opts: ['并联', '互锁', '串联', '不连接'],
      ans: 1,
      exp: '星形和三角形接触器之间必须互锁！如果两者同时闭合，电机绕组会被短路，产生巨大电流。'
    },
    {
      q: '连锁控制的故障安全原则 (Fail-safe) 的核心理念是：',
      opts: ['故障时保持当前状态', '故障时系统自动回到安全状态', '故障时发出声音报警', '故障时需要人工复位'],
      ans: 1,
      exp: 'Fail-safe 要求系统在故障（断电、断线、元件损坏）时自动回到最安全的状态。例如，接触器线圈断电时主触点断开，电机停止。'
    },
    {
      q: '以下哪个元件用于防止电机长时间过载？',
      opts: ['熔断器 (FU)', '热继电器 (FR)', '时间继电器 (KT)', '中间继电器 (KA)'],
      ans: 1,
      exp: '热继电器 (FR) 专门用于过载保护。熔断器 (FU) 用于短路保护，时间继电器 (KT) 用于延时控制。'
    }
  ];
  renderQuiz(el, 'final-quiz', quiz, null, null, true);
}

// ============== QUIZ RENDERER ==============

function renderQuiz(el, id, questions, nextId, nextLabel, isFinal) {
  let currentQ = 0;
  let answers = new Array(questions.length).fill(-1);
  let submitted = new Array(questions.length).fill(false);
  let score = 0;

  function renderQuestion() {
    const q = questions[currentQ];
    const isSubmitted = submitted[currentQ];
    const selected = answers[currentQ];
    const isCorrect = selected === q.ans;

    let html = '<div class="quiz-container">';
    html += '<div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:14px;color:var(--text-muted)">';
    html += '<span>问题 ' + (currentQ + 1) + ' / ' + questions.length + '</span>';
    html += '<span>得分: ' + score + ' / ' + questions.filter((_,i)=>submitted[i]).length + '</span>';
    html += '</div>';

    html += '<div class="quiz-question">' + q.q + '</div>';
    html += '<div class="quiz-options">';

    q.opts.forEach((opt, i) => {
      let cls = 'quiz-option';
      if (isSubmitted) {
        if (i === q.ans) cls += ' correct';
        else if (i === selected && i !== q.ans) cls += ' wrong';
        else cls += ' disabled';
      } else if (i === selected) {
        cls += ' selected';
      }
      html += '<div class="' + cls + '" onclick="' + (isSubmitted ? '' : 'selectAnswer(' + i + ')') + '">' + opt + '</div>';
    });

    html += '</div>';

    if (isSubmitted) {
      const fbCls = isCorrect ? 'correct' : 'wrong';
      html += '<div class="quiz-feedback show ' + fbCls + '">';
      html += '<strong>' + (isCorrect ? '✅ 正确！' : '❌ 错误') + '</strong><br>';
      html += q.exp;
      html += '</div>';
    }

    html += '<div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap">';

    if (!isSubmitted && selected >= 0) {
      html += '<button class="btn btn-primary" onclick="submitAnswer()">📤 提交答案</button>';
    }

    if (currentQ > 0) {
      html += '<button class="btn btn-outline" onclick="prevQuestion()">← 上一题</button>';
    }
    if (isSubmitted && currentQ < questions.length - 1) {
      html += '<button class="btn btn-primary" onclick="nextQuestion()">下一题 →</button>';
    }

    html += '</div></div>';

    document.getElementById(id + '-content').innerHTML = html;

    // Progress
    const done = submitted.filter(s => s).length;
    document.getElementById(id + '-progress').style.width = (done / questions.length * 100) + '%';
    document.getElementById(id + '-progress-text').textContent = done + ' / ' + questions.length + ' 完成';
  }

  window.selectAnswer = function(i) {
    if (submitted[currentQ]) return;
    answers[currentQ] = i;
    renderQuestion();
  };

  window.submitAnswer = function() {
    if (answers[currentQ] < 0 || submitted[currentQ]) return;
    if (answers[currentQ] === questions[currentQ].ans) score++;
    submitted[currentQ] = true;
    renderQuestion();
  };

  window.nextQuestion = function() {
    if (currentQ < questions.length - 1) {
      currentQ++;
      renderQuestion();
    }
  };

  window.prevQuestion = function() {
    if (currentQ > 0) {
      currentQ--;
      renderQuestion();
    }
  };

  let allDone = questions.every((_, i) => submitted[i]);

  let extraFooter = '';
  const nextBtn = nextId ? `<button class="btn btn-primary" onclick="navigateTo('${nextId}')">${nextLabel || '下一步'}</button>` : '';

  el.innerHTML = `
    <div class="step-indicator">
      <span class="step-arrow">→</span>
      <span>${isFinal ? '🏆 综合测验' : '📝 小测验'}</span>
    </div>
    <div class="section-card animate-in">
      <h2>${isFinal ? '🏆 综合测验' : '📝 章节测验'}</h2>
      <p>${isFinal ? '恭喜来到最终测验！检验你对连锁控制技术的全面掌握。' : '检验你对本章节内容的掌握程度。全部答对即可进入下一章。'}</p>
      <div style="height:8px;background:var(--border);border-radius:4px;margin:16px 0;overflow:hidden">
        <div id="${id}-progress" style="height:100%;background:var(--success);border-radius:4px;width:0%;transition:width 0.3s"></div>
      </div>
      <div style="text-align:right;font-size:13px;color:var(--text-muted)" id="${id}-progress-text">0 / ${questions.length} 完成</div>
      <div id="${id}-content"></div>

      <!-- Show after all done -->
      <div id="${id}-complete" style="display:none;margin-top:24px">
        <div class="info-box success">
          <strong>${score === questions.length ? '🎉 太棒了！满分通关！' : score >= questions.length * 0.7 ? '👍 不错！继续加油！' : '📖 建议复习相关章节'}</strong><br>
          最终得分：${score} / ${questions.length}
        </div>
        <div style="text-align:center;margin-top:16px">
          ${isFinal ? `
            <div class="info-box concept">
              <strong>🎊 恭喜完成所有课程！</strong><br>
              你已经系统地学习了自锁、互锁和复合连锁电路。接下来建议：
              <ul style="margin-top:8px">
                <li>🔧 在实验板上动手搭建这些电路</li>
                <li>📚 学习 PLC 编程中的连锁逻辑</li>
                <li>🏭 结合实际设备理解连锁的应用</li>
              </ul>
            </div>
          ` : nextBtn}
        </div>
      </div>
    </div>
  `;

  // Initialize
  renderQuestion();

  // Override submit-interceptor to check completion
  const origSubmit = window.submitAnswer;
  window.submitAnswer = function() {
    origSubmit();
    const done = submitted.filter(s => s).length;
    if (done === questions.length) {
      document.getElementById(id + '-complete').style.display = 'block';
    }
  };
}
// ============== APP CONTROLLER ==============

let currentPage = 0;
let completedPages = new Set();

// Load completed from localStorage
try {
  const saved = JSON.parse(localStorage.getItem('elec_learning_completed') || '[]');
  saved.forEach(id => completedPages.add(id));
} catch(e) {}

// Initialize navigation
function initNav() {
  const navList = document.getElementById('navList');
  const pages = COURSE_DATA.pages;
  
  // Group pages
  const groups = [
    { label: '基础入门', start: 0, end: 2 },
    { label: '自锁电路', start: 3, end: 5 },
    { label: '互锁电路', start: 6, end: 8 },
    { label: '复合连锁', start: 9, end: 11 },
    { label: '工程实践', start: 12, end: 14 }
  ];

  let html = '';
  groups.forEach(group => {
    html += `<div class="nav-label" style="margin-top:8px">${group.label}</div>`;
    for (let i = group.start; i <= group.end; i++) {
      const page = pages[i];
      const isCompleted = completedPages.has(page.id);
      const stepNum = i + 1;
      html += `<li class="nav-item${i === currentPage ? ' active' : ''}${isCompleted ? ' completed' : ''}" onclick="navigateTo('${page.id}')" data-id="${page.id}">`;
      html += `<span class="nav-step">${isCompleted ? '✓' : stepNum}</span>`;
      html += `<span>${page.icon} ${page.title}</span></li>`;
    }
  });
  navList.innerHTML = html;
  updateProgress();
}

function updateProgress() {
  const total = COURSE_DATA.pages.length;
  const done = completedPages.size;
  const pct = Math.round(done / total * 100);
  const bar = document.getElementById('progressBar');
  const text = document.getElementById('progressText');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = pct + '% (' + done + '/' + total + ')';
}

function saveProgress() {
  try {
    localStorage.setItem('elec_learning_completed', JSON.stringify([...completedPages]));
  } catch(e) {}
}

// Navigate to a page
function navigateTo(id) {
  const pages = COURSE_DATA.pages;
  const idx = pages.findIndex(p => p.id === id);
  if (idx < 0) return;

  currentPage = idx;
  
  // Mark as completed
  completedPages.add(id);
  saveProgress();

  // Update title
  document.getElementById('pageTitle').textContent = pages[idx].icon + ' ' + pages[idx].title;

  // Render content
  const contentArea = document.getElementById('contentArea');
  contentArea.className = 'content-area';
  contentArea.innerHTML = '';
  pages[idx].render(contentArea);
  // Add animation
  contentArea.querySelectorAll('.section-card, .hero').forEach((el, i) => {
    el.style.animationDelay = (i * 0.1) + 's';
  });

  // Update nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.id === id);
    if (completedPages.has(item.dataset.id)) {
      item.classList.add('completed');
    }
  });
  updateProgress();

  // Scroll to top
  window.scrollTo(0, 0);

  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay')?.remove();
}

function resetProgress() {
  if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
    completedPages = new Set();
    saveProgress();
    navigateTo('intro');
  }
}

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  try { localStorage.setItem('elec_learning_dark', isDark ? '1' : '0'); } catch(e) {}
}

// Init on load
document.addEventListener('DOMContentLoaded', function() {
  initNav();
  
  // Load dark mode
  try {
    if (localStorage.getItem('elec_learning_dark') === '1') {
      document.body.classList.add('dark-mode');
    }
  } catch(e) {}

  // Menu toggle
  document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay show';
    overlay.id = 'sidebar-overlay';
    overlay.onclick = () => {
      sidebar.classList.remove('open');
      overlay.remove();
    };
    document.body.appendChild(overlay);
  });

  // Load first page
  navigateTo('intro');
});
