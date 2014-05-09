Assinatura Digital via JavaScript
===========================

Motivação: portais que produzem informações sigilosas ou que exigem a assinatura digital de quem produz a informação em questão, podem se beneficiar do emprego de JavaScript para execução de tais operações e, desta forma, desobrigar a instalação de plug-in para a realização de tais operações.
Usar recurso como jsrasign (http://kjur.github.io/jsrsasign/) ou equivalente pode ser empregado para este trabalho.
Criar uma página por meio da qual se seleciona um documento e outras informações necessárias para que o documento seja assinado digitalmente. 
No sentido inverso, a página deverá, ao receber um documento assinado, verificar a assinatura do mesmo.  
É possível e provável a interação com leitor de token contendo o certificado digital empregado para assinar o documento e, neste caso, devem ser observadas as recomendações do ICP-Brasil, se for o caso. Isto se aplica a padrões, dispositivos possíveis e outros.
Pode ser necessária a conversão de um vetor de bytes em uma string ou vice-versa e, neste caso, a sugestão é consultar o portal http://updates.html5rocks.com/2012/06/How-to-convert-ArrayBuffer-to-and-from-String. 
O link https://blogs.oracle.com/rohanpinto/entry/javacard_drivers contém detalhes que podem ser úteis para compreensão das questões envolvidas com o acesso a leitoras de cartões, onde um certificado está armazenado. 
Observe que http://en.wikipedia.org/wiki/PC/SC também pode ser útil para compreender a "conexão" com leitores de cartões onde certificados estão armazenados.
