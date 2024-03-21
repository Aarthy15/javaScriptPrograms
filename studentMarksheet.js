const students = [ 
  {name: "Sriram", language: 90, maths: 80, science: 33},
  {name: "Mani", language: 60, maths: 70, science: 46},
  {name: "Sai", language: 70, maths: 70, science: 75}
];

const getTotal = (student) => (student.language + student.maths + student.science);

const getResult = (student) => (Math.min(student.language, student.maths, student.science) >= 35 ? "Pass" : "Fail");

const getStudentDetails = () => students.map((student) => ({
  ...student,
  total: getTotal(student),
  result: getResult(student)
}));

const getRank = (studentDetails) => {
  let count = 0;
  const sortedStudent = studentDetails.sort((a, b) => b.total - a.total);
  const updatedMarksheet = sortedStudent.map((student) =>
    ({ ...student, 
      Rank: student.result === "Pass" ? ++count : "-" })
  );
  return  updatedMarksheet ;
};

const main = () => {
  const markSheet = getStudentDetails();
  const  updatedMarksheet = getRank(markSheet);
  return  updatedMarksheet;
};

console.log(main());
