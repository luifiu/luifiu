

[![Pages status](https://github.com/luifiu/luifiu/actions/workflows/deploy_pages.yml/badge.svg)](https://github.com/luifiu/luifiu/actions)
[![Demo](https://img.shields.io/badge/Demo-Open-brightgreen?style=flat&logo=github-pages&logoColor=white)](index.html)
[![Guide](https://img.shields.io/badge/Guide-How%20to%20run-blue?style=flat&logo=readthedocs&logoColor=white)](README_CODESPACE.md)
[![Portfolio](https://img.shields.io/badge/Portfolio-Projects-purple?style=flat&logo=appveyor&logoColor=white)](PORTFOLIO.md)

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)](examples/html.html)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)](examples/css.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](examples/javascript.html)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](examples/python.html)
[![Java](https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white)](examples/java.html)
[![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)](examples/sql.html)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)](examples/mysql.html)

# Luifiu — Codespace Dinossauro

Bem-vindo ao workspace do `luifiu` — um pequeno showcase animado com um dinossauro em SVG/CSS e fichas interativas que destacam minhas linguagens favoritas.

Demo local

1. Abra um terminal na pasta do projeto.
2. Execute o servidor estático com Python:

```bash
python3 -m http.server 8000
# abra http://localhost:8000/index.html
```

Badges e ícones

Os botões na página mostram um pequeno ícone emoji para cada linguagem:

- 🟧 HTML
- 🎨 CSS
- ✨ JavaScript
- 🐍 Python
- ☕ Java
- 🗄️ SQL
- 🐬 MySQL

Exemplos rápidos

HTML (estrutura):

```html
<!doctype html>
<html>
	<body>
		<h1>Olá mundo</h1>
	</body>
</html>
```

CSS (estilos):

```css
body { background: #0f172a; color: #fff; }
```

JavaScript (interação):

```js
document.querySelector('.lang').addEventListener('click', ()=>{})
```

Python (script):

```py
print('Olá do Python')
```

Java (main):

```java
public class Main { public static void main(String[] args){ System.out.println("Olá"); } }
```

SQL (consulta):

```sql
SELECT * FROM usuarios LIMIT 10;
```

MySQL (exemplo):

```sql
CREATE DATABASE exemplo;
USE exemplo;
```

Deploy automático

Adicionei um workflow GitHub Actions para publicar o site no GitHub Pages (`.github/workflows/deploy_pages.yml`). Ao dar push em `main`, a action fará upload do conteúdo do repositório e disparará o deploy Pages. Nas configurações do repositório (Settings → Pages) confirme a fonte caso necessário.

Próximos passos

- Posso substituir os emojis por ícones SVG personalizados.
- Posso criar badges do tipo `shields.io` no topo do `README.md`.
- Posso abrir um PR com as mudanças ou commitar direto no `main` (você decide).

Quer que eu adicione ícones SVG personalizados e badges do `shields.io` agora?
