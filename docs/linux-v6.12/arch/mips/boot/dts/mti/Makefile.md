---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/mti/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
dtb-$(CONFIG_MIPS_MALTA)	+= malta.dtb
dtb-$(CONFIG_LEGACY_BOARD_SEAD3)	+= sead3.dtb

obj-$(CONFIG_BUILTIN_DTB)	+= $(addsuffix .o, $(dtb-y))

```
