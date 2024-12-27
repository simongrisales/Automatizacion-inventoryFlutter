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

    const inputUser = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-7"]/input')
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

    const botonProductos = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]/flt-semantics-container/flt-semantics[2]')
    );

    botonProductos.click();
    await driver.sleep(DELAY);


    const botonCrear = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics')
    );

    botonCrear.click();
    await driver.sleep(DELAY);

    const inputnameprod = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-55"]/input')
    );

    await inputnameprod.sendKeys('MacBook Pro 16´');
    await driver.sleep(DELAY);

    const inputdescrip = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-56"]/input')
    );

    await inputdescrip.sendKeys("MacBook de 16 pulgadas");
    await driver.sleep(DELAY);

    const inputprecio = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-57"]/input')
    );

    await inputprecio.sendKeys('7000000');
    await driver.sleep(DELAY);

    const inputiva = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-58"]/input')
    );

    await inputiva.sendKeys('19');
    await driver.sleep(DELAY);

    const botonGuardar = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-69"]')
    );

    botonGuardar.click();

    await driver.sleep(DELAY);

    const botonflecha = await driver.findElement(
      By.xpath('//*[@id="flt-semantic-node-44"]')
    );

    await driver.sleep(DELAY);

    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="flt-semantic-node-29"]')), 
      SEGUNDO * 10 
    );

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