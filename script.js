document.addEventListener('DOMContentLoaded', function() {
    const startScanBtn = document.getElementById('startScanBtn');
    const bugReportForm = document.getElementById('bugReportForm');
    const bugList = document.getElementById('bugList');

    // Function to start scanning
    function startScan() {
        startScanBtn.disabled = true; // Disable the button once scanning starts
        setTimeout(function() {
            alert('Bug scan complete! No bugs found.'); // Placeholder for actual scanning logic
            startScanBtn.disabled = false; // Enable the button after scanning completes
        }, 3000); // Simulate scanning process for 3 seconds
    }

    // Attach event listener to the start scan button
    startScanBtn.addEventListener('click', startScan);

    // Event listener for bug report form submission
    bugReportForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Example validation: check if title and description are provided
        const title = document.getElementById('bugTitle').value.trim();
        const description = document.getElementById('bugDescription').value.trim();

        if (!title || !description) {
            alert('Please fill out the title and description for the bug.');
            return;
        }

        // Add bug to the list
        const li = document.createElement('li');
        li.textContent = `Title: ${title}, Description: ${description}, Type: ${document.getElementById('bugType').value}, Priority: ${document.getElementById('bugPriority').value}`;
        bugList.appendChild(li);

        // Reset the form
        bugReportForm.reset();

        // Display success message
        alert('Bug reported successfully!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const bugReportForm = document.getElementById('bugReportForm');

    bugReportForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        
        const title = document.getElementById('bugTitle').value.trim();
        const description = document.getElementById('bugDescription').value.trim();

      
        console.log('Bug Title:', title);
        console.log('Bug Description:', description);
        console.log('Bug Type:', document.getElementById('bugType').value);
        console.log('Bug Priority:', document.getElementById('bugPriority').value);

        alert('Bug reported successfully!'); // Placeholder feedback

        // Reset the form (if desired)
        bugReportForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bugReportForm = document.getElementById('bugReportForm');
    const bugList = document.getElementById('bugList');

    bugReportForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('bugTitle').value.trim();
        const description = document.getElementById('bugDescription').value.trim();
        const type = document.getElementById('bugType').value;
        const priority = document.getElementById('bugPriority').value;

       

        // Add bug to the list
        const li = document.createElement('li');
        li.textContent = `Title: ${title}, Description: ${description}, Type: ${type}, Priority: ${priority}`;
        bugList.appendChild(li);

        // Reset the form
        bugReportForm.reset();
    });
});
