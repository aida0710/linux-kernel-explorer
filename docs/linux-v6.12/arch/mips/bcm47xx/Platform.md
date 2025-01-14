---
sidebar_position: 8
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/bcm47xx/Platform`

### コンテンツ

```txt
#
# Broadcom BCM47XX boards
#
cflags-$(CONFIG_BCM47XX)	+=					\
		-I$(srctree)/arch/mips/include/asm/mach-bcm47xx
load-$(CONFIG_BCM47XX)		:= 0xffffffff80001000

```
