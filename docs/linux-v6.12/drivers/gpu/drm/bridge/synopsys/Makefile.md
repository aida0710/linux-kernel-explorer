---
sidebar_position: 11
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/bridge/synopsys/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DRM_DW_HDMI) += dw-hdmi.o
obj-$(CONFIG_DRM_DW_HDMI_AHB_AUDIO) += dw-hdmi-ahb-audio.o
obj-$(CONFIG_DRM_DW_HDMI_GP_AUDIO) += dw-hdmi-gp-audio.o
obj-$(CONFIG_DRM_DW_HDMI_I2S_AUDIO) += dw-hdmi-i2s-audio.o
obj-$(CONFIG_DRM_DW_HDMI_CEC) += dw-hdmi-cec.o

obj-$(CONFIG_DRM_DW_MIPI_DSI) += dw-mipi-dsi.o

```
