---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/pcs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for Linux PCS drivers

pcs_xpcs-$(CONFIG_PCS_XPCS)	:= pcs-xpcs.o pcs-xpcs-plat.o \
				   pcs-xpcs-nxp.o pcs-xpcs-wx.o

obj-$(CONFIG_PCS_XPCS)		+= pcs_xpcs.o
obj-$(CONFIG_PCS_LYNX)		+= pcs-lynx.o
obj-$(CONFIG_PCS_MTK_LYNXI)	+= pcs-mtk-lynxi.o
obj-$(CONFIG_PCS_RZN1_MIIC)	+= pcs-rzn1-miic.o

```
