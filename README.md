# API usando Node.js sem library ou framework

Este é um projeto simples que fiz usando node.js puro, com o objetivo de praticar.
Aproveitei para botar em prática o algorítmo de binary search na rota de listagem por ID.

## Por que binary search?
Vamos supor que você precise trazer um dado que pertença a uma lista gigantesca de dados. Nesse cenário,
usar o método filter pode não ser muito eficiente uma vez que, o mesmo,
fará verificação item a item até chegar ao resultado esperado.

## E, então? Como resolver?
Se você tem uma lista de dados ordenados, você pode se aproveitar disso para fazer filtragens muito mais
rápidas ao invés de verificar item a item. Este algorítmo obrigatoriamente necessita de dados ordenados, pois sua
premissa parte de buscar o dado o mais rápido possível e, para fazer isso, baseia-se em uma ordem linear.

## Quer aprender mais sobre node.js para web e binary search?
[Binary search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search#:~:text=Binary%20search%20is%20an%20efficient,game%20in%20the%20introductory%20tutorial.)<br>
[Node.js docs](https://nodejs.org/api/http.html)
