import React from "react";

const students = [
  { name: "Pratiksha", subject: "Javascript" },
  { name: "Pratik", subject: "Machine" },
];

function Call() {
  function enrollStudent(callback) {
    setTimeout(function () {
      console.log("fetched");
      callback();
    }, 1000);
  }
  function getStudent() {
    setTimeout(function () {
      students.forEach(function (student) {
        console.log(student);
      });
    }, 2000);
  }
  return (
    <div>
      <h2>Student list</h2>
      <button onClick={enrollStudent(getStudent)}>submit</button>

      <ul id="student"></ul>
    </div>
  );
}

export default Call;
