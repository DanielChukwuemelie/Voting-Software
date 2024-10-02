document.getElementById('submit-btn').addEventListener('click', function () {
    // 1. Get the values from the form inputs and the ".value" helps to get whatever value the user inputs
    
    let voteAge = document.getElementById('age').value;            // Age of the person
    let theOrigin = document.getElementById('nationality').value;   // Nationality of the person
    let voteTime = document.getElementById('time').value;           // Time of arrival
    let hasID = document.getElementById('id').value.toLowerCase();  // Voter ID (yes/no)
    let isRegistered = document.getElementById('registration').value.toLowerCase(); // Registered to vote (yes/no)
    let healthIssues = document.getElementById('health').value.toLowerCase();  // Health issues (yes/no)
    let crimeRecord = document.getElementById('crime').value.toLowerCase();    // Crime record (yes/no)
  
    let resultDiv = document.getElementById('result');
  
    // 2. Check if the person is eligible based on different conditions
  
    // Case 1: Eligible if age >= 18, Nigerian, arrived on time, has voter ID, is registered, no health issues, no crime record
    if (voteAge >= 18 && theOrigin === "NIGERIAN" && voteTime <= 12 && hasID === "yes" && isRegistered === "yes" && healthIssues === "no" && crimeRecord === "no") {
      resultDiv.textContent = "Dear Voter, You are eligible to vote. Please go in and cast your vote!";
      resultDiv.style.color = "green";
    }
    // Case 2: If they arrived late
    else if (voteAge >= 18 && theOrigin === "NIGERIAN" && voteTime > 12 && hasID === "yes" && isRegistered === "yes" && healthIssues === "no" && crimeRecord === "no") {
      resultDiv.textContent = "Dear Voter, You are eligible to vote but you arrived late. Please wait for further instructions.";
      resultDiv.style.color = "orange";
    }
    // Case 3: If the person is not Nigerian
    else if (voteAge >= 18 && theOrigin !== "NIGERIAN") {
      resultDiv.textContent = "Dear Voter, you are not a citizen of Nigeria, and therefore not eligible to vote.";
      resultDiv.style.color = "red";
    }
    // Case 4: If they are underage
    else if (voteAge < 18 && theOrigin === "NIGERIAN") {
      resultDiv.textContent = "Dear Voter, You are below 18 years of age and cannot vote yet.";
      resultDiv.style.color = "red";
    }
    // Case 5: If they have health issues
    else if (healthIssues === "yes") {
      resultDiv.textContent = "Due to your health condition, you may not be eligible to vote today.";
      resultDiv.style.color = "red";
    }
    // Case 6: If they have a criminal record
    else if (crimeRecord === "yes") {
      resultDiv.textContent = "Due to your criminal record, you are not eligible to vote.";
      resultDiv.style.color = "red";
    }
    // Case 7: If they don't have a voter ID or are not registered
    else if (hasID === "no" || isRegistered === "no") {
      resultDiv.textContent = "You must have a voter ID and be registered to vote.";
      resultDiv.style.color = "red";
    }
    // General case if they don't meet any criteria
    else {
      resultDiv.textContent = "Sorry, you are not eligible to vote based on the provided information.";
      resultDiv.style.color = "red";
    }
  });
  