---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/octeon_ep/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_OCTEONEP_VDPA) += octep_vdpa.o
octep_vdpa-$(CONFIG_OCTEONEP_VDPA) += octep_vdpa_main.o
octep_vdpa-$(CONFIG_OCTEONEP_VDPA) += octep_vdpa_hw.o

```
