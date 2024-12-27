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

    await driver.sleep(DELAY);

    // code Emmanuel
    const botonProductos = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]/flt-semantics-container/flt-semantics[2]')
    );

    botonProductos.click();

    await driver.sleep(SEGUNDO * 3);


    const botonCrear = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics')
    );

    botonCrear.click();

    await driver.sleep(SEGUNDO * 3);

    const inputnameprod = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[2]/input')
    );

    await inputnameprod.sendKeys('MacBook Pro 16´');

    await driver.sleep(SEGUNDO * 3);

    const inputdescrip = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[3]/input')
    );

    await inputdescrip.sendKeys("MacBook de 16 pulgadas");

    await driver.sleep(SEGUNDO * 3);

    const inputprecio = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[4]/input')
    );

    await inputprecio.sendKeys('7000000');

    await driver.sleep(SEGUNDO * 3);

    const inputiva = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[5]/input')
    );

    await inputiva.sendKeys('19');

    await driver.sleep(SEGUNDO * 3);

    const botonGuardar = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[16]')
    );

    botonGuardar.click();

    await driver.sleep(SEGUNDO * 3);

    const botonflechaProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    botonflechaProducto.click();

    await driver.sleep(DELAY);
    // code Emmanuel cerrar

    // code Simon
    const botonVentas = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics')
    );

    botonVentas.click();

    await driver.sleep(SEGUNDO * 3);

    const botonUrl = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]')
    );

    botonUrl.click();

    await driver.sleep(SEGUNDO * 3);

    const botonUrlProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[7]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]')
    );
      
    botonUrlProducto.click();

    await driver.sleep(SEGUNDO * 3);

    const botonConfirmarProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]')
    );
      
    botonConfirmarProducto.click();

    await driver.sleep(SEGUNDO * 3);

    const botonMetodosDePago = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]')
    );

    botonMetodosDePago.click();

    await driver.sleep(SEGUNDO * 3);

    const botonAñadirMetodoDePago = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics')
    );

    botonAñadirMetodoDePago.click();

    await driver.sleep(SEGUNDO * 3);

    const inputMonto = await driver.wait(until.elementLocated(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[2]/input')
      ), SEGUNDO * 3
    );

    await inputMonto.sendKeys('20000');

    await driver.sleep(SEGUNDO * 3);

    const botonConfirmarMetodo = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]')
    );

    botonConfirmarMetodo.click();

    await driver.sleep(SEGUNDO * 3);

    const botonConfirmarVenta = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[5]/flt-semantics-container/flt-semantics')
    );

    botonConfirmarVenta.click();

    await driver.sleep(SEGUNDO * 3);

    const botonVolverDeVentas = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    botonVolverDeVentas.click();

    await driver.sleep(DELAY);
    //code Simon cerrar

    // code Julian
    const historicoVentas = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics')
    );

    historicoVentas.click();
    
    await driver.sleep(SEGUNDO * 3);

    const calendario = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[3]')
    );

    calendario.click();

    await driver.sleep(SEGUNDO * 3);
    
    const cerrarCalendario = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    cerrarCalendario.click();

    await driver.sleep(SEGUNDO * 3);
    
    const resumen = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]')
    );

    resumen.click();

    await driver.sleep(SEGUNDO * 3);
    
    const resumencerrar = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[12]')
    );

    resumencerrar.click();

    await driver.sleep(SEGUNDO * 3);
    
    const porProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[5]')
    );

    porProducto.click();

    await driver.sleep(SEGUNDO * 3);
    
    const cerrarPorProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[5]')
    );
  
    cerrarPorProducto.click();

    await driver.sleep(SEGUNDO * 3);
    
    const Factura = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[6]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics')
    );

    Factura.click();

    await driver.sleep(SEGUNDO * 3);
      
    const botondeAtras = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[9]')
    );

    botondeAtras.click();

    await driver.sleep(SEGUNDO * 3);
  
    const flechaAtrasDashboard = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    flechaAtrasDashboard.click();

    await driver.sleep(DELAY);
    // code Julian cerrar

    // code Juan Esteban
    const apartadoFinanzas = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]/flt-semantics-container/flt-semantics')
    );

    apartadoFinanzas.click();

    await driver.sleep(DELAY);

    const botonAtrasFinanzas = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    botonAtrasFinanzas.click();

    await driver.sleep(SEGUNDO * 3);

    const gestionDeProductos = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[4]/flt-semantics-container/flt-semantics[2]')
    );
  
    gestionDeProductos.click();

    await driver.sleep(SEGUNDO * 3);

    const verProductos = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics')
    );

    verProductos.click();

    await driver.sleep(DELAY);

    /*const producto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics')
    );

    producto.click();

    await driver.sleep(SEGUNDO * 3);
    
    const botonInvantario = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[2]/flt-semantics-container/flt-semantics[15]')
    );

    await driver.sleep(DELAY);

    const proveedor = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[2]/input')
    );

    await proveedor.sendKeys("Apple Company")

    await driver.sleep(DELAY);
    
    const precioCompra = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[3]/input')
    );
    
    await precioCompra.sendKeys("50000")

    await driver.sleep(DELAY);

    const inputCantidad = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[4]/input')
    );

    await precioCompra.sendKeys("30")

    await driver.sleep(DELAY);
    
    const agregarProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[3]')
    );

    agregarProducto.click();

    await driver.sleep(SEGUNDO * 3);

    const volverInventario = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    volverInventario.click();

    await driver.sleep(SEGUNDO * 3);*/

    const botonVolverProducto = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    botonVolverProducto.click();

    await driver.sleep(SEGUNDO * 3);

    const botonVolverGestion = await driver.findElement(
      By.xpath('/html/body/flutter-view/flt-semantics-host/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics/flt-semantics-container/flt-semantics[1]/flt-semantics-container/flt-semantics[1]')
    );

    botonVolverGestion.click();

    await driver.sleep(DELAY);
    // code Juan Esteban cerrar
    
    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="flt-semantic-node-19"]')),
      SEGUNDO * 3 
    )

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