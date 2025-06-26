Automação de Formulário de Contato

Projeto de automação de testes para validação de formulário de contato utilizando Playwright e boas práticas de testing.

Objetivo

Automatizar e validar o funcionamento do formulário de contato disponível em:
**https://gleyslla.github.io/teste-de-formulario-de-contato/**

Tecnologias

- **Playwright** - Framework de automação de testes
- **Node.js** - Runtime JavaScript
- **Faker.js** - Geração de dados de teste realistas

Estrutura do Projeto

```
projeto-automacao/
├── tests/          # Cenários de teste automatizados
├── playwright.config.js
└── package.json
```

Configuração do Ambiente

Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd projeto-automacao
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Instale os navegadores**
   ```bash
   npx playwright install chromium firefox webkit
   ```

Executando os Testes

### Execução completa
```bash
npx playwright test
```

### Execução com interface gráfica
```bash
npx playwright test --ui
```

### Execução em navegador específico
```bash
npx playwright test --project=chromium
```

### Execução com debug
```bash
npx playwright test --debug
```

## 📊 Relatórios e Resultados

### Visualizar relatório HTML
```bash
npx playwright show-report
```

Captura de evidências
Os testes geram automaticamente:
- Screenshots em caso de falha
- Vídeos da execução
- Trace files para debug

Cenários de Teste

O projeto inclui validações para:
- ✅ Preenchimento obrigatório de campos
- ✅ Validação de formato de e-mail
- ✅ Envio de formulário com dados válidos
- ✅ Mensagens de erro e sucesso
- ✅ Responsividade em diferentes dispositivos

 Configurações Personalizadas

As configurações podem ser ajustadas no arquivo `playwright.config.js`:
- Timeout de testes
- Browsers utilizados
- Configurações de captura
- Paralelização


Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
