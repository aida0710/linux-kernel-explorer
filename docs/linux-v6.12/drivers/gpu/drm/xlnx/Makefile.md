---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xlnx/Makefile`

### コンテンツ

```txt
zynqmp-dpsub-y := zynqmp_disp.o zynqmp_dpsub.o zynqmp_dp.o zynqmp_kms.o
obj-$(CONFIG_DRM_ZYNQMP_DPSUB) += zynqmp-dpsub.o

```
