# 🐍 Python Study Hub

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pythoncodex.pages.dev)
[![GitHub last commit](https://img.shields.io/github/last-commit/jzdigitalmarket/pythoncodex)](https://github.com/jzdigitalmarket/pythoncodex/commits/main)
[![HTML](https://img.shields.io/badge/Tech-HTML%20%2F%20CSS%20%2F%20JS-orange)](https://pythoncodex.pages.dev)
[![PWA](https://img.shields.io/badge/PWA-Instalável-4caf50?logo=pwa)](https://pythoncodex.pages.dev/pythonstudy.html)

> Referência interativa de Python com playground no navegador, quizzes e exemplos progressivos.

🌐 **Acesse:** [pythoncodex.pages.dev](https://pythoncodex.pages.dev)

---

## 📸 Telas

| Introdução | Hub de Estudos |
|---|---|
| Apresentação animada em 6 slides | Conteúdo com playground Pyodide |

---

## ✨ Funcionalidades

- **12 seções de conteúdo** com exemplos básico e intermediário
- **Playground Python** rodando no navegador via Pyodide (WebAssembly)
- **Quizzes interativos** ao final de cada seção
- **Barra de progresso** com badge ✓ por seção concluída
- **Modo escuro/claro** toggle
- **Botão "Abrir no Playground"** em cada exemplo
- **Atalho Ctrl+Enter** para executar código
- **PWA** — instalável como app no celular e desktop
- **Página de introdução** animada com 6 slides educativos

---

## 📚 Conteúdo

| # | Seção | Tópicos |
|---|---|---|
| 1 | 👋 Olá | Input, f-strings, formatação numérica |
| 2 | ⚙️ Funções | def, return, parâmetros padrão |
| 3 | 📂 Listas | append, remove, list comprehension |
| 4 | 🔑 Dicts | chave-valor, .get(), iteração |
| 5 | 🔄 Loops | for, while, break, range |
| 6 | ⚠️ Erros | try/except, múltiplos erros, finally |
| 7 | 🏗️ POO | classes, __init__, herança |
| 8 | 📊 Pandas | DataFrame, filtros, estatísticas |
| 9 | 📄 Arquivos | open, read, write, append |
| 10 | 🔍 Regex | re.search, re.findall, re.sub |
| 11 | 🌐 Requests | GET, POST, APIs, status codes |
| 12 | ✨ Decorators | wrapper, @sintaxe, timer |

---

## 🗂️ Estrutura

```
pythoncodex/
├── index.html        # Página de introdução (6 slides)
├── pythonstudy.html  # Hub de estudos interativo
├── manifest.json     # PWA manifest
├── sw.js             # Service Worker (cache offline)
└── README.md
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 / CSS3 / JS | Frontend |
| [Prism.js](https://prismjs.com/) | Syntax highlighting |
| [Pyodide](https://pyodide.org/) | Python no navegador (WebAssembly) |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Hospedagem + CDN global |
| PWA / Service Worker | Instalação e cache offline |

---

## 🚀 Deploy

O projeto usa **Cloudflare Pages** com deploy automático:

```bash
git add .
git commit -m "sua mensagem"
git push origin main
# → Cloudflare Pages faz o deploy automaticamente em ~30s
```

---

## 📱 Instalar como App (PWA)

1. Acesse [pythoncodex.pages.dev/pythonstudy.html](https://pythoncodex.pages.dev/pythonstudy.html)
2. No navegador, clique em **"Instalar"** ou no ícone 📲
3. O app aparece na tela inicial do celular/desktop

---

*Feito com 🐍 e muito café*
