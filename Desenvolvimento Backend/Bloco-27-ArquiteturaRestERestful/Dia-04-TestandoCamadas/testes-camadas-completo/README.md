Esse é um repositório para o conteúdo de `Arquitetura de Software - Testando as Camadas`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Antes de fazer os exercícios, siga os seguintes passos:

- Crie uma nova branch.
- Execute `npm install` para instalar suas dependências.
- Lembre-se de desativar sua instância do MongoDB quando for utilizar o `mongodb-memory-server` para testes.
- Execute `npm test` para verificar os testes existentes.

O resultado seria algo como na imagem abaixo.

![Saída do comando npm test](images/npm-test.png)

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

## Revisando

Nos exercícios iremos implementar todas as camadas, para adicionar um endpoint que recebe o `ID` de um filme específico que retorna os detalhes desse filme.

Esse endpoint terá os seguintes cenários:

- Quando é encontrado um filme com o `ID` passado pela pessoa usuária deverá retornar um objeto com todas as propriedades do filme e o código http 200 `OK` no status da response.
- Quando não é encontrado nenhum filme com o `ID` passado pela pessoa usuária deverá responder com código http 404 `Not Found` no status da response e com a mensagem “Filme não encontrado.”

### Exercício 1:

Seguindo o TDD, implemente a camada de model necessária para o end-point, aplicando os comportamentos para atender aos requisitos:

- Crie os testes da camada de model. Como essa camada é responsável por realizar as operações no BD, adicione as operações necessárias para que o endpoint funcione conforme esperado.
- Implemente os métodos para atender aos cenários descritos nos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar qualquer operação de leitura e escrita.

### Exercício 2:

Também seguindo o TDD, implemente a camada de service do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

- Crie os testes da camada de service. Lembre-se que essa camada é responsável pelas regras de negócio, e deverá fazer os tratamentos necessários com o input recebido do controller e com o output recebido do model.
- Implemente os métodos necessários para atender aos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

### Exercício 3:

Também seguindo o TDD, implemente a camada de controller do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

- Crie os testes da camada de controller. Lembre-se que essa camada é responsável por toda a comunicação com a pessoa usuária, devendo tratar seu input e output. Outro ponto de atenção é que diferente das outras camadas, os controllers são middlewares e será necessário criar asserções com os stubs para testar seus comportamentos.
- Implemente o código necessário para atender os cenários descritos nos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

### Exercício 4:

Faça os ajustes no `index.js` para finalizar o endpoint.
