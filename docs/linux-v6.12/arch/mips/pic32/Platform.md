---
sidebar_position: 3
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/pic32/Platform`

### コンテンツ

```txt
#
# PIC32MZDA
#
cflags-$(CONFIG_PIC32MZDA)	+= -I$(srctree)/arch/mips/include/asm/mach-pic32
load-$(CONFIG_PIC32MZDA)	+= 0xffffffff88000000
all-$(CONFIG_PIC32MZDA)		:= $(COMPRESSION_FNAME).bin

```
