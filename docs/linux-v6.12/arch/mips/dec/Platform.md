---
sidebar_position: 8
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/dec/Platform`

### コンテンツ

```txt
#
# DECstation family
#
cflags-$(CONFIG_MACH_DECSTATION)	+= \
			-I$(srctree)/arch/mips/include/asm/mach-dec
libs-$(CONFIG_MACH_DECSTATION)		+= arch/mips/dec/prom/
load-$(CONFIG_MACH_DECSTATION)		+= 0xffffffff80040000

```
