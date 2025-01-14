---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/csky/boot/dts/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
dtb-y := $(patsubst $(src)/%.dts,%.dtb, $(wildcard $(src)/*.dts))

```
