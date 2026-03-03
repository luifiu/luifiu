

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

# Luiz Henrique

Bem-vindo ao workspace do `luiz-henrique`, um showcase interativo que demonstra:

- animações SVG/CSS responsivas
- badges de linguagens com links diretos
- fichas clicáveis que exibem descrições dinâmicas

---

## 🧩 Conteúdo

1. [Visão geral](#visão-geral)
2. [Configuração](#configuração)
3. [Estrutura do projeto](#estrutura-do-projeto)
4. [Uso](#uso)
5. [Tecnologias](#tecnologias)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

## Visão geral

Este repositório serve como portfólio demonstrativo e material de apoio, ideal para:

- Exibir animações CSS aplicadas a SVG
- Listar linguagens de programação com badges interativos
- Fornecer exemplos de sintaxe simples

### Exemplo: Animação SVG com CSS

```css
@keyframes walk {
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(8px) translateY(-6px); }
  100% { transform: translateX(0) translateY(0); }
}

svg {
  animation: walk 4s ease-in-out infinite;
}
```

### Linguagens suportadas

| Linguagem | Badge | Exemplo | Link |
|-----------|-------|---------|------|
| **HTML** | ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) | `<div>Conteúdo</div>` | [examples/html.html](examples/html.html) |
| **CSS** | ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) | `.class { color: #fff; }` | [examples/css.html](examples/css.html) |
| **JavaScript** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | `addEventListener('click', () => {})` | [examples/javascript.html](examples/javascript.html) |
| **Python** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | `print('Olá')` | [examples/python.html](examples/python.html) |
| **Java** | ![Java](https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white) | `System.out.println("Olá");` | [examples/java.html](examples/java.html) |
| **SQL** | ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white) | `SELECT * FROM tabela LIMIT 10;` | [examples/sql.html](examples/sql.html) |
| **MySQL** | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) | `CREATE DATABASE db;` | [examples/mysql.html](examples/mysql.html) |

### Exemplos de sintaxe

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<body>
  <h1>Bem-vindo</h1>
</body>
</html>
```

**CSS:**
```css
body {
  background: linear-gradient(180deg, #0f172a, #0b3a4a);
  color: #e6eef5;
  font-family: Inter, system-ui;
}
```

**JavaScript:**
```javascript
document.querySelectorAll('.lang').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Clicado:', btn.dataset.lang);
  });
});
```

**Python:**
```python
def exibir_linguagens():
    linguagens = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'SQL', 'MySQL']
    for lang in linguagens:
        print(f"Linguagem: {lang}")

exibir_linguagens()
```

**Java:**
```java
public class Showcase {
  public static void main(String[] args) {
    String[] linguagens = {"HTML", "CSS", "JavaScript", "Python", "Java", "SQL", "MySQL"};
    for (String lang : linguagens) {
      System.out.println("Linguagem: " + lang);
    }
  }
}
```

**SQL:**
```sql
SELECT nome, descricao FROM linguagens WHERE ativa = true;
```

**MySQL:**
```sql
CREATE DATABASE portfolio;
USE portfolio;
CREATE TABLE linguagens (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  descricao TEXT
);
```

## Configuração

Execute localmente em poucos passos:

```bash
git clone https://github.com/luifiu/luifiu.git
cd luifiu
python3 -m http.server 8000
# abra http://localhost:8000/index.html
```

## Estrutura do projeto

```
.
├── assets/               # ícones e recursos estáticos
├── examples/             # páginas de exemplo por linguagem
├── index.html            # página principal com interface interativa
├── script.js             # lógica das fichas e descrições
└── styles.css            # estilos globais e animação
```

## Uso

- Abra `index.html` no navegador para interagir com a interface.
- Clique nas fichas de linguagem para visualizar descrições no painel lateral.
- Consulte as páginas em `examples/` para ver snippets de HTML, CSS, JavaScript, Python, Java, SQL e MySQL.

> Os badges no topo da página levam diretamente aos exemplos correspondentes.

---

## 📁 Portfólio de Projetos

### 1. **Sistema de Gerenciamento de Tarefas**
Aplicação web completa para organizar e controlar tarefas do dia a dia.

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

**Funcionalidades:**
- Interface responsiva com design moderno
- Adicionar, editar e deletar tarefas
- Persistência de dados em banco MySQL
- Filtros por status (ativa, concluída, cancelada)

---

### 2. **Analisador de Código Python**
Ferramenta que analisa qualidade de código Python e gera relatórios.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)

**Funcionalidades:**
- Análise de complexidade ciclomática
- Detecção de código duplicado
- Armazenamento de métricas em banco de dados
- Geração de gráficos comparativos

```python
def analisar_arquivo(caminho):
    with open(caminho, 'r') as f:
        linhas = f.readlines()
    return len(linhas), calcular_complexidade(linhas)
```

---

### 3. **Dashboard de Vendas**
Plataforma interativa de visualização de dados de vendas em tempo real.

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

**Funcionalidades:**
- Gráficos interativos com Chart.js
- Filtros por período e região
- Exportação de relatórios em PDF
- Atualização automática a cada minuto

---

### 4. **API REST de Blog**
Backend robusto para gerenciar conteúdo de um blog.

![Java](https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)

**Endpoints:**
```
GET    /api/posts          - Listar todos os posts
POST   /api/posts          - Criar novo post
PUT    /api/posts/{id}     - Atualizar post
DELETE /api/posts/{id}     - Deletar post
GET    /api/posts/{id}     - Obter post específico
```

---

### 5. **Calculadora de Investimentos**
Aplicação que simula diferentes cenários de investimento.

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)

**Funcionalidades:**
- Cálculo de juros simples e compostos
- Simulação de investimento mensal
- Comparação entre diferentes cenários
- Exportação de tabelas com resultados

---

### 6. **Sistema de Autenticação e Autorização**
Módulo seguro de login e controle de permissões para aplicações web.

![Java](https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)

**Funcionalidades:**
- Hash seguro de senhas com bcrypt
- Tokens JWT para autenticação
- Roles e permissões granulares
- Auditoria de acesso

---

### 7. **Monitor de Performance de Servidor**
Ferramenta Python para monitorar e logar performance de servidores.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)

**Funcionalidades:**
- Monitoramento de CPU, RAM e disco
- Alertas automáticos quando limites são atingidos
- Histórico de métricas em banco de dados
- Relatórios diários por email

## Tecnologias

- **HTML5** – marcação semântica
- **CSS3** – layout responsivo, gradientes e animações
- **JavaScript** – manipulação do DOM e eventos de clique

## Contribuição

Contribuições são bem-vindas! Abra um *issue* ou *pull request* para sugerir melhorias de design, correções ou novos exemplos.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.
