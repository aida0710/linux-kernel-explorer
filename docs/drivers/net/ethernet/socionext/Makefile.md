---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/socionext/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for all ethernet ip drivers on Socionext platforms
#
obj-$(CONFIG_SNI_AVE) += sni_ave.o
obj-$(CONFIG_SNI_NETSEC) += netsec.o

```
