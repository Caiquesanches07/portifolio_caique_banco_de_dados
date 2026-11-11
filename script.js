/* Trimix Sorveteria — dicionário de dados interativo.
   Catálogo gerado a partir do DDL fornecido: 19 tabelas, 113 colunas, 29 FKs.
   A base JSON está compactada em gzip e descompactada no navegador. */
(async function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const compressedCatalog = 'H4sIAAAAAAAC/+1dW2/cOJb+K0S9dAJUdy7baQxi7INjO2nPpN0ex27sotGopiVWmRmVWK1Lwd2LAfanTGYfGlnAT8G89Gv9k/0le84hJZES62a7SrLjpzgSqaI+ked858LDH/+rF/Ox6L3sBTLkoej1e6FIg0ROMqliuLzHs9mHSI0UCwUb57EMZlcTqVImGPwHu6RsKEKR8ExOecrylIdwN+ZswsNExfI3Pvt99j/QHfvE0FDMflfpV/BDo0TlE/qJkKdZolK4FqgoH8dp7+WP5cBkOCjHlv06wUuHR6ePnj17DBfiPIr4eQQXhzxKBVxQ2QAv9l5mSS7wbYY8j7LeS7zY7/E8UwMZB4kYizgrGo1EjC8gwqLZ38SvOIbe8V96P9UROQyhpxzKAF40YbM/ABJ4O870INmj4IJPBZskcjz7kEjO8CfLX+TRY3p1NRVJzOMABv4j/EJyzgN49O7+d4dHh+9OT3b3vz95yd4dvD3YO+2zw6N3Byfw79nx/u7pQe/v/RKbWI1FA50fdk/2vt09efTs6dPbgMj0movR2V9YoMYTlWa8CdYRDJApAEvyCKaANYNuE4Z8WL09vfrz1l/8nRxFHKeFWSXWIsFegIVMWcATHmSwJNKbowEdcM7x5NcBDBDHVy0cuAfD+CWHuaJiWGpcxpmzxvK/maYDmlGEZ7UUa9MM7v6EPydhNV+KVA92qBIhR/HAgANXeBCIVP9KovAruG8CD5qIZCzTFACjX9FvBtf1q8Ef5t3o1xx0eievdvfY//33PxnHH1FsAksRHjeUEbSuJoYWOIFqiLWDQhJVYirUT9k7OO4zEHgJXMgT1WfnXCaJAnmnAdiBVvA5U5GwROSZjKqukXrP15Rs1gC7K9tUJbhvc9VuVLAvW7yvPW+/R6N5cvaazf7BfslBYllvjtMrE/DShYQXuJDikZAJv1WZHohJTZr9aTvSzAPIwbHz9fuMJ2P+m4hxxqdizEDFpSjEYHWYyRKDjIf1Ed3qTKmWo0fLvdiGlvMrNkChGhp7lOQcEJoKlPh9YADAfACZLPjqVueHlkdtqfsGEK+0eAxUAmpsomKUIILxW5UZXt1Wis5VtFvReKBXl6Xb8EJNnZUdh3bHQlRZfS0N+/emDlzlMTUxmIghNAOU0kGmP2LPd8/bV8UDWHciI16IjFtcTiIgXhku1keo5vDiYRyr/VePdft8EnJqv7f7bm93XyPdBb2NmrShs88KJjW7SkFDIblKgFSxU5ga8rKvaRVZH4HWu1ymfUuAC6ZnaDr7MBURrNwAJfwkgKfzaD21bcbXZXOk4J0anUVr8PTgaP/g6PSgWH877M3BiXvheoaJi1LLckoLbMFkiZexS0uoto1REE/ee+D5ujVtf3T8ZwsOR9nzCfyb6iU2uxrJTKXbhmvDbPk6hNFvRUzhqXmEfwGNLJbhmqRxI2syH4tEeUCsVmYrC3P2B44LyZQczz6haG5xTYJBH9GLrMKwNB4VPubVbxmgvWpMpbpa2SjbBEgZ0Iyhin0upxdtAHRqxoPiHShgxrM2xTrIqWEe02dKpBoYzgGLP1ostjaClVdsvdbDQ/ckunVT4KworWDuKw9F2mHT2RVKNOWSpS1Cim4zaz2eHh79JyHYhrg6jEPDtUIklCOJTJHRCBmMiKmcydj89+njHWa5iNBQ1vcM94hmn0bwsO3A6TWiiKKtYkBhw4FhLLb1hFcWmE/UzdI4rvFUmXDWxy56uQvH7ThvgS0zw/zDaZALjxnmvzun/62YYqshskzgeF7Fajz/bdxGG7Qtiwk+166kuWFam7m/UtvtW60uZvU4mrYpUWoMLfkLFmqAVixcAXMV74KAQgvF2Cd980N0R/862DAxzPExNviXSFmavxfwJVKkm2/fHO/bpuw7McqBcM5+53NtWXfUXfZC27gtkJm3osI3ZeFfR1+/hbEwMWYgoZmLAuidnK9pW9ySce+dNp2w8V2IdsgnBKsIlg7w5glP09kVGRmwoGKw2cZliBq0H64rwY5Pnj5vINjDtUVSwH5g7zaBDSZDD5bPWnMIHL9egqbtTsG1qkWRciTRljEUYy6jFoPhHi/BlzgkENqhnMow18bbAlA7AGKkRjJugviiNQwL712e5lrwWWhWDDvmNe3ZxK5U5WgoIlOoFOutIpiK+IIPLnh60YTx+YsXbUjHb2EwjP6vRsnsw9A4immkO4xoXeHxS/RVVDqZuIS5GEScYuAF+YO1DvdgmqTtQWwYWAnvwdHZd4++KAnlF332hfkR/NN5/Bdt4H/MJ6B2CJ2aAHjJylH3C/sODUlnzO0BDUSeD3iI7Jlbyp6abR/GfRgNvSgNSKeWbY8afr6uiFuaR+hiQAlN/sxBNJqE7ow6PfyutVkl2IUCYEJVoalditWIC9srpFQHE2hU29PRXi+OzcVXceZg+4Emm7YvZzJ0zNmiYcGorKb6kq9xwRysxvrSAieR6fieN/w82j21xKnT7O6YcB4PSPOOp9/mfB4teTH8U7JfqZG6pwHu7RW+icj2fyRoagJFdWZAAK8+UolsBu731Xh2FUu9mIpWaSmO4E+SRyoZcQyhJQwXlpV2PElUmGdrJw1b4+meVwMThosBMrBJFWAM17gq3raViL0Hsw4YUET+rUTrErf63NgiXHqEAVcr0PvtRMH26X9amxNYlCFDyoqA4iOuNdijUMYXQmJua8CTjBgULMxk9jGENe1cDGcfz9EUBSYxkZePH+I+9yXuUy30lXLDi9aUHu7LDa8ed73M8HsUBTASaX4EIID5l/DIll4YexUJqlmaMqAQRaSz2/poesN4td5I6UdLtNdTiNXAuuzkb0n9bZowXCsfvVR06Pmv5gErUepEWhEKgMbc6kIkoFxU1rxij8TlVy9Zys9Vgqou/SWX6OkC8Y3p2rOrByV3b5RcMSnnqbi5Bqnp6EiEWtq3q/AWWKfzn9WUOr70b//teU94CNSvoaIH3jTzXW2M6UmMqrpU00zQFq8dNuZxNvs4huuU/AlrBT4XaOw+CyUmX8hzWBaU9kmiWaH4FmOQNvKSaxVu56YZBX6gGy5T393NPQ9LQ1ZjZwb8JQ74hlKgdqG+/q+n7zfIh1bQ9v3F+0ePzZQryGLhIlDoIrC8I5ym5AZ4wEYgbzGrYgneRY5FkL+38a14A0A7+2DWt04guAuYT2jTkZZOlp/9YO/wu923QM76z1uJhJVyk1Ta7H/Rw2iTtJiDJIz03O7jZxkrEZqN0znuQ+Apx2SpAFS+TDuHupH5A8zOiQZa7Lcw7Zub0nkU6pwhsj5L1XQJ04QyyyodhXSOAD8HUncH5LlRvE6WdQeoNEuFJUPKneNTAXeLEFIly6tJ3xF8F9Hq1XOHa8zFZdKVFnbiPXOIeXSDOFG9c3eiRP3aMCtM7F+srnoG673p730XbYRlbX3WQZsWxjmK0YEoKb0rG05q0eV8rJ5QDx0hIwmMyU7jSiGqUlrTDUtKrGg+1EfUSftBgwC27EjiJidSTsS7UhCYGHeET5GB5bR6msKtmgqdygo+zASWkbEUiN7RTAw2JU0PqgawS0SY/4ba5kZ5wrcD5IaTzW+8GwpnXOH3ylkxIdsG7pecx5muz9MdMvnXclCW1BqrKeXJYDBih2EIY5SQVIvFaPYJcAZlI0eCTXmEglOlEp2JWwWTspDou3Yx8SiizRo6UAuw0Tj7bATPAvE4EREt6qkMCb2EGW29BQC9VNBVKmv7WXX3STSPFBa8rt/shIJk0bawpWzQ8xifiOrQ/qn+Qui8imo+URwsZre1Vu3lQnWN2AVGcNS3aFsJuOfAUXKqiTQUoDjKtUxdy0JhcBtaxarPQHhEuYypykKeFGUp4FmSPg2IA5vnvZY0ZJmoBZlPjnDrZJiXxviEENg2B+kSiStq2lQFxyxgrlty7LNkbs7GdVKUVQ6vQbV1GIHt5NzJGTN7Fl5Bh+9xl8Lrg71v4Wmt7E8ACxLFeYHWS6aHhUFfM6zt87RCmHaPqlmCvkDMz9O2Chrxah9qLXv8fyC+L2NdCBYNV5ODaOfT8yak259xlc5eMue2lNXpmgfV6HYYdIRbMRmHqtAcKNwk4KWhVC1MPi+Ac6ffdlDU029ITiVnA0cNTwyOzD4y+3oLCIImQznSOfyIntLWARRvoFvFmLsg6iJ85zwVzmrG/6UU9KAaYnEqQxKU6Za9KOI84XV23Da0+yXLN8kmUyMqi1laXClmhYt4G+RZ6xe+nXJGPTl89HNBnH5m/85KtvSzGc7P/aOzt2/x1xduZgdTCebkVCYU/jSaGsvUJ5lMykQKlKahI01nHwwR2mGzKwzqlXsR5HiC9SdNKW/yf2mpS/XvxyIdLw3mbdQ7o2f6agne6E1wv20zwlbcWxCgqx40L0bXbza/sS8nuNu+HA9od3wHW9e8NuihBIO6dPvOD8dRiCk1HhiMs5VxuSL+pj20IWa7UtHjjATxWql89eF0uvS7HmsZndu2wtl43PJaFXksL30ZrSzc9XPDlg8RuLUjcM359xCMu0/BuLFydz+0XCLlz3mqZSCd06LOYWmDQfgp0dmJxVSEeUnJiAmmMaKqMPOVhy34K8yguuggsx2wZpitucj8Rwg4enjt8CV019qp0OMug60FR13OV/a9MfmdMwq/9vRQyQVNFj3p9mmwH5KOE/l7QY/JM+PZsHoO8o1HFyZ6CauWGmqiEwVUndIpdq7TtXmtRqHQWxZQd5f7xWy2/AP5heaS5WJwXT5sgca4Ws6u/mpWim5x4b6EMk2hymKyDJUERaA3Nt9gn8qtwnbXYpkFlt1Ab2PpBdfbI41yRbvd3EqACt2lmp91ADfiakiMuph0BvYpOe81N0tdcraDK5rmX78kugzjdmnG8ain0IZ6O7B6yZzWE2uTOOq2CgvrN3sFXt5n3K7Oork0PexpYPWqLvu7kfcVG/m9qn3nAYvpom/k7rr27kJu3PL1vH1O6Pk6d8mzW329u+LZXbCFw/DNlbZleNq25/X109vS6yvHeaZVrfHykrtJe3+N3MOo5nvHNyBqdbhBICekepI1qG19gF32A9sVES2QljHfjfgwN4bXivuIm6jRh65cwRog0KXa7YbV8jQTOTs6/OvZAaO5n9EOH4NwASlO5VYwtY+QsGZzZ33EZoy2j3gHJiTQvEwU0mBuLV1d0uTB03mnPJ2fNXveih90MYV2zlOtaS6XlJrnLDhVdbqUcTtCaKkPdLqEI9ZEWlf5IryHi6ir7zzD9tzy9XzwdZYoY1rVoKyG6fF6VvvxU10+M3XrZ8Lz6bgdQYcQBNWGDYymFbUsSgWlbz85ene25i6O5kA7uWXXU2C0LOzboaKs7R1dcQ/rslLYuBSpDt4dqbnhBVhHu4PZp1DqwtL+JfpQ++8e1P6rS8+VyuIXfQaITM1DV4qWhwq36EVPNd2Q84tcuOHDok+lH8vqQ5T1XJS0wDtoRgNrdi+GuLEhVuuk2c0bZwf1KAZIK7h4Da5Wkrz1V+hadLGaHoBSmeB0nTDP5pAzU7WD0JmRdRO7rkdlU6UtJmO21yRa2wCSi8SReN0+V6cO4Bz/SVsuEb/uWDu6qB9TyVLPpgpzrxZgNB0rUeLpWdz0d71xYtmcIXgFXXfKp/ne/i6FDP0zxqeXH7aF3JTIykyMGzKzUWUrRldPlfWdOgc3UPGO2RUezQCcBAnrXKa7DnX1jqzL4UFJ1chEy8R1a4z/5gWH9xbwfascCOHapTogd6JqdrXzgbbL+ifnw06Su7+TxMvdPMJzFfeP1a3Bm+YJFvuUifnhLpk1SrrWy98uI2OeR3SwKmy/NuQamouFtGf8KzRd5ckPjMdhPP58qH2RgTYqypXhUVMFxzHrWuAlnpmDqKhWeJH6voNHYaDJxoszMcjXgOcSEzsYK/PYRrR7tUQpZ9hd3ggQ0WFCK+RFbSo5u+3UqAXKWedIFdTGwuomHGdTOHag4u+KXMc6cqZIfY/MYRad3odRsZ/u0R5zPE9qn0lRpT5ReY9WFrg+zqOUwp070QNwy8ymr6HAcCCVRoBJfJ6YqWnUBR1jB+phJCLD0S8AXMw/C1QbOwrcHAJUWwN8F9cX3TbI+4VG5cheKPJaHSW1w4jZlEdMADPXwdoYBEGaI54JHUVBH6qcQi1u2LCU+sr0fFG+Wd9TOXg+JZ+uUHd4CSWf3q36u/3a4O9aptl92poQqdGgPGTdXeWniYw0L8rQ4kYpmppkFeScJt/MLhsMD5NxVTEME01TEDv05+ExFhoG4x04xHjCzk73UARMQdg6/PudGOUJFTWZy8GdIRuJ+OrwDars5087RsNL5JrALRJ4rjCjkzkARvwDoRXwMaPZFT6pz2gYmS7nnKhMxtQMi0ADQbhuYHMjFeeWBzalhSLq6BI9o6epMGJZGE3PNlras48MCUl8IQLpUSW9t2+O92kxhFRYVphF0dsw5DTCQbkeWkoG9Bwxh8Cl+flYUDGgeOE8NQs8lVNRYB/rDPzuAZ7mNbnQaiLbSSH96ERKB9SX7JnOVjMjBtn4VF8You9j67Jh0siyKabo163sCjkArqQJIugNJ9Wmmqm446Zk5zu1mQbAvheYmQpmfomITijMsMilTwC3NWvLTSWDPAs6kSxxWurpClB95NNUk/rSBqWz+lCZlwgcnzz9pmVovSzfog1rZ09AX911vf3ZuG+6+lnPvmn3yy/j+XNGcRcL0ywhugs+PjRe/PU9XHje5Ov3cLLSnUossPHsKobJU9BTkhrfYBVVgX7hkldnJT12RXuTXueYNp94Yvqn1iNMG9rsUYi1f4kUK/eleMyrTPXu35Cc3pj7Bd8I+PWTWE3JNW6fYFqvfGPX8bgO27beoNOEu9gD50DaZaLdUgZhdYgzqEerPglhtqpbtrdbTlpcDwiGmP1BzqCMAl+RdroVMzjatB7VpwsP+FDgOzSpzDdft0FljtRYp2nS6ApvuKK9rHiymwX/SptaNwIdDcK7X+nfWjFRTuWEFrF3bsoYzxPUtgmPsqJF3936gcfmxQokebGv5nELgqBIMzWTUnUhwtDI+LcrKpR5FGbAuurTal7wzXBjUHeDSt1VAL79/ujN6cF/nLZQKv9EUJS5zFlHjVxEpquhurLVuMWJQZOoTNgFTy8Yeckx/khb3PFJlO1CO+y6L3L15yEK0v0vM5l9Sh2Bez+/yRrG/HY+SjvGfPeWymdfeG0bFn5pqlzHyL+meZ+HA83u3K4NPuojBCsY/Q/m/nrmvrvy+WQCU/dLFUe/lhEneGrpE4ArGU+MnJ+guOES7OlLfAep9Vpp8xdDcX6/Vr52QUmH4+JOWllgqJGsAl+6IBNF00IJq09irDxTGdZyov2p5jDOTHhrQqxZ2qE54LtS+ct9488ntW1JMpuyqwzQyQ9VXeSOlLzdfDWRa7lHqEpDWTAE7CD0/E14EqD9E9q4dgBHfTwbDEl17WTFsYqFybyqTg6jwJYLaIsrOFBYdsNfNWReYHY7RHlvQUWQHbs2moHUKAAqXnBJnNrp1nYN3BWqXsyvhjtZUtKrX2tNWDSpW736xrKitPUHzRNaPsa1qNHip22g4OvkIa1q62lVP/0/EmPuOcbOAAA=';
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
        const hasDefault = column.default !== null && column.default !== undefined && column.default !== '';
        const defaultMarkup = hasDefault ? `<div class="null-tag">DEFAULT ${escapeHTML(column.default)}</div>` : '';
        const generatedMarkup = column.generated ? `<div class="null-tag">GERADO: ${escapeHTML(column.generated)}</div>` : '';
        const accessMarkup = column.rbac ? `<div class="field-gov"><span>RBAC: ${escapeHTML(column.rbac)}</span></div>` : '';
        return `<tr><td><div class="col-name">${escapeHTML(column.name)}</div>${governance ? `<div class="field-gov">${governance}</div>` : ''}${accessMarkup}</td><td><span class="type-code">${escapeHTML(column.type)}</span></td><td><div class="key-tags">${keys || '—'}</div></td><td><span class="null-tag">${column.not_null ? 'NOT NULL' : 'NULL'}</span>${defaultMarkup}${generatedMarkup}${column.auto_increment ? '<div class="null-tag">AUTO_INCREMENT</div>' : ''}</td><td class="col-desc">${escapeHTML(column.description)}</td></tr>`;
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
