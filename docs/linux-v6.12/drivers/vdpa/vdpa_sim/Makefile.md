---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/vdpa/vdpa_sim/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_VDPA_SIM) += vdpa_sim.o
obj-$(CONFIG_VDPA_SIM_NET) += vdpa_sim_net.o
obj-$(CONFIG_VDPA_SIM_BLOCK) += vdpa_sim_blk.o

```
