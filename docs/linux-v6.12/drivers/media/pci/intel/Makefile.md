---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the IPU drivers
#
obj-$(CONFIG_IPU_BRIDGE) += ipu-bridge.o
obj-y	+= ipu3/
obj-y	+= ivsc/
obj-$(CONFIG_VIDEO_INTEL_IPU6)	+= ipu6/

```
