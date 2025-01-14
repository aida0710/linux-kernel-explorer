---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/openrisc/boot/dts/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y += $(addsuffix .dtb.o, $(CONFIG_OPENRISC_BUILTIN_DTB))

#DTC_FLAGS ?= -p 1024

```
