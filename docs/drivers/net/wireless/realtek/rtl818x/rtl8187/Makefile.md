---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtl818x/rtl8187/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
rtl8187-objs		:= dev.o rtl8225.o leds.o rfkill.o

obj-$(CONFIG_RTL8187)	+= rtl8187.o

ccflags-y += -I $(src)/..

```
