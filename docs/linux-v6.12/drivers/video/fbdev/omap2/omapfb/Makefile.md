---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/omap2/omapfb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_OMAP2_VRFB) += vrfb.o
obj-y += dss/
obj-y += displays/
obj-$(CONFIG_FB_OMAP2) += omap2fb.o
omap2fb-y := omapfb-main.o omapfb-sysfs.o omapfb-ioctl.o

```
