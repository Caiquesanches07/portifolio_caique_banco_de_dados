/* Trimix Sorveteria — dicionário de dados interativo.
   Catálogo gerado a partir do DDL fornecido: 19 tabelas, 113 colunas, 29 FKs.
   A base JSON está compactada em gzip e descompactada no navegador. */
(async function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const compressedCatalog = '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';
  let DB;
  try {
    const bytes = Uint8Array.from(atob(compressedCatalog), ch => ch.charCodeAt(0));
    if (!('DecompressionStream' in window)) throw new Error('Este navegador não oferece descompressão gzip nativa. Atualize o navegador.');
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    DB = JSON.parse(await new Response(stream).text());
  } catch (error) {
    console.error('Não foi possível carregar o catálogo Trimix:', error);
    const target = $('tableList');
    if (target) target.innerHTML = '<p role="alert">Não foi possível carregar o catálogo de dados. Atualize o navegador e tente novamente.</p>';
    return;
  }

  const state = { query: '', group: 'Todos', opened: null };
  const groups = ['Todos', ...new Set(DB.map(table => table.group))];
  const columnCount = DB.reduce((total, table) => total + table.columns.length, 0);
  const fkCount = DB.reduce((total, table) => total + table.foreign_keys.length, 0);
  // 30 triggers e 6 procedures encontrados no script DDL recebido.
  const routineCount = 36;
  if ($('metricTables')) $('metricTables').textContent = DB.length;
  if ($('metricColumns')) $('metricColumns').textContent = columnCount;
  if ($('metricRelations')) $('metricRelations').textContent = fkCount;
  if ($('metricRoutines')) $('metricRoutines').textContent = routineCount;

  function renderFilters() {
    $('groupFilters').innerHTML = groups.map(group => {
      const count = group === 'Todos' ? DB.length : DB.filter(table => table.group === group).length;
      return `<button class="group-filter ${state.group === group ? 'active' : ''}" data-group="${escapeHTML(group)}" type="button"><span>${escapeHTML(group)}</span><span>${count}</span></button>`;
    }).join('');
    $('groupFilters').querySelectorAll('[data-group]').forEach(button => button.addEventListener('click', () => {
      state.group = button.dataset.group;
      renderFilters();
      renderTables();
    }));
  }

  function renderTables() {
    const query = normalize(state.query.trim());
    const list = DB.filter(table => {
      if (state.group !== 'Todos' && table.group !== state.group) return false;
      if (!query) return true;
      const contents = [table.name, table.description, table.group,
        ...table.columns.flatMap(column => [column.name, column.type, column.description,
          (column.keys || []).join(' '), (column.governance || []).join(' '), column.rbac]),
        ...table.foreign_keys.flatMap(fk => [fk.name, fk.column, fk.references_table, fk.references_column]),
        ...table.unique_constraints.flatMap(item => [item.name, ...item.columns])
      ].join(' ');
      return normalize(contents).includes(query);
    });
    $('resultCount').textContent = `${list.length} ${list.length === 1 ? 'tabela' : 'tabelas'}`;
    $('activeFilters').innerHTML = `${state.group !== 'Todos' ? `<span>Domínio: ${escapeHTML(state.group)}</span>` : ''}${state.query ? `<span>Busca: “${escapeHTML(state.query)}”</span>` : ''}`;
    $('emptyState').classList.toggle('hidden', list.length !== 0);

    $('tableList').innerHTML = list.map(table => {
      const opened = state.opened === table.name;
      const tableTags = (table.governance || []).map(tag => `<span class="gov-tag">${escapeHTML(tag)}</span>`).join('');
      const access = (table.access || []).map(item => `${escapeHTML(item.role)}: ${escapeHTML((item.permissions || []).join(', '))}`).join(' · ') || 'Matriz não identificada nos artefatos';
      const columns = table.columns.map(column => {
        const keys = (column.keys || []).map(key => `<span class="key-tag ${key.startsWith('FK') ? 'fk' : key.startsWith('UK') ? 'uk' : ''}">${escapeHTML(key)}</span>`).join('');
        const governance = (column.governance || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
        const rules = (column.rules || []).map(rule => `<span class="rule-tag">${escapeHTML(rule)}</span>`).join('');
        const missingChecks = (column.missing_checks || []).map(note => `<span class="check-missing">${escapeHTML(note)}</span>`).join('');
        const hasDefault = column.default !== null && column.default !== undefined && column.default !== '';
        const defaultMarkup = hasDefault ? `<div class="null-tag">DEFAULT ${escapeHTML(column.default)}</div>` : '';
        const generatedMarkup = column.generated ? `<div class="null-tag">GERADO: ${escapeHTML(column.generated)}</div>` : '';
        const accessMarkup = column.rbac ? `<div class="field-gov"><span>RBAC: ${escapeHTML(column.rbac)}</span></div>` : '';
        return `<tr><td><div class="col-name">${escapeHTML(column.name)}</div>${governance ? `<div class="field-gov">${governance}</div>` : ''}${rules ? `<div class="field-gov">${rules}</div>` : ''}${missingChecks ? `<div class="field-gov">${missingChecks}</div>` : ''}${accessMarkup}</td><td><span class="type-code">${escapeHTML(column.type)}</span></td><td><div class="key-tags">${keys || '—'}</div></td><td><span class="null-tag">${column.not_null ? 'NOT NULL' : 'NULL'}</span>${defaultMarkup}${generatedMarkup}${column.auto_increment ? '<div class="null-tag">AUTO_INCREMENT</div>' : ''}</td><td class="col-desc">${escapeHTML(column.description)}</td></tr>`;
      }).join('');
      const relationships = (table.foreign_keys || []).length
        ? `<div class="access-summary"><b>Relacionamentos (FK):</b> ${table.foreign_keys.map(fk => `${escapeHTML(fk.column)} → ${escapeHTML(fk.references_table)}.${escapeHTML(fk.references_column)} <small>[ON DELETE ${escapeHTML(fk.on_delete || 'não informado')}; ON UPDATE ${escapeHTML(fk.on_update || 'não informado')}]</small>`).join(' · ')}</div>` : '';
      const unique = (table.unique_constraints || []).length
        ? `<div class="access-summary"><b>Restrições UNIQUE:</b> ${table.unique_constraints.map(item => `${escapeHTML(item.name)} (${item.columns.map(escapeHTML).join(', ')})`).join(' · ')}</div>` : '';
      const indexes = (table.indexes || []).length
        ? `<div class="access-summary"><b>Índices:</b> ${table.indexes.map(item => `${escapeHTML(item.name)} (${item.columns.map(escapeHTML).join(', ')})`).join(' · ')}</div>` : '';
      return `<article class="table-card ${opened ? 'open' : ''}"><button class="table-head" data-table="${escapeHTML(table.name)}" aria-expanded="${opened}" type="button"><span class="table-glyph">▦</span><span class="table-title"><strong>${escapeHTML(table.name)}</strong><small>${escapeHTML(table.description)}</small></span><span class="table-meta"><span class="group-pill">${escapeHTML(table.group)}</span><span class="count-pill">${table.columns.length} colunas</span></span><span class="chevron">⌄</span></button><div class="table-detail"><p class="table-description">${escapeHTML(table.description)}</p><div class="governance-tags">${tableTags}</div><div class="access-summary"><b>RBAC documentado:</b> ${access}. As regras do projeto vedam privilégios operacionais de DELETE, DROP, ALTER e TRUNCATE; confirmar a efetiva concessão no banco.</div>${relationships}${unique}${indexes}<div class="columns-wrap"><table class="columns-table"><thead><tr><th>COLUNA</th><th>TIPO SQL</th><th>CHAVES</th><th>REGRAS</th><th>DESCRIÇÃO / METADADOS</th></tr></thead><tbody>${columns}</tbody></table></div></div></article>`;
    }).join('');
    $('tableList').querySelectorAll('.table-head').forEach(button => button.addEventListener('click', () => {
      state.opened = state.opened === button.dataset.table ? null : button.dataset.table;
      renderTables();
    }));
  }

  $('searchInput').addEventListener('input', event => { state.query = event.target.value; renderTables(); });
  $('clearFilters').addEventListener('click', () => {
    state.group = 'Todos'; state.query = ''; state.opened = null; $('searchInput').value = '';
    renderFilters(); renderTables();
  });
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('searchInput').focus(); }
    if (event.key === 'Escape') closeDer();
  });

  // Tema claro/escuro com persistência local opcional.
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('trimix-theme'); } catch (_) { /* armazenamento pode estar bloqueado */ }
  if (savedTheme === 'dark' || savedTheme === 'light') document.documentElement.dataset.theme = savedTheme;
  $('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('trimix-theme', next); } catch (_) { /* alternância continua funcionando sem persistência */ }
  });

  // DER com Panzoom.js; os botões e o arraste permanecem funcionais com a biblioteca CDN.
  let panzoomInstance = null;
  let fallbackScale = 1, fallbackX = 0, fallbackY = 0;
  const modal = $('derModal'), viewport = $('panViewport'), panImage = $('panImage');
  function applyFallback() {
    panImage.style.transform = `translate(${fallbackX}px, ${fallbackY}px) scale(${fallbackScale})`;
    panImage.style.transformOrigin = '0 0';
  }
  function openDer() {
    modal.classList.remove('hidden'); document.body.classList.add('modal-open');
    if (window.Panzoom) {
      if (!panzoomInstance) {
        panzoomInstance = window.Panzoom(panImage, { maxScale: 8, minScale: 0.3, contain: 'outside', canvas: true });
        viewport.addEventListener('wheel', panzoomInstance.zoomWithWheel, { passive: false });
      }
      panzoomInstance.reset();
    } else { fallbackScale = 1; fallbackX = 0; fallbackY = 0; applyFallback(); }
  }
  function closeDer() { modal.classList.add('hidden'); document.body.classList.remove('modal-open'); }
  $('openDer').addEventListener('click', openDer);
  $('derPreview').addEventListener('click', openDer);
  $('closeDer').addEventListener('click', closeDer);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeDer);
  $('zoomIn').addEventListener('click', () => { if (panzoomInstance) panzoomInstance.zoomIn(); else { fallbackScale = Math.min(8, fallbackScale * 1.2); applyFallback(); } });
  $('zoomOut').addEventListener('click', () => { if (panzoomInstance) panzoomInstance.zoomOut(); else { fallbackScale = Math.max(0.3, fallbackScale / 1.2); applyFallback(); } });
  $('zoomReset').addEventListener('click', () => { if (panzoomInstance) panzoomInstance.reset(); else { fallbackScale = 1; fallbackX = 0; fallbackY = 0; applyFallback(); } });

  renderFilters();
  renderTables();
})();
