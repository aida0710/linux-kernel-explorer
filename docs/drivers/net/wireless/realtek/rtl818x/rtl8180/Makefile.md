---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtl818x/rtl8180/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
rtl818x_pci-objs	:= dev.o rtl8225.o sa2400.o max2820.o grf5101.o rtl8225se.o

obj-$(CONFIG_RTL8180)	+= rtl818x_pci.o

ccflags-y += -I $(src)/..

```
