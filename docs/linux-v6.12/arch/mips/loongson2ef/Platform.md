---
sidebar_position: 3
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson2ef/Platform`

### コンテンツ

```txt
#
# Loongson Processors' Support
#

#
# Loongson Machines' Support
#

cflags-$(CONFIG_MACH_LOONGSON2EF) += -I$(srctree)/arch/mips/include/asm/mach-loongson2ef
cflags-$(CONFIG_CC_HAS_MNO_BRANCH_LIKELY) += -mno-branch-likely
load-$(CONFIG_LEMOTE_FULOONG2E) += 0xffffffff80100000
load-$(CONFIG_LEMOTE_MACH2F) += 0xffffffff80200000

```
