---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/dts/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
subdir-y += allwinner
subdir-y += canaan
subdir-y += microchip
subdir-y += renesas
subdir-y += sifive
subdir-y += sophgo
subdir-y += starfive
subdir-y += thead

obj-$(CONFIG_BUILTIN_DTB) := $(addsuffix .dtb.o, $(CONFIG_BUILTIN_DTB_SOURCE))

```
