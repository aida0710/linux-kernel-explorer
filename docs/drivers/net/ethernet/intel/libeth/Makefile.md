---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/intel/libeth/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Copyright (C) 2024 Intel Corporation

obj-$(CONFIG_LIBETH)		+= libeth.o

libeth-y			:= rx.o

```
