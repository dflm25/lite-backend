import fs from "fs";
import pdf from "pdf-creator-node";
import { pdfOptions } from "./constants";

const html = fs.readFileSync(__dirname + "/templates/template.html", "utf8");

export const getInventoryPDF = async (data) => {
  const document = {
    html: html,
    data: {
      inventories: data,
    },
    path: "./src/api/public/output.pdf",
    type: "",
  };

  await pdf.create(document, pdfOptions);
  return fs.readFileSync("./src/api/public/output.pdf");
};
