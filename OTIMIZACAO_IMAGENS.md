# 🖼️ Otimização de Imagens - MSGG Website

## 📊 Situação Atual

A imagem da hero page (`MSGG HERO.png`) tem atualmente **16.26 MB**, o que é muito pesado e pode afetar o tempo de carregamento do site.

## ✅ Recomendações

### 1. Comprimir a Imagem da Hero

**Tamanho Ideal:** 100-300 KB (redução de ~98%)

**Ferramentas Online Gratuitas:**
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/ (recomendado, by Google)
- **ImageOptim** - https://imageoptim.com/ (Mac)
- **CompressJPEG** - https://compressjpeg.com/

### 2. Formato Recomendado

- **WebP** - Formato moderno com melhor compressão (suportado por todos os browsers modernos)
- **JPEG** - Alternativa segura, qualidade 75-85%

### 3. Como Otimizar

#### Opção A: Squoosh (Recomendado)
1. Aceder a https://squoosh.app/
2. Fazer upload da imagem `MSGG HERO.png`
3. Escolher formato **WebP** ou **JPEG**
4. Ajustar qualidade para **75%**
5. Comparar visualmente (lado esquerdo vs direito)
6. Download da imagem otimizada

#### Opção B: TinyPNG
1. Aceder a https://tinypng.com/
2. Fazer upload da imagem
3. Download automático da versão comprimida

### 4. Substituir no Código

Após comprimir a imagem:

1. Fazer upload da nova imagem otimizada para o assets
2. Substituir o URL em `/app/frontend/src/pages/Home.js`:

```javascript
// Linha ~306
backgroundImage: 'url(NOVO_URL_DA_IMAGEM_OTIMIZADA)',
```

3. Também atualizar em `/app/frontend/src/pages/Home.js` na secção "Sobre Nós":

```javascript
// Linha ~944
src="NOVO_URL_DA_IMAGEM_OTIMIZADA"
```

## 📈 Benefícios da Otimização

- ⚡ **Carregamento mais rápido** - Hero page carrega imediatamente
- 📱 **Melhor experiência mobile** - Menos dados consumidos
- 🎯 **Melhor SEO** - Google favorece sites rápidos
- 💰 **Menos custos** - Menos largura de banda

## 🔄 Outras Imagens

As imagens da galeria da loja também poderiam ser otimizadas:
- `Instalações Mário Simões Gomes & Gomes.jpeg` - 2.66 MB
- `Instalações Mário Simões Gomes & Gomes 1.jpeg` - 2.37 MB

**Total de economia possível:** ~20 MB → ~1 MB (95% de redução)

## ✅ Já Implementado

- Lazy loading nas imagens da galeria e secção "Sobre Nós"
- Alt texts descritivos para SEO e acessibilidade
- Imagens responsivas

## 📝 Nota

A compressão de imagens não afeta a qualidade visual perceptível. Com as ferramentas certas, é possível reduzir 90% do tamanho mantendo a mesma aparência!
