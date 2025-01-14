---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/sunxi/sun8i-rotate/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
sun8i-rotate-y += sun8i_rotate.o
sun8i-rotate-y += sun8i_formats.o

obj-$(CONFIG_VIDEO_SUN8I_ROTATE) += sun8i-rotate.o

```
