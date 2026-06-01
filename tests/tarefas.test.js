const {
  adicionarTarefa, concluirTarefa} = require("../src/tarefas");

describe("Sistema de tarefas", () => {

  test("Adicionar tarefa válida", () => {
    let lista = [];

    adicionarTarefa(lista, "Estudar Git");

    expect(lista.length).toBe(1);
  });

  test("Adicionar tarefa vazia", () => {
    let lista = [];

    adicionarTarefa(lista, "");

    expect(lista.length).toBe(0);
  });

  test("Concluir tarefa", () => {
    let lista = [
      {
        texto: "Estudar Jest",
        concluida: false
      }
    ];

    concluirTarefa(lista, 0);

    expect(lista[0].concluida).toBe(true);
  });

});