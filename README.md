# controle-de-notas-mentais
# <b>Atividade 08 - Criação do layout com componentes e uso do conceito de data-binding</b>


<b>Atividade 08 - Criação do layout com componentes e uso do conceito de data-binding</b>

<b>Instalar e usar pelo menos um componente de algum framework CSS (Bootstrap, Materialize ou outro).</b><br />
Estou usando materialize.<br /> É possível certificar-se disso na no arquivo "package-lock.json" na linha 23 onde consta "materialize-css": "^1.0.0",

<b>Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.</b><br />
Atendido.<br /> Existem três componentes na aplicação, quais sejam: "exibicao-nota-mental", "sobre-nota-mental", "testeira-nota-mental". <br />A testeira está declarada como "header" no arquivo "app.component.html".<br /> O sobre está declarado como "footer" no arquivo "app.component.html".

<b>Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).</b><br />
Estou usando property binding na linha 11 do arquivo "sobre-nota-mental.component.html"<br />
   Clique <a [href]="sobreUrlGit" target="_blank" >aqui</a>  para abrir o projeto no GIT<br />
Estou usando interpolation nas linhas 5 e 8 do arquivo "sobre-nota-mental.component.html"<br />
&copy; Copyright - {{ this.year }} - Todos os direitos reservados<br />
E-mail do desenvolvedor {{sobreEMailNotaMental}}<br />
