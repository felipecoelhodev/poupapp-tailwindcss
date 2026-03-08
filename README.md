# Poupapp usando Tailwind CSS

Esta é a versão do **Poupapp** refatorada para utilizar **Tailwind CSS**. O Poupapp é uma representação apenas visual de um dashboard de finanças pessoais moderno e intuitivo, desenhado para reduzir a ansiedade financeira através de uma interface limpa que centraliza saldos, transações e metas de economia.

## O que mudou na Migração?

Ao sair dos CSS Modules para o Tailwind, o projeto ganhou:

- **Zero arquivos CSS extras**: Estilização _inline_ diretamente nos componentes.
- **Design Tokens Dinâmicos**: Uso de variáveis de tema (como `primaryhighlight`) integradas ao `tailwind.config.js`.
- **Responsividade Simplificada**: Uso de prefixos como `md:` e `lg:` em vez de Media Queries manuais.

## Funcionalidades

- **Resumo Financeiro**: Visualização clara do orçamento diário disponível.
- **Gestão de Contas**: Listagem de múltiplas contas bancárias e seus respectivos saldos.
- **Histórico de Transações**: Acompanhamento de receitas e despesas com categorização visual (entrada/saída).
- **Metas de Economia**: Barra de progresso visual estilizada com `transition-all` para monitorar o status.
- **Interface Consistente**: Design system baseado em classes utilitárias para garantir espaçamentos e cores uniformes.

## Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build de alta performance.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e escalável.
- **Intl API**: Formatação nativa de moedas (BRL) e datas.
- **Lucide React / SVGs**: Ícones leves integrados como componentes.

## Nova Estrutura de Componentes (Tailwind Style)

A arquitetura continua modular, mas agora utiliza o poder das classes do Tailwind:

- **Card**: Utiliza `bg-neutraldarker`, `rounded-lg` e `p-4` para criar containers consistentes.
- **Typography**: Abstração que mapeia variantes (h1, h2, body) para classes como `text-2xl font-bold` ou `text-sm text-gray-400`.
- **ProgressBar**: Implementada com uma div pai (`bg-neutraldarker overflow-hidden`) e uma div filha dinâmica (`bg-primaryhighlight transition-all duration-500`).
- **List / ListItem**: Utiliza `flex flex-col gap-2` para organização estrutural sem seletores CSS complexos.

Desenvolvido com foco em performance e DX por felipecoelhodev.
