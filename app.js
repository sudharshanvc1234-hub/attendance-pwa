const SUBJECTS_KEY = 'attendance_subjects';
const TARGET_KEY = 'attendance_target';
const CONFLICTS_KEY = 'attendance_conflicts';
const LOGS_KEY = 'attendance_logs';

const DEFAULT_SUBJECTS = [
    { code: '24DTK47', name: 'Design Thinking', present: 6, absent: 3, remaining: 12 },
    { code: '24CSK42', name: 'OOP using Java', present: 15, absent: 6, remaining: 23 },
    { code: '24CSLK42', name: 'OOP Java Lab', present: 7, absent: 0, remaining: 28 },
    { code: '24CSK43', name: 'Operating Systems', present: 16, absent: 4, remaining: 22 },
    { code: '24CSLK43', name: 'Linux OS Lab', present: 8, absent: 2, remaining: 29 },
    { code: '24CSK44', name: 'DBMS', present: 17, absent: 7, remaining: 23 },
    { code: '24CSLK44', name: 'DBMS Lab', present: 7, absent: 0, remaining: 33 },
    { code: '24MAC41', name: 'DMGT', present: 19, absent: 1, remaining: 22 },
    { code: '24CSE452', name: 'Cloud Computing', present: 16, absent: 5, remaining: 25 },
    { code: '24CSE463', name: 'Data Vis with Python', present: 10, absent: 1, remaining: 12 },
    { code: '24DMAT41', name: 'DMAT', present: 0, absent: 0, remaining: 0 },
    { code: '24PED40', name: 'Physical Education', present: 0, absent: 0, remaining: 0 },
    { code: '24CSE48', name: 'Mini Project', present: 0, absent: 0, remaining: 0 }
];

const TIMETABLE = {
    Monday: ['24CSK42', '24CSK43', '24CSK44', '24DTK47', '24CSE452', '24CSK44', 'MENTORING'],
    Tuesday: ['24CSK44', '24CSE452', '24CSK42', '24MAC41', '24CSLK43', '24CSLK44'],
    Wednesday: ['24CSK42', '24CSK43', '24MAC41', '24CSE463', '24CSE452', 'LIBRARY'],
    Thursday: ['24CSK43', '24CSLK44', '24CSLK42', '24MAC41', '24CSK42', '24DTK47'],
    Friday: ['24CSE452', '24CSK43', '24CSK44', '24MAC41', '24CSLK43', '24CSLK42'],
    Saturday: ['24DMAT41', '24CSE48', 'NSS', '24PED40']
};

const SEMESTER_START = new Date('2026-02-23');
const SEMESTER_END = new Date('2026-05-30');

const HARD_BLOCKERS = {
    '2026-03-02': { name: 'Holi', type: 'holiday' },
    '2026-03-19': { name: 'Ugadi Festival', type: 'holiday' },
    '2026-03-20': { name: 'Declared Holiday', type: 'holiday' },
    '2026-04-03': { name: 'Good Friday', type: 'holiday' },
    '2026-04-14': { name: 'Dr. Ambedkar Jayanthi', type: 'holiday' },
    '2026-04-20': { name: 'Basava Jayanthi', type: 'holiday' },
    '2026-05-01': { name: 'May Day', type: 'holiday' },
    '2026-05-28': { name: 'Bakrid', type: 'holiday' }
};

const INTERNAL_TESTS = {
    '2026-04-08': { name: '1st Internal', type: 'internal' },
    '2026-04-09': { name: '1st Internal', type: 'internal' },
    '2026-04-10': { name: '1st Internal', type: 'internal' },
    '2026-04-11': { name: '1st Internal', type: 'internal' },
    '2026-04-13': { name: '1st Internal', type: 'internal' },
    '2026-05-19': { name: '2nd Internal', type: 'internal' },
    '2026-05-20': { name: '2nd Internal', type: 'internal' },
    '2026-05-21': { name: '2nd Internal', type: 'internal' },
    '2026-05-22': { name: '2nd Internal', type: 'internal' },
    '2026-05-23': { name: '2nd Internal', type: 'internal' }
};

const AAT_EXAMS = {
    '2026-03-23': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-03-24': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-03-25': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-03-26': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-03-27': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-03-28': { name: 'AAT1', subjects: '24CSK43, 24CSK42, 24MAC41, 24CSE46X, 24CSK44', type: 'aat' },
    '2026-04-27': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-04-28': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-04-29': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-04-30': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-05-01': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-05-02': { name: 'AAT2', subjects: '24CSK43, 24CSK42, 24MAC41', type: 'aat' },
    '2026-05-04': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-05': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-06': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-07': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-08': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-09': { name: 'AAT2', subjects: '24CSE46X, 24CSK44', type: 'aat' },
    '2026-05-11': { name: 'AAT3', subjects: '24CSK42', type: 'aat' },
    '2026-05-12': { name: 'AAT3', subjects: '24CSK42', type: 'aat' },
    '2026-05-13': { name: 'AAT3', subjects: '24CSK42', type: 'aat' },
    '2026-05-14': { name: 'AAT3', subjects: '24CSK42', type: 'aat' },
    '2026-05-15': { name: 'AAT3', subjects: '24CSK42', type: 'aat' },
    '2026-05-16': { name: 'AAT3', subjects: '24CSK42', type: 'aat' }
};

const PROJECT_DEADLINES = {
    '2026-03-09': { name: 'Synopsis Start', type: 'project' },
    '2026-03-14': { name: 'Synopsis End', type: 'project' },
    '2026-03-23': { name: 'Review 1 Start', type: 'project' },
    '2026-03-28': { name: 'Review 1 End', type: 'project' },
    '2026-05-08': { name: 'Mini Project Comp.', type: 'project' },
    '2026-05-11': { name: 'Review 2 Start', type: 'project' },
    '2026-05-16': { name: 'Review 2 End & Report', type: 'project' }
};

const DEPARTMENTAL_EVENTS = {
    '2026-03-06': { name: 'TEDx', type: 'event' },
    '2026-03-07': { name: 'Industrial Visit', type: 'event' },
    '2026-03-08': { name: "Int'l Women's Day", type: 'event' },
    '2026-03-10': { name: 'Guest Talk', type: 'event' },
    '2026-03-12': { name: 'Alumni Talk', type: 'event' },
    '2026-03-14': { name: 'Social Outreach', type: 'event' },
    '2026-03-23': { name: 'Shaheed Hemu Kalani B\'day', type: 'event' },
    '2026-03-24': { name: 'Guest Talk', type: 'event' },
    '2026-03-25': { name: 'Technical Aptitude Test', type: 'event' },
    '2026-03-26': { name: 'QuantumX Day 1', type: 'fest' },
    '2026-03-27': { name: 'QuantumX Day 2', type: 'fest' },
    '2026-03-28': { name: 'QuantumX Day 3', type: 'fest' },
    '2026-04-16': { name: 'Expert Talk', type: 'event' },
    '2026-04-17': { name: 'Alumni Talk', type: 'event' },
    '2026-04-22': { name: 'National Conference', type: 'event' },
    '2026-04-24': { name: 'Coding Contest', type: 'event' },
    '2026-04-25': { name: 'PTM', type: 'event' },
    '2026-04-27': { name: 'Workshop', type: 'event' },
    '2026-04-28': { name: 'Industrial Visit', type: 'event' },
    '2026-04-30': { name: 'Higher Studies Talk', type: 'event' },
    '2026-05-15': { name: 'Technical Aptitude Test', type: 'event' }
};

let subjects = [];
let target = 75;
let conflicts = [];
let logs = {};
let currentMonth = new Date();

function init() {
    loadData();
    renderDate();
    renderTarget();
    renderRiskIndicator();
    renderTodaySchedule();
    renderAllSubjects();
    renderStats();
    renderQuickStats();
    renderCalendar();
    renderEventsCalendar();
    checkAlerts();
    setupEventListeners();
}

function loadData() {
    const stored = localStorage.getItem(SUBJECTS_KEY);
    subjects = stored ? JSON.parse(stored) : [...DEFAULT_SUBJECTS];
    if (!stored) saveSubjects();

    const storedTarget = localStorage.getItem(TARGET_KEY);
    if (storedTarget) target = parseInt(storedTarget);

    const storedConflicts = localStorage.getItem(CONFLICTS_KEY);
    conflicts = storedConflicts ? JSON.parse(storedConflicts) : [];

    const storedLogs = localStorage.getItem(LOGS_KEY);
    logs = storedLogs ? JSON.parse(storedLogs) : {};
}

function saveSubjects() {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(subjects));
}

function saveTarget() {
    localStorage.setItem(TARGET_KEY, target.toString());
}

function saveConflicts() {
    localStorage.setItem(CONFLICTS_KEY, JSON.stringify(conflicts));
}

function saveLogs() {
    localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
}

function renderDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
}

function renderTarget() {
    document.getElementById('targetValue').textContent = target + '%';
    document.getElementById('targetSlider').value = target;
    
    document.querySelectorAll('.presets button').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.target) === target);
    });

    renderAllSubjects();
    renderStats();
    renderQuickStats();
}

function calculatePercentage(subject) {
    const total = subject.present + subject.absent;
    return total === 0 ? 0 : Math.round((subject.present / total) * 100);
}

function calculateRequired(subject) {
    const td = target / 100;
    const total = subject.present + subject.absent;
    return Math.ceil((td * total - subject.present) / (1 - td));
}

function calculateBuffer(subject) {
    const td = target / 100;
    const total = subject.present + subject.absent;
    return Math.floor((subject.present / td) - total);
}

function isHoliday(dateStr) {
    return HARD_BLOCKERS[dateStr] !== undefined;
}

function getEventForDate(dateStr) {
    if (HARD_BLOCKERS[dateStr]) return HARD_BLOCKERS[dateStr];
    if (INTERNAL_TESTS[dateStr]) return INTERNAL_TESTS[dateStr];
    if (AAT_EXAMS[dateStr]) return AAT_EXAMS[dateStr];
    if (PROJECT_DEADLINES[dateStr]) return PROJECT_DEADLINES[dateStr];
    if (DEPARTMENTAL_EVENTS[dateStr]) return DEPARTMENTAL_EVENTS[dateStr];
    return null;
}

function renderRiskIndicator() {
    const day = new Date().getDay();
    const indicator = document.getElementById('riskIndicator');
    if (day === 2 || day === 4) {
        indicator.innerHTML = '<span class="risk-badge show">⚠️ High-Risk Day</span>';
    } else {
        indicator.innerHTML = '';
    }
}

function getTodaySubjects() {
    const todayStr = new Date().toISOString().split('T')[0];
    const event = getEventForDate(todayStr);
    if (event && (event.type === 'holiday' || event.type === 'aat' || event.type === 'internal')) return [];
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return TIMETABLE[days[new Date().getDay()]] || [];
}

function isHoliday(dateStr) {
    return HARD_BLOCKERS[dateStr] !== undefined;
}

function renderTodaySchedule() {
    const container = document.getElementById('todaySubjects');
    const todayStr = new Date().toISOString().split('T')[0];
    const btn = document.getElementById('attendedAllBtn');
    
    const event = getEventForDate(todayStr);
    if (event) {
        const icon = event.type === 'holiday' ? '🏖️' : event.type === 'internal' ? '📝' : event.type === 'aat' ? '🎯' : event.type === 'project' ? '🎓' : event.type === 'event' ? '📅' : '🎉';
        container.innerHTML = `<div class="holiday-message">
            <span class="holiday-icon">${icon}</span>
            <span class="holiday-text">${event.name}</span>
            <span class="holiday-subtext">No Logging Available</span>
        </div>`;
        btn.style.display = 'none';
        return;
    }
    
    btn.style.display = 'block';
    const todayCodes = getTodaySubjects();
    container.innerHTML = '';

    if (todayCodes.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No classes today</p>';
        return;
    }

    todayCodes.forEach(code => {
        if (['MENTORING', 'LIBRARY', 'NSS'].includes(code)) return;
        const subject = subjects.find(s => s.code === code);
        if (!subject) return;

        const div = document.createElement('div');
        div.className = 'today-subject';
        div.innerHTML = `
            <div>
                <div class="subj-name">${subject.name}</div>
                <div class="subj-code">${subject.code}</div>
            </div>
            <div class="subj-status">
                <button class="btn-present" data-code="${subject.code}">✓</button>
                <button class="btn-absent" data-code="${subject.code}">✗</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function markAttendance(code, present) {
    const subject = subjects.find(s => s.code === code);
    if (!subject) return;

    const todayStr = new Date().toISOString().split('T')[0];
    if (!logs[todayStr]) logs[todayStr] = [];
    logs[todayStr].push({ code, present, time: new Date().toISOString() });

    if (present) subject.present++;
    else subject.absent++;
    if (subject.remaining > 0) subject.remaining--;

    saveSubjects();
    saveLogs();
    renderTodaySchedule();
    renderAllSubjects();
    renderStats();
    renderQuickStats();
    renderEventsCalendar();
}

function attendAllToday() {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayCodes = getTodaySubjects();
    
    if (!logs[todayStr]) logs[todayStr] = [];
    
    todayCodes.forEach(code => {
        if (['MENTORING', 'LIBRARY', 'NSS'].includes(code)) return;
        const subject = subjects.find(s => s.code === code);
        if (subject && subject.remaining > 0) {
            subject.present++;
            subject.remaining--;
            logs[todayStr].push({ code, present: true, time: new Date().toISOString() });
        }
    });

    saveSubjects();
    saveLogs();
    renderTodaySchedule();
    renderAllSubjects();
    renderStats();
    renderQuickStats();
    renderEventsCalendar();
}

function renderAllSubjects() {
    const container = document.getElementById('subjectsGrid');
    if (!container) return;
    container.innerHTML = '';

    subjects.forEach(subject => {
        const pct = calculatePercentage(subject);
        const required = calculateRequired(subject);
        const buffer = calculateBuffer(subject);

        let cardClass = 'subject-card';
        let msgClass = '';
        let msg = '';

        if (pct < target) {
            if (required > subject.remaining && subject.remaining > 0) {
                cardClass += ' critical';
                msgClass = 'critical';
                msg = `⚠️ Mathematical Deficit. Need ${required}, have ${subject.remaining}.`;
            } else if (subject.remaining > 0) {
                msgClass = 'warning';
                msg = `Need ${required} more to reach ${target}%`;
            } else {
                msgClass = 'critical';
                msg = `⚠️ No remaining classes. Target: ${target}%`;
            }
        } else {
            cardClass += ' safe';
            msgClass = 'safe';
            msg = `✅ Safe. Skip ${buffer} classes.`;
        }

        const div = document.createElement('div');
        div.className = cardClass;
        div.innerHTML = `
            <div class="subject-header">
                <div>
                    <div class="subject-name">${subject.name}</div>
                    <div class="subject-code">${subject.code}</div>
                </div>
                <div class="subject-percentage ${pct >= target ? 'good' : pct >= target - 10 ? 'warning' : 'critical'}">${pct}%</div>
            </div>
            <div class="subject-stats">
                <span>P: <strong>${subject.present}</strong></span>
                <span>A: <strong>${subject.absent}</strong></span>
                <span>R: <strong>${subject.remaining}</strong></span>
            </div>
            <div class="subject-message ${msgClass}">${msg}</div>
            <div class="subject-actions">
                <button class="btn-present-action" data-code="${subject.code}">+ Present</button>
                <button class="btn-absent-action" data-code="${subject.code}">+ Absent</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderStats() {
    const container = document.getElementById('statsGrid');
    if (!container) return;
    
    let totalP = 0, totalA = 0, totalR = 0, count = 0;
    subjects.forEach(s => {
        if (s.code !== '24PED40' && s.code !== '24CSE48') {
            totalP += s.present;
            totalA += s.absent;
            totalR += s.remaining;
            count++;
        }
    });

    const overall = totalP + totalA > 0 ? Math.round((totalP / (totalP + totalA)) * 100) : 0;
    const safe = subjects.filter(s => calculatePercentage(s) >= target).length;
    const atRisk = count - safe;

    container.innerHTML = `
        <div class="stat-card"><div class="stat-value">${overall}%</div><div class="stat-label">Overall</div></div>
        <div class="stat-card"><div class="stat-value">${totalR}</div><div class="stat-label">Remaining</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--success)">${safe}</div><div class="stat-label">Safe</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--danger)">${atRisk}</div><div class="stat-label">At Risk</div></div>
    `;
}

function renderQuickStats() {
    const container = document.getElementById('quickStats');
    if (!container) return;
    
    let totalP = 0, totalA = 0;
    subjects.forEach(s => {
        if (s.code !== '24PED40' && s.code !== '24CSE48') {
            totalP += s.present;
            totalA += s.absent;
        }
    });

    const overall = totalP + totalA > 0 ? Math.round((totalP / (totalP + totalA)) * 100) : 0;
    const safe = subjects.filter(s => calculatePercentage(s) >= target).length;

    container.innerHTML = `
        <div class="stat-card"><div class="stat-value">${overall}%</div><div class="stat-label">Overall</div></div>
        <div class="stat-card"><div class="stat-value">${safe}</div><div class="stat-label">Safe</div></div>
    `;
}

function checkAlerts() {
    const container = document.getElementById('alerts');
    const today = new Date().toISOString().split('T')[0];
    let alerts = [];

    const event = getEventForDate(today);
    if (event) {
        if (event.type === 'holiday') alerts.push('🏖️ ' + event.name + ' - No Classes');
        else if (event.type === 'internal') alerts.push('📝 ' + event.name + ' in progress!');
        else if (event.type === 'aat') alerts.push('🎯 ' + event.name + ' - Good luck!');
        else if (event.type === 'project') alerts.push('🎓 ' + event.name + ' due!');
        else if (event.type === 'event') alerts.push('📅 ' + event.name);
        else if (event.type === 'fest') alerts.push('🎉 ' + event.name);
    }

    const allEvents = { ...HARD_BLOCKERS, ...INTERNAL_TESTS, ...AAT_EXAMS, ...PROJECT_DEADLINES, ...DEPARTMENTAL_EVENTS };
    Object.keys(allEvents).forEach(d => {
        const diff = (new Date(d) - new Date()) / 86400000;
        if (diff > 0 && diff <= 5) {
            const e = allEvents[d];
            if (e.type === 'internal' || e.type === 'aat') alerts.push('⚠️ ' + e.name + ' in ' + Math.ceil(diff) + ' day(s)');
            if (e.type === 'project') alerts.push('📅 ' + e.name + ' due in ' + Math.ceil(diff) + ' day(s)');
            if (e.type === 'event' || e.type === 'fest') alerts.push('🎪 ' + e.name + ' in ' + Math.ceil(diff) + ' day(s)');
        }
    });

    container.innerHTML = alerts.length ? alerts.map(a => `<div class="alert-amber">${a}</div>`).join('') : '';
}

function renderCalendar() {
    const container = document.getElementById('calendarGrid');
    if (!container) return;
    
    const monthLabel = document.getElementById('currentMonth');
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    monthLabel.textContent = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    container.innerHTML = '';
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(d => {
        container.innerHTML += `<div class="calendar-day-header">${d}</div>`;
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const todayStr = new Date().toISOString().split('T')[0];

    for (let i = firstDay - 1; i >= 0; i--) {
        container.innerHTML += `<div class="calendar-day other-month">${daysInPrev - i}</div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = new Date(year, month, day).toISOString().split('T')[0];
        let classes = 'calendar-day';
        if (dateStr === todayStr) classes += ' today';
        
        const event = getEventForDate(dateStr);
        if (event) {
            classes += ' ' + event.type;
        } else if (conflicts.includes(dateStr)) {
            classes += ' conflict';
        }
        
        let dots = '';
        if (event) {
            dots = `<div class="event-dots"><span class="dot"></span></div>`;
        }
        
        container.innerHTML += `<div class="${classes}" data-date="${dateStr}">${day}${dots}</div>`;
    }

    const remaining = 42 - (firstDay + daysInMonth);
    for (let day = 1; day <= remaining; day++) {
        container.innerHTML += `<div class="calendar-day other-month">${day}</div>`;
    }

    setupCalendarClick();
}

function setupCalendarClick() {
    document.querySelectorAll('.calendar-day[data-date]').forEach(day => {
        day.onclick = () => handleCalendarClick(day.dataset.date);
    });
}

function handleCalendarClick(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const isPast = date < today;
    const event = getEventForDate(dateStr);
    const daySubjects = getSubjectsForDate(dateStr);
    const dayLogs = logs[dateStr] || [];
    
    const dateDisplay = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('dayDetailsTitle').textContent = dateDisplay;
    
    let content = '';
    
    if (event) {
        const icon = event.type === 'holiday' ? '🏖️' : event.type === 'internal' ? '📝' : event.type === 'aat' ? '🎯' : event.type === 'project' ? '🎓' : event.type === 'event' ? '📅' : '🎉';
        content += `<div class="day-event ${event.type}"><span class="icon">${icon}</span> ${event.name}</div>`;
    }
    
    if (daySubjects.length > 0) {
        content += `<div class="day-section"><h4>📚 Classes</h4><div class="day-subjects-list">`;
        daySubjects.forEach(code => {
            const subject = subjects.find(s => s.code === code);
            if (subject) {
                content += `<div class="day-subject-item">${subject.code} - ${subject.name}</div>`;
            }
        });
        content += '</div></div>';
    }
    
    if (dayLogs.length > 0) {
        content += `<div class="day-section"><h4>📋 Attendance Log</h4><div class="day-logs-list">`;
        dayLogs.forEach(log => {
            const subject = subjects.find(s => s.code === log.code);
            const status = log.present ? '✓ Present' : '✗ Absent';
            const statusClass = log.present ? 'present' : 'absent';
            if (subject) {
                content += `<div class="day-log-item ${statusClass}">${subject.code} - ${subject.name}: ${status}</div>`;
            }
        });
        content += '</div></div>';
    }
    
    if (daySubjects.length === 0 && dayLogs.length === 0 && !event) {
        content = '<div class="day-empty">No classes or activities on this day</div>';
    }
    
    document.getElementById('dayDetailsContent').innerHTML = content;
    
    let actionsHtml = '';
    if (!isPast && daySubjects.length > 0 && !event) {
        actionsHtml = `<div class="day-actions">
            <button class="btn-day-action present-all" data-date="${dateStr}">✓ Attended All</button>
            <button class="btn-day-action add-manual" data-date="${dateStr}">+ Add Manual Entry</button>
        </div>`;
    } else if (isPast) {
        actionsHtml = '<div class="day-past-notice">Past date - Cannot modify</div>';
    } else if (event) {
        actionsHtml = '<div class="day-event-notice">No logging on ' + (event.name || 'event') + ' day</div>';
    }
    
    document.getElementById('dayDetailsActions').innerHTML = actionsHtml;
    
    document.getElementById('dayDetailsModal').classList.add('show');
    
    document.querySelector('.close-day-details').onclick = () => {
        document.getElementById('dayDetailsModal').classList.remove('show');
    };
    
    document.querySelector('.present-all')?.addEventListener('click', (e) => {
        const dateKey = e.target.dataset.date;
        logDayAttendance(dateKey);
    });
}

function logDayAttendance(dateStr) {
    const daySubjects = getSubjectsForDate(dateStr);
    if (!logs[dateStr]) logs[dateStr] = [];
    
    daySubjects.forEach(code => {
        const subject = subjects.find(s => s.code === code);
        if (subject && subject.remaining > 0) {
            subject.present++;
            subject.remaining--;
            logs[dateStr].push({ code, present: true, time: new Date().toISOString() });
        }
    });
    
    saveSubjects();
    saveLogs();
    renderTodaySchedule();
    renderAllSubjects();
    renderStats();
    renderQuickStats();
    renderEventsCalendar();
    renderCalendar();
    document.getElementById('dayDetailsModal').classList.remove('show');
}

function getSubjectsForDate(dateStr) {
    const date = new Date(dateStr);
    const event = getEventForDate(dateStr);
    if (event && (event.type === 'holiday' || event.type === 'aat' || event.type === 'internal')) return [];
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];
    
    let list = [];
    if (TIMETABLE[dayName]) {
        TIMETABLE[dayName].forEach(code => {
            if (!['MENTORING', 'LIBRARY', 'NSS'].includes(code)) list.push(code);
        });
    }
    return list;
}

function renderEventsCalendar() {
    const container = document.getElementById('eventsList');
    if (!container) return;
    container.innerHTML = '';
    
    const today = new Date();
    const events = [];
    
    const allEvents = { ...HARD_BLOCKERS, ...INTERNAL_TESTS, ...AAT_EXAMS, ...PROJECT_DEADLINES, ...DEPARTMENTAL_EVENTS };
    
    for (let d = new Date(SEMESTER_START); d <= SEMESTER_END; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        const dayEvents = [];
        
        if (allEvents[dateStr]) dayEvents.push({ ...allEvents[dateStr] });
        
        if (conflicts.includes(dateStr)) dayEvents.push({ name: 'Planned Absence', type: 'conflict' });
        
        const daySubjects = getSubjectsForDate(dateStr);
        if (daySubjects.length > 0) dayEvents.push({ name: daySubjects.join(', '), type: 'class' });
        
        if (logs[dateStr]) {
            const p = logs[dateStr].filter(l => l.present).length;
            const a = logs[dateStr].filter(l => !l.present).length;
            dayEvents.push({ name: 'P:' + p + ' A:' + a, type: 'log' });
        }
        
        if (dayEvents.length > 0 || d.toDateString() === today.toDateString()) {
            events.push({ date: dateStr, events: dayEvents, isToday: d.toDateString() === today.toDateString() });
        }
    }
    
    if (events.length === 0) {
        container.innerHTML = `
            <div class="event-empty">
                <div class="event-empty-icon">📅</div>
                <p>No events recorded yet</p>
            </div>
        `;
        return;
    }
    
    events.reverse().forEach(ev => {
        const dateObj = new Date(ev.date);
        const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
        const dayNum = dateObj.getDate();
        
        let tags = '';
        ev.events.forEach(e => {
            const icon = e.type === 'holiday' ? '🏖️' : e.type === 'internal' ? '📝' : e.type === 'aat' ? '🎯' : e.type === 'project' ? '🎓' : e.type === 'event' ? '📅' : e.type === 'fest' ? '🎉' : e.type === 'conflict' ? '❌' : e.type === 'class' ? '📚' : '✓';
            tags += `<span class="event-tag ${e.type}"><span class="icon">${icon}</span>${e.name}</span>`;
        });
        
        container.innerHTML += `
            <div class="event-day${ev.isToday ? ' today' : ''}">
                <div class="event-date-badge">
                    <span class="event-day-badge">${month}</span>
                    <span class="event-num-badge">${dayNum}</span>
                </div>
                <div class="event-details">
                    <div class="event-tags">${tags}</div>
                </div>
            </div>
        `;
    });
}

function setupEventListeners() {
    document.getElementById('targetSlider').addEventListener('input', (e) => {
        target = parseInt(e.target.value);
        saveTarget();
        renderTarget();
    });

    document.querySelectorAll('.presets button').forEach(btn => {
        btn.onclick = () => {
            target = parseInt(btn.dataset.target);
            saveTarget();
            renderTarget();
        };
    });

    document.getElementById('attendedAllBtn').onclick = attendAllToday;

    document.getElementById('prevMonth').onclick = () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar();
    };

    document.getElementById('nextMonth').onclick = () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar();
    };

    document.getElementById('todaySubjects').onclick = (e) => {
        if (e.target.classList.contains('btn-present')) {
            markAttendance(e.target.dataset.code, true);
        } else if (e.target.classList.contains('btn-absent')) {
            markAttendance(e.target.dataset.code, false);
        }
    };

    document.getElementById('subjectsGrid').onclick = (e) => {
        if (e.target.classList.contains('btn-present-action')) {
            markAttendance(e.target.dataset.code, true);
        } else if (e.target.classList.contains('btn-absent-action')) {
            markAttendance(e.target.dataset.code, false);
        }
    };

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => {
            const view = btn.dataset.view;
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + view).classList.add('active');
        };
    });
}

document.addEventListener('DOMContentLoaded', init);
