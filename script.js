// Mobile menu toggle function
function toggleMobileMenu() {
    console.log('toggleMobileMenu called');
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');

    console.log('navLinks element:', navLinks);
    console.log('toggle element:', toggle);

    if (!navLinks || !toggle) {
        console.error('Navigation elements not found');
        return;
    }

    const isActive = navLinks.classList.contains('active');
    console.log('Current active state:', isActive);

    if (isActive) {
        // Close menu
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        console.log('Menu closed');
    } else {
        // Open menu
        navLinks.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        console.log('Menu opened');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navMenu = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && toggle) {
                navMenu.classList.remove('active');
                toggle.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
                console.log('Menu closed by link click');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navMenu = document.getElementById('navLinks');
        const toggle = document.querySelector('.mobile-menu-toggle');

        if (navMenu && navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !toggle.contains(e.target)) {
            navMenu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Menu closed by outside click');
        }
    });
});

// Leaderboard data from paper results
// Table shows: Neutral-Text (Exp1), Emotion-Matched (Exp2), Emotion-Mismatched (Exp3), Paralinguistic (Exp4)
// Values in parentheses are prediction marginal distribution baselines
const leaderboardData = [
    {
        model: "Gemini 2.5 Pro",
        type: "proprietary",
        exp1_text: { accuracy: 96.6, baseline: 96.6 },
        exp1_audio: { accuracy: 34.9, baseline: 12.8 },
        exp1_both: { accuracy: 41.7, baseline: 12.9 },
        exp2_text: { accuracy: 38.8, baseline: 15.7 },
        exp2_audio: { accuracy: 37.6, baseline: 16.9 },
        exp2_both: { accuracy: 40.2, baseline: 14.3 },
        exp3_text: { accuracy: 31.8, baseline: 10.0 },
        exp3_audio: { accuracy: 36.9, baseline: 22.5 },
        exp3_both: { accuracy: 42.6, baseline: 23.3 },
        exp4_audio: { accuracy: 15.7, baseline: 9.3 }
    },
    {
        model: "Qwen3-Omni-30B",
        type: "opensource",
        exp1_text: { accuracy: 85.4, baseline: 84.0 },
        exp1_audio: { accuracy: 29.3, baseline: 11.3 },
        exp1_both: { accuracy: 25.3, baseline: 11.8 },
        exp2_text: { accuracy: 38.7, baseline: 11.7 },
        exp2_audio: { accuracy: 42.4, baseline: 15.8 },
        exp2_both: { accuracy: 43.1, baseline: 15.5 },
        exp3_text: { accuracy: 34.6, baseline: 12.2 },
        exp3_audio: { accuracy: 37.4, baseline: 26.7 },
        exp3_both: { accuracy: 39.1, baseline: 25.2 },
        exp4_audio: { accuracy: 21.0, baseline: 12.6 }
    },
    {
        model: "Qwen2.5-Omni-7B",
        type: "opensource",
        exp1_text: { accuracy: 85.4, baseline: 84.1 },
        exp1_audio: { accuracy: 34.0, baseline: 10.9 },
        exp1_both: { accuracy: 19.8, baseline: 11.8 },
        exp2_text: { accuracy: 36.4, baseline: 15.7 },
        exp2_audio: { accuracy: 36.6, baseline: 14.1 },
        exp2_both: { accuracy: 38.6, baseline: 15.7 },
        exp3_text: { accuracy: 34.0, baseline: 13.5 },
        exp3_audio: { accuracy: 38.5, baseline: 29.5 },
        exp3_both: { accuracy: 39.1, baseline: 23.6 },
        exp4_audio: { accuracy: 22.7, baseline: 11.4 }
    },
    {
        model: "Gemini 2.5 Flash",
        type: "proprietary",
        exp1_text: { accuracy: 82.5, baseline: 81.5 },
        exp1_audio: { accuracy: 25.6, baseline: 10.7 },
        exp1_both: { accuracy: 24.6, baseline: 11.0 },
        exp2_text: { accuracy: 36.6, baseline: 14.3 },
        exp2_audio: { accuracy: 30.7, baseline: 12.3 },
        exp2_both: { accuracy: 38.9, baseline: 14.1 },
        exp3_text: { accuracy: 33.1, baseline: 10.1 },
        exp3_audio: { accuracy: 35.8, baseline: 15.5 },
        exp3_both: { accuracy: 38.0, baseline: 18.5 },
        exp4_audio: { accuracy: 18.0, baseline: 12.0 }
    },
    {
        model: "Baichuan-Omni-1.5",
        type: "opensource",
        exp1_text: { accuracy: 81.2, baseline: 79.6 },
        exp1_audio: { accuracy: 16.5, baseline: 11.5 },
        exp1_both: { accuracy: 15.2, baseline: 12.1 },
        exp2_text: { accuracy: 31.0, baseline: 15.9 },
        exp2_audio: { accuracy: 36.0, baseline: 15.6 },
        exp2_both: { accuracy: 36.0, baseline: 17.8 },
        exp3_text: { accuracy: 31.0, baseline: 27.5 },
        exp3_audio: { accuracy: 36.0, baseline: 31.0 },
        exp3_both: { accuracy: 36.0, baseline: 32.0 },
        exp4_audio: { accuracy: 22.7, baseline: 11.5 }
    },
    {
        model: "Qwen3-Instruct",
        type: "opensource",
        exp1_text: { accuracy: 66.6, baseline: 65.0 },
        exp1_audio: null,
        exp1_both: null,
        exp2_text: { accuracy: 33.5, baseline: 12.4 },
        exp2_audio: null,
        exp2_both: null,
        exp3_text: { accuracy: 38.0, baseline: 29.8 },
        exp3_audio: null,
        exp3_both: null,
        exp4_audio: null
    },
    {
        model: "Gemini 3 Pro",
        type: "proprietary",
        exp1_text: { accuracy: 84.5, baseline: 78.6 },
        exp1_audio: { accuracy: 15.5, uar: 14.6, macro_f1: 12.5, baseline: 13.8 },
        exp1_both: { accuracy: 15.4, uar: 14.5, macro_f1: 10.3, baseline: 13.5 },
        exp2_text: { accuracy: 39.1, uar: 25.0, macro_f1: 23.5, baseline: 16.0 },
        exp2_audio: { accuracy: 17.8, uar: 7.1, macro_f1: 6.4, baseline: 16.2 },
        exp2_both: { accuracy: 35.4, uar: 22.9, macro_f1: 20.2, baseline: 14.6 },
        exp3_text: { accuracy: 24.8, uar: 22.1, macro_f1: 17.2, baseline: 12.1 },
        exp3_audio: { accuracy: 13.9, uar: 12.7, macro_f1: 7.6, baseline: 10.6 },
        exp3_both: { accuracy: 22.6, uar: 17.1, macro_f1: 9.2, baseline: 18.2 },
        exp4_audio: { accuracy: 10.6, uar: 11.2, macro_f1: 7.8, baseline: 10.1 }
    },
    {
        model: "Gemini 3 Flash",
        type: "proprietary",
        exp1_text: { accuracy: 87.2, baseline: 81.4 },
        exp1_audio: { accuracy: 30.4, uar: 31.5, macro_f1: 28.4, baseline: 13.6 },
        exp1_both: { accuracy: 35.4, uar: 38.5, macro_f1: 34.4, baseline: 13.4 },
        exp2_text: { accuracy: 29.4, uar: 23.2, macro_f1: 14.9, baseline: 14.1 },
        exp2_audio: { accuracy: 38.5, uar: 20.4, macro_f1: 20.3, baseline: 18.2 },
        exp2_both: { accuracy: 39.9, uar: 23.9, macro_f1: 22.0, baseline: 16.3 },
        exp3_text: { accuracy: 27.6, uar: 16.4, macro_f1: 17.2, baseline: 13.9 },
        exp3_audio: { accuracy: 21.5, uar: 13.6, macro_f1: 7.4, baseline: 18.7 },
        exp3_both: { accuracy: 28.3, uar: 19.9, macro_f1: 10.3, baseline: 22.8 },
        exp4_audio: { accuracy: 15.9, uar: 23.4, macro_f1: 11.4, baseline: 9.3 }
    },
    {
        model: "Gemini 3.1 Flash Lite",
        type: "proprietary",
        exp1_text: { accuracy: 88.0, baseline: 82.1 },
        exp1_audio: { accuracy: 30.8, uar: 28.7, macro_f1: 24.7, baseline: 13.9 },
        exp1_both: { accuracy: 24.0, uar: 23.2, macro_f1: 18.8, baseline: 13.4 },
        exp2_text: { accuracy: 30.0, uar: 29.3, macro_f1: 20.3, baseline: 12.0 },
        exp2_audio: { accuracy: 38.9, uar: 24.1, macro_f1: 23.3, baseline: 16.6 },
        exp2_both: { accuracy: 42.1, uar: 30.7, macro_f1: 28.4, baseline: 15.3 },
        exp3_text: { accuracy: 20.7, uar: 12.5, macro_f1: 13.9, baseline: 10.7 },
        exp3_audio: { accuracy: 11.0, uar: 7.9, macro_f1: 5.3, baseline: 9.4 },
        exp3_both: { accuracy: 29.4, uar: 18.4, macro_f1: 9.5, baseline: 22.0 },
        exp4_audio: { accuracy: 20.5, uar: 28.5, macro_f1: 18.6, baseline: 11.4 }
    },
    {
        model: "Qwen3.5-Omni-Flash",
        type: "proprietary",
        exp1_text: { accuracy: 89.0, baseline: 84.4 },
        exp1_audio: { accuracy: 26.3, uar: 25.5, macro_f1: 24.0, baseline: 13.4 },
        exp1_both: { accuracy: 25.4, uar: 24.7, macro_f1: 23.2, baseline: 13.4 },
        exp2_text: { accuracy: 30.2, uar: 16.8, macro_f1: 16.0, baseline: 15.5 },
        exp2_audio: { accuracy: 43.3, uar: 23.5, macro_f1: 22.9, baseline: 17.6 },
        exp2_both: { accuracy: 44.0, uar: 25.7, macro_f1: 25.8, baseline: 17.7 },
        exp3_text: { accuracy: 35.1, uar: 19.2, macro_f1: 18.4, baseline: 19.7 },
        exp3_audio: { accuracy: 17.7, uar: 11.8, macro_f1: 7.3, baseline: 13.9 },
        exp3_both: { accuracy: 19.5, uar: 12.8, macro_f1: 7.6, baseline: 15.5 },
        exp4_audio: { accuracy: 14.9, uar: 27.7, macro_f1: 13.1, baseline: 8.4 }
    },
    {
        model: "Qwen3.5-Omni-Plus",
        type: "proprietary",
        exp1_text: { accuracy: 89.8, baseline: 84.7 },
        exp1_audio: { accuracy: 38.7, uar: 37.6, macro_f1: 39.4, baseline: 13.6 },
        exp1_both: { accuracy: 38.4, uar: 37.1, macro_f1: 39.5, baseline: 13.6 },
        exp2_text: { accuracy: 29.4, uar: 22.8, macro_f1: 16.6, baseline: 15.7 },
        exp2_audio: { accuracy: 44.1, uar: 26.5, macro_f1: 24.7, baseline: 17.6 },
        exp2_both: { accuracy: 44.9, uar: 26.6, macro_f1: 25.2, baseline: 17.7 },
        exp3_text: { accuracy: 33.6, uar: 18.7, macro_f1: 18.8, baseline: 17.1 },
        exp3_audio: { accuracy: 27.2, uar: 16.9, macro_f1: 8.4, baseline: 22.8 },
        exp3_both: { accuracy: 24.0, uar: 14.9, macro_f1: 7.7, baseline: 20.6 },
        exp4_audio: { accuracy: 17.5, uar: 28.7, macro_f1: 13.5, baseline: 9.3 }
    },
    {
        model: "Uniform Guess",
        type: "baseline",
        exp1_text: { accuracy: 12.5, baseline: 12.5 },
        exp1_audio: { accuracy: 12.5, baseline: 12.5 },
        exp1_both: { accuracy: 12.5, baseline: 12.5 },
        exp2_text: { accuracy: 6.7, baseline: 6.7 },
        exp2_audio: { accuracy: 6.7, baseline: 6.7 },
        exp2_both: { accuracy: 6.7, baseline: 6.7 },
        exp3_text: { accuracy: 10.0, baseline: 10.0 },
        exp3_audio: { accuracy: 10.0, baseline: 10.0 },
        exp3_both: { accuracy: 10.0, baseline: 10.0 },
        exp4_audio: { accuracy: 12.5, baseline: 12.5 }
    },
    {
        model: "Majority Guess",
        type: "baseline",
        exp1_text: { accuracy: 100.0, baseline: 100.0 },
        exp1_audio: { accuracy: 16.9, baseline: 16.9 },
        exp1_both: { accuracy: 16.9, baseline: 16.9 },
        exp2_text: { accuracy: 26.5, baseline: 26.5 },
        exp2_audio: { accuracy: 26.5, baseline: 26.5 },
        exp2_both: { accuracy: 26.5, baseline: 26.5 },
        exp3_text: { accuracy: 39.0, baseline: 39.0 },
        exp3_audio: { accuracy: 39.0, baseline: 39.0 },
        exp3_both: { accuracy: 39.0, baseline: 39.0 },
        exp4_audio: { accuracy: 32.6, baseline: 32.6 }
    }
];

// State management
let currentSort = { column: 'avg', ascending: false };
let currentMetric = 'accuracy';
let currentExperiment = 'all';

// Calculate average score for a model (Overall Average from paper)
// Only includes audio and text+audio results (excludes text-only)
function calculateAverage(model, metric) {
    // Overall Average = mean of audio and text+audio across all 4 conditions (7 modalities total)
    const experiments = ['exp1_audio', 'exp1_both',
        'exp2_audio', 'exp2_both',
        'exp3_audio', 'exp3_both',
        'exp4_audio'];

    let sum = 0;
    let count = 0;

    experiments.forEach(exp => {
        if (model[exp] && model[exp] !== null && model[exp][metric] !== undefined && model[exp][metric] !== null) {
            sum += model[exp][metric];
            count++;
        }
    });

    return count > 0 ? sum / count : null;
}

// Get score color class
function getScoreClass(score) {
    if (score >= 70) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
}

// Get rank badge HTML
function getRankBadge(rank) {
    const classes = ['rank-1', 'rank-2', 'rank-3', 'rank-other'];
    const className = rank <= 3 ? classes[rank - 1] : classes[3];
    return `<span class="rank-badge ${className}">${rank}</span>`;
}

// Get model type badge
function getTypeBadge(type) {
    const typeMap = {
        'proprietary': { class: 'type-proprietary', label: 'Proprietary' },
        'opensource': { class: 'type-opensource', label: 'Open Source' },
        'baseline': { class: 'type-baseline', label: 'Baseline' }
    };
    const info = typeMap[type] || { class: '', label: type };
    return `<span class="model-type ${info.class}">${info.label}</span>`;
}

// Format score
function formatScore(score) {
    return score !== undefined && score !== null ? score.toFixed(1) : 'N/A';
}

// Get the "Overall Average" cell HTML (null when the metric is unavailable for this model)
function getAverageCell(avg) {
    if (avg === null || avg === undefined) {
        return '<td class="score-na">--</td>';
    }
    return `<td class="score ${getScoreClass(avg)}">${formatScore(avg)}</td>`;
}

// Get score cell HTML
function getScoreCell(model, exp, metric) {
    if (!model[exp] || model[exp] === null || model[exp][metric] === undefined) {
        return '<td class="score-na">--</td>';
    }
    const score = model[exp][metric];
    return `<td class="score ${getScoreClass(score)}">${formatScore(score)}</td>`;
}

// Filter and sort data
function getFilteredData() {
    let filtered = [...leaderboardData];

    // Calculate averages for each model
    filtered = filtered.map(model => ({
        ...model,
        average: calculateAverage(model, currentMetric)
    }));

    // Sort by current column
    filtered.sort((a, b) => {
        if (currentSort.column === 'model') {
            const aVal = a.model.toLowerCase();
            const bVal = b.model.toLowerCase();
            return currentSort.ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        if (currentSort.column === 'type') {
            const aVal = a.type.toLowerCase();
            const bVal = b.type.toLowerCase();
            return currentSort.ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }

        // Numeric columns (Overall Average or an experiment cell).
        // Missing values (metric unavailable for this model) always sort to the
        // bottom, regardless of sort direction.
        let aVal, bVal;
        if (currentSort.column === 'avg') {
            aVal = a.average;
            bVal = b.average;
        } else {
            aVal = a[currentSort.column] ? a[currentSort.column][currentMetric] : null;
            bVal = b[currentSort.column] ? b[currentSort.column][currentMetric] : null;
        }

        const aMissing = aVal === null || aVal === undefined;
        const bMissing = bVal === null || bVal === undefined;
        if (aMissing && bMissing) return 0;
        if (aMissing) return 1;
        if (bMissing) return -1;

        return currentSort.ascending ? aVal - bVal : bVal - aVal;
    });

    return filtered;
}

// Render leaderboard
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    const data = getFilteredData();

    // Apply search filter
    const searchTerm = document.getElementById('modelSearch').value.toLowerCase();
    const filteredData = searchTerm
        ? data.filter(model => model.model.toLowerCase().includes(searchTerm))
        : data;

    // Separate baseline models from ranked models
    const rankedModels = filteredData.filter(model => model.type !== 'baseline');
    const baselineModels = filteredData.filter(model => model.type === 'baseline');

    // Render ranked models
    const rankedHTML = rankedModels.map((model, index) => {
        const rank = index + 1;
        return `
            <tr>
                <td>${getRankBadge(rank)}</td>
                <td class="model-name">${model.model}</td>
                <td>${getTypeBadge(model.type)}</td>
                ${getAverageCell(model.average)}
                ${getScoreCell(model, 'exp1_text', currentMetric)}
                ${getScoreCell(model, 'exp1_audio', currentMetric)}
                ${getScoreCell(model, 'exp1_both', currentMetric)}
                ${getScoreCell(model, 'exp2_text', currentMetric)}
                ${getScoreCell(model, 'exp2_audio', currentMetric)}
                ${getScoreCell(model, 'exp2_both', currentMetric)}
                ${getScoreCell(model, 'exp3_text', currentMetric)}
                ${getScoreCell(model, 'exp3_audio', currentMetric)}
                ${getScoreCell(model, 'exp3_both', currentMetric)}
                ${getScoreCell(model, 'exp4_audio', currentMetric)}
            </tr>
        `;
    }).join('');

    // Render baseline models without rank
    const baselineHTML = baselineModels.map((model) => {
        return `
            <tr class="baseline-row">
                <td><span class="baseline-label">Baseline</span></td>
                <td class="model-name">${model.model}</td>
                <td>${getTypeBadge(model.type)}</td>
                ${getAverageCell(model.average)}
                ${getScoreCell(model, 'exp1_text', currentMetric)}
                ${getScoreCell(model, 'exp1_audio', currentMetric)}
                ${getScoreCell(model, 'exp1_both', currentMetric)}
                ${getScoreCell(model, 'exp2_text', currentMetric)}
                ${getScoreCell(model, 'exp2_audio', currentMetric)}
                ${getScoreCell(model, 'exp2_both', currentMetric)}
                ${getScoreCell(model, 'exp3_text', currentMetric)}
                ${getScoreCell(model, 'exp3_audio', currentMetric)}
                ${getScoreCell(model, 'exp3_both', currentMetric)}
                ${getScoreCell(model, 'exp4_audio', currentMetric)}
            </tr>
        `;
    }).join('');

    tbody.innerHTML = rankedHTML + baselineHTML;

    // Update sort indicators
    document.querySelectorAll('.leaderboard-table th').forEach(th => {
        th.classList.remove('active');
        const icon = th.querySelector('i');
        if (icon) icon.remove();
    });

    const activeHeader = document.querySelector(`[data-sort="${currentSort.column}"]`);
    if (activeHeader) {
        activeHeader.classList.add('active');
        const icon = document.createElement('i');
        icon.className = currentSort.ascending ? 'fas fa-sort-up' : 'fas fa-sort-down';
        activeHeader.appendChild(document.createTextNode(' '));
        activeHeader.appendChild(icon);
    }
}

// Handle column header click
function handleSort(column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = false;
    }
    renderLeaderboard();
}

// Handle metric filter change
function handleMetricChange(e) {
    currentMetric = e.target.value;
    renderLeaderboard();
}

// Handle experiment filter change
function handleExperimentChange(e) {
    currentExperiment = e.target.value;

    // Show/hide columns based on experiment filter
    const table = document.getElementById('leaderboardTable');
    const headers = table.querySelectorAll('th');
    const rows = table.querySelectorAll('tbody tr');

    // Column indices for each experiment
    const columnMap = {
        'all': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        'exp1': [0, 1, 2, 3, 4, 5, 6],
        'exp2': [0, 1, 2, 3, 7, 8, 9],
        'exp3': [0, 1, 2, 3, 10, 11, 12],
        'exp4': [0, 1, 2, 3, 13]
    };

    const visibleColumns = columnMap[currentExperiment] || columnMap['all'];

    // Update header visibility
    headers.forEach((header, index) => {
        header.style.display = visibleColumns.includes(index) ? '' : 'none';
    });

    // Update row cell visibility
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            cell.style.display = visibleColumns.includes(index) ? '' : 'none';
        });
    });
}

// Handle search
function handleSearch() {
    renderLeaderboard();
}

// Copy BibTeX to clipboard
function copyBibtex() {
    const bibtex = document.querySelector('.citation-box code').textContent;
    navigator.clipboard.writeText(bibtex).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render initial leaderboard
    renderLeaderboard();

    // Add event listeners
    document.querySelectorAll('.leaderboard-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => handleSort(th.dataset.sort));
    });

    document.getElementById('metricFilter').addEventListener('change', handleMetricChange);
    document.getElementById('experimentFilter').addEventListener('change', handleExperimentChange);
    document.getElementById('modelSearch').addEventListener('input', handleSearch);
});

