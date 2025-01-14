---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/chelsio/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(srctree)/drivers/net/ethernet/chelsio/cxgb4

obj-$(CONFIG_CRYPTO_DEV_CHELSIO) += chcr.o
chcr-objs :=  chcr_core.o chcr_algo.o

```
