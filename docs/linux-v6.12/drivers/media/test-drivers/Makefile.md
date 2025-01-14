---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/test-drivers/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the test drivers.
#

# Please keep it alphabetically sorted by Kconfig name
# (e. g. LC_ALL=C sort Makefile)

obj-$(CONFIG_DVB_VIDTV) += vidtv/

obj-$(CONFIG_VIDEO_VICODEC) += vicodec/
obj-$(CONFIG_VIDEO_VIM2M) += vim2m.o
obj-$(CONFIG_VIDEO_VIMC) += vimc/
obj-$(CONFIG_VIDEO_VIVID) += vivid/
obj-$(CONFIG_VIDEO_VISL) += visl/

```
