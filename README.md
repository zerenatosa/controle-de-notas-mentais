# controle-de-notas-mentais
controle de notas mentais e sua execução;

Atividade 08 - Criação do layout com componentes e uso do conceito de data-binding

Instalar e usar pelo menos um componente de algum framework CSS (Bootstrap, Materialize ou outro).
Estou usando materialize. É possível certificar-se disso na no arquivo "package-lock.json" na linha 23 onde consta "materialize-css": "^1.0.0",

Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
Atendido. Existem três componentes na aplicação, quais sejam: "exibicao-nota-mental", "sobre-nota-mental", "testeira-nota-mental". A testeira está declarada como "header"
no arquivo "app.component.html". O sobre está declarado como "footer" no arquivo "app.component.html".

Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
Estou usando property binding na linha 11 do arquivo "sobre-nota-mental.component.html"
   Clique <a [href]="sobreUrlGit" target="_blank" >aqui</a>  para abrir o projeto no GIT
Estou usando interpolation nas linhas 5 e 8 do arquivo "sobre-nota-mental.component.html"
&copy; Copyright - {{ this.year }} - Todos os direitos reservados
E-mail do desenvolvedor {{sobreEMailNotaMental}}
