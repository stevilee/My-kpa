document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected role
    var role = document.getElementById("role").value;

    // Redirect user based on role
    switch (role) {
        case "admin":
            window.location.href = "dashboardsadmin_dashboard.html";
            break;
        case "md":
            window.location.href = "dashboards/md_dashboard.html";
            break;
        case "gm":
            window.location.href = "dashboards/gm_dashboard.html";
            break;
        case "hod":
            window.location.href = "dashboards/hod_dashboard.html";
            break;
        case "principal":
            window.location.href = "dashboards/principal_dashboard.html";
            break;
        case "senior":
            window.location.href = "dashboards/senior_dashboard.html";
            break;
        case "staff":
            window.location.href = "dashboards/staff_dashboard.html";
            break;
        case "port_user":
            window.location.href = "dashboards/port_user_dashboard.html";
            break;
        default:
            alert("Invalid role selected!");
    }
});


