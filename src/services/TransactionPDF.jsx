import jsPDF from "jspdf";

export const generateStyledTransactionPDF = (a) => {
    const doc = new jsPDF({ unit: "mm", format: [120, 120] }); // Adjusted height to 120mm
  
    // Header
    doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(33, 37, 41);
  doc.text("🧾 Transaction Receipt", 10, 10, { align: "left" }); // Align text to the left
  
    // Separator Line
    doc.setDrawColor(200, 200, 200);
    doc.line(5, 15, 75, 15);
  
    // Body
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
  
    doc.text(`Txn ID: ${a.transactionID || "267923899"}`, 10, 25);
    doc.text(`Date: ${a.date}`, 10, 32);
    doc.text(`To/From: ${a.to || a.from}`, 10, 39);
    doc.text(`Card: ${a.card}`, 10, 46);
    doc.text(`Type: ${a.transactionType}`, 10, 53);
    doc.text(`Message: ${a?.message||""}`, 10, 60);
    doc.text(`Amount: ₹${a.amount}`, 10, 65);
    doc.text(`Status: ${a.status || "Completed"}`, 10, 71);
  
    // Add Notes Section
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text("Notes:", 10, 75);
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Thank you for banking with us. If you have any questions, feel free to contact support.", 10, 80);
    doc.text("For any discrepancies or issues, please reach out within 24 hours.", 10, 85);
  
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Thanks for using our service!", 40, 110, { align: "center" });
  
    // Save PDF
    doc.save(`Bank AI Transaction${a.transactionID||12176379}.pdf`);
  };
  
  