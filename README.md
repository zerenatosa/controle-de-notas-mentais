# CONTROLE DE NOTAS MENTAIS E SUA REALIZAÇÃO

1 - Qual é o tema da aplicação web referente ao projeto da disciplina?<br />
A aplicação tem por objetivo organizar as notas mentais do usuário e sua realização.<br />
Notas mentais podem ser lembretes para execução de uma determinada tarefa ou uma ideia para execução de um projeto. Cada uma das notas mentais deve ter seu arco concluído para que o usuário saiba se ela foi executada.<br /><br />
2 - Quais são as principais funcionalidades desta aplicação web a ser desenvolvida?<br />
Listas das notas mentais com prazos de execução, intervenientes, descrição, escopo, situação.<br /><br />
3 - Qual é o link do repositório no GitHub que será usado para armazenar o código-fonte do projeto?<br /><br />

# Endereço de Deploy - GitHub Pages
  https://zerenatosa.github.io/controle-de-notas-mentais/land-page<br /><br />
# PROTÓTIPO - NOTAS MENTAIS

https://www.figma.com/file/b0CsuAwRziRJrB91VSGH9O/Untitled?node-id=8%3A467<br /><br />


# Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. <br />
      :arrow_right: link disponível <a href='https://github.com/zerenatosa/controle-de-notas-mentais' target="_blank" >aqui</a> <br /><br />
      
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro) <br />
      :arrow_right: verificar dependências instaladas no package.json <br /><br />
      
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.<br />
      :arrow_right: verificar arquivos "src\app\testeira-nota-mental\testeira-nota-mental.component.ts" e "src\app\testeira-nota-mental\testeira-nota-mental.component.html"<br /><br />
      
- [x] Construir páginas web com o conceito de componentes.<br />
      :arrow_right: verificar os componentes criados na pasta src/app<br /><br />
      
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.<br />
      :arrow_right: verificar no arquivo "src\app\app.component.html"<br /><br />
      
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).<br />
      :arrow_right: disponível em diversos componentes da aplicação. por exemplo nos componentes "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html", "src\app\notas-concluidas\notas-concluidas.component.html"<br /><br />
      
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.<br />
      :arrow_right: verificar componente "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"<br /><br />
      
- [x] Mapear componentes à rotas no módulo de rotas.<br />
      :arrow_right: verificar arquivo "src\app\app-routing.module.ts"<br /><br />
      
- [x] Criar navegação entre páginas por meio de rotas.<br />
      :arrow_right: verificar aquivo "src\app\app-routing.module.ts"<br /><br />
      
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.<br />
      :arrow_right: verficar os diversos componentes e arquivos de service<br /><br />
      
- [x] Validar campos do formulário com REGEX e apresentar os erros.<br />
      :arrow_right: verificar o arquivo "src\app\nova-nota-mental\nova-nota-mental.component.html"<br /><br />
      
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.<br />
      :arrow_right: verificar o arquivo "src\app\nova-nota-mental\nova-nota-mental.component.html"<br /><br />
      
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.<br />
      :arrow_right: verificar os arquivos "src\app\services\service-notas-mentais.service.ts", "src\app\nova-nota-mental\nova-nota-mental.component.ts", "src\app\notas-concluidas\notas-concluidas.component.ts", "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"<br /><br />
      
- [x] Cadastrar uma entidade no JSON Server.<br />
      :arrow_right: verificar os arquivos "src\app\services\service-notas-mentais.service.ts", "src\app\nova-nota-mental\nova-nota-mental.component.ts", "src\app\notas-concluidas\notas-concluidas.component.ts", "src\app\exibicao-nota-mental\exibicao-nota-mental.component.ts"<br /><br />
      
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.<br />
      :arrow_right: verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"<br /><br />
      
- [x] Usar a diretiva ngIf<br />
      :arrow_right: verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"<br /><br />
      
- [x] Formatar a apresentação de dados com Pipes.<br />
      :arrow_right: verificar os arquivos "src\app\exibicao-nota-mental\exibicao-nota-mental.component.html" e "src\app\notas-concluidas\notas-concluidas.component.html"<br /><br />
      
- [x] Build e deploy da aplicação..<br />
      :arrow_right: verificar <a href="https://zerenatosa.github.io/controle-de-notas-mentais/land-page">aqui</a><br /><br />
