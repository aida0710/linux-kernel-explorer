---
sidebar_position: 37
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/dts/fsl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

dtb-$(CONFIG_OF_ALL_DTBS) := $(patsubst $(src)/%.dts,%.dtb, $(wildcard $(src)/*.dts))

```
