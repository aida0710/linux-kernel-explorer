---
sidebar_position: 9
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/mti-malta/Platform`

### コンテンツ

```txt
#
# MIPS Malta board
#
cflags-$(CONFIG_MIPS_MALTA)	+= -I$(srctree)/arch/mips/include/asm/mach-malta
load-$(CONFIG_MIPS_MALTA)	+= 0xffffffff80100000
all-$(CONFIG_MIPS_MALTA)	:= $(COMPRESSION_FNAME).bin

```
