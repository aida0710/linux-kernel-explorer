---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/marvell/cesa/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_MARVELL_CESA) += marvell-cesa.o
marvell-cesa-objs := cesa.o cipher.o hash.o tdma.o

```
