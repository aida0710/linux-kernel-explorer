---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vfio/cdx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Copyright (C) 2022-2023, Advanced Micro Devices, Inc.
#

obj-$(CONFIG_VFIO_CDX) += vfio-cdx.o

vfio-cdx-objs := main.o intr.o

```
