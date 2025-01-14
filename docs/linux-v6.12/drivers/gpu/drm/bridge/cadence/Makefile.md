---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/bridge/cadence/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DRM_CDNS_DSI) += cdns-dsi.o
cdns-dsi-y := cdns-dsi-core.o
cdns-dsi-$(CONFIG_DRM_CDNS_DSI_J721E) += cdns-dsi-j721e.o
obj-$(CONFIG_DRM_CDNS_MHDP8546) += cdns-mhdp8546.o
cdns-mhdp8546-y := cdns-mhdp8546-core.o cdns-mhdp8546-hdcp.o
cdns-mhdp8546-$(CONFIG_DRM_CDNS_MHDP8546_J721E) += cdns-mhdp8546-j721e.o

```
