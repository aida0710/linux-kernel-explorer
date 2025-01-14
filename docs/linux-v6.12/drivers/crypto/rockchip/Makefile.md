---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/rockchip/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_ROCKCHIP) += rk_crypto.o
rk_crypto-objs := rk3288_crypto.o \
		  rk3288_crypto_skcipher.o \
		  rk3288_crypto_ahash.o

```
