---
sidebar_position: 11
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtl8xxxu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_RTL8XXXU)	+= rtl8xxxu.o

rtl8xxxu-y	:= core.o 8192e.o 8723b.o \
		   8723a.o 8192c.o 8188f.o \
		   8188e.o 8710b.o 8192f.o

```
