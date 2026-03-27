/* ============================================
   Gallery Music Centre — Content Loader
   Fetches JSON data files and renders dynamic
   content sections. Edit content in _data/.
   ============================================ */

(function () {
  const DATA = '_data/';

  function fetchJSON(file) {
    return fetch(DATA + file).then(function (r) {
      if (!r.ok) throw new Error('Could not load ' + file);
      return r.json();
    });
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* --- Term Dates --- */
  function renderTermDates(data) {
    var tbody = document.getElementById('term-dates-body');
    var noteEl = document.getElementById('term-dates-note');
    if (tbody && data.terms) {
      tbody.innerHTML = data.terms.map(function (t) {
        return '<tr><td>' + escapeHTML(t.name) + '</td><td>' + escapeHTML(t.lessons) + '</td><td>' + escapeHTML(t.dates) + '</td></tr>';
      }).join('');
    }
    if (noteEl && data.note) {
      noteEl.textContent = data.note;
    }
  }

  /* --- Testimonials --- */
  function renderTestimonials(data) {
    var container = document.getElementById('testimonials-container');
    if (!container || !data.testimonials) return;
    container.innerHTML = data.testimonials.map(function (t) {
      return '<div class="testimonial"><p>' + escapeHTML(t.quote) + '</p><span class="testimonial__author">&mdash; ' + escapeHTML(t.author) + '</span></div>';
    }).join('');
  }

  /* --- Teachers --- */
  function renderTeachers(data) {
    var container = document.getElementById('teachers-grid');
    if (!container || !data.teachers) return;
    container.innerHTML = data.teachers.map(function (t) {
      return '<div class="person-card"><h3>' + escapeHTML(t.name) + '</h3><div class="person-card__role">' + escapeHTML(t.role) + '</div>' + (t.bio ? '<p>' + escapeHTML(t.bio) + '</p>' : '') + '</div>';
    }).join('');
  }

  /* --- Committee --- */
  function renderCommittee(data) {
    var container = document.getElementById('committee-grid');
    if (!container || !data.committee) return;
    container.innerHTML = data.committee.map(function (m) {
      return '<div class="person-card"><h3>' + escapeHTML(m.name) + '</h3><div class="person-card__role">' + escapeHTML(m.role) + '</div>' + (m.bio ? '<p>' + escapeHTML(m.bio) + '</p>' : '') + '</div>';
    }).join('');
  }

  /* --- Instrument Cards (home page — linked, summary text, featured only) --- */
  function renderHomeInstruments(data) {
    var container = document.getElementById('home-instruments');
    if (!container || !data.instruments) return;
    var featured = data.instruments.filter(function (i) { return i.show_on_home; });
    container.innerHTML = featured.map(function (i) {
      return '<a href="classes.html" class="card' + (i.free ? ' card--free' : '') + '"><div class="card__icon">' + i.emoji + '</div><h3>' + escapeHTML(i.name) + '</h3><p>' + escapeHTML(i.summary) + '</p><span class="card__tag">' + escapeHTML(i.tag) + '</span></a>';
    }).join('');
  }

  /* --- Instrument Cards (classes page — full descriptions, all instruments) --- */
  function renderClassInstruments(data) {
    var container = document.getElementById('class-instruments');
    if (!container || !data.instruments) return;
    container.innerHTML = data.instruments.map(function (i) {
      var orchestraLink = i.name === 'Orchestra' ? ' <a href="orchestra.html">Learn more about our community orchestra &rarr;</a>' : '';
      return '<div class="card' + (i.free ? ' card--free' : '') + '"><div class="card__icon">' + i.emoji + '</div><h3>' + escapeHTML(i.name) + '</h3><p>' + escapeHTML(i.description) + orchestraLink + '</p><span class="card__tag">' + escapeHTML(i.tag) + '</span></div>';
    }).join('');
  }

  /* --- Stat Cards (home page) --- */
  function renderStats(data) {
    var container = document.getElementById('key-stats');
    if (!container || !data.stats) return;
    container.innerHTML = data.stats.map(function (s) {
      return '<div class="stat-card"><span class="stat-card__value">' + escapeHTML(s.value) + '</span><span class="stat-card__label">' + escapeHTML(s.label) + '</span></div>';
    }).join('');
    if (data.clubhub_url) {
      var clubhubBtn = document.querySelector('.clubhub-banner .btn');
      if (clubhubBtn) clubhubBtn.href = data.clubhub_url;
    }
  }

  /* --- Orchestra Details --- */
  function renderOrchestraDetails(data) {
    var list = document.getElementById('orchestra-details-list');
    if (!list) return;
    var fields = ['when', 'where', 'cost', 'bring', 'experience'];
    var labels = { when: 'When', where: 'Where', cost: 'Cost', bring: 'Bring', experience: 'Experience' };
    list.innerHTML = fields.map(function (f) {
      if (!data[f]) return '';
      return '<li><strong>' + labels[f] + '</strong><span>' + escapeHTML(data[f]) + '</span></li>';
    }).join('');
    var contactNote = document.getElementById('orchestra-contact-note');
    if (contactNote && data.contact_note) {
      contactNote.textContent = data.contact_note;
    }
  }

  /* --- FAQs --- */
  function renderFAQs(data) {
    var container = document.getElementById('faq-list');
    if (!container || !data.faqs) return;
    container.innerHTML = data.faqs.map(function (f) {
      return '<details><summary>' + escapeHTML(f.question) + '</summary><div class="faq__answer"><p>' + escapeHTML(f.answer) + '</p></div></details>';
    }).join('');
  }

  /* --- Init: only load what the current page needs --- */
  document.addEventListener('DOMContentLoaded', function () {
    var needs = {
      termDates:          !!(document.getElementById('term-dates-body') || document.getElementById('term-dates-note')),
      testimonials:       !!document.getElementById('testimonials-container'),
      teachers:           !!document.getElementById('teachers-grid'),
      committee:          !!document.getElementById('committee-grid'),
      homeInstruments:    !!document.getElementById('home-instruments'),
      classInstruments:   !!document.getElementById('class-instruments'),
      faqs:               !!document.getElementById('faq-list'),
      stats:              !!document.getElementById('key-stats'),
      orchestraDetails:   !!document.getElementById('orchestra-details-list')
    };

    if (needs.termDates)        fetchJSON('term-dates.json').then(renderTermDates).catch(console.error);
    if (needs.testimonials)     fetchJSON('testimonials.json').then(renderTestimonials).catch(console.error);
    if (needs.teachers)         fetchJSON('teachers.json').then(renderTeachers).catch(console.error);
    if (needs.committee)        fetchJSON('committee.json').then(renderCommittee).catch(console.error);
    if (needs.faqs)             fetchJSON('faqs.json').then(renderFAQs).catch(console.error);
    if (needs.stats)            fetchJSON('site-settings.json').then(renderStats).catch(console.error);
    if (needs.orchestraDetails) fetchJSON('orchestra-details.json').then(renderOrchestraDetails).catch(console.error);
    if (needs.homeInstruments || needs.classInstruments) {
      fetchJSON('instruments.json').then(function (data) {
        if (needs.homeInstruments)  renderHomeInstruments(data);
        if (needs.classInstruments) renderClassInstruments(data);
      }).catch(console.error);
    }
  });
})();
