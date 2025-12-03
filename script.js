// Navigation
function showTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const titles = {
        'overview': 'Admin Dashboard',
        'creators': 'Creator Management',
        'campaigns': 'Campaign Management',
        'invoices': 'Invoice Management',
        'analytics': 'Analytics & Reports',
        'settings': 'System Settings'
    };
    document.getElementById('page-title').innerText = titles[tabId];

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function logout() {
    if (confirm('Are you sure you want to sign out?')) {
        window.location.href = 'index.html';
    }
}

// Charts
function initCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueGradient = revenueCtx.createLinearGradient(0, 0, 0, 300);
    revenueGradient.addColorStop(0, 'rgba(196, 30, 30, 0.4)');
    revenueGradient.addColorStop(1, 'rgba(196, 30, 30, 0)');

    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [18000, 22000, 25000, 28000, 32000, 35000],
                borderColor: '#C41E1E',
                backgroundColor: revenueGradient,
                tension: 0.4,
                fill: true,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#888888' } }
            },
            scales: {
                y: {
                    grid: { color: '#2a2a2a' },
                    ticks: { color: '#888888' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#888888' }
                }
            }
        }
    });

    // Platform Chart
    const platformCtx = document.getElementById('platformChart').getContext('2d');
    new Chart(platformCtx, {
        type: 'bar',
        data: {
            labels: ['YouTube', 'Twitch', 'Instagram', 'TikTok', 'Twitter'],
            datasets: [{
                label: 'Total Followers',
                data: [1250000, 450000, 890000, 320000, 180000],
                backgroundColor: '#C41E1E',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#888888' } }
            },
            scales: {
                y: {
                    grid: { color: '#2a2a2a' },
                    ticks: { color: '#888888' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#888888' }
                }
            }
        }
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initCharts);

