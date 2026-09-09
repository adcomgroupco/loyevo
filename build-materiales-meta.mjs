import fs from "node:fs/promises";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const outputDir = "C:/Users/User/Documents/GitHub/Loyevo/outputs/materiales-meta-loyevo";
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Cuadro Meta");
sheet.showGridLines = false;
sheet.tabColor = "#ed0a78";

sheet.mergeCells("A1:L1");
sheet.getRange("A1").values = [["CUADRO DE MATERIALES · META ADS · LOYEVO"]];
sheet.getRange("A1").format = {
  fill: "#ed0a78",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  horizontalAlignment: "left",
  verticalAlignment: "center"
};
sheet.getRange("A1").format.rowHeight = 31;

sheet.mergeCells("A2:L2");
sheet.getRange("A2").values = [["Piloto de oferta: captar personas que ya conducen, se movilizan o viajan y podrían llevar un encargo. Base: cuadro de materiales compartido el 9 de septiembre de 2026."]];
sheet.getRange("A2").format = { fill: "#FFF0F7", font: { color: "#513C49", italic: true, size: 10 }, wrapText: true, verticalAlignment: "center" };
sheet.getRange("A2").format.rowHeight = 32;

sheet.getRange("A4:L4").values = [[
  "ID", "Etapa", "Audiencia", "Concepto / mensaje", "Objetivo de la pieza", "Formato maestro", "Adaptaciones", "Entregable", "Piezas finales", "Estado", "Responsable", "Observaciones"
]];
sheet.getRange("A4:L4").format = {
  fill: "#1C2C44",
  font: { bold: true, color: "#FFFFFF", size: 10 },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
  borders: { preset: "all", style: "thin", color: "#D8DEE6" }
};
sheet.getRange("A4:L4").format.rowHeight = 34;

const rows = [
  ["M01", "Prospección", "Las 3 audiencias", "Si ya vas a viajar, gana dinero llevando un encargo en tu camino.", "Comunicar ingreso adicional", "Video 9:16", "4:5 y 1:1", "Video con subtítulos", 3, "En producción", "Diseño / contenido", "Probar hooks y primera frase."],
  ["M02", "Prospección", "Las 3 audiencias", "No necesitas cambiar tu ruta.", "Resolver objeción de esfuerzo", "Video 9:16", "4:5 y 1:1", "Video con subtítulos", 3, "En producción", "Diseño / contenido", "Mostrar trayecto existente, no prometer rutas nuevas."],
  ["M03", "Prospección", "Las 3 audiencias", "Así funciona Loyevo: vas, llevas, ganas.", "Explicar el proceso", "Video o carrusel", "4:5 y 1:1", "Pieza educativa", 3, "En producción", "Diseño / contenido", "Explicar de forma simple la dinámica del viajero."],
  ["M04", "Prospección", "Las 3 audiencias", "Viajeros verificados, pago protegido y seguimiento.", "Construir confianza", "Carrusel 4–6 láminas", "Portada 4:5 y Story 9:16", "Carrusel de confianza", 3, "En producción", "Diseño / contenido", "Usar solo atributos que el producto pueda demostrar."],
  ["M05", "Prueba social", "Las 3 audiencias", "Historia real de un viajero Loyevo.", "Aportar credibilidad", "Video testimonial 9:16", "4:5 y 1:1", "Testimonio real", 3, "Pendiente", "Loyevo + contenido", "Producir solo con autorización de la persona viajera."],
  ["M06", "Retargeting", "Visitantes, engagement y video viewers", "¿Ya vas a viajar? Convierte ese trayecto en un ingreso.", "Recuperar interés", "Estático 4:5", "Story 9:16", "Recordatorio", 2, "Pendiente de volumen", "Diseño / pauta", "Activar cuando exista suficiente interacción para retargeting."]
];
sheet.getRange("A5:L10").values = rows;
sheet.getRange("A5:L10").format = {
  font: { size: 10, color: "#172033" },
  verticalAlignment: "top",
  wrapText: true,
  borders: { preset: "all", style: "thin", color: "#E8E5EA" }
};
sheet.getRange("A5:L10").format.rowHeight = 58;
sheet.getRange("A5:A10").format.font = { bold: true, color: "#ED0A78", size: 10 };
sheet.getRange("J5:J8").format = { fill: "#EAF8F2", font: { bold: true, color: "#18563E", size: 10 }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: "#E8E5EA" } };
sheet.getRange("J9:J10").format = { fill: "#FFF6E6", font: { bold: true, color: "#8A5200", size: 10 }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: "#E8E5EA" } };

sheet.mergeCells("A12:C12");
sheet.getRange("A12").values = [["RESUMEN DE PRODUCCIÓN"]];
sheet.getRange("A12").format = { fill: "#1C2C44", font: { bold: true, color: "#FFFFFF", size: 10 }, verticalAlignment: "center" };
sheet.mergeCells("A13:C13");
sheet.mergeCells("A14:C14");
sheet.mergeCells("A15:C15");
sheet.getRange("A13:A15").values = [["Alcance inicial · M01 a M04 · 12 piezas finales"], ["Pendiente de evidencia · M05 · 3 piezas finales"], ["Pendiente de volumen · M06 · 2 piezas finales"]];
sheet.getRange("A13:C15").format = { font: { size: 10 }, wrapText: true, verticalAlignment: "center", borders: { preset: "all", style: "thin", color: "#E8E5EA" } };
sheet.getRange("A13:C13").format.font = { bold: true, color: "#18563E", size: 10 };

sheet.getRange("F12:L12").merge();
sheet.getRange("F12").values = [["REGLAS DEL PILOTO"]];
sheet.getRange("F12").format = { fill: "#1C2C44", font: { bold: true, color: "#FFFFFF", size: 10 }, verticalAlignment: "center" };
sheet.getRange("F13:L16").merge();
sheet.getRange("F13").values = [["Las tres audiencias —Conductores, Viajeros frecuentes y Transporte y traslado— reciben los mismos conceptos durante el inicio. Así se puede identificar qué audiencia y qué mensaje responden mejor, sin fragmentar el aprendizaje. Cada video debe incluir subtítulos, logo y el mensaje clave dentro de zona segura."]];
sheet.getRange("F13:L16").format = { fill: "#FFF0F7", font: { size: 10, color: "#513C49" }, wrapText: true, verticalAlignment: "center", borders: { preset: "all", style: "thin", color: "#E8E5EA" } };

const widths = [50, 92, 130, 225, 150, 120, 110, 125, 70, 115, 110, 210];
for (let i = 0; i < widths.length; i++) sheet.getRangeByIndexes(0, i, 16, 1).format.columnWidthPx = widths[i];
sheet.freezePanes.freezeRows(4);

const guide = workbook.worksheets.add("Guía técnica");
guide.showGridLines = false;
guide.tabColor = "#1C2C44";
guide.mergeCells("A1:E1");
guide.getRange("A1").values = [["GUÍA TÉCNICA DE ENTREGABLES PARA META"]];
guide.getRange("A1").format = { fill: "#ed0a78", font: { bold: true, color: "#FFFFFF", size: 16 }, verticalAlignment: "center" };
guide.getRange("A1").format.rowHeight = 31;
guide.getRange("A3:E3").values = [["Formato", "Uso principal", "Tamaño", "Requisitos", "Aplicación en Loyevo"]];
guide.getRange("A3:E3").format = { fill: "#1C2C44", font: { bold: true, color: "#FFFFFF", size: 10 }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: "#D8DEE6" } };
guide.getRange("A4:E6").values = [
  ["Vertical 9:16", "Reels y Stories", "1080 × 1920 px", "Video con audio, subtítulos y elementos clave en zona segura.", "Formato maestro de videos M01, M02, M03 y M05."],
  ["Vertical 4:5", "Feed de Facebook e Instagram", "1080 × 1350 px", "Texto legible sin depender del audio.", "Adaptación de cada concepto para el feed."],
  ["Cuadrado 1:1", "Ubicaciones flexibles", "1080 × 1080 px", "Logo, mensaje y CTA claros.", "Adaptación complementaria, no una idea nueva."],
];
guide.getRange("A4:E6").format = { font: { size: 10 }, wrapText: true, verticalAlignment: "top", borders: { preset: "all", style: "thin", color: "#E8E5EA" } };
guide.getRange("A4:E6").format.rowHeight = 54;
guide.getRange("A8:E8").merge();
guide.getRange("A8").values = [["Por cada concepto, entregar: archivo maestro editable, video o imagen final, tres textos principales, tres titulares y un CTA alineado con el destino real de la campaña."]];
guide.getRange("A8").format = { fill: "#EAF8F2", font: { size: 10, color: "#18563E", bold: true }, wrapText: true, verticalAlignment: "center" };
guide.getRange("A8").format.rowHeight = 34;
for (let i = 0; i < 5; i++) guide.getRangeByIndexes(0, i, 8, 1).format.columnWidthPx = [120, 150, 120, 245, 245][i];
guide.freezePanes.freezeRows(3);

await workbook.recalculate();
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/Cuadro_materiales_Meta_Loyevo.xlsx`);

const check = await workbook.inspect({ kind: "table", range: "Cuadro Meta!A1:L16", include: "values,formulas", tableMaxRows: 20, tableMaxCols: 12 });
console.log(check.ndjson);
const preview = await workbook.render({ sheetName: "Cuadro Meta", range: "A1:L16", scale: 1 });
await fs.writeFile(`${outputDir}/preview.png`, new Uint8Array(await preview.arrayBuffer()));
