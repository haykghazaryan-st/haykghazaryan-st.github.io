let jobsObj = {};

function renderDepartments(departments) {
  const departmentsList = $("#departments_list");
  departmentsList.fadeOut(0);
  const documentFragment = $(document.createDocumentFragment());
  departments = departments.filter((d) => d.jobs.length);
  departments.forEach((department) => {
    jobsObj[department.id] = department.jobs;
    const li = $(`<li class="border-b last:border-b-0">
        <a class="inline-block py-4 text-sm opacity-50 mr-2" href="#">${department.name}</a>
        <span class="inline-block rounded-full bg-cadetblue text-xxs px-2 text-black">${department.jobs.length}</span>
    </li>`);
    li.find("a").click((e) => {
      e.preventDefault();
      if (!li.find("a").hasClass("opacity-50")) {
        return;
      }
      const listItems = departmentsList.children();
      listItems.find("a").addClass("opacity-50");
      li.find("a").removeClass("opacity-50");
      renderJobs(department.id);
    });
    documentFragment.append(li);
  });

  departmentsList.append(documentFragment);
  departmentsList.children(":first").find("a").removeClass("opacity-50");
  departmentsList.fadeIn(300);
  renderJobs(departments[0].id);
}

function renderJobs(departmentId) {
  const jobsList = $("#jobs_list");
  jobsList.fadeOut(300, () => {
    jobsList.empty();
    const jobs = jobsObj[departmentId];
    const documentFragment = $(document.createDocumentFragment());
    jobs.forEach((job) => {
      const li = $(`<li class="mb-4">
          <a class="flex justify-between items-center rounded-md border px-10 py-8 border-lightGray hover:border-gray" href="${job.absolute_url}" target="_bkank">
            <div>
              <h6 class="font-bold mb-2 mr-2">${job.title}</h6>
              <p class="text-sm">
                <img class="inline-block align-text-top mr-1" src="/assets/icons/location.svg"
                    alt="Location" />
                ${job.location.name}
              </p>
            </div>
            <div>
              <img src="/assets/icons/chevron_right.svg" alt="Arrow right">
            </div>
          </a>
      </li>`);
      documentFragment.append(li);
    });
    jobsList.append(documentFragment);
    jobsList.fadeIn(200);
  });
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
