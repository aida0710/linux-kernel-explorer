---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/sh/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= kernel/ mm/ boards/
obj-$(CONFIG_SH_FPU_EMU)	+= math-emu/
obj-$(CONFIG_USE_BUILTIN_DTB)	+= boot/dts/

obj-$(CONFIG_HD6446X_SERIES)	+= cchips/hd6446x/

# for cleaning
subdir- += boot

```
