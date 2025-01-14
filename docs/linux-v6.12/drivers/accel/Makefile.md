---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/accel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_DRM_ACCEL_HABANALABS)	+= habanalabs/
obj-$(CONFIG_DRM_ACCEL_IVPU)		+= ivpu/
obj-$(CONFIG_DRM_ACCEL_QAIC)		+= qaic/

```
