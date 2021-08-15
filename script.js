nomeCompleto = "Eduardo Davis"
apelido = "mens"
idade = 30
dataNascimento = "25/11/1990"
localNascimento = "Araruna"
altura = 1.70
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao);