---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/chelsio/libcxgb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(src)/../cxgb4

obj-$(CONFIG_CHELSIO_LIB) += libcxgb.o

libcxgb-y := libcxgb_ppm.o libcxgb_cm.o

```
