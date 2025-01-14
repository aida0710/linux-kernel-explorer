---
sidebar_position: 7
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/lantiq/Platform`

### コンテンツ

```txt
#
# Lantiq
#

cflags-$(CONFIG_LANTIQ)		+= -I$(srctree)/arch/mips/include/asm/mach-lantiq
load-$(CONFIG_LANTIQ)		= 0xffffffff80002000
cflags-$(CONFIG_SOC_TYPE_XWAY)	+= -I$(srctree)/arch/mips/include/asm/mach-lantiq/xway
cflags-$(CONFIG_SOC_FALCON)	+= -I$(srctree)/arch/mips/include/asm/mach-lantiq/falcon

```
