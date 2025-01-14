---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/sunxi/sun6i-csi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
sun6i-csi-y += sun6i_csi.o sun6i_csi_bridge.o sun6i_csi_capture.o

obj-$(CONFIG_VIDEO_SUN6I_CSI) += sun6i-csi.o

```
