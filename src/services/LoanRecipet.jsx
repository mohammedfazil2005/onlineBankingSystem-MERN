import jsPDF from "jspdf";

export const generateLoanReceiptPDF = (loan) => {
  const doc = new jsPDF({ unit: "mm", format: [120, 140] }); // Wider and longer for details

  // Header
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(33, 37, 41);
  doc.text("🏦 Loan Receipt", 10, 10, { align: "left" });

  // Line Separator
  doc.setDrawColor(200, 200, 200);
  doc.line(5, 15, 115, 15);

  // Body - Loan Info
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);

  doc.text(`Loan ID: ${loan.loanID}`, 10, 25);
  doc.text(`User ID: ${loan.userID}`, 10, 32);
  doc.text(`Loan Type: ${loan.loantype}`, 10, 39);
  doc.text(`Loan Amount: ₹${loan.loanamount}`, 10, 46);
  doc.text(`Interest Rate: ${loan.interestrate}%`, 10, 53);
  doc.text(`Duration: ${loan.loanduration} year(s)`, 10, 60);
  doc.text(`Remaining Balance: ₹${loan.remainingloanamount}`, 10, 67);

  // EMI Details
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("EMI Details", 10, 77);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`EMI Amount: ₹${loan.EMIAmount}`, 10, 84);
  doc.text(`Next EMI Date: ${loan.EMIdate}`, 10, 91);

  // Notes
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text("Notes:", 10, 102);

  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Keep this receipt for your records.", 10, 108);
  doc.text("Timely EMI payments help maintain your credit score.", 10, 113);
  doc.text("Contact support for queries or changes in schedule.", 10, 118);

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("Thank you for choosing our services!", 60, 135, { align: "center" });

  // Save
  doc.save(`Loan_${loan.loanID}.pdf`);
};
