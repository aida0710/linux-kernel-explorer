---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/smipcie/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

smipcie-objs	:= smipcie-main.o smipcie-ir.o

obj-$(CONFIG_DVB_SMIPCIE) += smipcie.o

ccflags-y += -I $(srctree)/drivers/media/tuners
ccflags-y += -I $(srctree)/drivers/media/dvb-frontends

```
