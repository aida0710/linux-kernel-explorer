---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/chelsio/inline_crypto/ch_ipsec/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(srctree)/drivers/net/ethernet/chelsio/cxgb4 \
             -I $(srctree)/drivers/crypto/chelsio

obj-$(CONFIG_CHELSIO_IPSEC_INLINE) += ch_ipsec.o
ch_ipsec-objs := chcr_ipsec.o



```
