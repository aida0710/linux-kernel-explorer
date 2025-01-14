---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/allwinner/sun8i-ce/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_CRYPTO_DEV_SUN8I_CE) += sun8i-ce.o
sun8i-ce-y += sun8i-ce-core.o sun8i-ce-cipher.o
sun8i-ce-$(CONFIG_CRYPTO_DEV_SUN8I_CE_HASH) += sun8i-ce-hash.o
sun8i-ce-$(CONFIG_CRYPTO_DEV_SUN8I_CE_PRNG) += sun8i-ce-prng.o
sun8i-ce-$(CONFIG_CRYPTO_DEV_SUN8I_CE_TRNG) += sun8i-ce-trng.o

```
