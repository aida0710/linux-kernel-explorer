---
sidebar_position: 11
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson64/Platform`

### コンテンツ

```txt
#
# Loongson Machines' Support
#

cflags-$(CONFIG_MACH_LOONGSON64) += -I$(srctree)/arch/mips/include/asm/mach-loongson64
cflags-$(CONFIG_CC_HAS_MNO_BRANCH_LIKELY) += -mno-branch-likely
load-$(CONFIG_CPU_LOONGSON64) += 0xffffffff80200000

```
