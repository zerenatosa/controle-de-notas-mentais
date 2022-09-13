CONTROLE DE NOTAS MENTAIS E SUA REALIZAÇÃO

1 - Qual é o tema da aplicação web referente ao projeto da disciplina?
A aplicação tem por objetivo organizar as notas mentais do usuário e sua realização ou seu descarte.
Notas mentais podem ser lembretes para execução de uma determinada tarefa ou uma ideia para execução de um projeto. Cada uma das notas mentais deve ter seu arco concluído para que o usuário saiba se ela foi executada (se for uma tarefa) ou se ela foi descartada (se foi uma ideia de projeto descartada).
2 - Quais são as principais funcionalidades desta aplicação web a ser desenvolvida?
Listas das notas mentais com prazos de execução, viabildiade, intervenientes, espaço para anotação;
3 - Qual é o link do repositório no GitHub que será usado para armazenar o código-fonte do projeto?


PROTÓTIPO - NOTAS MENTAIS

https://www.figma.com/file/b0CsuAwRziRJrB91VSGH9O/Untitled?node-id=8%3A467


Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. <br />
      :arrow_right: link disponível <a href='https://github.com/zerenatosa/controle-de-notas-mentais' target="_blank" >aqui</a> <br /><br />
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro) <br />
      :arrow_right: verificar dependências instaladas no package.json <br /><br />
- [ ] Apresentar as telas com layout responsivo usando ou não algum framework CSS.<br />
      :arrow_right: verificar arquivos "src\app\testeira-nota-mental\testeira-nota-mental.component.ts" e "src\app\testeira-nota-mental\testeira-nota-mental.component.html"<br /><br />
- [ ] Construir páginas web com o conceito de componentes.<br />
      verificar os componentes criados na pasta src/app<br /><br />
- [ ] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.<br />
      verificar no arquivo "src\app\app.component.html"
- [ ] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
      disponível em diversos componentes da aplicação. por exemplo nos componentes "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html", "src\app\notas-concluidas\notas-concluidas.component.html"
- [ ] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
      verificar componente "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"
- [ ] Mapear componentes à rotas no módulo de rotas.
      verificar arquivo "src\app\app-routing.module.ts"
- [ ] Criar navegação entre páginas por meio de rotas.
      verificar aquivo "src\app\app-routing.module.ts"
- [ ] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
      verficar os diversos componentes e arquivos de service
- [ ] Validar campos do formulário com REGEX e apresentar os erros.
      verificar o arquivo "src\app\nova-nota-mental\nova-nota-mental.component.html"
- [ ] Desabilitar o botão de submit enquanto o formulário está inválido.
      verificar o arquivo "src\app\nova-nota-mental\nova-nota-mental.component.html"
- [ ] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
      verificar os arquivos "src\app\services\service-notas-mentais.service.ts", "src\app\nova-nota-mental\nova-nota-mental.component.ts", "src\app\notas-concluidas\notas-concluidas.component.ts", "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"
- [ ] Cadastrar uma entidade no JSON Server.
      verificar os arquivos "src\app\services\service-notas-mentais.service.ts", "src\app\nova-nota-mental\nova-nota-mental.component.ts", "src\app\notas-concluidas\notas-concluidas.component.ts", "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"
- [ ] Apresentar uma lista de dados com a diretiva estrutural ngFor.
      verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"
- [ ] Usar a diretiva ngIf
      verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"
- [ ] Formatar a apresentação de dados com Pipes.
      verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"
- [ ] Build e deploy da aplicação..
      verificar link 
