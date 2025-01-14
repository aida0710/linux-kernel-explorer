---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson32/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Common code for all Loongson 1 based systems
#

obj-$(CONFIG_MACH_LOONGSON32) += common/

#
# Loongson LS1B board
#

obj-$(CONFIG_LOONGSON1_LS1B)  += ls1b/

#
# Loongson LS1C board
#

obj-$(CONFIG_LOONGSON1_LS1C)  += ls1c/

```
