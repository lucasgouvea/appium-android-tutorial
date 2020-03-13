import Driver, { Strategy } from './DriverMediator';
import { assert } from 'chai';
import Errors from './errors.enum';

describe("Test Tutorial", () => {
  let driver: Driver;
  before(async () => {
    /* Iniciando o driver */
    driver = new Driver();
    await driver.init();
  });

  it("Validando o texto da tela = 'Texto !'", async () => {
    /* Buscando o elemento da tela que tem o accessibility label igual à 'texto' */
    const element = await driver.find("texto", Strategy.ACCESS_ID);
    /* Pegando o texto do elemento */
    const text = await element.getText();
    /* Validando que o texto do elemento é igual ao texto esperado */
    assert(text === "Texto !");
  });

  it("Validando o texto da tela = 'Texto errado!' (deve falhar)", async () => {
    /* Buscando o elemento da tela que tem o accessibility label igual à 'texto' */
    const element = await driver.find("texto", Strategy.ACCESS_ID);
    /* Pegando o texto do elemento */
    const text = await element.getText();
    /* Comparando com um texto errado: o teste deve falhar */
    assert(text === "Texto errado!");
  });

  it("Pressionando o button e garantindo que o texto sumirá da tela", async () => {
    /* Buscando o elemento da tela que tem o accessibility label igual à 'button' */
    let element = await driver.find("button", Strategy.ACCESS_ID);
    /* Pressionando o button */
    driver.tap(element);
    /* Buscando o elemento da tela que tem o accessibility label igual à 'texto' */
    element = await driver.find("texto", Strategy.ACCESS_ID);
    /* Espera-se que não encontre o elemento. Portanto deve-se validar o erro de não localizado */
    // @ts-ignore
    assert(element.error.message === Errors.NOT_LOCATED);
  });

  it("Digitando no input, e validando o conteúdo digitado", async () => {
    /* Texto a ser escrito no input */
    const text = "teste teste teste";
    /* Buscando o elemento da tela que tem o accessibility label igual à 'input' */
    const element = await driver.find("input", Strategy.ACCESS_ID);
    /* Escrevendo no input */
    await driver.write(text, element);
    /* Pegando o texto escrito no input para validar que foi escrito */
    const inputText = await element.getText();
    /* Validando que o texto foi escrito */
    assert(text === inputText);
  });
});
