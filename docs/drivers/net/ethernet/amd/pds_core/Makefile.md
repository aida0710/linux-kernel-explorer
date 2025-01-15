---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/amd/pds_core/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright (c) 2023 Advanced Micro Devices, Inc.

obj-$(CONFIG_PDS_CORE) := pds_core.o

pds_core-y := main.o \
	      devlink.o \
	      auxbus.o \
	      dev.o \
	      adminq.o \
	      core.o \
	      debugfs.o \
	      fw.o

```
