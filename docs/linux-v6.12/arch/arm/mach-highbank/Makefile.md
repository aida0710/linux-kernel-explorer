---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-highbank/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y					:= highbank.o system.o smc.o

obj-$(CONFIG_PM_SLEEP)			+= pm.o

```
