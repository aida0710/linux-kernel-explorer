---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-alpine/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= alpine_machine.o
obj-$(CONFIG_SMP)		+= platsmp.o alpine_cpu_pm.o

```
