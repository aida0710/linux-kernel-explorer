---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/inside-secure/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CRYPTO_DEV_SAFEXCEL) += crypto_safexcel.o
crypto_safexcel-objs := safexcel.o safexcel_ring.o safexcel_cipher.o safexcel_hash.o

```
