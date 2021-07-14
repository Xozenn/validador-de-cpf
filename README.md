## Validador de CPF com JavaScript

#### 2 versões: 

<ul>
  <li>Function</li>
  <li>Object</li>
</ul>

<p>Retorna true se for válido e false se for inválido, utilizei um gerador de CPF para o cálculo.</p>

#### Lógica
<p>Peguei o cpf, converti para String e tirei os 2 últimos dígitos com slice();<br>
Converto o CPF para Array para usar reduce e fazer o cálculo;<br>
Crio os dígitos com uma function ou método que retorna total += (númeroDaMultiplicacao * Number(valor));<br>
O digito é 11 - (total % 11) e se for maior que 9 retorna 0, senão retorna o pŕoprio digito convertido para String;<br>
Chamo essa function 2 vezes para gerar os 2 digitos e comparo com o cpf que foi enviado primeiramente, se for igual é válido;
</p>

![result](https://i.imgur.com/s5V6BSP.png)
