import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Preencher e enviar o formulário de contato com dados dinâmicos', async ({ page }) => {
  const nome = faker.person.fullName();
  const email = faker.internet.email();
  const telefone = `(11) 9${faker.string.numeric(4)}-${faker.string.numeric(4)}`;
  const mensagem = faker.lorem.sentence();

  await page.goto('https://gleyslla.github.io/teste-de-formulario-de-contato/');
  await page.waitForSelector('form');

  await page.getByRole('textbox', { name: 'Nome campo obrigatório' }).fill(nome);
  await page.getByRole('textbox', { name: 'E-mail campo obrigatório' }).fill(email);
  await page.getByRole('textbox', { name: 'Telefone (opcional)' }).fill(telefone);
  await page.getByLabel('Assunto (opcional)').selectOption('outros');
  await page.getByRole('textbox', { name: 'Mensagem campo obrigatório' }).fill(mensagem);

  await page.getByRole('button', { name: 'Enviar mensagem - formulário' }).click();

  await expect(page.getByRole('heading', { name: 'Mensagem enviada com sucesso!' })).toBeVisible();
});
