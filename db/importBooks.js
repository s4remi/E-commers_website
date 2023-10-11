import fs from "fs";


const path = "C:/Users/97589/Downloads/books_1.Best_Books_Ever.csv";

fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(data.split("\n")[1]);
  const rows = data.split("\n").map((row) => row.split("\",\"")).map((element)=>{
    return {
      title:element[1],
      author:element[3],
      rating:element[4],
      description:element[5],
      language:element[6],
      ISBN:element[7],
      genres:element[8],
      bookForm:element[10],
      pages:element[12],
      publisher:element[13],
      image:element[21],
      price:element[24]
    };
  });
  console.log(rows[1]);
});
