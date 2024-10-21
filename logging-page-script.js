        // Function to show second table and hide the first
        function showTable2() {
            document.getElementById('table1-container').style.display = 'none';
            document.getElementById('table2-container').style.display = 'block';
        }

        // Function to show first table and hide the second
        function showTable1() {
            document.getElementById('table2-container').style.display = 'none';
            document.getElementById('table1-container').style.display = 'block';
        }

        // Function to limit checkbox selection to only one
        function selectOnlyOne(checkbox) {
            let checkboxes = document.querySelectorAll('.row-checkbox');
            checkboxes.forEach((item) => {
                if (item !== checkbox) {
                    item.checked = false;
                }
            });
            updateNextButton(); // Update the button status when a checkbox is selected
        }

        // Function to update the status of the "Next" button
        function updateNextButton() {
            let checkboxes = document.querySelectorAll('.row-checkbox');
            let nextButton = document.getElementById('nextBtn');
            let anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

            if (anyChecked) {
                nextButton.disabled = false;
                nextButton.classList.remove('button2');
                nextButton.classList.add('button1');
            } else {
                nextButton.disabled = true;
                nextButton.classList.remove('button1');
                nextButton.classList.add('button2');
            }
        }