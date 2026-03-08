# Gerador de Senhas (Node.js)

Um gerador simples de senhas aleatórias feito em JavaScript para execução no terminal usando Node.js.
O programa cria senhas com letras, números e símbolos de forma configurável.

---

## Funcionalidades

* Gera senhas aleatórias
* Comprimento da senha configurável
* Opção de incluir números
* Opção de incluir símbolos
* Execução simples via terminal

---

## Configuração

As opções podem ser alteradas no início do arquivo:

```javascript
const incluirNumeros = true;
const incluirSimbolos = true;
const comprimentoSenha = 12;
```

| Variável           | Descrição                 |
| ------------------ | ------------------------- |
| `incluirNumeros`   | Inclui números na senha   |
| `incluirSimbolos`  | Inclui símbolos especiais |
| `comprimentoSenha` | Define o tamanho da senha |

---

## Como executar

Execute o arquivo usando Node.js:

```
node Lockr.js
```

Exemplo de saída:

```
Bem vindo ao Gerador de Senhas!
Senha Gerada: G7@kP2!xQ9$d
```

---

## Observação

O programa utiliza `Math.random()` para gerar os caracteres, sendo adequado para fins educacionais e projetos simples.

---

Projeto criado para praticar **JavaScript e lógica de programação**.
