---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/intel/ivsc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Copyright (C) 2023, Intel Corporation. All rights reserved.

obj-$(CONFIG_INTEL_VSC) += ivsc-csi.o
ivsc-csi-y += mei_csi.o

obj-$(CONFIG_INTEL_VSC) += ivsc-ace.o
ivsc-ace-y += mei_ace.o

```
