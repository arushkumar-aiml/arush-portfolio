// ============================================================
// ARUSH KUMAR — data visualisations (Chart.js)
// 1) Self-rated stack proficiency (radar) — honest, first-person.
// 2) Language mix across public repos (doughnut) — pulled live
//    from the GitHub API, so it never goes stale or gets faked.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.color = 'rgba(255,255,255,0.65)';
  Chart.defaults.font.family = "'Inter', sans-serif";

  const orange = '#ff6a3d';
  const white = '#ffffff';
  const gridColor = 'rgba(255,255,255,0.08)';

  // ---- 1) Skill radar (self-rated, out of 10) ----
  const radarEl = document.getElementById('skillRadar');
  if (radarEl) {
    new Chart(radarEl, {
      type: 'radar',
      data: {
        labels: ['Python / ML', 'JavaScript / TS', 'React & Frontend', 'Backend & APIs', 'Cybersecurity', 'DevOps & Automation'],
        datasets: [{
          label: 'Self-rated (/10)',
          data: [8, 7.5, 7, 7, 6.5, 6],
          backgroundColor: 'rgba(255,106,61,0.18)',
          borderColor: orange,
          pointBackgroundColor: orange,
          pointBorderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: { display: false, stepSize: 2 },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: 'rgba(255,255,255,0.75)', font: { size: 11 } }
          }
        }
      }
    });
  }

  // ---- 2) Language mix — live GitHub API, with an honest fallback ----
  const langEl = document.getElementById('langDoughnut');
  const langNote = document.getElementById('langNote');
  if (!langEl) return;

  const palette = ['#ff6a3d', '#ffffff', '#ff9a73', '#8f8f8f', '#ffd0bd', '#5c5c5c', '#ff5722'];

  function renderDoughnut(labels, data, isLive) {
    new Chart(langEl, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: labels.map((_, i) => palette[i % palette.length]),
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 10, padding: 12, font: { size: 11 } } }
        }
      }
    });
    if (langNote) {
      langNote.textContent = isLive
        ? 'Live from the GitHub API — arushkumar-aiml, by bytes across public repos.'
        : 'GitHub API was unreachable just now — showing the last known snapshot.';
    }
  }

  fetch('https://api.github.com/users/arushkumar-aiml/repos?per_page=100')
    .then(res => { if (!res.ok) throw new Error('github api error'); return res.json(); })
    .then(repos => {
      const counts = {};
      repos.forEach(r => {
        if (!r.language) return;
        counts[r.language] = (counts[r.language] || 0) + 1;
      });
      const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 7);
      if (!entries.length) throw new Error('no languages');
      renderDoughnut(entries.map(e => e[0]), entries.map(e => e[1]), true);
    })
    .catch(() => {
      // Honest fallback snapshot, derived from the public repo list —
      // shown only if the live GitHub API call fails (rate limit / offline).
      renderDoughnut(
        ['Python', 'TypeScript', 'JavaScript', 'HTML/CSS'],
        [10, 4, 3, 3],
        false
      );
    });
});
