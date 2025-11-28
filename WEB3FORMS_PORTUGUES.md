# 📧 Configurar Web3Forms em Português

## ✅ Já Implementado no Código

Os **nomes dos campos** já estão em português no código:
- Nome
- Email  
- Telefone
- Mensagem

**Resultado:** Quando o email chegar, os campos aparecerão com estes nomes em português.

---

## 🔧 Configuração Adicional no Dashboard Web3Forms

Para alterar o **template completo do email** (incluindo "Hello, A new form has been submitted..."), precisa configurar no dashboard:

### Passo 1: Aceder ao Dashboard
1. Ir para https://web3forms.com/
2. Fazer login com a sua conta
3. Selecionar o formulário MSGG (Access Key: `686be247-175e-40af-b22e-cb3b99ffcd8c`)

### Passo 2: Configurar Template em Português

**Opção A: Configurações Básicas**
1. Ir para **Settings** > **Email Settings**
2. Procurar por "Email Subject" e configurar:
   ```
   Novo Contacto do Site MSGG - mariosgomes.com
   ```
   ✅ (Já está configurado no código)

**Opção B: Template Personalizado (Se disponível)**
1. Procurar por "Custom Template" ou "Email Template"
2. Ativar "Custom Template"
3. Substituir o template padrão por:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Novo Contacto do Site MSGG
        </h2>
        
        <p>Olá,</p>
        <p>Um novo formulário de contacto foi submetido no site. Detalhes abaixo:</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> {{Nome}}</p>
            <p><strong>Email:</strong> {{Email}}</p>
            <p><strong>Telefone:</strong> {{Telefone}}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">{{Mensagem}}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contacto em mariosgomes.com
        </p>
    </div>
</body>
</html>
```

### Passo 3: Testar
1. Enviar um teste através do site
2. Verificar se o email chega em português

---

## 📋 Configurações Recomendadas no Dashboard

### Email de Destino
- **To Email:** geral@mariosgomes.com ✅

### Resposta Automática (Auto-Reply)
Ativar e configurar em português:

**Assunto:**
```
Obrigado pelo seu contacto - MSGG
```

**Mensagem:**
```
Olá {{Nome}},

Obrigado por entrar em contacto connosco!

Recebemos a sua mensagem e responderemos o mais breve possível durante o nosso horário de funcionamento:
- Segunda a Sexta: 9:00h às 13:00h | 14:00h às 18:00h
- Sábado: 9:00h às 13:00h
- Domingo: Encerrado

Para questões urgentes, pode contactar-nos através de:
📞 +351 219 673 174
📧 geral@mariosgomes.com

Cumprimentos,
Equipa MSGG
Mário Simões Gomes & Gomes, Lda.
```

### Notificações
- ✅ Ativar notificações por email
- ✅ Email de notificação: geral@mariosgomes.com

### Anti-Spam
- ✅ Honeypot ativado (já implementado no código)
- ✅ reCAPTCHA (opcional, pode ativar no dashboard)

---

## 🎯 Resultado Final

Quando alguém preencher o formulário, você receberá:

**1. Email de Notificação:**
```
De: Website MSGG
Assunto: Novo Contacto do Site MSGG - mariosgomes.com

Olá,

Um novo formulário de contacto foi submetido no site. Detalhes abaixo:

Nome: [Nome do cliente]
Email: [Email do cliente]
Telefone: [Telefone do cliente]
Mensagem: [Mensagem do cliente]
```

**2. Cliente Recebe Auto-Reply:**
```
De: MSGG
Assunto: Obrigado pelo seu contacto - MSGG

Olá [Nome],

Obrigado por entrar em contacto connosco!
...
```

---

## ⚠️ Nota Importante

Se o Web3Forms **não permitir templates personalizados** no plano gratuito:
- ✅ Os **nomes dos campos em português** já funcionam (implementado)
- ⚠️ O texto "Hello, A new form has been submitted..." permanecerá em inglês
- 💡 **Solução:** Upgrade para plano pago ou aceitar o template padrão em inglês

**Os campos importantes (Nome, Email, Telefone, Mensagem) já estão em português!** 🇵🇹
