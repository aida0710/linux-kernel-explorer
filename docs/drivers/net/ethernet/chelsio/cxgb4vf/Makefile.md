---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/cxgb4vf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Chelsio T4 SR-IOV Virtual Function Driver
#

obj-$(CONFIG_CHELSIO_T4VF) += cxgb4vf.o

cxgb4vf-objs := cxgb4vf_main.o t4vf_hw.o sge.o

```
