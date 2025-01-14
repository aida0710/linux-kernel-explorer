---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/mgb4/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
mgb4-objs	:= mgb4_regs.o mgb4_core.o mgb4_vin.o mgb4_vout.o \
               mgb4_sysfs_pci.o mgb4_sysfs_in.o mgb4_sysfs_out.o \
               mgb4_i2c.o mgb4_cmt.o mgb4_trigger.o mgb4_dma.o

obj-$(CONFIG_VIDEO_MGB4) += mgb4.o

```
