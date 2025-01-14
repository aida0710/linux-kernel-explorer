---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/allwinner/sun8i-ss/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_CRYPTO_DEV_SUN8I_SS) += sun8i-ss.o
sun8i-ss-y += sun8i-ss-core.o sun8i-ss-cipher.o
sun8i-ss-$(CONFIG_CRYPTO_DEV_SUN8I_SS_PRNG) += sun8i-ss-prng.o
sun8i-ss-$(CONFIG_CRYPTO_DEV_SUN8I_SS_HASH) += sun8i-ss-hash.o

```
