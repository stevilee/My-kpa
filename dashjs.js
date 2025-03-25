<script>
  // Function to show the division selection modal
  function showDivisionModal() {
    const role = document.getElementById('role').value;
    if (role) {
      document.getElementById('divisionModal').style.display = 'block';
    }
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('divisionModal').style.display = 'none';
  }

  // Function to show department selection after division is chosen
  function showDepartmentSelect() {
    const division = document.getElementById('division').value;

    let departmentOptions = [];
    if (division === 'hr') {
      departmentOptions = ['Recruitment', 'Employee Relations'];
    } else if (division === 'sales') {
      departmentOptions = ['Regional Sales', 'Global Sales'];
    } else if (division === 'it') {
      departmentOptions = ['Development', 'Support'];
    }

    // Populate department dropdown
    const departmentDropdown = document.getElementById('department');
    departmentDropdown.innerHTML = ''; // Clear existing options
    departmentOptions.forEach(function(department) {
      const option = document.createElement('option');
      option.value = department.toLowerCase();
      option.text = department;
      departmentDropdown.appendChild(option);
    });

    // Show the department select
    document.getElementById('departmentSelect').style.display = 'block';
    closeModal(); // Close the division modal
  }

  // Listen for role selection to show the division modal
  document.getElementById('role').addEventListener('change', showDivisionModal);
</script>
