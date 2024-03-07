
        var bloodBank = [];

        function addDonor() {
            var name = document.getElementById("name").value;
            var bloodGroup = document.getElementById("bloodGroup").value;
            var age = document.getElementById("age").value;
            var contactNumber = document.getElementById("contactNumber").value;

            bloodBank.push({ name, bloodGroup, age, contactNumber });

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("bloodGroup").value = "";
            document.getElementById("age").value = "";
            document.getElementById("contactNumber").value = "";

            displayAllDonors();
        }

        function searchDonor() {
            var searchBloodGroup = document.getElementById("searchBloodGroup").value;
            var filteredDonors = bloodBank.filter(donor => donor.bloodGroup === searchBloodGroup);

            displayDonors(filteredDonors);
        }

        function displayAllDonors() {
            displayDonors(bloodBank);
        }

        function displayDonors(donors) {
            var tableBody = document.getElementById("donorTableBody");
            tableBody.innerHTML = "";

            donors.forEach(donor => {
                var row = tableBody.insertRow();
                var nameCell = row.insertCell(0);
                var bloodGroupCell = row.insertCell(1);
                var ageCell = row.insertCell(2);
                var contactNumberCell = row.insertCell(3);

                nameCell.innerHTML = donor.name;
                bloodGroupCell.innerHTML = donor.bloodGroup;
                ageCell.innerHTML = donor.age;
                contactNumberCell.innerHTML = donor.contactNumber;
            });
        }
    
