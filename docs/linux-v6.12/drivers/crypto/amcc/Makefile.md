---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/amcc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_PPC4XX) += crypto4xx.o
crypto4xx-y :=  crypto4xx_core.o crypto4xx_alg.o
crypto4xx-$(CONFIG_HW_RANDOM_PPC4XX) += crypto4xx_trng.o

```
