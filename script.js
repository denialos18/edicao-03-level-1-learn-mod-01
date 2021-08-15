//presentacao de perfil pessoal
nomeCompleto = "Eduardo Davis"
apelido = "mens"
idade = 30
dataNascimento = "25/11/1990"
localNascimento = "Araruna"
altura = 1.70
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao);

//verifica atraves de modulos comparativos se dois nomes sao iguais ou diferentes
nomeDoFulano = 'Eduardo'
nomeDoBeltrano = 'Fabiano'

mesmoNome = (nomeDoFulano == nomeDoBeltrano)
console.log(mesmoNome);


//calcula o valor da taxa de juros de um boleto
valorBoleto = 18.75

valorComJuros = ((valorBoleto * 1.1).toFixed(2))

console.log("O valor do boleto com juros é de " + valorComJuros);

//calcula a media aritmetica de 5 valores
item1 = 10
item2 = 45
item3 = 54
item4 = 89
item5 = 93

mediaAritmetica = item1 + item2 + item3 + item4 + item5 / 5

console.log("A média artimética calculada dos 5 itens é: " + mediaAritmetica);

//calcula a margem bruta de uma empresa
receitaLiquida = 1340.89
custoProduto = 34
margemBruta = 30

lucroBruto = (receitaLiquida - custoProduto)
margemBruta = ((lucroBruto / receitaLiquida) * 100).toFixed(2)

console.log("A margem bruta da empresa é de " + margemBruta + "%");


//calcula o resultado do saldo de conta
saldoConta = 3200
saldo = saldoConta - 99.0
saldo = saldoConta + 2500
saldo = saldoConta - 0.1
saldo = saldoConta * 0.25
saldo = saldoConta / 2

console.log("O saldo da conta é de R$ " + saldo.toFixed(2) + " reais");