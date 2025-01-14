---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/pds/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Copyright(c) 2023 Advanced Micro Devices, Inc

obj-$(CONFIG_PDS_VDPA) := pds_vdpa.o

pds_vdpa-y := aux_drv.o \
	      cmds.o \
	      debugfs.o \
	      vdpa_dev.o

```
