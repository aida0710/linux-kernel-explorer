---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-migor/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y	 := setup.o sdram.o
obj-$(CONFIG_SH_MIGOR_QVGA)	+=  lcd_qvga.o

```
