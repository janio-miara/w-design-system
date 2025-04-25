# Design System Interno - Guia de Uso e Manutenção

Este documento descreve como instalar, desenvolver, testar e publicar atualizações para o nosso Design System interno.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:
* Node.js (versão recomendada: v23.9.0 ou superior)
* Yarn (gerenciador de pacotes)
* Acesso de escrita ao repositório do Design System (para atualizações)
* Acesso para publicar no registro NPM (ou registro interno, se aplicável)

## Instalação para Desenvolvimento

Para configurar o ambiente local e trabalhar nos componentes do Design System:

1.  **Clone o repositório** (se ainda não o fez):
    ```bash
    git clone https://github.com/janio-miara/w-design-system
    cd w-design-system
    ```

2.  **Instale as dependências** necessárias com Yarn:
    ```bash
    yarn
    ```
    Este comando irá baixar e instalar todos os pacotes listados no `package.json` e `yarn.lock`.

## Desenvolvimento e Visualização dos Componentes

Utilizamos o [Storybook](https://storybook.js.org/) para visualizar e testar os componentes de forma isolada.

1.  **Inicie o Storybook**:
    ```bash
    yarn run storybook
    ```
2.  Após a execução, o Storybook estará disponível no seu navegador, geralmente em `http://localhost:6006`.

## Atualizando e Publicando o Design System (Deploy)

Quando você fizer alterações ou adicionar novos componentes e precisar disponibilizar uma nova versão para outros projetos, siga estes passos:

1.  **Certifique-se que todas as alterações foram testadas.**
2.  **Compile os componentes** para distribuição:
    ```bash
    yarn run build
    ```
    Este comando geralmente cria uma pasta `dist` com os arquivos prontos para serem publicados.

3.  **Atualize a versão do pacote**:
    * Abra o arquivo `package.json`.
    * Incremente a versão seguindo o versionamento semântico ([SemVer](https://semver.org/lang/pt-BR/)):
        * `MAJOR` (ex: 1.x.x -> 2.0.0) para mudanças incompatíveis (breaking changes).
        * `MINOR` (ex: x.1.x -> x.2.0) para adicionar funcionalidades de forma compatível.
        * `PATCH` (ex: x.x.1 -> x.x.2) para correções de bugs compatíveis.
    * *Alternativa:* Você pode usar o comando `npm version <patch|minor|major>` que atualiza o `package.json` e cria um commit/tag Git automaticamente.

4.  **Faça o commit das suas alterações**, incluindo a atualização do `package.json` e os arquivos compilados (se aplicável).
    ```bash
    git add .
    git commit -m "feat: Adiciona novo componente Button (ou chore: Atualiza versão para vX.Y.Z)"
    git push
    ```

5.  **Publique o pacote** no registro NPM (ou registro interno):
    ```bash
    npm publish
    ```
    *Nota:* Pode ser necessário fazer login no NPM via `npm login` antes de publicar pela primeira vez.

## Usando o Design System em Outros Projetos

Para utilizar a versão mais recente do Design System em um projeto diferente:

1.  **Instale o pacote**:
    Use o gerenciador de pacotes do seu projeto (Yarn ou NPM) para adicionar o `w-design-system`:

    Com Yarn:
    ```bash
    yarn add w-design-system@latest
    ```

    Com NPM:
    ```bash
    npm install w-design-system@latest
    ```

2.  **Importe e utilize os componentes** conforme necessário no seu código. Exemplo:
    ```javascript
    import { Button } from 'w-design-system';

    function MeuComponente() {
      return <Button label="Clique Aqui" />;
    }
    ```

---