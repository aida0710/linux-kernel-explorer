---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/ingenic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
dtb-$(CONFIG_JZ4740_QI_LB60)	+= qi_lb60.dtb
dtb-$(CONFIG_JZ4740_RS90)	+= rs90.dtb
dtb-$(CONFIG_JZ4770_GCW0)	+= gcw0.dtb
dtb-$(CONFIG_JZ4780_CI20)	+= ci20.dtb
dtb-$(CONFIG_X1000_CU1000_NEO)	+= cu1000-neo.dtb
dtb-$(CONFIG_X1830_CU1830_NEO)	+= cu1830-neo.dtb

obj-$(CONFIG_BUILTIN_DTB)	+= $(addsuffix .o, $(dtb-y))

```
