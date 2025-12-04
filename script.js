// Login Functions (Prototype - no validation)
function handleSocialLogin(provider) {
    // Show dashboard, hide login
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard-container').classList.remove('hidden');
    setTimeout(initCharts, 100);
}

function handleEmailLogin() {
    // Show dashboard, hide login
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard-container').classList.remove('hidden');
    setTimeout(initCharts, 100);
}

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
        // Show login, hide dashboard
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('dashboard-container').classList.add('hidden');
    }
}

// Charts
function initCharts() {
    // Check if charts elements exist
    const revenueChartEl = document.getElementById('revenueChart');
    const platformChartEl = document.getElementById('platformChart');
    
    if (!revenueChartEl || !platformChartEl) {
        return; // Charts not ready yet
    }

    // Revenue Chart
    const revenueCtx = revenueChartEl.getContext('2d');
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
                    ticks: { 
                        color: '#888888',
                        font: { size: 11 },
                        callback: function(value) {
                            return (value / 1000) + 'K';
                        }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { 
                        color: '#888888',
                        font: { size: 11 }
                    }
                }
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            }
        }
    });

    // Platform Chart
    const platformCtx = platformChartEl.getContext('2d');
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

// Filter Functions
function applyFilters() {
    const filters = {
        creator: document.getElementById('filter-creator')?.value || '',
        game: document.getElementById('filter-game')?.value || '',
        country: document.getElementById('filter-country')?.value || '',
        channel: document.getElementById('filter-channel')?.value || '',
        device: document.getElementById('filter-device')?.value || '',
        conversions: document.getElementById('filter-conversions')?.value || '',
        clicks: document.getElementById('filter-clicks')?.value || '',
        signUps: document.getElementById('filter-signups')?.value || '',
        category: document.getElementById('filter-category')?.value || ''
    };

    console.log('Applying filters:', filters);
    // Here you would typically make an API call or filter the data
    // For now, we'll just show a message
    alert('Filters applied! (This is a demo - implement your filtering logic here)');
}

function resetFilters() {
    document.getElementById('filter-creator').value = '';
    document.getElementById('filter-game').value = '';
    document.getElementById('filter-country').value = '';
    document.getElementById('filter-channel').value = '';
    document.getElementById('filter-device').value = '';
    document.getElementById('filter-conversions').value = '';
    document.getElementById('filter-clicks').value = '';
    document.getElementById('filter-signups').value = '';
    document.getElementById('filter-category').value = '';
    
    console.log('Filters reset');
    // Here you would reload the original data
    alert('Filters reset!');
}

// Initialize on load - only init charts when dashboard is visible
window.addEventListener('DOMContentLoaded', function() {
    // Charts will be initialized when user logs in
});
