---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-dreamcast/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Sega Dreamcast specific parts of the kernel
#

obj-y	 := setup.o irq.o
obj-$(CONFIG_RTC_DRV_GENERIC) += rtc.o

```
