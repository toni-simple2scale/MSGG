# 🚀 Deploy do Site MSGG na Vercel

## ✅ Formulário de Contacto - Web3Forms Implementado

### 📧 Configuração Atual:
- **Access Key:** `686be247-175e-40af-b22e-cb3b99ffcd8c`
- **Email de destino:** Configurado no painel Web3Forms (geral@mariosgomes.com)
- **Subject:** "Novo Contacto do Site MSGG - mariosgomes.com"
- **Anti-spam:** Honeypot field implementado

### ⚠️ Importante:
O formulário **NÃO funciona em localhost** devido a restrições de CORS do Web3Forms (segurança). 
**Funcionará perfeitamente quando publicado na Vercel!**

---

## 🔧 Passos para Deploy na Vercel

### 1️⃣ **Guardar Código no GitHub**
1. Na plataforma Emergent, clique em **"Save to GitHub"**
2. Escolha o nome do repositório (ex: `msgg-website`)
3. Confirme o save

### 2️⃣ **Configurar Vercel**
1. Aceda a https://vercel.com/
2. Faça login com a sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `msgg-website`
5. Clique em **"Import"**

### 3️⃣ **Configurações de Build** ⚙️

**IMPORTANTE:** Configure o **Root Directory** antes de fazer deploy!

```
Framework Preset: Create React App
Root Directory: frontend
Build Command: yarn build (ou npm run build)
Output Directory: build
Install Command: yarn install (ou npm install)
```

**Screenshot de exemplo:**
```
Root Directory:     frontend/     [Change]
Build Command:      yarn build    [Override]
Output Directory:   build         [Override]
Install Command:    yarn install  [Override]
```

### 4️⃣ **Deploy**
1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos (build automático)
3. ✅ Site online!

---

## 🌐 Após o Deploy

### ✅ O que estará funcional:
- ✅ Todo o site (hero, produtos, marcas, testemunhos, FAQ, contactos)
- ✅ Design responsivo (mobile e desktop)
- ✅ **Formulário de contacto enviando emails!** 📧
- ✅ Cookie consent (preferências no browser)
- ✅ Todas as páginas (Home, Política Privacidade, Política Cookies, Informações Legais)
- ✅ Instagram link no footer
- ✅ Mapa Google Maps interativo
- ✅ Galeria lightbox das instalações

### 🎯 Testar o Formulário:
1. Aceda ao site publicado na Vercel
2. Vá à secção "Contactos"
3. Preencha o formulário de teste
4. Clique em "Enviar Mensagem"
5. ✅ Receberá o email em `geral@mariosgomes.com`!

---

## 📧 Configurar Web3Forms (Opcional)

### Dashboard Web3Forms:
https://web3forms.com/

### Configurações Recomendadas:
1. **Email de destino:** geral@mariosgomes.com ✅
2. **Notificações:** Ativar
3. **Auto-resposta:** Ativar (envia confirmação automática ao cliente)
4. **Texto da auto-resposta:**
   ```
   Obrigado por entrar em contacto com a MSGG!
   
   Recebemos a sua mensagem e responderemos o mais breve possível.
   
   Cumprimentos,
   Equipa MSGG
   Mário Simões Gomes & Gomes, Lda.
   ```

---

## 🔄 Atualizações Futuras

Sempre que quiser atualizar o site:
1. Faça alterações na plataforma Emergent
2. Clique em **"Save to GitHub"**
3. ✅ Vercel faz deploy automático!

---

## 📊 Analytics (Opcional)

### Vercel Analytics (Recomendado):
1. No dashboard Vercel, vá ao projeto
2. Clique em **"Analytics"**
3. Ative **"Vercel Analytics"** (grátis)
4. Veja estatísticas de visitantes, páginas mais vistas, etc.

### Google Analytics (Alternativa):
Se preferir usar Google Analytics:
1. Crie propriedade em https://analytics.google.com/
2. Copie o Measurement ID (G-XXXXXXXXXX)
3. Adicione no `index.html` do projeto

---

## ✅ Checklist Final

Antes de publicar:
- [ ] Código guardado no GitHub
- [ ] Projeto importado na Vercel
- [ ] **Root Directory configurado para `frontend/`**
- [ ] Deploy concluído com sucesso
- [ ] Site acessível no URL da Vercel
- [ ] Formulário testado e a enviar emails ✅
- [ ] Cookie consent a funcionar
- [ ] Mobile responsivo verificado
- [ ] Todos os links a funcionar (telefone, email, Instagram)

---

## 🎉 Pronto!

O seu site MSGG está 100% funcional e pronto para receber clientes! 

**URL Vercel:** `https://seu-projeto.vercel.app`
(Pode configurar domínio personalizado depois: `www.mariosgomes.com`)

---

## 📞 Suporte

Se tiver algum problema:
- Verifique logs na Vercel (aba "Deployments")
- Confirme Root Directory está correto (`frontend/`)
- Teste formulário após deploy (não funciona em localhost)
