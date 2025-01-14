---
sidebar_position: 35
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/dts/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

subdir-y += fsl

dtb-$(CONFIG_OF_ALL_DTBS) := $(patsubst $(src)/%.dts,%.dtb, $(wildcard $(src)/*.dts))

```
