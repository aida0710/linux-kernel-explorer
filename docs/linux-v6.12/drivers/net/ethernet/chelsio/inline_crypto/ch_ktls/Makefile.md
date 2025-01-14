---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/chelsio/inline_crypto/ch_ktls/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(srctree)/drivers/net/ethernet/chelsio/cxgb4

obj-$(CONFIG_CHELSIO_TLS_DEVICE) += ch_ktls.o
ch_ktls-objs := chcr_ktls.o

```
