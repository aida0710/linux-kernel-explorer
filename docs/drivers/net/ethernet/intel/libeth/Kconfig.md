---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/intel/libeth/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Copyright (C) 2024 Intel Corporation

config LIBETH
	tristate
	select PAGE_POOL
	help
	  libeth is a common library containing routines shared between several
	  drivers, but not yet promoted to the generic kernel API.

```
