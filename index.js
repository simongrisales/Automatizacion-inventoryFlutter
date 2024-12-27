const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const SEGUNDO = 1000;
const DELAY = SEGUNDO * 5;

(async function automationWithSelenium() {
  // Configuración inicial
  let driver = await new Builder().forBrowser('chrome').build();
  const url = 'https://inventory-flutter.vercel.app';

  // Inicia el reporte
  logReport("=== INICIO DEL REPORTE DE AUTOMATIZACIÓN ===");

  try {

    await driver.get(url);
    await driver.sleep(SEGUNDO * 10);

    const inputUser = await driver.wait(until.elementLocated(
      By.xpath('//*[@id="flt-semantic-node-7"]/input')
      ), SEGUNDO * 3
    );

    //await driver.sleep(DELAY);
    await inputUser.sendKeys('qxuco2024');
    //await driver.sleep(DELAY);

    const contraUser = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-8"]/input')
    );

    //await driver.sleep(DELAY);
    await contraUser.sendKeys("qxuco2024*");
    //await driver.sleep(DELAY);

    const botonLogin = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-10"]')
    );

    botonLogin.click();

    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="flt-semantic-node-19"]')),
      SEGUNDO * 10 
    )

    // My code Juan-Esteban
    const apartadoFinanzas = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-12"]')
    );

    await driver.sleep(DELAY);

    apartadoFinanzas.click();

    await driver.sleep(DELAY);

    const botonAtras = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-35"]')
    );

    botonAtras.click();

    // My code Juan-Esteban

    await driver.sleep(SEGUNDO * 20);

  } catch (error) {
    logReport(`Error en la automatización: ${error.message}`, "ERROR");
  } finally {
    // Cierra el navegador y finaliza el reporte
    await driver.quit();
    logReport("Cerrando el navegador.");
    logReport("=== FIN DEL REPORTE DE AUTOMATIZACIÓN ===");
  }
})();



// Función para agregar entradas al reporte de logs con formato bonito
function logReport(message, status = "INFO") {
  const timestamp = new Date().toLocaleString();
  const statusIcon = status === "ERROR" ? "❌" : status === "SUCCESS" ? "✅" : "ℹ️";
  const logMessage = `[${timestamp}] ${statusIcon} ${message}\n`;

  console.log(logMessage.trim()); // Mostrar en consola
  fs.appendFileSync(path.join(__dirname, 'test-report.log'), logMessage); // Escribir en archivo
}