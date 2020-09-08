function getOffice(officeId) {
  $.get(
    "https://boards-api.greenhouse.io/v1/boards/servicetitan/offices/" +
      officeId,
    (data) => {
      console.log(data);
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
