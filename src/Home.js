import React from "react";
const students = [
  { name: "Pratiksha", subject: "Javascript" },
  { name: "Pratik", subject: "Machine" },
  { name: "shubham", subject: "Jvascript" },
];

function Home() {
  return (
    <>
      <div>
        {students.map((student) => {
          return (
            <div>
              <li>{student.name}</li>
              <li>{student.subject}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
