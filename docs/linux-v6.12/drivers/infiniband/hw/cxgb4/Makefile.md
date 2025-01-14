---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/cxgb4/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-y := -I $(srctree)/drivers/net/ethernet/chelsio/cxgb4
ccflags-y += -I $(srctree)/drivers/net/ethernet/chelsio/libcxgb

obj-$(CONFIG_INFINIBAND_CXGB4) += iw_cxgb4.o

iw_cxgb4-y :=  device.o cm.o provider.o mem.o cq.o qp.o resource.o ev.o id_table.o \
	       restrack.o

```
