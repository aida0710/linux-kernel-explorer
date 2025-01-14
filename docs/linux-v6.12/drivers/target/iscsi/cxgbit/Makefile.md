---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/target/iscsi/cxgbit/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ccflags-y := -I $(srctree)/drivers/net/ethernet/chelsio/cxgb4
ccflags-y += -I $(srctree)/drivers/net/ethernet/chelsio/libcxgb
ccflags-y += -I $(srctree)/drivers/target/iscsi

obj-$(CONFIG_ISCSI_TARGET_CXGB4)  += cxgbit.o

cxgbit-y  := cxgbit_main.o cxgbit_cm.o cxgbit_target.o cxgbit_ddp.o

```
