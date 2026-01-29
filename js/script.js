// Get jobs from localStorage
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

// Post Job
function postJob() {
  const job = {
    title: document.getElementById("title").value,
    company: document.getElementById("company").value,
    description: document.getElementById("description").value
  };

  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  alert("Job Posted Successfully");
  window.location.href = "jobs.html";
}

// Show Jobs
const jobContainer = document.getElementById("jobs");
if (jobContainer) {
  jobs.forEach((job, index) => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <a href="job.html?id=${index}">View</a>
    `;
    jobContainer.appendChild(div);
  });
}

// Job Detail
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id !== null) {
  document.getElementById("title").innerText = jobs[id].title;
  document.getElementById("company").innerText = jobs[id].company;
  document.getElementById("description").innerText = jobs[id].description;
}

// Apply Job
function applyJob() {
  alert("Application Submitted Successfully!");
}
