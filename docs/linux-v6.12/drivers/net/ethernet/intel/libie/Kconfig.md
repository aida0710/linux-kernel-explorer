---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/intel/libie/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Copyright (C) 2024 Intel Corporation

config LIBIE
	tristate
	select LIBETH
	help
	  libie (Intel Ethernet library) is a common library built on top of
	  libeth and containing vendor-specific routines shared between several
	  Intel Ethernet drivers.

```
