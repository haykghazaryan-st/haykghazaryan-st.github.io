let jobsObj = {};

function renderDepartments(departments) {
  const documentFragment = $(document.createDocumentFragment());
  console.log(departments);
  departments = departments.filter((d) => d.jobs.length);
  departments.forEach((department) => {
    jobsObj[department.id] = department.jobs;
    const li = $(`<li class="border-b">
        <a class="block py-4 text-sm opacity-50" href="#">${department.name} ${department.jobs.length}</a>
    </li>`);
    li.find("a").click(function (e) {
      e.preventDefault();
      renderJobs(department.id);
      console.log(department.id);
    });
    documentFragment.append(li);
  });
  $("#departments_list").append(documentFragment);
  renderJobs(departments[0].id);
}

function renderJobs(departmentId) {
  const jobsList = $("#jobs_list");
  jobsList.empty();
  const jobs = jobsObj[departmentId];
  const documentFragment = $(document.createDocumentFragment());
  console.log(jobs);
  jobs.forEach((job) => {
    const li = $(`<li class="mb-4">
        <a class="block rounded-md border px-10 py-8 border-lightGray hover:border-gray" href="${job.absolute_url}">
            <div>
                <h6 class="font-bold mb-2">${job.title}</h6>
                <p class="text-sm">
                    <img class="inline-block align-text-top mr-1" src="/assets/icons/location.svg"
                        alt="Location" />
                    ${job.location.name}
                </p>
            </div>
        </a>
    </li>`);
    documentFragment.append(li);
  });
  jobsList.append(documentFragment);
}

function getOffice(officeId) {
  $.get(
    "https://boards-api.greenhouse.io/v1/boards/servicetitan/offices/" +
      officeId,
    (data) => {
      renderDepartments(data.departments);
    }
  );
}

getOffice(61277);

// $.get(
//   "https://boards-api.greenhouse.io/v1/boards/servicetitan/jobs",
//   (data) => {
//     const yerevanOfficeJobs = data.jobs.filter(
//       (j) => j.location.name === "Yerevan, Armenia"
//     );
//     console.log(yerevanOfficeJobs);
//   }
// );
