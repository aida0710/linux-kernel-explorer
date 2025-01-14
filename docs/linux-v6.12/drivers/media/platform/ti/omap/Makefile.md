---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/ti/omap/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the omap video device drivers.
#

# OMAP2/3 Display driver
omap-vout-y += omap_vout.o omap_voutlib.o
omap-vout-$(CONFIG_VIDEO_OMAP2_VOUT_VRFB) += omap_vout_vrfb.o
obj-$(CONFIG_VIDEO_OMAP2_VOUT) += omap-vout.o

```
