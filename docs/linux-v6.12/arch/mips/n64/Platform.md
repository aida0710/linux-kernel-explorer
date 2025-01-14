---
sidebar_position: 4
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/n64/Platform`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Nintendo 64
#

cflags-$(CONFIG_MACH_NINTENDO64)    += -I$(srctree)/arch/mips/include/asm/mach-n64
load-$(CONFIG_MACH_NINTENDO64)      += 0xffffffff80101000

```
